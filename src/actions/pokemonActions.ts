import { pokedexState, viewStat, pokeStats } from '../state/pokedexState'
import { POKE_API } from '../constants'
import { PokeTypes } from '../types/pokedex'
import { useToast } from 'vue-toastification'

const toast = useToast()
export const fetchPokemon = async (pokemon: string | number) => {
  try {
    const APIResponse = await fetch(`${POKE_API}${pokemon}`)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      toast.success(`Fetched details for ${data.name} successfully!`)
      pokedexState.pokemonName = data.name
      pokedexState.pokemonNumber = data.id.toString()
      pokedexState.pokemonImage =
        data['sprites']['versions']['generation-v']['black-white']['animated'][
          'front_default'
        ]
      pokeStats.type = data['types']
        .map((ty: PokeTypes) => ty.type.name)
        .slice(0, 2)
      pokeStats.attack = data['stats'][1]['base_stat']
      pokeStats.defense = data['stats'][2]['base_stat']
    } else {
      pokedexState.pokemonName = 'Not found :('
      pokedexState.pokemonNumber = ''
      pokedexState.pokemonImage = ''

      toast.error('Pokemon with Id or Name does not exist')
    }
  } catch (error) {
    toast.error('Failed to fetch Pokémon data')
  }
}

export const onHandleViewStat = () => {
  viewStat.value = true
}

export const onHandleBack = () => {
  viewStat.value = false
}
export const searchForPokemon = () => {
  fetchPokemon(pokedexState.searchText.toLowerCase())
}

export const changePokemon = (change: number) => {
  const newId = parseInt(pokedexState.pokemonNumber) + change
  if (newId >= 1) {
    fetchPokemon(newId)
  }
}
