<template>
    <div id="principal">
        <div id="visualizacaoPresencas">
            <div style="margin: 0px 0px 10px 30px; display: flex; justify-content: space-between;">
                <h2 style="margin-left: 30px;">Visualização de Presenças</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 5px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table items-per-page="12" :headers="headers" :items="registros" :search="search"
                style="padding: 5px 10px 10px 10px;" class="elevation-1" v-if="registros.length > 0" />
        </div>
    </div>
</template>

<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
</script>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';

export default {
    name: 'VisualizacaoPresencas',
    data() {
        return {
            headers: [
                { title: 'Código', key: 'codigo', align: 'start', width: '20%' },
                { title: 'Nome', key: 'nome', align: 'start', width: '50%' },
                { title: 'Presença no Mês Atual', key: 'presenca', align: 'end', width: '30%' },
            ],
            registros: [],
            search: '',
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida'),
            sala: cookies.get('user_name')
        }
    },
    methods: {
        async recarregaLista() {
            await axios.get('https://api.domingodelazer.click/api/registros/presencas/' + this.escola + "/" + this.sala, 
                    { headers: { 'Authorization': this.token } })
                .then(res => {
                    this.registros = res.data;
                })
                .catch(rej => {
                    this.registros = [];
                    console.log(rej);
                });
            
        }
    },
    mounted() {
        this.recarregaLista();
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

#visualizacaoPresencas {
    background-color: rgb(230, 243, 255);
    width: 98%;
    height: 100%;
    font-size: 17px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 5px;
    display: flex;
    text-align: left;
    flex-direction: column;
}
</style>