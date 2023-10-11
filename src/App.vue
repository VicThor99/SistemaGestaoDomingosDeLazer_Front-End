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
      <header id="header" style="font-size: 22px; box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);">
        <div style="width: 70%; height: 100%; display: flex; justify-content: flex-start;">
          <a @click="mudarPagina('TelaInicial')" class="headerImg"><img class="logoInicial" alt="Logo da Seara"
              src="./assets/logo.png"></a>
          <a class="headerButton" @click="abrirOuFecharCadastros">Cadastros <i class="mdi mdi-menu-down"></i></a>
        </div>
        <div style="width: 30%;height: 100%; margin-top: 25px;display: flex; justify-content: flex-end;">
          <div style="width: 300px; text-align: right;">
            <a class="headerButton" @click="abrirOuFecharOpcoes">Olá, {{ username }} <i class="mdi mdi-cog"> </i><i
                class="mdi mdi-menu-down"></i></a>
          </div>
        </div>
      </header>
      <div
        style="margin: -15px -20px 0px 73px; border-radius:0px 0px 15px 15px; width: 460px; height: 50px; background-color: whitesmoke; display: flex; justify-content: start; align-self: start;"
        v-if="cadastros">
        <a style="margin-top: 10px; margin-left: 20px; cursor: pointer;" @click="mudarPagina('Alunos')"><i
            class="mdi mdi-account-school"></i> Alunos</a>
        <a style="margin-top: 10px; margin-left: 20px; cursor: pointer;" @click="mudarPagina('Datas')"><i
            class="mdi mdi-calendar-heart"></i> Datas</a>
        <a style="margin-top: 10px; margin-left: 25px; cursor: pointer;" @click="mudarPagina('Salas')"><i
            class="mdi mdi-google-classroom"></i> Séries</a>
        <a style="margin-top: 10px; margin-left: 25px; cursor: pointer;" @click="mudarPagina('Usuarios')"><i
            class="mdi mdi-account-multiple-outline"></i> Usuários</a>
      </div>

      <div
        style="margin: -15px 15px 0px 0px; border-radius:0px 0px 15px 15px;width: 455px; height: 50px; background-color: whitesmoke; display: flex; justify-content: end;  align-self: end;"
        v-if="opcoes">
        <a style="margin-top: 10px; margin-right: 25px; cursor: pointer;" @click="download"><i
            class="mdi mdi-file-excel"></i> Exportar Excel</a>
        <a style="margin-top: 10px; margin-right: 25px; cursor: pointer;" @click="mudarPagina('ImportExcel')"><i
            class="mdi mdi-file-excel-outline"></i> Importar Excel</a>
        <a style="margin-top: 10px; margin-right: 20px; cursor: pointer;" @click="sair"><i
            class="mdi mdi-exit-to-app"></i> Sair</a>
      </div>
      <TelaInicial :user="user.username" v-if="telaAtual === 'TelaInicial'" />
      <CadastroAlunos v-if="telaAtual === 'Alunos'" />
      <CadastroDatas v-if="telaAtual === 'Datas'" />
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
import CadastroDatas from './components/Datas.vue';
import CadastroSalas from './components/Salas.vue';
import CadastroUsuarios from './components/Usuarios.vue';
import ImportExcel from './components/ImportaExcel.vue';

export default {
  name: 'App',
  components: {
    TelaInicial,
    CadastroAlunos,
    CadastroDatas,
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
      erro: null,
      username: cookies.get('user_name'),
      listaCriancas: [],
      logado: cookies.get('token') !== null,
      telaAtual: 'TelaInicial',
      cadastros: false,
      opcoes: false
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
          cookies.set('user_name', res.data.username, date);
          this.username = cookies.get('user_name');
          this.logado = cookies.get('token') != null;
          this.erro = null;
          this.telaAtual = 'TelaInicial';
        })
        .catch(rej => {
          console.log(rej)
          cookies.remove('token');
          cookies.remove('admin');
          cookies.remove('user_name');
          this.logado = cookies.get('token') != null;
          this.erro = 'Usuário e senha não compatíveis';
        })
    },
    download() {
      axios.get('http://localhost:8080/api/alunos/sacolinha')
        .then(res => {
          this.listaCriancas = [];
          this.listaCriancas.push({ "codigo":"Código",	"nome":"Nome",	"idade":"Idade", "nascimento":"Data de Nascimento", "sapato":"Calçado", "calca":"Calça",	"camisa":"Camisa",	"serie":"Série",	"sala":"Sala" });
          res.data.forEach((element) => this.listaCriancas.push(element));
          const data = utils.json_to_sheet(this.listaCriancas, {skipHeader: true});
          const wb = utils.book_new();
          utils.book_append_sheet(wb, data, 'Dados para Sacolinha');
          writeFile(wb, 'ExportSacolinhaDeNatal.xlsx');
        })
        .catch(rej => {
          this.erro = rej;
        })
    },
    mudarPagina(tela) {
      this.telaAtual = tela;
      this.cadastros = false;
      this.opcoes = false;
    },
    sair() {
      cookies.remove('token');
      cookies.remove('admin');
      cookies.remove('user_name');
      this.logado = cookies.get('token') != null;
      this.user.username = '';
      this.user.senha = '';
      this.cadastros = false;
      this.opcoes = false;
    },
    abrirOuFecharCadastros() {
      this.opcoes = false;
      this.cadastros = !this.cadastros;
    },
    abrirOuFecharOpcoes() {
      this.cadastros = false;
      this.opcoes = !this.opcoes;
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
  margin-top: 10px;
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

