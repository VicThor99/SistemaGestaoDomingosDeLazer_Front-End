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
                                    <p>{{ doma.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ doma.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ doma.risco }}</p>
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
                                    <p>{{ domb.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domb.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ domb.risco }}</p>
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
                                    <p>{{ doms.total }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-check"></i> Aptas</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ doms.aptas }}</p>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: center; flex-direction: column; width: 32%;">
                                <div
                                    style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                    <p><i class="mdi mdi-account-alert"></i> Risco</p>
                                </div>
                                <div
                                    style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                    <p>{{ doms.risco }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="width: 1%;"></div>
                <div style="display: flex; flex-direction: column; width: 66%;">
                    <div style="background-color: white; border-radius: 20px; padding: 10px;">
                        <CanvasJSChart :options="options" :styles="styleOptions" />
                    </div>
                    <div
                        style="display: flex; justify-content: space-around; width: 100%; margin-top: 15px; height: 180px;">
                        <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
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
                                        style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                        <p>08/10/2023</p>
                                    </div>
                                </div>
                                <div style="width: 2%;"></div>
                                <div style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
                                    <div
                                        style="font-size: 25px; border-radius: 20px 20px 0 0; background-color: #0b4d75; opacity: 0.9; color: white">
                                        <p><i class="mdi mdi-calendar-month-outline"></i> Domingo B</p>
                                    </div>
                                    <div
                                        style="font-size: 40pt; border-radius: 0 0 20px 20px; background-color: #c0e2f7; opacity: 0.9; color: #0b4d75">
                                        <p>17/09/2023</p>
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
export default {

    name: 'TelaInicial',
    data() {
        return {
            doma: {
                total: 137,
                aptas: 68,
                risco: 25
            },
            domb: {
                total: 207,
                aptas: 133,
                risco: 82
            },
            doms: {
                total: 344,
                aptas: 201,
                risco: 107
            },
            options: {
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
                data: [{
                    type: "column",
                    name: "Domingo A",
                    showInLegend: true,
                    color: "rgb(60, 100, 260)",
                    dataPoints: [
                        { label: "Fevereiro", y: 236 },
                        { label: "Março", y: 167 },
                        { label: "Abril", y: 189 },
                        { label: "Maio", y: 203 },
                        { label: "Junho", y: 145 },
                        { label: "Agosto", y: 138 },
                        { label: "Setembro", y: 189 },
                        { label: "Outubro", y: 250 },
                        { label: "Novembro", y: 190 }
                    ]
                },
                {
                    type: "column",
                    name: "Domingo B",
                    color: "rgb(120, 160, 230)",
                    showInLegend: true,
                    dataPoints: [
                        { label: "Fevereiro", y: 273 },
                        { label: "Março", y: 184 },
                        { label: "Abril", y: 170 },
                        { label: "Maio", y: 158 },
                        { label: "Junho", y: 194 },
                        { label: "Agosto", y: 213 },
                        { label: "Setembro", y: 201 },
                        { label: "Outubro", y: 252 },
                        { label: "Novembro", y: 189 }
                    ]
                },
                {
                    type: "column",
                    name: "Total",
                    color: "#0B4D75",
                    showInLegend: true,
                    dataPoints: [
                        { label: "Fevereiro", y: 509 },
                        { label: "Março", y: 351 },
                        { label: "Abril", y: 359 },
                        { label: "Maio", y: 361 },
                        { label: "Junho", y: 339 },
                        { label: "Agosto", y: 351 },
                        { label: "Setembro", y: 390 },
                        { label: "Outubro", y: 502 },
                        { label: "Novembro", y: 379 }
                    ]
                }]
            },
            styleOptions: {
                width: "100%",
                height: "361px"
            }

        }
    },
    setup() {
        carregar();

        function carregar() {

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