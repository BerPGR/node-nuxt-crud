<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Seja bem-vindo ao sistema de CRUD de carros
        </v-card-title>
        <v-card-text>
          <p>
            Este é um app de CRUD (Create, Read, Update, Delete) de carros.
            Esse projeto tem como intuito meu desenvolvimento pessoal em Vue,
            Nuxt, Node e Mongo.
          </p>
          <p>
            Para continuar, clique no botão abaixo para darmos continuidade do app 😉
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mb-2 ml-2" color="primary" nuxt to="/cars"> Carros </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
