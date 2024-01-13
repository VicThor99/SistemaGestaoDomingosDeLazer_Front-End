<template>
    <div id="principal">
        <div id="alunos" v-if="aluno == null">
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
                <h2 style="margin-top: 3px; width: 60%">Listagem de Alunos</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 5px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
                <button id="botao" @click="novoAluno"><i class="mdi mdi-plus-circle-outline"></i> Novo</button>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table items-per-page="11" :headers="headers" :items="alunos" @click:row="clickRow"
                style="padding: 5px 10px 10px 10px;" :search="search" class="elevation-1" v-if="alunos.length > 0" />
        </div>
        <div id="aluno" v-if="aluno != null">
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
                <h2 style="margin-top: 3px; width: 90%">Cadastro de Alunos - {{ title }}</h2>
                <v-dialog width="500" style="margin-top: 10px;" v-if="this.temMatricula">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" text="Ver Matrícula"> </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Matrícula">
                            <img :src="this.matricula" alt="">

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text="Fechar" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <div
                style="background-color: white; font-size: 22px; border-radius: 5px; margin: 5px 5px 0px 0px; padding: 20px 30px 20px 30px; color: #0b4d75;">
                <div style="display: flex; justify-content: start; width: 100%; margin-top: 20px;">

                    <img :src="this.fotoAluno" alt="" v-if="this.temFoto"
                        style="height: 110px; width: 110px; margin-right: 10px; margin-top: -30px; border-radius: 5px; border: #0b4d75 1px solid;" />

                    <div style="display: flex; flex-direction: column; width: 250px; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Id</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="aluno.id" />
                    </div>

                    <div
                        style="display: flex; flex-direction: column; width: 250px; margin-left: 10px; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Código</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px; border: 0px;"
                            v-model="aluno.codigo" />
                    </div>

                    <div style="display: flex; flex-direction: column; width: 250px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Número da Sacolinha</p>
                        <input type="text"
                            style="text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px; border:#3f799c69 1px solid;"
                            v-model="aluno.numeroSacolinha" />
                    </div>
                    <v-spacer></v-spacer>

                    <div style="display: flex; flex-direction: column; width: 170px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Aluno ativo</p>
                        <v-switch color="info" v-model="aluno.ativo" hide-details inset style="width: 100%;"></v-switch>
                    </div>

                    <div style="display: flex; flex-direction: column; width: 170px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Sair sozinho</p>
                        <v-switch color="info" v-model="aluno.sairSo" hide-details inset style="width: 100%;"></v-switch>
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />

                <div style="display: flex; justify-content: center; width: 100%;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Nome</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; text-align: start; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="aluno.nome" />
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 270px; margin-right: 10px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Data de Nascimento</p>
                        <input type="date"
                            style="border:#3f799c69 1px solid; text-align: center; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="aluno.nascimento" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 170px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Série</p>
                        <v-select density="comfortable" variant="outlined" v-model="aluno.serie"
                            :items="seriesDisponiveis"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; width: 125px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Sexo</p>
                        <v-select density="comfortable" variant="outlined" v-model="aluno.sexo"
                            :items="['F', 'M']"></v-select>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-evenly; width: 100%;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Endereço</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="aluno.endereco" />
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 125px; margin-right: 10px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Sapato</p>
                        <v-select density="comfortable" variant="outlined" v-model="aluno.sapato"
                            :items="tamanhos"></v-select>
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 125px; margin-right: 10px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Blusa</p>
                        <v-select density="comfortable" variant="outlined" v-model="aluno.blusa"
                            :items="tamanhos"></v-select>
                    </div>
                    <div style="display: flex; flex-direction: column; width: 125px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Calça</p>
                        <v-select density="comfortable" variant="outlined" v-model="aluno.calca"
                            :items="tamanhos"></v-select>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-evenly; width: 100%; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Nome do Responsável</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="aluno.nomeResponsavel" />
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 1000px; margin-right: 10px; margin-left: 10px;">
                        <p style="color: #5a5a5a; width: 100%; margin-left: 5px;">E-mail</p>
                        <input type="email"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="aluno.emailResponsavel" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 380px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Telefone</p>
                        <input type="text" v-mask="['(##) ####-####', '(##) #####-####']"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center;  width: 100%; border-radius: 5px;"
                            v-model="aluno.telefoneResponsavel" />
                    </div>
                </div>
                <div style="display: flex; justify-content: center; border-radius: 5px 5px 0px 0px; margin-top: 20px; background-color: #d7effd; color: #0b4d75; height: 40px;"
                    class="elevation-1">
                    <h3>Presenças do Aluno</h3>
                </div>
                <div style="border-radius: 0px 0px 5px 5px;" class="elevation-1">
                    <div
                        style="background-color: white; font-size: 22px; border-radius: 5px; margin: 5px 5px 0px 0px; padding: 10px 20px; color: #0b4d75;">
                        <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 10px;">
                            <div style="display: flex; flex-direction: column; margin-right: 15px; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Fevereiro</p>
                                <v-select variant="solo-filled" v-model="registro.fevereiro" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                            <div style="display: flex; flex-direction: column; margin-right: 15px; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Março</p>
                                <v-select variant="solo-filled" v-model="registro.marco" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                            <div style="display: flex; flex-direction: column; margin-right: 15px; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Abril</p>
                                <v-select variant="solo-filled" v-model="registro.abril" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                            <div style="display: flex; flex-direction: column; margin-right: 15px; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Maio</p>
                                <v-select variant="solo-filled" v-model="registro.maio" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                            <div style="display: flex; flex-direction: column; margin-right: 15px; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Junho</p>
                                <v-select variant="solo-filled" v-model="registro.junho" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                            <div style="display: flex; flex-direction: column; margin-right: 15px; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Agosto</p>
                                <v-select variant="solo-filled" v-model="registro.agosto" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                            <div style="display: flex; flex-direction: column; margin-right: 15px; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Setembro</p>
                                <v-select variant="solo-filled" v-model="registro.setembro" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                            <div style="display: flex; flex-direction: column; margin-right: 15px; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Outubro</p>
                                <v-select variant="solo-filled" v-model="registro.outubro" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                            <div style="display: flex; flex-direction: column; width: 11%">
                                <p style="color: #5a5a5a; margin-left: 5px;">Novembro</p>
                                <v-select variant="solo-filled" v-model="registro.novembro" style="width: 100%"
                                    bg-color="#f0f6fa" hide-details="true"
                                    :items="['', 'P', 'M', 'A', 'E', 'F']"></v-select>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 20px; margin-top: 20px;" />
                <div style="display: flex; justify-content: center;">
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="aluno = null; this.alertAtivo = false;"><i class="mdi mdi-cancel"></i>
                        Cancelar</button>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="salvarAluno()"><i class="mdi mdi-check"></i> Salvar</button>
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
    name: 'CadastroAlunos',
    data() {
        return {
            headers: [
                { title: 'Id', key: 'id', align: 'start', type: Number },
                { title: 'Código', key: 'codigo', align: 'start' },
                { title: 'Nº Sacolinha', key: 'numeroSacolinha', align: 'start' },
                { title: 'Nome', key: 'nome', align: 'start' },
                { title: 'Sexo', key: 'sexo', align: 'start' },
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
                { title: 'Aluno Ativo', key: 'ativo', align: ' d-none' },
                { title: 'Sair Só', key: 'sairSo', align: ' d-none' },
            ],
            alunos: [],
            search: '',
            aluno: null,
            registro: null,
            title: '',
            alertAtivo: false,
            alertTitle: '',
            alertText: '',
            alertClass: '',
            seriesDisponiveis: [],
            tamanhos: [],
            fotoAluno: '',
            matricula: '',
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida'),
            temFoto: false,
            temMatricula: false
        }
    },
    methods: {
        async recarregaLista() {
            const resAlunos = await axios.get('http://18.205.24.68:8080/api/alunos/' + this.escola, { headers: { 'Authorization': this.token } });
            const resSeries = await axios.get('http://18.205.24.68:8080/api/series/listaString/' + this.escola, { headers: { 'Authorization': this.token } });
            this.alunos = resAlunos.data;
            this.seriesDisponiveis = resSeries.data;
            for (let i = 20; i < 46; i++) {
                this.tamanhos.push(i);
            }
        },
        async salvarAluno() {
            this.aluno.nome = this.aluno.nome.toUpperCase();
            if (this.aluno.id > 0) {
                await axios.post('http://18.205.24.68:8080/api/registros/' + this.aluno.codigo + '/' + this.escola, this.registro, { headers: { 'Authorization': this.token } }).then(res => {
                    console.log(res);
                    axios.post('http://18.205.24.68:8080/api/alunos/save', this.aluno, {
                        headers: {
                            'Authorization': this.token
                        }
                    }).then(res => {
                        if (this.aluno.sexo === 'M') {
                            this.alert('Aluno Editado', 'Aluno ' + res.data.nome + ' editado com sucesso!', 'success');
                        } else {
                            this.alert('Aluna Editada', 'Aluna ' + res.data.nome + ' editada com sucesso!', 'success');
                        }
                        this.recarregaLista();
                        this.aluno = null;
                    }).catch(rej => {
                        this.alert('Erro', rej.response.data, 'error');
                    });
                }).catch(rej => console.log(rej));
            } else {
                await axios.post('http://18.205.24.68:8080/api/alunos/save', this.aluno, { headers: { 'Authorization': this.token } }).then(res => {
                    console.log(res);
                    axios.post('http://18.205.24.68:8080/api/registros/' + res.data.codigo + '/' + this.escola, this.registro, {
                        headers: {
                            'Authorization': this.token
                        }
                    }).then(res => {
                        if (this.aluno.sexo === 'M') {
                            this.alert('Aluno Adicionado', 'Aluno ' + res.data.nome + ' adicionado com sucesso!', 'success');
                        } else {
                            this.alert('Aluna Adicionada', 'Aluna ' + res.data.nome + ' adicionada com sucesso!', 'success');
                        }
                        this.recarregaLista();
                        this.aluno = null;
                    }).catch(rej => {
                        this.alert('Erro', rej.response.data, 'error');
                    });
                }).catch(rej => console.log(rej));
            }
        },
        async clickRow(item, row) {
            const dateVet = row.item.columns.nascimento.split("/");

            await axios.get('http://18.205.24.68:8080/api/registros/' + row.item.columns.codigo + "/" + this.escola, { headers: { 'Authorization': this.token } })
                .then(res => {
                    this.registro = {
                        fevereiro: res.data.fevereiro !== null ? res.data.fevereiro : '',
                        marco: res.data.marco !== null ? res.data.marco : '',
                        abril: res.data.abril !== null ? res.data.abril : '',
                        maio: res.data.maio !== null ? res.data.maio : '',
                        junho: res.data.junho !== null ? res.data.junho : '',
                        agosto: res.data.agosto !== null ? res.data.agosto : '',
                        setembro: res.data.setembro !== null ? res.data.setembro : '',
                        outubro: res.data.outubro !== null ? res.data.outubro : '',
                        novembro: res.data.novembro !== null ? res.data.novembro : ''
                    }
                })
                .catch(rej => console.log(rej));

            await axios.get('http://18.205.24.68:8080/api/arquivos/foto/' + row.item.columns.id, {
                headers: {
                    'Authorization': this.token
                }
            })
                .then(res => {
                    if (res.data !== null && res.data !== '') {
                        this.fotoAluno = 'data:image/jpeg;base64,' + res.data;
                        this.temFoto = true;
                    } else {
                        this.fotoAluno = '';
                        this.temFoto = false;
                    }
                })
                .catch(rej => console.log(rej))

            await axios.get('http://18.205.24.68:8080/api/arquivos/matricula/' + row.item.columns.id, {
                headers: {
                    'Authorization': this.token
                }
            })
                .then(res => {
                    if (res.data !== null && res.data !== '') {
                        this.matricula = 'data:image/jpeg;base64,' + res.data;
                        this.temMatricula = true;
                    } else {
                        this.matricula = '';
                        this.temMatricula = false;
                    }
                })
                .catch(rej => console.log(rej))

            this.aluno = {
                id: row.item.columns.id,
                codigo: row.item.columns.codigo,
                nome: row.item.columns.nome,
                sexo: row.item.columns.sexo,
                nascimento: dateVet[2] + "-" + dateVet[1] + "-" + dateVet[0],
                serie: row.item.columns.serie,
                sapato: row.item.columns.sapato,
                blusa: row.item.columns.blusa,
                calca: row.item.columns.calca,
                endereco: row.item.columns.endereco,
                nomeResponsavel: row.item.columns.nomeResponsavel,
                telefoneResponsavel: row.item.columns.telefoneResponsavel,
                emailResponsavel: row.item.columns.emailResponsavel,
                numeroSacolinha: row.item.columns.numeroSacolinha,
                ativo: row.item.columns.ativo,
                sairSo: row.item.columns.sairSo,
                escolaId: this.escola
            }

            this.title = "Editar Aluno";
            this.alertAtivo = false;
        },
        novoAluno() {
            this.aluno = {
                id: 0,
                codigo: 0,
                nome: '',
                sexo: '',
                nascimento: new Date().toISOString().split('T')[0],
                serie: '',
                sapato: 0,
                blusa: 0,
                calca: 0,
                endereco: '',
                nomeResponsavel: '',
                telefoneResponsavel: '',
                emailResponsavel: '',
                numeroSacolinha: '',
                ativo: false,
                sairSo: false,
                escolaId: this.escola
            }

            this.registro = {
                fevereiro: '',
                marco: '',
                abril: '',
                maio: '',
                junho: '',
                agosto: '',
                setembro: '',
                outubro: '',
                novembro: ''
            }

            this.temFoto = false;
            this.temMatricula = false;
            this.fotoAluno = '';
            this.matricula = '';

            this.title = "Novo Aluno";
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

#alunos {
    background-color: rgb(230, 243, 255);
    height: 100%;
    font-size: 20px;
    padding: 10px;
    margin: 20px 0px 20px 20px;
    color: #0b4d75;
    border-radius: 5px;
}

#aluno {
    background-color: rgb(230, 243, 255);
    height: 100%;
    font-size: 20px;
    padding: 10px;
    margin: 20px 0px 20px 20px;
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