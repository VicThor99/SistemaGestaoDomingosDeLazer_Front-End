<template>
    <div id="principal">
        <div id="usuarios" v-if="usuario == null">
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
                <h2 style="margin-top: 3px;width: 60%">Listagem de Usuários</h2>
                <input
                    style="width: 40%;margin-right: 20px; padding-left: 15px; border-radius: 5px; background-color: white; opacity: 0.7;"
                    type="text" placeholder="Pesquisa" v-model="search" />
                <button id="botao" @click="novoUsuario"><i class="mdi mdi-plus-circle-outline"></i> Novo</button>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table @click:row="clickRow" items-per-page="11" :headers="headers" :items="usuarios"
                style="padding: 5px 10px 10px 10px;" :search="search" class="elevation-1" v-if="usuarios.length > 0" />
        </div>
        <div id="usuario" v-if="usuario != null">
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
                <h2 style="margin-top: 3px;width: 60%">Cadastro de Usuários - {{ title }}</h2>
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <div
                style="background-color: white; font-size: 20px; border-radius: 5px; margin: 5px 5px 0px 0px; padding: 20px 30px 20px 30px; color: #0b4d75;">
                <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: column; width: 100px; margin-right: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Id</p>
                        <input type="text" disabled="true"
                            style="background-color: rgba(211, 211, 211, 0.363); text-align: end; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="usuario.id" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 350px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Nome</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="usuario.nome" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 350px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Username</p>
                        <input type="text"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="usuario.username" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 500px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">E-mail</p>
                        <input type="email"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="usuario.email" />
                    </div>
                    <div style="display: flex; flex-direction: column; width: 350px; margin-left: 10px;">
                        <p style="color: #5a5a5a; margin-left: 5px;">Senha</p>
                        <input type="password"
                            style="border:#3f799c69 1px solid; padding: 7px 15px; align-self: center; width: 100%; border-radius: 5px;"
                            v-model="usuario.senha" />
                    </div>
                    <div
                        style="display: flex; flex-direction: column; width: 75px; margin-left: 10px; align-items: center;">
                        <p style="color: #5a5a5a;">Admin</p>
                        <v-switch color="info" v-model="usuario.admin" hide-details inset></v-switch>
                    </div>
                </div>
                <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 20px; margin-top: 20px;" />
                <div style="display: flex; justify-content: center;">
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="usuario = null; this.alertAtivo = false;"><i class="mdi mdi-cancel"></i>
                        Cancelar</button>
                    <v-spacer></v-spacer>
                    <button id="botao" @click="salvarUsuario"><i class="mdi mdi-check"></i> Salvar</button>
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
    name: 'CadastroUsuarios',
    data() {
        return {
            headers: [
                { title: 'Id', key: 'id', align: 'start', type: Number },
                { title: 'Nome', key: 'nome', align: 'start' },
                { title: 'Username', key: 'username', align: 'start' },
                { title: 'Email', key: 'email', align: 'start' },
                { title: 'Cargo', key: 'cargo', align: 'start' },
                { title: 'Senha', key: 'senha', align: ' d-none' },
            ],
            usuarios: [],
            search: '',
            usuario: null,
            title: '',
            alertAtivo: false,
            alertTitle: '',
            alertText: '',
            alertClass: '',
            token: cookies.get('token')
        }
    },
    methods: {
        async recarregaLista() {
            const res = await axios.get('https://54.167.78.156:8443/api/users', { headers: { 'Authorization': this.token } });
            this.usuarios = res.data;
        },
        salvarUsuario() {
            axios.post('https://54.167.78.156:8443/api/users', this.usuario, {
                headers: {
                    'Authorization': this.token
                }
            }).then(res => {
                if (this.usuario.id > 0) {
                    this.alert('Usuário Editado', 'Usuário ' + res.data.username + ' editado com sucesso!', 'success');
                } else {
                    this.alert('Usuário Inserido', 'Usuário ' + res.data.username + ' inserido com sucesso!', 'success');
                }
                this.recarregaLista();
                this.usuario = null;
            }).catch(rej => {
                this.alert('Erro', rej, 'error');
            });
        },
        clickRow(item, row) {
            let admin = row.item.columns.cargo === "Administrador";

            this.usuario = {
                id: row.item.columns.id,
                nome: row.item.columns.nome,
                username: row.item.columns.username,
                email: row.item.columns.email,
                senha: row.item.columns.senha,
                admin: admin
            }

            this.title = "Editar Usuário";
            this.alertAtivo = false;
        },
        novoUsuario() {
            this.usuario = {
                id: 0,
                nome: '',
                username: '',
                email: '',
                senha: '',
                admin: false
            }

            this.title = "Novo Usuário";
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

#usuarios,
#usuario {
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