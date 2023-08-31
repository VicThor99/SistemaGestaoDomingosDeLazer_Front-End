<template>
    <div id="principal">
        <div id="alunos">
            <div style="margin-left: 30px; display: flex; justify-content: flex-start;">
                <h2 style="width: 90%">Cadastro de Alunos</h2>
                <button
                    style="margin-top: 20px; opacity: 0.9; width: 9%; border-radius: 10px; background-color: white; color:  #0b4d75; padding: 5px; cursor: pointer; height: 50px; font-size: 20px;"
                    @click="recarregaLista">
                    Recarregar
                </button>
            </div>
            <hr style="opacity: 0.2; width: 99.86%;" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CadastroAlunos',
    components: {
    },
    data() {
        return {
            headers: [
                { label: 'Nome', field: 'nome' },
                { label: 'Código', field: 'codigo' },
                { label: 'Série', field: 'serie' },
                { label: 'Sala', field: 'sala', },
                { label: 'Data de Nascimento', field: 'nascimento' }
            ],
            alunos: []
        }
    },
    methods: {
        recarregaLista() {
            axios.get('http://192.168.15.40:8080/api/alunos/')
                .then(res => {
                    this.alunos = res.data;
                    console.log(this.alunos)
                })
                .catch(rej => console.log(rej));
        }
    }

}
</script>

<style scoped>
#principal {
    margin-top: 70px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
}

#alunos {
    background-color: rgb(230, 243, 255);
    width: 98%;
    height: 795px;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 20px;
}
</style>