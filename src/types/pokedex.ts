export type Pokedex = {
    pokemonNumber: string,
    pokemonName : string,
    pokemonImage : string,
    searchText: string
}
export type viewStats = Boolean

export type PokeData = {
    type: string[]
    attack: number
    defense: number
    speed: number
}

export type pokeTypes = {
    slot: string,
    type:{
        name: string,
        url: string
    }
}