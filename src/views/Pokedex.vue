<template>
  <div class="justify-center max-w-md mt-10">
    <main>     
        <img :src="pokedexState.pokemonImage"
        alt="pokemon" 
        class="pokemon_image">
            
        <h1 class="pokemon_data">
            <span class="pokemon_number">{{ pokedexState.pokemonNumber }}</span> -
            <span class="pokemon_name">{{ pokedexState.pokemonName }}</span>
        </h1>
       <div v-if="viewStat===false">
        <form @submit.prevent="searchForPokemon">
            <input type="search"
            v-model="pokedexState.searchText" 
            class="input_search"
            placeholder="Name or Number"
            @keyup.enter="searchForPokemon"
            required>
        </form>
        <div class="buttons">
            <button class="button" @click="onHandleViewStat()">view stats</button>
            <button class="button btn-prev" @click="changePokemon(-1)">Prev &lt;</button>
            <button class="button btn-next" @click="changePokemon(1)">Next &gt;</button>
        </div>
        </div>
        <div v-else>
            <form @submit.prevent> 
            <div class="stats">
             <span class="title"> Type:</span>
             <span class="type" v-for="typ in pokeStats.type">
                {{typ}}
             </span>
            </div>
            <div><span class="title"> Attack/Defense:</span>
             <span class="type">
                {{pokeStats.attack}}/{{pokeStats.defense}}
             </span></div>
            </form>
            <div class="buttons">
            <button class="button" @click="onHandleBack()">Back</button>
        </div>
        </div>
        

        <img src="https://pokedex-conrado.vercel.app/images/pokedex.png" alt="pokedex" class="pokedex">
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { pokedexState, viewStat,pokeStats } from '../state/pokedexState';
import { fetchPokemon, changePokemon, searchForPokemon, onHandleViewStat, onHandleBack  } from '../actions/pokemonActions';


fetchPokemon(1); 

</script>
<style scoped>
@import '../assets/css/pokedex.css';
</style>