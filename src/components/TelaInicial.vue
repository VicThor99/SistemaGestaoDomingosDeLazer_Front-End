<template>
    <div id="principal">
        <div id="telaInicial">
            <h1>Seja bem-vindo {{user}}!</h1>
            <br/>
            <h2>Este é o novo sistema de Paraisópolis</h2>

        </div>
    </div>
</template>

<script>
export default {

    name: 'TelaInicial',
    props:{
        user: String
    },
    data() {
        return {

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
    text-align: center;
    flex-direction: column;
    font-size: 35px;
}

#telaInicial {
    background-color: rgb(230, 243, 255);
    width: 99%;
    height: 805px;
    margin-top: 15px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
}
</style>