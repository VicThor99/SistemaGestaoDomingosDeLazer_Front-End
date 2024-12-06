<template>
    <div id="principal">
        <div id="telaInicial" v-if="this.lista == null">
            <div style="width: 100%; margin: 15px; display: flex; flex-direction: column;">
                <div style="display: flex; flex-direction: column; width: 100%; margin-bottom: 5px;">
                    <div style="background-color: #E4EDF7; border-radius: 5px; padding: 10px;border: #0b4d75 1px solid;">
                        <div id="chartContainer" style="height: 360px; width: 100%;"></div>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 5px;">
                    <div style="display: flex; justify-content: space-between; flex-direction: column ; width: 49.5%  ">
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; ">
                            <p style="color: white; font-size: 30px;">Domingo A</p>
                        </div>
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 5px 5px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account"></i> Total</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoa.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                                @click="carregarLista('DomAAptas')">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoa.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                                @click="carregarLista('DomARisco')">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoa.risco }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; flex-direction: column ; width: 49.5%  ">
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; ">
                            <p style="color: white; font-size: 30px;">Domingo B</p>
                        </div>
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 5px 5px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account"></i> Total</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingob.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                                @click="carregarLista('DomBAptas')">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingob.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                                @click="carregarLista('DomBRisco')">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingob.risco }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 5px;">
                    <div style="display: flex; justify-content: center; flex-direction: column ; width: 49.5%  ">
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; ">
                            <p style="color: white; font-size: 30px;">Domingo C</p>
                        </div>
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 5px 5px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account"></i> Total</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoc.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                                @click="carregarLista('DomCAptas')">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoc.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                                @click="carregarLista('DomCRisco')">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoc.risco }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; flex-direction: column ;width: 49.5%  ">
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; ">
                            <p style="color: white; font-size: 30px;">Domingo D</p>
                        </div>
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 5px 5px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account"></i> Total</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingod.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                                @click="carregarLista('DomDAptas')">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingod.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                                @click="carregarLista('DomDRisco')">
                                <div
                                    style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingod.risco }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; flex-direction: column ; margin-bottom: 5px;">
                    <div
                        style="display: flex; justify-content: space-around; width: 100%; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; ">
                        <p style="color: white; font-size: 30px;">Todos Domingos</p>
                    </div>
                    <div
                        style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 5px 5px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                        <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                            <div
                                style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                <p><i class="mdi mdi-account"></i> Total</p>
                            </div>
                            <div
                                style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                <p>{{ domingos.total }}</p>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                            @click="carregarLista('TodosAptos')">
                            <div
                                style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                <p><i class="mdi mdi-account-check"></i> Aptas</p>
                            </div>
                            <div
                                style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                <p>{{ domingos.aptas }}</p>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: center; flex-direction: column; width: 32%; cursor: pointer;"
                            @click="carregarLista('TodosRisco')">
                            <div
                                style="font-size: 25px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                <p><i class="mdi mdi-account-alert"></i> Risco</p>
                            </div>
                            <div
                                style="font-size: 40pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                <p>{{ domingos.risco }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; width: 100%; margin-bottom: 5px;">
                    <div
                        style="display: flex; justify-content: space-around; width: 100%; margin-top: 10px;">
                        <div
                            style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
                            <div
                                style="display: flex; justify-content: space-around; width: 100%; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; ">
                                <p style="color: white; font-size: 30px;">Próximas Datas</p>
                            </div>
                            <div
                                style="display: flex; justify-content: space-between; flex-direction: column; width: 100%; border-radius: 0px 0px 5px 5px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                                <div style="display: flex; justify-content: space-between; width: 100%;  margin-bottom: 10px;">
                                    <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
                                        <div
                                            style="font-size: 30px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                            <p><i class="mdi mdi-calendar-month-outline"></i> Domingo A</p>
                                        </div>
                                        <div
                                            style="font-size: 35pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                            <p>{{ this.proximaDataDomA }}</p>
                                        </div>
                                    </div>
                                    <div style="width: 2%;"></div>
                                    <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
                                        <div
                                            style="font-size: 30px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                            <p><i class="mdi mdi-calendar-month-outline"></i> Domingo B</p>
                                        </div>
                                        <div
                                            style="font-size: 35pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                            <p>{{ this.proximaDataDomB }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex; justify-content: space-between; width: 100%; ">
                                    <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
                                        <div
                                            style="font-size: 30px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                            <p><i class="mdi mdi-calendar-month-outline"></i> Domingo C</p>
                                        </div>
                                        <div
                                            style="font-size: 35pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                            <p>{{ this.proximaDataDomC }}</p>
                                        </div>
                                    </div>
                                    <div style="width: 2%;"></div>
                                    <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
                                        <div
                                            style="font-size: 30px; border-radius: 5px 5px 0px 0px; background-color: #0b4d75; opacity: 0.9; color: white">
                                            <p><i class="mdi mdi-calendar-month-outline"></i> Domingo D</p>
                                        </div>
                                        <div
                                            style="font-size: 35pt; border-radius: 0px 0px 5px 5px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                            <p>{{ this.proximaDataDomD }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="listagemDashboard" v-if="this.lista != null">
            <div style="margin: 0px 0px 10px 10px; display: flex; justify-content: flex-start;">
                <div style=" display: flex; justify-content: flex-start; width: 60%;">
                    <a style="font-size: 25pt; margin-right: 10px; cursor: pointer;" @click="voltar"><i
                            class="mdi mdi-chevron-left"></i> </a>
                    <h2 style="margin-top: 3px;">Listagem {{ tituloListagem }}</h2>
                </div>
                <input id="pesquisa" type="text" placeholder="Pesquisa" v-model="search" />
            </div>
            <hr style="opacity: 0.2; width: 99.86%; margin-bottom: 10px;" />
            <v-data-table items-per-page="11" :headers="headers" :items="lista" style="padding: 5px 10px 10px 10px;"
                :search="search" class="elevation-1" />
        </div>
    </div>
</template>

<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
</script>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';
import CanvasJS from '../canvas.js';

export default {

    name: 'TelaInicial',
    data() {
        return {
            headers: [
                { title: 'Id', key: 'id', align: 'start', type: Number },
                { title: 'Código', key: 'codigo', align: 'start' },
                { title: 'Nome', key: 'nome', align: 'start' },
                { title: 'Sexo', key: 'sexo', align: 'start' },
                { title: 'Série', key: 'serie', align: 'start' },
                { title: 'Sala', key: 'sala', align: 'start' },
                { title: 'Data de Nascimento', key: 'nascimento', align: 'end' },
            ],
            domingoa: {
                total: 0,
                aptas: 0,
                risco: 0
            },
            domingob: {
                total: 0,
                aptas: 0,
                risco: 0
            },
            domingoc: {
                total: 0,
                aptas: 0,
                risco: 0
            },
            domingod: {
                total: 0,
                aptas: 0,
                risco: 0
            },
            domingos: {
                total: 0,
                aptas: 0,
                risco: 0
            },
            proximaDataDomA: '',
            proximaDataDomB: '',
            proximaDataDomC: '',
            proximaDataDomD: '',
            lista: null,
            tituloListagem: '',
            search: '',
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida')
        }
    },
    methods: {
        async carregarDashboard() {

            var dadosGraficoA = [];
            var dadosGraficoB = [];
            var dadosGraficoC = [];
            var dadosGraficoD = [];

            const res = await axios.get('http://3.95.225.147:8080/api/dashboard/' + this.escola, {
                headers: {
                    Authorization: this.token,
                }
            });

            this.domingoa = res.data.domingoA;
            this.domingob = res.data.domingoB;
            this.domingoc = res.data.domingoC;
            this.domingod = res.data.domingoD;
            this.domingos = res.data.domingos;

            dadosGraficoA = res.data.dadosGraficoA;
            dadosGraficoB = res.data.dadosGraficoB;
            dadosGraficoC = res.data.dadosGraficoC;
            dadosGraficoD = res.data.dadosGraficoD;

            this.proximaDataDomA = res.data.proximaDataDomA;
            this.proximaDataDomB = res.data.proximaDataDomB;
            this.proximaDataDomC = res.data.proximaDataDomC;
            this.proximaDataDomD = res.data.proximaDataDomD;

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: false,
                theme: "light1",
                backgroundColor: "#E4EDF7",
                title: {
                    text: "Presenças por mês",
                    fontFamily:"Times New Roman"
                },
                axisY: {
                    tickLength: 0,
                    title: "Presenças",
                    includeZero: true
                },
                legend: {
                    cursor: "pointer"
                },
                toolTip: {
                    shared: true
                },
                data: [
                    {
                        type: "column",
                        name: "Domingo A",
                        showInLegend: dadosGraficoA !== null,
                        color: "#78A0E6",
                        dataPoints: dadosGraficoA
                    },
                    {
                        type: "column",
                        name: "Domingo B",
                        showInLegend: dadosGraficoB !== null,
                        color: "#2C6F99",
                        dataPoints: dadosGraficoB
                    },
                    {
                        type: "column",
                        name: "Domingo C",
                        showInLegend: dadosGraficoC !== null,
                        color: "#0B4D75",
                        dataPoints: dadosGraficoC
                    },
                    {
                        type: "column",
                        name: "Domingo D",
                        showInLegend: dadosGraficoD !== null,
                        color: "#243B4A",
                        dataPoints: dadosGraficoD
                    }
                ]
            });

            chart.render();
        },
        carregarLista(opcao) {
            switch (opcao) {
                case "DomAAptas":
                    this.tituloListagem = 'Domingo A Aptas';
                    axios.get('http://3.95.225.147:8080/api/dashboard/domAAptas/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "DomARisco":
                    this.tituloListagem = 'Domingo A em Risco';
                    axios.get('http://3.95.225.147:8080/api/dashboard/domARisco/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "DomBAptas":
                    this.tituloListagem = 'Domingo B Aptas';
                    axios.get('http://3.95.225.147:8080/api/dashboard/domBAptas/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "DomBRisco":
                    this.tituloListagem = 'Domingo B em Risco';
                    axios.get('http://3.95.225.147:8080/api/dashboard/domBRisco/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "DomCAptas":
                    this.tituloListagem = 'Domingo C Aptas';
                    axios.get('http://3.95.225.147:8080/api/dashboard/domCAptas/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "DomCRisco":
                    this.tituloListagem = 'Domingo C em Risco';
                    axios.get('http://3.95.225.147:8080/api/dashboard/domCRisco/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "DomDAptas":
                    this.tituloListagem = 'Domingo D Aptas';
                    axios.get('http://3.95.225.147:8080/api/dashboard/domDAptas/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "DomDRisco":
                    this.tituloListagem = 'Domingo D em Risco';
                    axios.get('http://3.95.225.147:8080/api/dashboard/domDRisco/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "TodosAptos":
                    this.tituloListagem = 'Todos Alunos Aptos';
                    axios.get('http://3.95.225.147:8080/api/dashboard/todosAptos/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
                case "TodosRisco":
                    this.tituloListagem = 'Todos Alunos em Risco';
                    axios.get('http://3.95.225.147:8080/api/dashboard/todosRisco/' + this.escola, { headers: { 'Authorization': this.token } })
                        .then(res => this.lista = res.data)
                        .catch(rej => console.log(rej));
                    break;
            }
        },
        voltar() {
            this.lista = null;
            this.carregarDashboard();
        }
    },
    mounted() {
        this.carregarDashboard();
    }
}
</script>

<style scoped>
#principal {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    font-size: 30px;
}

#telaInicial {
    background-color: rgb(230, 243, 255);
    width: 99%;
    margin-top: 15px;
    margin-left: 15px;
    color: #0b4d75;
    border-radius: 5px;
    display: flex;
}

#listagemDashboard {
    background-color: rgb(230, 243, 255);
    height: 795px;
    font-size: 20px;
    padding: 10px;
    margin: 20px 0px 20px 20px;
    color: #0b4d75;
    border-radius: 5px;
}

#pesquisa {
    width: 40%;
    margin-right: 20px;
    padding-left: 15px;
    border-radius: 5px;
    background-color: white;
    opacity: 0.7;
}
</style>