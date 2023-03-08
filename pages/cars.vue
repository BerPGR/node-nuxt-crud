<template>
    <v-row justify="center">
        <v-col cols="12" sm="8" md="9">
            <v-dialog v-model="dialog" width="auto">
                <v-card class="py-2 px-6">
                    <v-card-text class="text-h5 font-weight-bold right-text">
                        Insira as informações do carro abaixo!
                    </v-card-text>
                    <v-row>
                        <v-col cols="12" sm="8">
                            <v-text-field class="ml-4" v-model="ano" background-color="blue-grey darken-3" rounded label="Ano"></v-text-field>
                            <v-text-field class="ml-4" v-model="marca" background-color="blue-grey darken-3" rounded label="Marca"></v-text-field>
                            <v-text-field class="ml-4" v-model="modelo" background-color="blue-grey darken-3" rounded label="Modelo"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn class="black--text" color="white" @click="dialog = !dialog">Fechar</v-btn>
                        <v-btn class="black--text" color="blue" @click="salvarCarro()">Salvar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-card rounded>
                <v-app-bar>
                    <v-list-item-title class="text-black" v-if="cars.length == 0">
                        Nao há carros no banco!
                    </v-list-item-title>
                    <v-app-bar-title v-else>
                        Carros
                    </v-app-bar-title>
                    <v-spacer />
                    <v-btn icon @click="dialog = !dialog">
                        <v-icon color="green">
                            mdi-plus
                        </v-icon>
                    </v-btn>
                    <v-btn v-if="cars.length != 0" icon>
                        <v-icon color="red">
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </v-app-bar>
                <v-list v-if="cars.length != 0">
                    <v-list-item v-for="(car, i) in cars" :key="i">
                        <v-list-item-title>{{ car.ano }} {{ car.marca }} {{ car.modelo }}</v-list-item-title>
                        <v-spacer />
                        <v-btn icon>
                            <v-icon color="orange">
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                        <v-btn icon @click="deletaCarro(cars[i])">
                            <v-icon color="red">mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        cars: [],
        ano: null,
        marca: null,
        modelo: null,
        dialog: false,
    }),
    async fetch() {
        const { data: cars } = await this.$axios.get('/cars')
        this.cars = cars;
    },
    methods: {
        async salvarCarro() {
            this.dialog = !this.dialog
            const carro = {ano: parseInt(this.ano), marca: this.marca, modelo: this.modelo}
            await this.$axios.post("/cars", carro)
        },

        async deletaCarro(carro) {
            await this.$axios.delete(`cars/${carro._id}`, carro)
        },
    }
}
</script>

<style>

</style>