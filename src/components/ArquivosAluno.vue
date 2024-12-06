<template>
    <div id="principal">
        <div id="arquivosAluno" v-if="!this.carregando && !this.concluido">
            <h2 style="margin-left: 30px;">Upload de fotos para Alunos</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 400px">
                <div style="height: 65px; display: flex; justify-content: space-around;">
                    <input v-model="codigoAluno"
                        style="width: 290px; height: 60px; font-size:30px; padding: 20px; border-radius: 5px; background-color: white; " />

                    <v-select v-model="tipo" :items="['', 'Foto', 'Matricula']" variant="solo-filled"
                        style="width: 290px; height: 60px; font-size:30px; margin-left: 20px;"></v-select>
                </div>
                <div style="height: 65px">
                    <input id="foto" type="file" accept="image/jpg" style="width: 600px; height: 100%; font-size:30px;" />
                </div>
                <br />
                <br />
                <button id="btnUpload" class="iniciarUpload" @click="iniciarUpload"
                    style="border-radius: 5px; padding: 10px 30px; font-size: 30px; background-color: rgba(177, 209, 250, 0.747); cursor: pointer">Iniciar
                    Upload</button>
            </div>
        </div>
        <div id="arquivosAluno" v-if="this.carregando || this.concluido">
            <h2 style="margin-left: 30px;">Upload de fotos para Alunos</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%; padding: 20px;">
                <img src="../assets/carregando.gif" v-if="this.carregando">
                <h1 v-if="this.concluido" style="color: green;">Upload de foto realizado!</h1>
            </div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';

export default {

    name: 'ArquivosAluno',
    data() {
        return {
            codigoAluno: '',
            carregando: false,
            tipo: '',
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida'),
            concluido: false
        }
    },
    methods: {
        async iniciarUpload() {
            this.carregando = true;
            let formData = new FormData();
            formData.append('image', document.getElementById("foto").files[0]);

            if (this.tipo === 'Foto') {
                axios.post('http://3.95.225.147:8080/api/arquivos/foto/' + this.codigoAluno + '/' + this.escola, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': this.token
                    }
                })
                    .then(res => { console.log(res); this.carregando = false; this.concluido = true })
                    .catch(rej => { console.log(rej); this.carregando = false });
            } else if (this.tipo === 'Matricula') {
                axios.post('http://3.95.225.147:8080/api/arquivos/matricula/' + this.codigoAluno + '/' + this.escola, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': this.token
                    }
                })
                    .then(res => { console.log(res); this.carregando = false; this.concluido = true })
                    .catch(rej => { console.log(rej); this.carregando = false });
            }
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

#arquivosAluno {
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