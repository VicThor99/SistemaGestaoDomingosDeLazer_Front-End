<template>
    <div id="principal">
        <div id="telaInicial">
            <div style="width: 100%; margin: 20px; display: flex; justify-content: space-around;">
                <div style="display: flex; justify-content: center; flex-direction: column; width: 32.5%;">
                    <div style="display: flex; justify-content: center; flex-direction: column ; margin-bottom: 10px; ">
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 20px 20px 0px 0px; background-color: #0b4d75; ">
                            <p style="color: white; font-size: 30px;">Domingo A</p>
                        </div>
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 20px 20px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account"></i> Total</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoa.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoa.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingoa.risco }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; flex-direction: column ; margin-bottom: 10px;">
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 20px 20px 0px 0px; background-color: #0b4d75; ">
                            <p style="color: white; font-size: 30px;">Domingo B</p>
                        </div>
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 20px 20px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account"></i> Total</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingob.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingob.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingob.risco }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; flex-direction: column ;">
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 20px 20px 0px 0px; background-color: #0b4d75; ">
                            <p style="color: white; font-size: 30px;">Todos Domingos</p>
                        </div>
                        <div
                            style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 20px 20px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account"></i> Total</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingos.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingos.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domingos.risco }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="width: 1%;"></div>
                <div style="display: flex; flex-direction: column; width: 66%;">
                    <div style="background-color: white; border-radius: 20px; padding: 10px;">
                        <div id="chartContainer" style="height: 361px; width: 100%;"></div>
                    </div>
                    <div
                        style="display: flex; justify-content: space-around; width: 100%; margin-top: 15px; height: 180px;">
                        <div
                            style="display: flex; justify-content: center; flex-direction: column; width: 100%; height: 180px;">
                            <div
                                style="display: flex; justify-content: space-around; width: 100%; border-radius: 20px 20px 0px 0px; background-color: #0b4d75; ">
                                <p style="color: white; font-size: 30px;">Próximas Datas</p>
                            </div>
                            <div
                                style="display: flex; justify-content: space-around; width: 100%; border-radius: 0px 0px 20px 20px; background-color: #dbe7ee; border: 1px solid #0b4d75; padding: 10px 10px 10px 10px;">
                                <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
                                    <div
                                        style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                        <p><i class="mdi mdi-calendar-month-outline"></i> Domingo A</p>
                                    </div>
                                    <div
                                        style="font-size: 33pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                        <p>{{ this.proximaDataDomA }}</p>
                                    </div>
                                </div>
                                <div style="width: 2%;"></div>
                                <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
                                    <div
                                        style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                        <p><i class="mdi mdi-calendar-month-outline"></i> Domingo B</p>
                                    </div>
                                    <div
                                        style="font-size: 33pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                        <p>{{ this.proximaDataDomB }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CanvasJS from '../canvas.js';

export default {

    name: 'TelaInicial',
    data() {
        return {
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
            domingos: {
                total: 0,
                aptas: 0,
                risco: 0
            },
            proximaDataDomA: '',
            proximaDataDomB: ''

        }
    },
    methods: {
        async carregarDashboard() {

            var dadosGraficoA = [];
            var dadosGraficoB = [];
            var dadosGraficoTotal = [];

            const res = await axios.get('http://localhost:8080/api/dashboard/');

            this.domingoa = res.data.domingoa;
            this.domingob = res.data.domingob;
            this.domingos = res.data.domingos;

            dadosGraficoA = res.data.dadosGraficoA;
            dadosGraficoB = res.data.dadosGraficoB;
            dadosGraficoTotal = res.data.dadosGraficoTotal;

            this.proximaDataDomA = res.data.proximaDataDomA;
            this.proximaDataDomB = res.data.proximaDataDomB;

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2",
                title: {
                    text: "Presenças em cada mês"
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
                        showInLegend: true,
                        color: "rgb(60, 100, 260)",
                        dataPoints: dadosGraficoA
                    },
                    {
                        type: "column",
                        name: "Domingo B",
                        color: "rgb(120, 160, 230)",
                        showInLegend: true,
                        dataPoints: dadosGraficoB
                    },
                    {
                        type: "column",
                        name: "Total",
                        color: "#0B4D75",
                        showInLegend: true,
                        dataPoints: dadosGraficoTotal
                    }
                ]
            });

            chart.render();
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
    font-size: 35px;
}

#telaInicial {
    background-color: rgb(230, 243, 255);
    width: 99%;
    margin-top: 15px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 20px;
    display: flex;
}
</style>