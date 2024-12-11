<template>
    <div id="principal">
        <div id="datas" v-if="dataAula == null">
            <div id="alert" :class="alertClass" v-if="alertAtivo">
                <div style="display: flex; justify-content: space-between;">
                    <h2 style="width: 90%">{{ this.alertTitle }}</h2>
                    <a @click="fecharAlert" style="cursor: pointer;"><i class="mdi mdi-window-close"></i></a>
                </div>
                <hr style="opacity: 0.2; width: 100%; margin-bottom: 10px;" />
                <div>
                    <p>{{ this.alertText }}</p>
                </div>
            </div>
            <div style="margin: 0px 0px 10px 30px; display: flex; justify-content: flex-start;">
                <h2 style="margin-top: 3px;width: 60%">Listagem de Datas das Atividades</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 5px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
                <button id="botao" @click="novaData"><i class="mdi mdi-plus-circle-outline"></i> Nova</button>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table @click:row="clickRow" items-per-page="11" :headers="headers" :items="datas"
                style="padding: 5px 10px 10px 10px;" :search="search" class="elevation-1" v-if="datas.length > 0" />
        </div>
        <div id="data" v-if="dataAula != null">
            <div id="alert" :class="alertClass" v-if="alertAtivo">
                <div style="display: flex; justify-content: space-between;">
                    <h2 style="width: 90%">{{ this.alertTitle }}</h2>
                    <a @click="fecharAlert" style="cursor: pointer;"><i class="mdi mdi-window-close"></i></a>
                </div>
                <hr style="opacity: 0.2; width: 100%; margin-bottom: 10px;" />
                <div>
                    <p>{{ this.alertText }}</p>
                </div>
            </div>
            <div style="margin: 0px 0px 10px 30px; display: flex; justify-content: flex-start;">
                <h2 style="margin-top: 3px;width: 60%">Cadastro de Datas - {{ title }}</h2>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <div
                style="background-color: white; font-size: 25px; border-radius: 5px; margin: 5px 5px 0px 0px; padding: 20px 30px 20px 30px; color: #0b4d75;">
                <div style="display: flex; justify-content: center; width: 60%; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 200px; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Id</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="dataAula.id" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Data da aula</p>
                        <input type="date"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="dataAula.date" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 200px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Domingo</p>
                        <v-select variant="outlined" v-model="dataAula.domingo" :items="['A', 'B', 'C', 'D', 'E']"></v-select>
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 20px; margin-top: 20px;" />
                <div style="display: flex; justify-content: center;">
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="dataAula = null; this.alertAtivo = false;"><i class="mdi mdi-cancel"></i>
                        Cancelar</button>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="salvarData"><i class="mdi mdi-check"></i> Salvar</button>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                </div>
            </div>
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
    name: 'CadastroDatas',
    data() {
        return {
            headers: [
                { title: 'Id', key: 'id', align: 'start', type: Number },
                { title: 'Dia da Atividade', key: 'date', align: 'end' },
                { title: 'Domingo da Atividade', key: 'domingo', align: 'end' },
            ],
            datas: [],
            search: '',
            dataAula: null,
            title: '',
            alertAtivo: false,
            alertTitle: '',
            alertText: '',
            alertClass: '',
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida')
        }
    },
    methods: {
        async recarregaLista() {
            axios.defaults.withCredentials = true;
            const res = await axios.get('https://api.domingodelazer.click/api/datas/' + this.escola, { headers: { 'Authorization': this.token } });
            this.datas = res.data;
        },
        salvarData() {
            axios.defaults.withCredentials = true;
            axios.post('https://api.domingodelazer.click/api/datas/'+ this.escola, this.dataAula, {
                headers: {
                    'Authorization': this.token
                }
            }).then(res => {
                if (this.dataAula.id > 0) {
                    this.alert('Data Editada', 'Data ' + res.data.date + ' editada com sucesso!', 'success');
                } else {
                    this.alert('Data Salva', 'Data ' + res.data.date + ' inserida com sucesso!', 'success');
                }
                this.recarregaLista();
                this.dataAula = null;
            }).catch(rej => {
                this.alert('Erro', rej.response, 'error');
            });
        },
        clickRow(item, row) {
            const dateVet = row.item.columns.date.split("/");

            this.dataAula = {
                id: row.item.columns.id,
                date: dateVet[2] + "-" + dateVet[1] + "-" + dateVet[0],
                domingo: row.item.columns.domingo
            }

            this.title = "Editar Data";
            this.alertAtivo = false;
        },
        novaData() {
            this.dataAula = {
                id: 0,
                date: new Date().toISOString().split('T')[0],
                domingo: ''
            }

            this.title = "Nova Data";
            this.alertAtivo = false;
        },
        alert(title, text, classe) {
            this.alertAtivo = true;
            this.alertTitle = title;
            this.alertText = text;
            this.alertClass = classe;
        },
        fecharAlert() {
            this.alertAtivo = false;
            this.alertTitle = '';
            this.alertText = '';
            this.alertClass = '';
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

#datas,
#data {
    background-color: rgb(230, 243, 255);
    width: 98%;
    height: 100%;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 5px;
}

#botao {
    width: 175px;
    background-color: rgba(200, 230, 255, 0.699);
    border: #0b4d75 1px solid;
    color: #0b4d75;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
}

#alert {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px 15px;
    color: white;
}

#alert h2 {
    font-size: 25px;
}

#alert p {
    font-size: 20px;
}

.error {
    background-color: rgb(210, 25, 25);
}

.success {
    background-color: rgb(120, 200, 120);
}
</style>