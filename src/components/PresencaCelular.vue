<template>
    <div id="principal">
        <div id="presencaCelular" v-if="!this.carregando && !this.concluido">
            <h2 style="margin-left: 30px;">Presenças via Celular</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div style="display: flex; justify-content: space-between;">
                <div style="width: 49.5%; display: flex; justify-content: center; flex-direction: column;">
                    <div v-show="!cameraStatus" class="text-center">
                        <button id="botao" @click="initReader">Iniciar Detecção</button>
                    </div>
                    <div v-show="cameraStatus" id="reader"></div>
                </div>
                <div style="width: 49.5%; text-align: left; font-size: 15pt; border-left: #0b4d75 1px solid;">
                    <p style="font-weight: bold; text-align: center; font-size: 18pt;">Lista de Alunos Captados</p>
                    <hr style="opacity: 0.2; width: 99.86%;" />
                    <p v-for="a in alunos" :key="a" style="margin-left: 20px;">• {{ a }}</p>
                </div>
            </div>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div style="display: flex; justify-content: center; width: 100%;">
                <button id="botaoFooter" @click="concluir()">Dar Presenças para Lista</button>
            </div>
        </div>
        <div id="presencaCelular" v-if="this.carregando">
            <h2 style="margin-left: 30px;">Presenças via Celular</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%; padding: 20px;">
                <img src="../assets/carregando.gif">
            </div>
        </div>
        <div id="presencaCelular" v-if="this.concluido">
            <div style="display: flex; justify-content: stretch; text-align: left; flex-direction: row;">
                <a id="voltar" style="margin-left: 30px;" @click="voltar()"><i class="mdi mdi-chevron-left"></i>Voltar</a>
                <h2 style="margin-left: 30px;">Presenças via Celular</h2>
            </div>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%; padding: 20px;">
                <h2>{{ this.numeroPresencas }}</h2>
            </div>
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
            carregando: false,
            concluido: false
        }
    },
    methods: {
        concluir() {
            this.carregando = true;
            axios.post('https://api.domingodelazer.click/api/registros/celular/' + this.escola, this.alunos,
                { headers: { 'Authorization': this.token } })
            .then(res => {
                this.numeroPresencas = res.data;
                this.carregando = false;
                this.concluido = true;
            })

        },
        voltar(){
            this.code = '';
            this.alunos = [];
            this.carregando = false;
            this.concluido = false;
            this.stopReader();
        }
    },
    setup() {
        const code = ref('');
        const cameraStatus = ref(false);
        let alunos = [];
        const escola = cookies.get('escolaEscolhida');
        const token = cookies.get('token');
        
        const initReader = () => {
            cameraStatus.value = true;
            code.value = '';
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector('#reader')
                },
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: "environment" // Usa a câmera traseira do dispositivo
                },
                decoder: {
                    readers: ["2of5_reader"]
                },
                locate: false,
                debug: {
                    drawScanline: true
                }
            }, function (err) {
                if (err) {
                    console.log(err);
                    return
                }
                Quagga.start();
                Quagga.onProcessed(() => {
                    const canvases = document.querySelectorAll("canvas");
                    canvases.forEach(canvas => canvas.remove()); // Remove todos os canvases
                });
                Quagga.onDetected((data) => {
                    if (data.codeResult.code.length === 6 && 
                            (data.codeResult.code.startsWith("10") || data.codeResult.code.startsWith("20") || 
                            data.codeResult.code.startsWith("30") || data.codeResult.code.startsWith("40"))) 
                        {
                        resgatarNomeDoAluno(data.codeResult.code);
                    }
                });
            });
        }

        const stopReader = () => {
            cameraStatus.value = false;
            Quagga.stop();
        }

        const resgatarNomeDoAluno = async (code) => {
            stopReader();
            await axios.get('https://api.domingodelazer.click/api/alunos/' + code + '/' + escola,
                { headers: { 'Authorization': token } })
            .then(res => {
                if(res.data && !alunos.includes(res.data)){
                    alunos.push(res.data);
                }
                initReader();
            })
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

#voltar {
  font-weight: bolder;
  cursor: pointer;
}
</style>