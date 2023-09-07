<template>
    <div id="principal">
        <div id="salas">
            <h2 style="margin-left: 30px;">Cadastro de Salas</h2>
            <hr style="opacity: 0.2; width: 99.86%;"/>

        </div>
    </div>
</template>

<script>
export default {

    name: 'CadastroSalas',
    data() {
        return {

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
    text-align: left;
    flex-direction: column;
}

#salas {
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