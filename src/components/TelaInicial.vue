<template>
    <div id="principal">
        <div id="telaInicial">
            <div style="width: 100%; margin: 20px">
                <div style="display: flex; justify-content: center; flex-direction: column;">
                    <div style="display: flex; justify-content: space-around;width: 49%;margin-bottom: 20px ;">
                        <v-card title="Crianças cadastradas" :text="criancas" variant="tonal" style="width: 48%; padding: 50px 0; border-radius: 20px;"></v-card>
                        <v-card title="Crianças qualificadas" :text="criancas" variant="tonal" style="width: 48%; padding: 50px 0; border-radius: 20px;"></v-card>
                    </div>
                    <div style="display: flex; justify-content: space-around;width: 49%;">
                        <v-card title="Crianças com risco" :text="criancas" variant="tonal" style="width: 48%; padding: 50px 0; border-radius: 20px;"></v-card>
                        <v-card title="Crianças desqualificadas" :text="criancas" variant="tonal" style="width: 48%; padding: 50px 0; border-radius: 20px;"></v-card>
                    </div>
                </div>
                <div style="width: 1%;"></div>
                <div style="display: flex; justify-content: space-around;width: 49%;">

                </div>
            </div>
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
            criancas:26
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
    margin-top: 15px;
    margin-left: 20px;
    color: #0b4d75;
    border-radius: 20px;
    display: flex;
}
</style>