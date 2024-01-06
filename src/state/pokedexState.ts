import { reactive, ref } from 'vue'
import { Pokedex, ViewStats, PokeData } from '../types/pokedex'

export const pokedexState = reactive<Pokedex>({
  pokemonNumber: '',
  pokemonName: '',
  pokemonImage: '',
  searchText: '',
})

export const pokeStats = reactive<PokeData>({
  type: [],
  attack: 0,
  defense: 0,
})
export const viewStat = ref<ViewStats>(false)
