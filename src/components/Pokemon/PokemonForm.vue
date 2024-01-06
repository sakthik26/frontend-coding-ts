<template>
  <form @submit.prevent>
    <input
      type="search"
      v-model="pokedexState.searchText"
      class="input_search"
      placeholder="Name or Number"
      @keyup.enter="searchForPokemon"
      required
    />
  </form>
  <div class="buttons">
    <button class="button" @click="onHandleViewStat()">view stats</button>
    <button class="button btn-prev" @click="changePokemon(-1)">
      Prev &lt;
    </button>
    <button class="button btn-next" @click="changePokemon(1)">Next &gt;</button>
  </div>
</template>

<script setup lang="ts">
import { pokedexState } from '../../state/pokedexState'
import {
  changePokemon,
  searchForPokemon,
  onHandleViewStat,
} from '../../actions/pokemonActions'
</script>
<style scoped>
@import '../../assets/css/pokedex.css';
</style>
