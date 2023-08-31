<template>
    <div id="principal">
        <div id="importaExcel">
            <h2 style="margin-left: 30px;">Import Excel para dados enviados pela Escola</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%;">
                <div style="height: 49px;">
                    <input id="arquivoExcel" type="file" style="width: 610px; height: 100%; font-size:30px;" />
                </div>
                <br />
                <br />
                <button id="btnImport" class="iniciarImport" @click="iniciarImport"
                    style="border-radius: 15px; padding: 10px 30px; font-size: 30px; background-color: white; cursor: pointer">Iniciar
                    Import</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import readXlsxFile from 'read-excel-file';

export default {

    name: 'ImportaExcel',
    data() {
        return {
            json: { alunos: [] }
        }
    },
    methods: {
        iniciarImport() {

            const input = document.getElementById("arquivoExcel");
            readXlsxFile(input.files[0]).then((rows) => {
                for (let i = 0; i < rows.length; i++) {
                    this.json.alunos.push({ 'nome': rows[i][0], 'nascimento': rows[i][1], 'serie': rows[i][2] })
                }
            })

            axios.post('http://192.168.15.40:8080/api/alunos/import', this.json)
                .then(res => console.log(res.data))
                .catch(rej => console.log(rej));

            this.json.alunos = [];
        }
    }

}
</script>

<style scoped>
#principal {
    margin-top: 70px;
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
    height: 795px;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 20px;
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
    border-radius: 15px;
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
    border-radius: 15px;
    border: 1px dotted #0b4d75;
}</style>