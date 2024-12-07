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

    <div v-if="logado && !escolaEscolhida" id="divPrincipal">
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <div style="display: flex; justify-content: space-around;">
          <div v-for="e in escolas" :key="e">
            <button id="selecionar" @click="selecionarEscola(e.idEscola)">{{ e.escola }}</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="logado && escolaEscolhida" id="divPrincipal">
      <header id="header" style="font-size: 22px; box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);">
        <div style="width: 70%; height: 100%; display: flex; justify-content: flex-start;">
          <a @click="mudarPagina('TelaInicial')" class="headerImg"><img class="logoInicial" alt="Logo da Seara"
              src="./assets/logo.png"></a>
          <a class="headerButton" @click="abrirOuFecharCadastros">Cadastros <i class="mdi mdi-menu-down"></i></a>
          <a class="headerButton" @click="abrirOuFecharPresencas">Presenças <i class="mdi mdi-menu-down"></i></a>
          <a class="headerButton" @click="abrirOuFecharImpressoes">Impressões <i class="mdi mdi-menu-down"></i></a>
        </div>
        <div style="width: 30%;height: 100%; margin-top: 25px;display: flex; justify-content: flex-end;">
          <div style="width: 300px; text-align: right;">
            <a class="headerButton" @click="abrirOuFecharOpcoes">Olá, {{ username }} <i class="mdi mdi-cog"> </i><i
                class="mdi mdi-menu-down"></i></a>
          </div>
        </div>
      </header>
      <div
        style="margin: -15px -20px 0px 90px; border-radius: 0px 0px 5px 5px; width: 856px; height: 45px; background-color: whitesmoke; display: flex; justify-content: start; align-self: start;"
        v-if="cadastros">
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('Alunos')"><i
            class="mdi mdi-account-school"></i> Alunos</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('Datas')"><i
            class="mdi mdi-calendar-heart"></i> Datas</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('Salas')"><i
            class="mdi mdi-google-classroom"></i> Séries</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('Usuarios')"><i
            class="mdi mdi-account-multiple-outline"></i> Usuários</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('ArquivosAluno')"><i
            class="mdi mdi-file-upload"></i> Arquivos do Aluno</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('CadastroEmMassa')"><i
            class="mdi mdi-group"></i> Cadastros em Massa</a>
      </div>
      <div
        style="margin: -15px -20px 0px 250px; border-radius: 0px 0px 5px 5px; width: 519px; height: 45px; background-color: whitesmoke; display: flex; justify-content: start; align-self: start;"
        v-if="registroPresencas">
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('RegistroPresencas')"><i
            class="mdi mdi-calendar-plus"></i> Registro (Leitor)</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('PresencaCelular')"><i
            class="mdi mdi-cellphone"></i> Registro (Celular)</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('CorrecaoPresenca')"><i
            class="mdi mdi-calendar-sync"></i> Correção</a>
      </div>
      <div
        style="margin: -15px -20px 0px 410px; border-radius: 0px 0px 5px 5px; width: 491px; height: 45px; background-color: whitesmoke; display: flex; justify-content: start; align-self: start;"
        v-if="impressoes">
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('ImpressaoMatriculas')"><i
            class="mdi mdi-file-document-edit"></i> Matrículas</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('ImpressaoListas')"><i
            class="mdi mdi-view-list"></i> Listas</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('ImpressaoCrachas')"><i
            class="mdi mdi-badge-account-horizontal"></i> Crachás</a>
        <a style="margin-top: 10px; margin-left: 15px; cursor: pointer;" @click="mudarPagina('ImpressaoProtocolos')"><i
            class="mdi mdi-ticket-account"></i> Protocolos</a>
      </div>

      <div
        style="margin: -15px 15px 0px 0px; border-radius: 0px 0px 5px 5px;width: 430px; height: 45px; background-color: whitesmoke; display: flex; justify-content: end;  align-self: end;"
        v-if="opcoes">
        <a style="margin-top: 10px; margin-right: 15px; cursor: pointer;" @click="download"><i
            class="mdi mdi-file-excel"></i> Exportar Excel</a>
        <a style="margin-top: 10px; margin-right: 15px; cursor: pointer;" @click="mudarPagina('ImportExcel')"><i
            class="mdi mdi-file-excel-outline"></i> Importar Excel</a>
        <a style="margin-top: 10px; margin-right: 15px; cursor: pointer;" @click="sair"><i
            class="mdi mdi-exit-to-app"></i> Sair</a>
      </div>
      <TelaInicial :user="user.username" v-if="telaAtual === 'TelaInicial'" />
      <CadastroAlunos v-if="telaAtual === 'Alunos'" />
      <CadastroDatas v-if="telaAtual === 'Datas'" />
      <CadastroSalas v-if="telaAtual === 'Salas'" />
      <CadastroUsuarios v-if="telaAtual === 'Usuarios'" />
      <ImportExcel v-if="telaAtual === 'ImportExcel'" />
      <RegistroPresencas v-if="telaAtual === 'RegistroPresencas'" />
      <CorrecaoPresencas v-if="telaAtual === 'CorrecaoPresenca'" />
      <ImpressaoCrachas v-if="telaAtual === 'ImpressaoCrachas'" />
      <ImpressaoListas v-if="telaAtual === 'ImpressaoListas'" />
      <ImpressaoMatriculas v-if="telaAtual === 'ImpressaoMatriculas'" />
      <ImpressaoProtocolos v-if="telaAtual === 'ImpressaoProtocolos'" />
      <CadastroEmMassa v-if="telaAtual === 'CadastroEmMassa'" />
      <ArquivosAluno v-if="telaAtual === 'ArquivosAluno'" />
      <PresencaCelular v-if="telaAtual === 'PresencaCelular'"/>
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
import CorrecaoPresencas from './components/CorrecaoPresencas.vue';
import RegistroPresencas from './components/RegistroPresencas.vue';
import ImpressaoCrachas from './components/ImpressaoCrachas.vue';
import ImpressaoListas from './components/ImpressaoListas.vue';
import ImpressaoMatriculas from './components/ImpressaoMatriculas.vue';
import ImpressaoProtocolos from './components/ImpressaoProtocolos.vue';
import CadastroEmMassa from './components/CadastrosEmMassa.vue';
import ArquivosAluno from './components/ArquivosAluno.vue';
import PresencaCelular from './components/PresencaCelular.vue';

export default {
  name: 'App',
  components: {
    TelaInicial,
    CadastroAlunos,
    CadastroDatas,
    CadastroSalas,
    CadastroUsuarios,
    ImportExcel,
    CorrecaoPresencas,
    RegistroPresencas,
    ImpressaoCrachas,
    ImpressaoListas,
    ImpressaoProtocolos,
    ImpressaoMatriculas,
    CadastroEmMassa,
    ArquivosAluno,
    PresencaCelular
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
      escolaEscolhida: cookies.get('escolaEscolhida') !== null,
      telaAtual: 'TelaInicial',
      cadastros: false,
      registroPresencas: false,
      impressoes: false,
      opcoes: false,
      token: cookies.get('token'),
      escolas: [],
      escola: cookies.get('escolaEscolhida')
    }
  },
  methods: {
    async submit() {
      await axios.post('https://www.domingodelazer.click:8443/api/auth', this.user)
        .then(res => {
          var date = new Date();
          date.setUTCMinutes(date.getUTCMinutes() + 60);
          cookies.set('token', 'Bearer ' + res.data.token, date);
          cookies.set('admin', res.data.admin, date);
          cookies.set('user_name', res.data.username, date);
          this.username = cookies.get('user_name');
          this.logado = cookies.get('token') != null;
          this.erro = null;
          this.telaAtual = 'TelaInicial';
          axios.get('https://www.domingodelazer.click:8443/api/access/' + this.username, {
            headers: {
              'Authorization': 'Bearer ' + res.data.token
            }
          })
            .then(res => {
              if (res.data.length === 1) {
                cookies.set('escolaEscolhida', res.data[0].idEscola, date);
                this.escolaEscolhida = true;
              } else {
                this.escolas = res.data;
              }
            })
            .catch(rej => {
              console.log(rej)
              cookies.remove('token');
              cookies.remove('admin');
              cookies.remove('user_name');
              cookies.remove('escola');
              this.logado = false;
              this.erro = 'Algo de errado ocorreu, por favor tente novamente';
            })
        })
        .catch(rej => {
          console.log(rej)
          cookies.remove('token');
          cookies.remove('admin');
          cookies.remove('user_name');
          cookies.remove('escola');
          this.escolaEscolhida = false;
          this.logado = false;
          this.erro = 'Usuário e senha não compatíveis';
        })
    },
    download() {
      axios.get('https://www.domingodelazer.click:8443/api/alunos/export/' + this.escola, {
        headers: {
          'Authorization': this.token
        }
      })
        .then(res => {
          this.listaCriancas = [];
          this.listaCriancas.push({ "codigo": "Código", "nome": "Nome", "sexo": "Sexo", "idade": "Idade", "nascimento": "Data de Nascimento", "sapato": "Calçado", "calca": "Calça", "camisa": "Camisa", "serie": "Série", "sala": "Sala" });
          res.data.forEach((element) => this.listaCriancas.push(element));
          const data = utils.json_to_sheet(this.listaCriancas, { skipHeader: true });
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
      this.opcoes = false;
      this.cadastros = false;
      this.impressoes = false;
      this.registroPresencas = false;
    },
    sair() {
      cookies.remove('token');
      cookies.remove('admin');
      cookies.remove('user_name');
      cookies.remove('escola');
      this.escolaEscolhida = false;
      this.logado = cookies.get('token') != null;
      this.user.username = '';
      this.user.senha = '';
      this.opcoes = false;
      this.cadastros = false;
      this.impressoes = false;
      this.registroPresencas = false;
    },
    abrirOuFecharCadastros() {
      this.opcoes = false;
      this.impressoes = false;
      this.registroPresencas = false;
      this.cadastros = !this.cadastros;
    },
    abrirOuFecharPresencas() {
      this.opcoes = false;
      this.cadastros = false;
      this.impressoes = false;
      this.registroPresencas = !this.registroPresencas;
    },
    abrirOuFecharOpcoes() {
      this.cadastros = false;
      this.impressoes = false;
      this.registroPresencas = false;
      this.opcoes = !this.opcoes;
    },
    abrirOuFecharImpressoes() {
      this.opcoes = false;
      this.cadastros = false;
      this.registroPresencas = false;
      this.impressoes = !this.impressoes;
    },
    selecionarEscola(id) {
      var date = new Date();
      date.setUTCMinutes(date.getUTCMinutes() + 60);
      cookies.set('escolaEscolhida', id, date);
      this.escolaEscolhida = true;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
  padding: 5px;
  cursor: pointer;
}

#selecionar {
  width: 250px;
  background-color: white;
  color: #0b4d75;
  font-size: 30px;
  border: 0;
  border-radius: 5px;
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
  border-radius: 5px;
  padding: 8px;
  cursor: text;
}

.aviso {
  color: red;
  background-color: rgb(255, 210, 210);
  margin-top: 10px;
  padding: 7px;
  border-radius: 5px;
  font-size: 20px;
}

.token {
  color: green;
  background-color: rgb(210, 255, 210);
  padding: 7px;
  border-radius: 5px;
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
  border-radius: 0px 0px 5px 5px;
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

