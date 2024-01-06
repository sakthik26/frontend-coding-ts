export type Pokedex = {
  pokemonNumber: string
  pokemonName: string
  pokemonImage: string
  searchText: string
}
export type ViewStats = Boolean

export type PokeData = {
  type: string[]
  attack: number
  defense: number
}

export type PokeTypes = {
  slot: string
  type: {
    name: string
    url: string
  }
}

export type Toast = {
  id: string
  message: string
}
