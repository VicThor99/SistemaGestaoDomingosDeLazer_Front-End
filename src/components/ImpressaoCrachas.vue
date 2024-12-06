<template>
    <div id="principal">
        <div id="impressaoCrachas" v-if="!this.carregando">
            <h2 style="margin-left: 30px;">Imprimir Crachás</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center; align-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%;">
                <div style="display: flex; justify-content: space-between; width: 1250px;">
                    <div style="display: flex; width: 240px; flex-direction: column;">
                        <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Código</p>
                        <input v-model="codigo"
                            style="height: 60px; font-size:30px; padding: 20px; border-radius: 5px; background-color: white; margin-right: 20px; width: 100%;" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 240px;">
                        <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Domingo</p>
                        <v-select v-model="domingo" :items="['', 'A', 'B', 'C', 'D']" variant="solo-filled"
                            style="width: 240px; height: 60px; font-size:30px; margin-right: 20px;"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; width: 240px;">
                        <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Série</p>
                        <v-select v-model="serie" :items="this.series" variant="solo-filled"
                            style="width: 240px; height: 60px; font-size:30px; margin-right: 20px;"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; width: 240px;">
                        <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Sala</p>
                        <v-select v-model="sala" :items="this.salas" variant="solo-filled"
                            style="width: 240px; height: 60px; font-size:30px; margin-right: 20px;"></v-select>
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 240px; justify-content: center; align-content: center;">
                        <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Alunos Ativos</p>
                        <v-switch color="info" v-model="ativos" inset style="width: 250px;"></v-switch>
                    </div>
                </div>
                <br />
                <button id="btnProcesso" @click="imprimir()"><i class="mdi mdi-printer"></i> Imprimir</button>
            </div>
        </div>
        <div id="impressaoCrachas" v-if="this.carregando">
            <h2 style="margin-left: 30px;">Imprimir Crachás</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%; padding: 20px;">
                <img src="../assets/carregando.gif" v-if="this.carregando">
            </div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';
export default {
    name: 'ImpressaoCrachas',
    data() {
        return {
            carregando: false,
            codigo: '',
            serie: '',
            sala: '',
            domingo: '',
            ativos: false,
            series: [''],
            salas: [''],
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida')
        }
    },
    methods: {
        async carregarListas() {
            const axSeries = await axios.get('http://172.31.87.236:8080/api/series/listaString/' + this.escola, { headers: { 'Authorization': this.token } });
            const axSalas = await axios.get('http://172.31.87.236:8080/api/series/listaStringSalas/' + this.escola, { headers: { 'Authorization': this.token } });
            this.series.push(...axSeries.data);
            this.salas.push(...axSalas.data);
        },
        async imprimir() {
            this.carregando = true;

            if (this.domingo != '') {
                await axios.get('http://172.31.87.236:8080/api/jaspers/crachas/'+ this.escola + '?domingo=' + this.domingo + '&ativos=' + this.ativos, {
                    responseType: 'blob',
                    headers: { 'Authorization': this.token }
                })
                    .then((response) => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', this.ativos ? 'CrachasDomingo' + this.domingo + 'Ativos.pdf' : 'CrachasDomingo' + this.domingo + '.pdf');
                        document.body.appendChild(link);
                        link.click();
                        this.carregando = false;
                    })
                    .catch(rej => {
                        console.log(rej);
                        this.carregando = false;
                    });
            } else if (this.serie != '') {
                await axios.get('http://172.31.87.236:8080/api/jaspers/crachas/'+ this.escola + '?serie=' + this.serie + '&ativos=' + this.ativos, {
                    responseType: 'blob',
                    headers: { 'Authorization': this.token }
                })
                    .then((response) => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', this.ativos ? 'CrachasSerie' + this.serie + 'Ativos.pdf' : 'CrachaSerie' + this.serie + '.pdf');
                        document.body.appendChild(link);
                        link.click();
                        this.carregando = false;
                    })
                    .catch(rej => {
                        console.log(rej);
                        this.carregando = false;
                    });
            } else if (this.sala != '') {
                await axios.get('http://172.31.87.236:8080/api/jaspers/crachas/'+ this.escola + '?sala=' + this.sala + '&ativos=' + this.ativos, {
                    responseType: 'blob',
                    headers: { 'Authorization': this.token }
                })
                    .then((response) => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', this.ativos ? 'Crachas' + this.sala.replace(/\s/g, '') + 'Ativos.pdf' : 'Crachas' + this.sala.replace(/\s/g, '') + '.pdf');
                        document.body.appendChild(link);
                        link.click();
                        this.carregando = false;
                    })
                    .catch(rej => {
                        console.log(rej);
                        this.carregando = false;
                    });
            } else if (this.codigo != '') {
                await axios.get('http://172.31.87.236:8080/api/jaspers/crachas/'+ this.escola + '?codigo=' + this.codigo, {
                    responseType: 'blob',
                    headers: { 'Authorization': this.token }
                })
                    .then((response) => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', 'CrachaCodigo' + this.codigo + '.pdf');
                        document.body.appendChild(link);
                        link.click();
                        this.carregando = false;
                    })
                    .catch(rej => {
                        console.log(rej);
                        this.carregando = false;
                    });
            } else {
                await axios.get('http://172.31.87.236:8080/api/jaspers/crachas/'+ this.escola + '?ativos=' + this.ativos, {
                    responseType: 'blob',
                    headers: { 'Authorization': this.token }
                })
                    .then((response) => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', this.ativos ? 'CrachaAlunosAtivos.pdf' : 'CrachaGerais.pdf');
                        document.body.appendChild(link);
                        link.click();
                        this.carregando = false;
                    })
                    .catch(rej => {
                        console.log(rej);
                        this.carregando = false;
                    });
            }
        }
    },
    mounted() {
        this.carregarListas();
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

#impressaoCrachas {
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