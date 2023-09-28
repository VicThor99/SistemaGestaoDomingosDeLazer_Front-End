<template>
    <div id="principal">
        <div id="datas">
            <div style="margin: 0px 0px 10px 30px; display: flex; justify-content: flex-start;">
                <h2 style="margin-top: 3px;width: 60%">Cadastro de Datas das Atividades</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 10px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table @click:row="rowClick" items-per-page="11" :headers="headers" :items="datas"
                style="padding: 5px 10px 10px 10px;" :search="search" class="elevation-1" v-if="datas.length > 0" />
        </div>
    </div>
</template>

<script setup>
    import { VDataTable } from 'vuetify/labs/VDataTable'
</script>

<script>
    import axios from 'axios';

    export default {
        name: 'CadastroDatas',
        data() {
            return {
                headers: [
                    { title: 'Id', key: 'id', align: 'start', type: Number },
                    { title: 'Dia da Atividade', key: 'date', align: 'end' },
                    { title: 'Domingo da Atividade', key: 'domingo', align: 'end' },
                ],
                datas: [],
                search: ''
            }
        },
        methods: {
            async recarregaLista() {
                const res = await axios.get('http://localhost:8080/api/datas/');
                this.datas = res.data;
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

#datas {
    background-color: rgb(230, 243, 255);
    width: 98%;
    height: 795px;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 20px;
}
</style>