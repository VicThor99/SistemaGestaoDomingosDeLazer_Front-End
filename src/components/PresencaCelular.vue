<template>
    <div id="principal">
        <div id="presencaCelular" v-if="!this.carregando">
            <h2 style="margin-left: 30px;">Leitor de Código de Barras</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div class="text-center">
                <button id="botao" @click="initReader">Iniciar detecção</button>
            </div>
            <div v-show="cameraStatus" id="reader"></div>
            <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;" v-if="code !== ''">
                <p>O código detectado foi {{ code }}, deseja dar presença?</p>
                <button id="botao" @click="adicionarAoVetor()">Dar presença</button>
            </div>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div style="display: flex; justify-content: center; width: 100%;">
                <button id="botaoFooter" @click="concluir()">Concluir Presenças</button>
            </div>
        </div>
        <div id="presencaCelular" v-if="this.carregando">

        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import Quagga from 'quagga';
import axios from 'axios';
import { ref } from 'vue';

export default {

    name: 'PresencaCelular',
    data() {
        return {
            alunos: [],
            carregando: false,
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida')
        }
    },
    methods: {
        adicionarAoVetor() {
            this.alunos.push(this.code);
            this.initReader();
        },
        concluir() {
            axios.post('http://3.95.225.147:8080/api/registros/celular/' + this.escola, this.alunos,
                { headers: { 'Authorization': this.token } })

        }
    },
    setup() {
        const code = ref('');
        const cameraStatus = ref(false);
        const initReader = () => {
            cameraStatus.value = true;
            code.value = '';
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector('#reader')
                },
                decoder: {
                    readers: ["2of5_reader"]
                }
            }, function (err) {
                if (err) {
                    console.log(err);
                    return
                }
                Quagga.start();
                Quagga.onDetected((data) => {
                    if (data.codeResult.code.length === 6) {
                        code.value = data.codeResult.code;
                        stopReader();
                    }
                });
            });
        }

        const stopReader = () => {
            cameraStatus.value = false;
            Quagga.stop();
        }

        return {
            initReader,
            stopReader,
            cameraStatus,
            code
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

#presencaCelular {
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
    text-align: center;
    justify-content: center;
    flex-direction: column;
}

#reader {
    display: flex;
    text-align: center;
    justify-content: center;
    width: 150%;
}

#botao {
    margin: 5px;
    width: 175px;
    background-color: rgba(200, 230, 255, 0.699);
    border: #0b4d75 1px solid;
    color: #0b4d75;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    align-self: center;
}

#botaoFooter {
    margin: 5px;
    width: 80%;
    background-color: rgba(200, 230, 255, 0.699);
    border: #0b4d75 1px solid;
    color: #0b4d75;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
}
</style>