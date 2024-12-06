<template>
    <div id="principal">
        <div id="importaExcel" v-if="this.total == null && this.erro == null && !this.carregando">
            <h2 style="margin-left: 30px;">Import Excel para dados enviados pela Escola</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 400px">
                <div style="height: 65px;">
                    <input id="arquivoExcel" type="file"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        style="width: 610px; height: 100%; font-size:30px;" />
                </div>
                <br />
                <br />
                <button id="btnImport" class="iniciarImport" @click="iniciarImport"
                    style="border-radius: 5px; padding: 10px 30px; font-size: 30px; background-color: rgba(177, 209, 250, 0.747); cursor: pointer">Iniciar
                    Importação</button>
            </div>
        </div>
        <div id="importaExcel" v-if="this.total != null || this.erro != null || this.carregando">
            <h2 style="margin-left: 30px;">Import Excel para dados enviados pela Escola</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%; padding: 20px;">
                <img src="../assets/carregando.gif" v-if="this.carregando">
                <h1 v-if="this.total != null" style="color: green;">Foram cadastrados {{ this.total }} alunos pelo import.
                    Contagem por Séries:</h1>
                <h1 v-for="item in series" :key="item.serie" style="color: green;">
                    {{ item.serie }}: {{ item.quantidade }} alunos
                </h1>
                <h1 v-if="this.erro != null" style="color: red;">{{ this.erro }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';
import readXlsxFile from 'read-excel-file';

export default {

    name: 'ImportaExcel',
    data() {
        return {
            json: { alunos: [] },
            carregando: false,
            total: null,
            erro: null,
            series: [],
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida')
        }
    },
    methods: {
        async iniciarImport() {
            this.carregando = true;
            this.json.alunos = [];
            let input = document.getElementById("arquivoExcel");

            await readXlsxFile(input.files[0]).then((rows) => {
                for (let i = 0; i < rows.length; i++) {
                    this.json.alunos.push({ 'nome': rows[i][0], 'sexo': rows[i][1], 'nascimento': rows[i][2], 'serie': rows[i][3], 'sala': rows[i][4], 'domingo': rows[i][5] });
                }
            });

            axios.post('http://172.31.87.236:8080/api/alunos/import/'+ this.escola, this.json, {
                headers: {
                    'Authorization': this.token
                }
            })
                .then(res => { this.total = res.data.total; this.series = res.data.series; this.carregando = false })
                .catch(rej => { this.erro = rej; this.carregando = false });

            this.json.alunos = [];
        }
    }

}
</script>

<style scoped>
#principal {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
}

#importaExcel {
    background-color: rgb(230, 243, 255);
    width: 98%;
    height: 100%;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 5px;
    display: flex;
    text-align: left;
    flex-direction: column;
}

input[type=file]::file-selector-button:hover {
    opacity: 0.8;
    background-color: #0b4d75;
    color: white;
}

input[type=file]::file-selector-button {
    max-width: 100%;
    color: #0b4d75;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    border: 0px;
    box-shadow: 15px black;
    margin-right: 10px;
    cursor: pointer;
}

input[type=file] {
    max-width: 100%;
    max-height: 100%;
    color: #0b4d75;
    padding: 5px 0px 0px 7px;
    background-color: aliceblue;
    border-radius: 5px;
    border: 1px dotted #0b4d75;
}
</style>