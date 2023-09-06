<template>
  <div id="app">
    <div v-if="!logado" id="divPrincipal">
      <div></div>
      <div id="login">
        <img class="img" alt="Logo da Seara" src="./assets/logo.png">

        <input placeholder="Usuário" v-model="user.username"
          onkeydown="if (event.keyCode == 13) {document.getElementById('logar').click()}" />

        <input placeholder="Senha" v-model="user.senha" type="password"
          onkeydown="if (event.keyCode == 13) {document.getElementById('logar').click()}" />

        <button id="logar" @click="submit">Logar</button>

        <h2 class="aviso" v-show="erro !== null">{{ erro }}</h2>
      </div>
      <div></div>
    </div>
    <div v-if="logado" id="divPrincipal">
      <header id="header">
        <div style="width: 70%; height: 100%; display: flex; justify-content: flex-start;">
          <a @click="mudarPagina('TelaInicial')" class="headerImg"><img class="logoInicial" alt="Logo da Seara"
              src="./assets/logo.png"></a>
          <div class="dropdown">
            <a class="headerButton">Cadastros</a>

            <div class="dropdown-content">
              <a @click="mudarPagina('Alunos')" class="headerButton" style="font-weight: normal !important;"><i class="mdi mdi-account-school"></i> Alunos</a>
              <a @click="mudarPagina('Usuarios')" class="headerButton" style="font-weight: normal !important;"><i class="mdi mdi-account"></i> Usuários</a>
              <a @click="mudarPagina('Salas')" class="headerButton" style="font-weight: normal !important;"><i class="mdi mdi-human-male-board"></i> Salas</a>
            </div>
          </div>
        </div>
        <div style="width: 30%;height: 100%; display: flex; justify-content: flex-end;">
          <div class="dropdown" style="width: 235px; text-align: right;">
            <a class="headerButton"><i class="mdi mdi-cog"></i></a>

            <div class="opcoes-content">
              <p style="font-weight: bold;">Olá, {{ username }}</p>
              <br>
              <a @click="download" class="headerButton" style="font-weight: normal !important;">Exportar Excel <i class="mdi mdi-file-excel"></i></a>
              <a @click="mudarPagina('ImportExcel')" class="headerButton" style="font-weight: normal !important;">Importar Excel <i class="mdi mdi-file-excel-outline"></i></a>
              <a @click="sair" class="headerButton" style="font-weight: normal !important;">Sair <i class="mdi mdi-exit-to-app"></i></a>
            </div>
          </div>
        </div>
      </header>
      <TelaInicial :user="user.username" v-if="telaAtual === 'TelaInicial'" />
      <CadastroAlunos v-if="telaAtual === 'Alunos'" />
      <CadastroSalas v-if="telaAtual === 'Salas'" />
      <CadastroUsuarios v-if="telaAtual === 'Usuarios'" />
      <ImportExcel v-if="telaAtual === 'ImportExcel'" />
    </div>
  </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';
import { utils, writeFile } from 'xlsx';
import TelaInicial from './components/TelaInicial.vue';
import CadastroAlunos from './components/Alunos.vue';
import CadastroSalas from './components/Salas.vue';
import CadastroUsuarios from './components/Usuarios.vue';
import ImportExcel from './components/ImportaExcel.vue';

export default {
  name: 'App',
  components: {
    TelaInicial,
    CadastroAlunos,
    CadastroSalas,
    CadastroUsuarios,
    ImportExcel
  },
  data() {
    return {
      user: {
        username: '',
        senha: ''
      },
      username:cookies.get('username'),
      erro: null,
      listaCriancas: [],
      logado: cookies.get('token') !== null,
      telaAtual: 'TelaInicial'
    }
  },
  methods: {
    submit() {
      axios.post('http://localhost:8080/api/auth', this.user)
        .then(res => {
          var date = new Date();
          date.setUTCMinutes(date.getUTCMinutes() + 30);
          cookies.set('token', res.data.token, date);
          cookies.set('admin', res.data.admin, date);
          cookies.set('username', res.data.username, date);
          this.username = res.data.username;
          this.logado = cookies.get('token') != null;
          this.erro = null;
          this.telaAtual = 'TelaInicial';
        })
        .catch(rej => {
          console.log(rej);
          cookies.remove('token');
          cookies.remove('admin');
          this.logado = cookies.get('token') != null;
          this.erro = 'Usuário e senha não compatíveis';
        })
    },
    download() {
      axios.get('http://localhost:8080/api/alunos/sacolinha')
        .then(res => {
          console.log(res.data);
          this.listaCriancas = res.data;
          console.log(this.listaCriancas);
          const data = utils.json_to_sheet(this.listaCriancas);
          const wb = utils.book_new();
          utils.book_append_sheet(wb, data, 'Dados para Sacolinha');
          writeFile(wb, 'sacolinhaDeNatal.xlsx');
        })
        .catch(rej => {
          console.log(rej);
          this.erro = '';
        })
    },
    mudarPagina(tela) {
      this.telaAtual = tela;
    },
    sair() {
      cookies.remove('token');
      cookies.remove('admin');
      this.logado = cookies.get('token') != null;
      this.user.username = '';
      this.user.senha = '';
    }
  }
}

</script>

<style scoped>
#divPrincipal {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  font-size: 20px;
  color: #0b4d75;
  margin: -10px;
}

#header {
  margin: 0px;
  margin-top: -10px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  position: static;
  color: #0b4d75;
  border-radius: 15px;
  background-color: whitesmoke;
  height: 80px;
  width: 100%;
}

#login {
  background-color: rgb(230, 243, 255);
  display: flex;
  width: 34%;
  max-width: 500px;
  margin-top: 100px;
  align-items: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  font-size: 20px;
  padding: 20px;
  color: #0b4d75;
  border-radius: 20px;
}

.img {
  height: 170px;
  width: 180px;
  padding: 10px;
}

.logoInicial {
  height: 35px;
  width: 36.5px;
  margin-top: 3.5px;
}

.headerImg {
  margin-top: 18px;
  margin-right: 25px;
  margin-left: 25px;
  cursor: pointer;
}

.headerButton {
  margin-top: 25px;
  margin-right: 25px;
  font-weight: bolder;
  cursor: pointer;
}

#logar {
  margin-top: 50px;
  width: 60%;
  max-width: 170px;
  background-color: white;
  color: #0b4d75;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
  padding: 5px;
  cursor: pointer;
}

.btn:hover,
input:hover {
  opacity: 0.85;
  transition: all 0.25s;
}

input {
  width: 85%;
  background-color: white;
  color: #0b4d75;
  font-size: 20px;
  margin-top: 25px;
  border: 0;
  text-align: center;
  border-radius: 15px;
  padding: 8px;
  cursor: text;
}

.aviso {
  color: red;
  background-color: rgb(255, 210, 210);
  padding: 7px;
  border-radius: 10px;
  font-size: 20px;
}

.token {
  color: green;
  background-color: rgb(210, 255, 210);
  padding: 7px;
  border-radius: 10px;
}

.dropdown {
  margin-top: 25px;
  float: left;
  overflow: hidden;
}

.dropdown-content,
.opcoes-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  font-size: 22px !important;
}

.dropdown-content {
  width: 150px;
  text-align: start;
}

.opcoes-content {
  width: 220px;
  text-align: end;
}

.dropdown-content .headerButton,
.opcoes-content .headerButton {
  margin: 5px;
}

.dropdown:hover .dropdown-content,
.dropdown:hover .opcoes-content {
  display: flex;
  flex-direction: column;
}
</style>

