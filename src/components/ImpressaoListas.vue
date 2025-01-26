<template>
    <div id="principal">
        <div id="impressaoListas" v-if="!this.carregando">
            <h2 style="margin-left: 30px;">Imprimir Listas</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center; align-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%;">
                <div style="display: flex; justify-content: space-between; width: 1000px;">
                    <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Domingo</p>
                    <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Série</p>
                    <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Sala</p>
                    <p style="color: #5a5a5a; margin-left: 5px; width: 240px;">Alunos Ativos</p>
                </div>
                <div style="display: flex; justify-content: space-between; width: 1000px;">
                    <v-select v-model="parametros.domingo" :items="['', 'A', 'B', 'C', 'D']" variant="solo-filled"
                        style="width: 240px; height: 60px; font-size:30px; margin-right: 20px;"></v-select>

                    <v-select v-model="parametros.serie" :items="this.series" variant="solo-filled"
                        style="width: 240px; height: 60px; font-size:30px; margin-right: 20px;"></v-select>

                    <v-select v-model="parametros.sala" :items="this.salas" variant="solo-filled"
                        style="width: 240px; height: 60px; font-size:30px; margin-right: 20px;"></v-select>

                    <v-switch color="info" v-model="parametros.ativos" hide-details inset style="width: 250px;"></v-switch>
                </div>
                <br />
                <button id="btnProcesso" @click="imprimir()"><i class="mdi mdi-printer"></i> Imprimir</button>
            </div>
        </div>
        <div id="impressaoListas" v-if="this.carregando">
            <h2 style="margin-left: 30px;">Imprimir Listas</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div
                style="display: flex; justify-content: center;flex-direction: column;align-items: center;color:  #0b4d75; height: 100%; padding: 20px;">
                <img src="../assets/carregando.gif" v-if="this.carregando">
            </div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';
export default {
    name: 'ImpressaoCrachas',
    data() {
        return {
            carregando: false,
            parametros: {
                ativos: false,
                serie: '',
                sala: '',
                domingo: '',
            },
            series: [''],
            salas: [''],
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida')
        }
    },
    methods: {
        async carregarListas() {
            
            const axSeries = await axios.get('https://api.domingodelazer.click/api/series/listaString/'+ this.escola, { headers: { 'Authorization': this.token } });
            const axSalas = await axios.get('https://api.domingodelazer.click/api/series/listaStringSalas/'+ this.escola, { headers: { 'Authorization': this.token } });
            this.series.push(...axSeries.data);
            this.salas.push(...axSalas.data);
        },
        async imprimir() {
            this.carregando = true;

            await axios.post('https://api.domingodelazer.click/api/jaspers/listas/'+ this.escola, this.parametros, {
                responseType: 'blob',
                headers: { 'Authorization': this.token }
            })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                const complementoNome = this.parametros.domingo ? 'Domingo' + this.parametros.domingo : this.parametros.serie ? this.parametros.serie : this.parametros.sala ? this.parametros.sala : '' + this.parametros.ativos ? 'Ativos' : '';
                link.setAttribute('download', 'Listas' + complementoNome + '.pdf');
                document.body.appendChild(link);
                link.click();
                this.carregando = false;
            })
            .catch(rej => {
                console.log(rej);
                this.carregando = false;
            });
        }
    },
    mounted() {
        this.carregarListas();
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

#impressaoListas {
    background-color: rgb(230, 243, 255);
    width: 98%;
    height: 400px;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 5px;
    display: flex;
    text-align: left;
    flex-direction: column;
}

#btnProcesso {
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 30px;
    background-color: rgba(177, 209, 250, 0.747);
    cursor: pointer
}

#btnProcesso:hover {
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 30px;
    color: white;
    background-color: #0b4d75;
    cursor: pointer
}
</style>