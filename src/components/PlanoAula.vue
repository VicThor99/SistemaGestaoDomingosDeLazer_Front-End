<template>
    <div id="principal">
        <div id="planoAulas" v-if="planoAula == null">
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
                <h2 style="margin-top: 3px;width: 60%">Listagem de Planos de Aulas</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 5px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
                <button id="botao" @click="novoPlanoAula"><i class="mdi mdi-plus-circle-outline"></i> Nova</button>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table @click:row="clickRow" items-per-page="11" :headers="headers" :items="planosAulas"
                style="padding: 5px 10px 10px 10px;" :search="search" v-if="planosAulas.length > 0" />
        </div>
        <div id="planoAula" v-if="planoAula != null">
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
                <h2 style="margin-top: 3px;width: 60%">Cadastro de Plano de Aula - {{ title }}</h2>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <div
                style="background-color: white; font-size: 25px; border-radius: 5px; margin: 5px 5px 0px 0px; padding: 20px 30px 20px 30px; color: #0b4d75;">
                <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 10%; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Id</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="planoAula.id" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 30%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Mês</p>                            
                        <input type="date"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="planoAula.mes" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 30%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Tema</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; text-align: left; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="planoAula.tema" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 30%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Séries</p>
                        <v-select variant="outlined" v-model="planoAula.series" :items="this.series" multiple></v-select>
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Objetivos</p>
                        <v-textarea variant="outlined" v-model="planoAula.objetivos" rows="5" no-resize hide-details="true"></v-textarea>
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Quebra-Gelo</p>
                        <v-textarea variant="outlined" v-model="planoAula.quebraGelo" rows="15" no-resize hide-details="true"></v-textarea>
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Título da História</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; text-align: left; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="planoAula.tituloHistoria" />
                        <p style="color: #5a5a5a; margin-left: 5px;">História</p>
                        <v-textarea variant="outlined" v-model="planoAula.historia" rows="20" no-resize hide-details="true"></v-textarea>
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Atividade</p>
                        <v-textarea variant="outlined" v-model="planoAula.atividade" rows="15" no-resize hide-details="true"></v-textarea>
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Material Necessário</p>
                        <v-textarea variant="outlined" v-model="planoAula.material" rows="10" no-resize hide-details="true"></v-textarea>
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 20px; margin-top: 20px;" />
                <div style="display: flex; justify-content: center;">
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="planoAula = null; this.alertAtivo = false;"><i class="mdi mdi-cancel"></i>
                        Cancelar</button>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="salvarPlanoAula"><i class="mdi mdi-check"></i> Salvar</button>
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
    name: 'CadastroPlanoAula',
    data() {
        return {
            headers: [
                { title: 'Id', key: 'id', align: 'start', type: Number },
                { title: 'Mês', key: 'mes', align: 'start' },
                { title: 'Tema', key: 'tema', align: 'start' },
                { title: 'Séries', key: 'series', align: 'end' },
            ],
            series: [],
            planosAulas: [],
            search: '',
            planoAula: null,
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
            const res = await axios.get('https://api.domingodelazer.click/api/planoaula/'+ this.escola, { headers: { 'Authorization': this.token } });
            this.planosAulas = res.data;
            
            const resSeries = await axios.get('https://api.domingodelazer.click/api/series/listaString/'+ this.escola, { headers: { 'Authorization': this.token } });
            this.series = resSeries.data;
        },
        salvarPlanoAula() {
            axios.post('https://api.domingodelazer.click/api/planoaula/'+ this.escola, this.planoAula, {
                headers: {
                    'Authorization': this.token
                }
            }).then(res => {
                console.log(res);
                if (this.planoAula.id > 0) {
                    this.alert('Plano de Aula Editado', 'Plano de Aula editado com sucesso!', 'success');
                } else {
                    this.alert('Plano de Aula Inserido', 'Plano de Aula inserido com sucesso!', 'success');
                }
                this.recarregaLista();
                this.planoAula = null;
            }).catch(rej => {
                this.alert('Erro', rej.response.data, 'error');
            });
        },
        clickRow(item, row) {
            const res = axios.get('https://api.domingodelazer.click/api/planoaula/' + row.item.columns.id + '/' + this.escola, { headers: { 'Authorization': this.token } });
            this.planoAula = res.data;

            console.log(res.data);

            this.title = "Editar Plano de Aula";
            this.alertAtivo = false;
        },
        novoPlanoAula() {
            this.planoAula = {
                id: 0,
                mes: '',
                tema: '',
                objetivos: '',
                quebraGelo: '',
                tituloHistoria: '',
                historia: '',
                atividade: '',
                material: ''
            }

            this.title = "Novo Plano de Aula";
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

#planoAulas,
#planoAula {
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