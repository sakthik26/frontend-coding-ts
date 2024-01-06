<template>
  <div class="justify-center max-w-md mt-10">
    <main>
      <img
        :src="pokedexState.pokemonImage"
        alt="pokemon"
        class="pokemon_image"
      />

      <h1 class="pokemon_data">
        <span class="pokemon_number">{{ pokedexState.pokemonNumber }}</span> -
        <span class="pokemon_name">{{ pokedexState.pokemonName }}</span>
      </h1>
      <div v-if="viewStat === false">
        <PokemonForm />
      </div>
      <div v-else>
        <PokemonStats />
        <div class="buttons">
          <button class="button" @click="onHandleBack()">Back</button>
        </div>
      </div>

      <img
        src="https://pokedex-conrado.vercel.app/images/pokedex.png"
        alt="pokedex"
        class="pokedex"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { pokedexState, viewStat } from '../state/pokedexState'
import PokemonForm from '../components/Pokemon/PokemonForm.vue'
import PokemonStats from '../components/Pokemon/PokemonStats.vue'
import {
  fetchPokemon,
  changePokemon,
  searchForPokemon,
  onHandleViewStat,
  onHandleBack,
} from '../actions/pokemonActions'

fetchPokemon(1)
</script>
<style scoped>
@import '../assets/css/pokedex.css';
</style>
