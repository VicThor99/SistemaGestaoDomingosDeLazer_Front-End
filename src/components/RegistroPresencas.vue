<template>
    <div id="principal">
        <div id="registroPresencas" v-if="this.confirmacao == null && this.erro == null && !this.carregando">
            <h2 style="margin-left: 30px;">Registro de Presenças</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%;">
                <div style="height: 65px;">
                    <input id="arquivoTxt" type="file" accept="text/plain"
                        style="width: 610px; height: 100%; font-size:30px;" />
                </div>
                <br />
                <br />
                <button id="btnProcesso" class="iniciarProcessoPresencas" @click="iniciarProcessoPresencas">Iniciar
                    Processo</button>
            </div>
        </div>
        <div id="registroPresencas" v-if="this.confirmacao != null || this.erro != null || this.carregando">
            <h2 style="margin-left: 30px;">Registro de Presenças</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%; padding: 20px;">
                <img src="../assets/carregando.gif" v-if="this.carregando">
                <h1 v-if="this.confirmacao != null" style="color: green;">{{ this.confirmacao }}</h1>
                <h1 v-if="this.erro != null" style="color: red;">{{ this.erro }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';
export default {
    name: 'RegistroPresencas',
    data() {
        return {
            json: {
                codigos: null,
                data: null
            },
            carregando: false,
            confirmacao: null,
            erro: null,
            token: cookies.get('token')
        }
    },
    methods: {
        async iniciarProcessoPresencas() {
            this.carregando = true;
            this.json.codigos = new Array();
            this.json.data = new Date();

            let input = document.getElementById("arquivoTxt");

            var reader = new FileReader();

            reader.addEventListener(
                "load",
                () => {
                    const result = reader.result;
                    this.json.codigos = result.split(/\r?\n/);

                    axios.post('https://www.domingodelazer.click:8443/api/registros/leitor/'+ this.escola, this.json, {
                        headers: {
                            'Authorization': this.token
                        }
                    })
                        .then(res => {
                            this.carregando = false;
                            this.confirmacao = res.data
                        })
                        .catch(rej => {
                            this.carregando = false;
                            this.erro = rej
                        });
                },
                false,
            );

            if (input.files[0]) {
                reader.readAsText(input.files[0]);
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

#registroPresencas {
    background-color: rgb(230, 243, 255);
    width: 98%;
    height: 400px;
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

#btnProcesso {
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 30px;
    background-color: rgba(177, 209, 250, 0.747);
    cursor: pointer
}

#btnProcesso:hover {
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 30px;
    color: white;
    background-color: #0b4d75;
    cursor: pointer
}
</style>