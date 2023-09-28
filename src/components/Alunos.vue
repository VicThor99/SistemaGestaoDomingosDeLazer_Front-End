<template>
    <div id="principal">
        <div id="alunos" v-if="aluno == null">
            <div style="margin: 0px 0px 10px 30px; display: flex; justify-content: flex-start;">
                <h2 style="margin-top: 3px;width: 60%">Cadastro de Alunos</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 10px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
                <button id="botao" @click="novoAluno"><i class="mdi mdi-plus-circle-outline"></i>  Novo</button>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table items-per-page="11" :headers="headers" :items="alunos" @click:row="clickRow"
                style="padding: 5px 10px 10px 10px;" :search="search" class="elevation-1" v-if="alunos.length > 0" />
        </div>
        <div id="aluno" v-if="aluno != null">
            <div style="margin: 0px 0px 10px 30px; display: flex; justify-content: flex-start;">
                <h2 style="margin-top: 3px;width: 60%">Cadastro de Alunos - {{ title }}</h2>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <div
                style="background-color: white; font-size: 22px; border-radius: 20px; margin: 5px 5px 0px 0px; padding: 20px 30px 20px 30px; color: #0b4d75;">
                <div style="display: flex; justify-content: start; width: 100%; margin-bottom: 10px;">

                    <div style="display: flex; flex-direction: column; width: 250px; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Id</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.id" />
                    </div>

                    <div style="display: flex; flex-direction: column; width: 250px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Código</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px; border: 0px;"
                            v-model="aluno.codigo" />
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />

                <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Nome</p>
                        <input type="text"
                            style="text-transform:uppercase; border:#3f799c69 1px solid; text-align: start; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.nome" />
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 270px; margin-right: 10px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Data de Nascimento</p>
                        <input type="date"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.nascimento" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 125px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Série</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.serie" />
                    </div>
                </div>
                <div style="display: flex; justify-content: space-evenly; width: 100%; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Endereço</p>
                        <input type="text"
                            style="text-transform:uppercase; border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.endereco" />
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 125px; margin-right: 10px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Sapato</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.sapato" />
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 125px; margin-right: 10px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Blusa</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.blusa" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 125px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Calça</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.calca" />
                    </div>
                </div>
                <div style="display: flex; justify-content: space-evenly; width: 100%; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Nome do Responsável</p>
                        <input type="text"
                            style="text-transform:uppercase; border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.nomeResponsavel" />
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 1000px; margin-right: 10px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">E-mail</p>
                        <input type="email"
                            style="text-transform:uppercase; border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.emailResponsavel" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 380px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Telefone</p>
                        <input type="text" v-mask="['(##) ####-####', '(##) #####-####']"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 20px;"
                            v-model="aluno.telefoneResponsavel" />
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 20px; margin-top: 20px;" />
                <div style="display: flex; justify-content: center;">
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="aluno = null"><i class="mdi mdi-cancel"></i>  Cancelar</button>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="salvarAluno"><i class="mdi mdi-check"></i>  Salvar</button>
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
import axios from 'axios';

export default {
    name: 'CadastroAlunos',
    data() {
        return {
            headers: [
                { title: 'Id', key: 'id', align: 'start', type: Number },
                { title: 'Nome', key: 'nome', align: 'start' },
                { title: 'Código', key: 'codigo', align: 'start' },
                { title: 'Série', key: 'serie', align: 'start' },
                { title: 'Sala', key: 'sala', align: 'start' },
                { title: 'Data de Nascimento', key: 'nascimento', align: 'end' },
                { title: 'Sapato', key: 'sapato', align: ' d-none', type: Number },
                { title: 'Blusa', key: 'blusa', align: ' d-none', type: Number },
                { title: 'Calça', key: 'calca', align: ' d-none', type: Number },
                { title: 'Endereço', key: 'endereco', align: ' d-none' },
                { title: 'Nome do Responsável', key: 'nomeResponsavel', align: ' d-none' },
                { title: 'Telefone do Responsável', key: 'telefoneResponsavel', align: ' d-none' },
                { title: 'Email do Responsável', key: 'emailResponsavel', align: ' d-none' },
            ],
            alunos: [],
            search: '',
            aluno: null,
            title: ''
        }
    },
    methods: {
        async recarregaLista() {
            const res = await axios.get('http://localhost:8080/api/alunos/');
            this.alunos = res.data;
        },
        salvarAluno() {
            console.log("ENTROU NO MÉTODO");
        },
        clickRow(item, row) {
            const dateVet = row.item.columns.nascimento.split("/");

            this.aluno = {
                id: row.item.columns.id,
                codigo: row.item.columns.codigo,
                nome: row.item.columns.nome,
                nascimento: dateVet[2] + "-" + dateVet[1] + "-" + dateVet[0],
                serie: row.item.columns.serie,
                sapato: row.item.columns.sapato,
                blusa: row.item.columns.blusa,
                calca: row.item.columns.calca,
                endereco: row.item.columns.endereco,
                nomeResponsavel: row.item.columns.nomeResponsavel,
                telefoneResponsavel: row.item.columns.telefoneResponsavel,
                emailResponsavel: row.item.columns.emailResponsavel,
            }

            this.title = "Editar Aluno";

            console.log(this.aluno);
        },
        novoAluno() {
            this.aluno = {
                id: 0,
                codigo: 0,
                nome: '',
                nascimento: new Date().toISOString().split('T')[0],
                serie: '',
                sapato: 0,
                blusa: 0,
                calca: 0,
                endereco: '',
                nomeResponsavel: '',
                telefoneResponsavel: '',
                emailResponsavel: '',
            }

            this.title = "Novo Aluno";
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

#alunos,
#aluno {
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

#botao {
    width: 175px;
    background-color: rgba(200, 230, 255, 0.699);
    border: #0b4d75 1px solid;
    color: #0b4d75;
    border-radius: 20px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
}

</style>