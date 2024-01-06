<template>
  <form @submit.prevent>
    <div class="stats">
      <span class="title"> Type:</span>
      <span class="type" v-for="typ in pokeStats.type">
        {{ typ }}
      </span>
    </div>
    <div>
      <span class="title"> Attack/Defense:</span>
      <span class="type"> {{ pokeStats.attack }}/{{ pokeStats.defense }} </span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { pokeStats } from '../../state/pokedexState'

import { onHandleBack } from '../../actions/pokemonActions'
</script>
<style scoped>
@import '../../assets/css/pokedex.css';
</style>
