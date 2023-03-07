<template>
    <v-row justify="center">
        <v-col cols="12" sm="8" md="9">
            <v-card color="white" rounded>
                <v-app-bar>
                    <v-list-item-title v-if="cars.length == 0">
                        Nao ha carros no banco
                    </v-list-item-title>
                    <v-app-bar-title v-else>
                        Carros
                    </v-app-bar-title>
                    <v-spacer />
                    <v-btn icon>
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
                        <p>{{ car.ano }}</p>
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
    }),
    async fetch() {
        const { data: cars } = await this.$axios.get('/cars')
        this.cars = cars;
    },
}
</script>

<style>

</style>