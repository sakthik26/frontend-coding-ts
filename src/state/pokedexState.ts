import {reactive,ref} from 'vue'
import {Pokedex,viewStats,PokeData} from '../types/pokedex'

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
  speed: 0,
})
export const viewStat = ref<viewStats>(false)