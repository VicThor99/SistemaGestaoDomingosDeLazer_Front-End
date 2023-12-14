<template>
    <div id="principal">
        <div id="cadastroEmMassa">
            <div class="headerTabs">
                <a @click="mudarCadastro('Datas')" class="tab" v-if="this.cadastro !== 'Datas'">Datas</a>
                <p class="tabAcionada" v-if="this.cadastro === 'Datas'">Datas</p>
            </div>
            <div class="conteudo">
                <div v-if="this.cadastro === 'Datas'">
                    <h3 style="color: red">Para os domingos que não forem ser utilizados, apenas não preencha</h3>
                    <div style="display: flex; justify-content: space-between;">
                        <div class="divDomingo">
                            <h3>Domingo A</h3>
                            <div
                                style="height: 100%; width: 280px; display: flex; flex-direction: column; font-size: 15pt;">
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Fevereiro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomAFevereiro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Março: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomAMarco" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Abril: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomAAbril" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Maio: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomAMaio" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Junho: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomAJunho" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Agosto: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomAAgosto" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Setembro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomASetembro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Outubro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomAOutubro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Novembro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomANovembro" />
                                </div>
                            </div>
                        </div>
                        <div class="divDomingo">
                            <h3>Domingo B</h3>
                            <div
                                style="height: 100%; width: 280px; display: flex; flex-direction: column; font-size: 15pt;">
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Fevereiro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBFevereiro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Março: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBMarco" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Abril: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBAbril" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Maio: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBMaio" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Junho: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBJunho" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Agosto: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBAgosto" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Setembro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBSetembro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Outubro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBOutubro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Novembro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomBNovembro" />
                                </div>
                            </div>
                        </div>
                        <div class="divDomingo">
                            <h3>Domingo C</h3>
                            <div
                                style="height: 100%; width: 280px; display: flex; flex-direction: column; font-size: 15pt;">
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Fevereiro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCFevereiro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Março: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCMarco" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Abril: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCAbril" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Maio: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCMaio" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Junho: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCJunho" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Agosto: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCAgosto" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Setembro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCSetembro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Outubro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCOutubro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Novembro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomCNovembro" />
                                </div>
                            </div>
                        </div>
                        <div class="divDomingo">
                            <h3>Domingo D</h3>
                            <div
                                style="height: 100%; width: 280px; display: flex; flex-direction: column; font-size: 15pt;">
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Fevereiro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDFevereiro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Março: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDMarco" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Abril: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDAbril" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Maio: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDMaio" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Junho: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDJunho" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Agosto: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDAgosto" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Setembro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDSetembro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Outubro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDOutubro" />
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    <p style="padding: 5px;">Novembro: </p>
                                    <input type="date"
                                        style="border: 0px; background-color: #f0f3ff; padding: 5px; border-radius: 5px;"
                                        v-model="this.dataDomDNovembro" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style="display: flex; justify-content: center; flex-direction: column; align-items: center; height: 50px; margin-bottom: 10px;">
                        <button id="cadastrar" @click="cadastrarDatas">Cadastrar Datas</button>
                    </div>
                </div>
                <div v-if="this.cadastro === 'Carregando'"
                    style="display: flex; justify-content: center; flex-direction: column; align-items: center; color:  #0b4d75; height: 100%;">
                    <img src="../assets/carregando.gif">
                </div>
                <div v-if="this.cadastro === 'Concluído'"
                    style="display: flex; justify-content: center; flex-direction: column; align-items: center; color:  #0b4d75; height: 100%;">
                    <h1>{{ mensagem }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';


export default {

    name: 'CadastroEmMassa',
    data() {
        return {
            json: {
                datasDomA: [],
                datasDomB: [],
                datasDomC: [],
                datasDomD: []
            },
            dataDomAFevereiro: new Date(),
            dataDomAMarco: new Date(),
            dataDomAAbril: new Date(),
            dataDomAMaio: new Date(),
            dataDomAJunho: new Date(),
            dataDomAAgosto: new Date(),
            dataDomASetembro: new Date(),
            dataDomAOutubro: new Date(),
            dataDomANovembro: new Date(),
            dataDomBFevereiro: new Date(),
            dataDomBMarco: new Date(),
            dataDomBAbril: new Date(),
            dataDomBMaio: new Date(),
            dataDomBJunho: new Date(),
            dataDomBAgosto: new Date(),
            dataDomBSetembro: new Date(),
            dataDomBOutubro: new Date(),
            dataDomBNovembro: new Date(),
            dataDomCFevereiro: new Date(),
            dataDomCMarco: new Date(),
            dataDomCAbril: new Date(),
            dataDomCMaio: new Date(),
            dataDomCJunho: new Date(),
            dataDomCAgosto: new Date(),
            dataDomCSetembro: new Date(),
            dataDomCOutubro: new Date(),
            dataDomCNovembro: new Date(),
            dataDomDFevereiro: new Date(),
            dataDomDMarco: new Date(),
            dataDomDAbril: new Date(),
            dataDomDMaio: new Date(),
            dataDomDJunho: new Date(),
            dataDomDAgosto: new Date(),
            dataDomDSetembro: new Date(),
            dataDomDOutubro: new Date(),
            dataDomDNovembro: new Date(),
            carregando: false,
            cadastro: 'Datas',
            mensagem: '',
            token: cookies.get('token')
        }
    },
    methods: {
        mudarCadastro(cadastro) {
            this.cadastro = cadastro;
        },
        async cadastrarDatas() {
            this.mudarCadastro("Carregando");

            this.json.datasDomA.push(this.dataDomAFevereiro);
            this.json.datasDomA.push(this.dataDomAMarco);
            this.json.datasDomA.push(this.dataDomAAbril);
            this.json.datasDomA.push(this.dataDomAMaio);
            this.json.datasDomA.push(this.dataDomAJunho);
            this.json.datasDomA.push(this.dataDomAAgosto);
            this.json.datasDomA.push(this.dataDomASetembro);
            this.json.datasDomA.push(this.dataDomAOutubro);
            this.json.datasDomA.push(this.dataDomANovembro);

            this.json.datasDomB.push(this.dataDomBFevereiro);
            this.json.datasDomB.push(this.dataDomBMarco);
            this.json.datasDomB.push(this.dataDomBAbril);
            this.json.datasDomB.push(this.dataDomBMaio);
            this.json.datasDomB.push(this.dataDomBJunho);
            this.json.datasDomB.push(this.dataDomBAgosto);
            this.json.datasDomB.push(this.dataDomBSetembro);
            this.json.datasDomB.push(this.dataDomBOutubro);
            this.json.datasDomB.push(this.dataDomBNovembro);

            this.json.datasDomC.push(this.dataDomCFevereiro);
            this.json.datasDomC.push(this.dataDomCMarco);
            this.json.datasDomC.push(this.dataDomCAbril);
            this.json.datasDomC.push(this.dataDomCMaio);
            this.json.datasDomC.push(this.dataDomCJunho);
            this.json.datasDomC.push(this.dataDomCAgosto);
            this.json.datasDomC.push(this.dataDomCSetembro);
            this.json.datasDomC.push(this.dataDomCOutubro);
            this.json.datasDomC.push(this.dataDomCNovembro);

            this.json.datasDomD.push(this.dataDomDFevereiro);
            this.json.datasDomD.push(this.dataDomDMarco);
            this.json.datasDomD.push(this.dataDomDAbril);
            this.json.datasDomD.push(this.dataDomDMaio);
            this.json.datasDomD.push(this.dataDomDJunho);
            this.json.datasDomD.push(this.dataDomDAgosto);
            this.json.datasDomD.push(this.dataDomDSetembro);
            this.json.datasDomD.push(this.dataDomDOutubro);
            this.json.datasDomD.push(this.dataDomDNovembro);

            console.log(this.json);

            await axios.post('http://localhost:8080/api/datas/emMassa', this.json, {
                headers: {
                    'Authorization': this.token
                }
            })
                .then(res => {
                    this.mensagem = res.data;
                    this.mudarCadastro("Concluído");
                })
                .catch(rej => {
                    this.mensagem = rej.data;
                    this.mudarCadastro("Concluído");
                });
        }
    }

}
</script>

<style scoped>
#principal {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

#cadastroEmMassa {
    width: 98.5%;
    height: 100%;
    margin-top: 20px;
    margin-left: 20px;
    color: #0b4d75;
    display: flex;
    text-align: left;
    flex-direction: column;
}

.tab {
    text-align: center;
    height: 40px;
    width: 200px;
    border-radius: 5px 5px 0px 0px;
}

.tab:hover {
    background-color: #1c6b9c;
    cursor: pointer;
}

.tabAcionada {
    background-color: #1c6b9c;
    text-align: center;
    height: 40px;
    width: 200px;
    border-radius: 5px 5px 0px 0px;
    cursor: default;
}

.conteudo {
    background-color: rgb(230, 243, 255);
    display: flex;
    justify-content: center;
    height: 100%;
    font-size: 20pt;
    padding: 20px;
    border-radius: 0px 0px 5px 5px;
    text-align: center;
}

.headerTabs {
    background-color: #0b4d75;
    display: flex;
    justify-content: flex-start;
    color: white;
    height: 40px;
    font-size: 20pt;
    border-radius: 5px 5px 0px 0px;
}

.divDomingo {
    padding: 15px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    border: #0b4d75 1px;
}

#cadastrar {
  margin-top: 25px;
  width: 50%;
  background-color: #0b4d75;
  color: white;
  font-size: 30px;
  border: 0;
  border-radius: 5px;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
  padding: 5px;
  cursor: pointer;
}
</style>