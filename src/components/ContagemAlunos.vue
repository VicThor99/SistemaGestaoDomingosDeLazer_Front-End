<template>
    <div id="principal">
        <div id="contagemAlunos">
            <h2 style="text-align: center;">Contagem de alunos</h2>
            <hr style="opacity: 0.2; width: 99.86%;" />
            <div style="height: 100%; margin-top: 10px;">
                <div
                    style="display: flex; justify-content: center; flex-direction: column; align-items: center; color:  #0b4d75;">
                    <div style="border: 1px solid #0b4d75; width: 100%; display: flex; justify-content: space-around; flex-direction: row;" v-for="sala in salas">
                        <div style="border: 1px solid #0b4d75; padding: 5px; width: 25%;">
                            <h3>{{ sala.sala }}</h3>
                        </div>
                        <div style="border: 1px solid #0b4d75; padding: 5px; width: 25%;">
                            <h3>{{ sala.serie }}</h3>
                        </div>
                        <div style="border: 1px solid #0b4d75; padding: 5px; width: 50%;">
                            <h3>{{ sala.quantidadeAlunos }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';

export default {

    name: 'ContagemAlunos',
    data() {
        return {
            salas: null,
            token: cookies.get('token'),
            escola: cookies.get('escolaEscolhida')
        }
    },
    methods: {
        async carregarAlunosPorSala(){
            await axios.get('https://api.domingodelazer.click/api/alunos/contagem/' + this.escola,
                { headers: { 'Authorization': this.token } })
            .then(res => {
                this.salas = res.data;
            })
        }
    },
    created() {
        this.carregarAlunosPorSala();
        this.timer = setInterval(this.carregarAlunosPorSala(), 10000);
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

#contagemAlunos {
    background-color: rgb(230, 243, 255);
    width: 98%;
    height: 100%;
    font-size: 20px;
    padding: 10px;
    margin: 20px;
    color: #0b4d75;
    border-radius: 5px;
    display: flex;
    text-align: left;
    flex-direction: column;
}

</style>