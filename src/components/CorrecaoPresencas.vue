<template>
    <div id="principal">
        <div id="correcaoPresencas" v-if="registro == null">
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
            <div style="margin: 0px 0px 10px 30px; display: flex; justify-content: space-between;">
                <h2 style="margin-left: 30px;">Correção de Presenças</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 5px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table @click:row="clickRow" items-per-page="11" :headers="headers" :items="registros"
                style="padding: 5px 10px 10px 10px;" :search="search" class="elevation-1" v-if="registros.length > 0" />
        </div>
        <div id="registro" v-if="registro != null">
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
                <h2 style="margin-top: 3px;width: 60%">Cadastro de Presenças</h2>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <div
                style="background-color: white; font-size: 22px; border-radius: 5px; margin: 5px 5px 0px 0px; padding: 20px 30px 20px 30px; color: #0b4d75;">
                <div style="display: flex; justify-content: start; width: 100%; margin-bottom: 10px;">

                    <div style="display: flex; flex-direction: column; width: 250px; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Código</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="registro.codigo" />
                    </div>

                    <div style="display: flex; flex-direction: column;width: 100%; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Nome</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: start; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px; border: 0px;"
                            v-model="registro.nome" />
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
                <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; margin-right: 15px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Fevereiro</p>
                        <v-select variant="outlined" v-model="registro.fevereiro" style="width: 220px"
                            :items="itemsRegistro"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; margin-right: 15px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Março</p>
                        <v-select variant="outlined" v-model="registro.marco" style="width: 220px"
                            :items="itemsRegistro"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; margin-right: 15px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Abril</p>
                        <v-select variant="outlined" v-model="registro.abril" style="width: 220px;"
                            :items="itemsRegistro"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; margin-right: 15px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Maio</p>
                        <v-select variant="outlined" v-model="registro.maio" style="width: 220px"
                            :items="itemsRegistro"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Junho</p>
                        <v-select variant="outlined" v-model="registro.junho" style="width: 220px"
                            :items="itemsRegistro"></v-select>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; margin-right: 15px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Agosto</p>
                        <v-select variant="outlined" v-model="registro.agosto" style="width: 220px"
                            :items="itemsRegistro"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; margin-right: 15px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Setembro</p>
                        <v-select variant="outlined" v-model="registro.setembro" style="width: 220px"
                            :items="itemsRegistro"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; margin-right: 15px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Outubro</p>
                        <v-select variant="outlined" v-model="registro.outubro" style="width: 220px"
                            :items="itemsRegistro"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Novembro</p>
                        <v-select variant="outlined" v-model="registro.novembro" style="width: 220px"
                            :items="itemsRegistro"></v-select>
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 20px; margin-top: 20px;" />
                <div style="display: flex; justify-content: center;">
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="registro = null; this.alertAtivo = false;"><i class="mdi mdi-cancel"></i>
                        Cancelar</button>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="salvarRegistro"><i class="mdi mdi-check"></i> Salvar</button>
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
    name: 'CorrecaoPresencas',
    data() {
        return {
            headers: [
                { title: 'Código', key: 'codigo', align: 'start' },
                { title: 'Nome', key: 'nome', align: 'start', width: '340px' },
                { title: 'FEV', key: 'fevereiro', align: 'start' },
                { title: 'MAR', key: 'marco', align: 'start' },
                { title: 'ABR', key: 'abril', align: 'start' },
                { title: 'MAI', key: 'maio', align: 'start' },
                { title: 'JUN', key: 'junho', align: 'start' },
                { title: 'AGO', key: 'agosto', align: 'start' },
                { title: 'SET', key: 'setembro', align: 'start' },
                { title: 'OUT', key: 'outubro', align: 'start' },
                { title: 'NOV', key: 'novembro', align: 'start' },
            ],
            itemsRegistro: ['Presença', 'Manual', 'Atestado', 'Esqueceu o Crachá', 'Falta'],
            registros: [],
            search: '',
            registro: null,
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
            const res = await axios.get('http://172.31.87.236:8080/api/registros/' + this.escola, { headers: { 'Authorization': this.token } });
            this.registros = res.data;
        },
        salvarRegistro() {
            axios.post('http://172.31.87.236:8080/api/registros/' + this.registro.codigo + '/'+ this.escola, this.registro, {
                headers: {
                    'Authorization': this.token
                }
            }).then(res => {
                this.alert('Registro Editado', 'Registro editado com sucesso!', 'success');
                console.log(res.data);
                this.recarregaLista();
                this.registro = null;
            }).catch(rej => {
                this.alert('Erro', rej.response.data, 'error');
            });
        },
        clickRow(item, row) {
            this.registro = {
                codigo: row.item.columns.codigo,
                nome: row.item.columns.nome,
                fevereiro: this.substituirSigla(row.item.columns.fevereiro),
                marco: this.substituirSigla(row.item.columns.marco),
                abril: this.substituirSigla(row.item.columns.abril),
                maio: this.substituirSigla(row.item.columns.maio),
                junho: this.substituirSigla(row.item.columns.junho),
                agosto: this.substituirSigla(row.item.columns.agosto),
                setembro: this.substituirSigla(row.item.columns.setembro),
                outubro: this.substituirSigla(row.item.columns.outubro),
                novembro: this.substituirSigla(row.item.columns.novembro),
            }

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
        },
        substituirSigla(sigla) {
            if (sigla === 'P') {
                return 'Presença';
            }

            if (sigla === 'M') {
                return 'Manual';
            }

            if (sigla === 'A') {
                return 'Atestado';
            }

            if (sigla === 'E') {
                return 'Esqueceu o Crachá';
            }

            if (sigla === 'F') {
                return 'Falta';
            }
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

#correcaoPresencas,
#registro {
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
}</style>