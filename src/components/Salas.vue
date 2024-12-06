<template>
    <div id="principal">
        <div id="series" v-if="serie == null">
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
                <h2 style="margin-top: 3px;width: 60%">Listagem de Séries</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 5px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
                <button id="botao" @click="novaSerie"><i class="mdi mdi-plus-circle-outline"></i> Nova</button>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table @click:row="clickRow" items-per-page="11" :headers="headers" :items="series"
                style="padding: 5px 10px 10px 10px;" :search="search" v-if="series.length > 0" />
        </div>
        <div id="serie" v-if="serie != null">
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
                <h2 style="margin-top: 3px;width: 60%">Cadastro de Séries - {{ title }}</h2>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <div
                style="background-color: white; font-size: 25px; border-radius: 5px; margin: 5px 5px 0px 0px; padding: 20px 30px 20px 30px; color: #0b4d75;">
                <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100px; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Id</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="serie.id" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 100px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Série</p>
                        <input type="text" v-mask="'#ºA'"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="serie.serie" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 150px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Sala</p>
                        <v-select variant="outlined" v-model="serie.sala" :items="salas"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; width: 100px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Domingo</p>
                        <v-select variant="outlined" v-model="serie.domingo" :items="['A', 'B', 'C', 'D']"></v-select>
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 20px; margin-top: 20px;" />
                <div style="display: flex; justify-content: center;">
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="serie = null; this.alertAtivo = false;"><i class="mdi mdi-cancel"></i>
                        Cancelar</button>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="salvarSerie"><i class="mdi mdi-check"></i> Salvar</button>
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
    name: 'CadastroSerie',
    data() {
        return {
            headers: [
                { title: 'Id', key: 'id', align: 'start', type: Number },
                { title: 'Série', key: 'serie', align: 'start' },
                { title: 'Sala', key: 'sala', align: 'start' },
                { title: 'Domingo', key: 'domingo', align: 'end' },
            ],
            series: [],
            search: '',
            serie: null,
            title: '',
            alertAtivo: false,
            alertTitle: '',
            alertText: '',
            alertClass: '',
            salas: [],
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida')
        }
    },
    methods: {
        async recarregaLista() {
            const res = await axios.get('http://3.95.225.147:8080/api/series/'+ this.escola, { headers: { 'Authorization': this.token } });
            this.series = res.data;
            for (let i = 2; i < 20; i++) {
                this.salas.push('Sala ' + i);
            }
        },
        salvarSerie() {
            axios.post('http://3.95.225.147:8080/api/series/'+ this.escola, this.serie, {
                headers: {
                    'Authorization': this.token
                }
            }).then(res => {
                if (this.serie.id > 0) {
                    this.alert('Série Editada', 'Série ' + res.data.serie + ' editada com sucesso!', 'success');
                } else {
                    this.alert('Série Inserida', 'Série ' + res.data.serie + ' inserida com sucesso!', 'success');
                }
                this.recarregaLista();
                this.serie = null;
            }).catch(rej => {
                this.alert('Erro', rej.response.data, 'error');
            });
        },
        clickRow(item, row) {
            this.serie = {
                id: row.item.columns.id,
                serie: row.item.columns.serie,
                sala: row.item.columns.sala,
                domingo: row.item.columns.domingo
            }

            this.title = "Editar Série";
            this.alertAtivo = false;
        },
        novaSerie() {
            this.serie = {
                id: 0,
                serie: '',
                sala: '',
                domingo: ''
            }

            this.title = "Nova Série";
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

#series,
#serie {
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