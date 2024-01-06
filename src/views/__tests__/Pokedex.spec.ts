import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Pokedex from '../Pokedex.vue'

import { VueWrapper } from '@vue/test-utils'

vi.mock('../../state/pokedexState', () => ({
  pokedexState: {
    pokemonNumber: '1',
    pokemonName: 'Bulbasaur',
    pokemonImage: 'bulbasaur.jpg',
    searchText: '',
  },
  pokeStats: {
    type: ['grass', 'posion'],
    attack: 99,
    defense: 99,
  },
  viewStat: { value: false },
}))

vi.mock('../../actions/pokemonActions', () => ({
  fetchPokemon: vi.fn(),
  changePokemon: vi.fn(),
  searchForPokemon: vi.fn(),
  onHandleViewStat: vi.fn(),
  onHandleBack: vi.fn(),
}))

describe('Pokedex.vue', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(Pokedex)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders without errors', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('displays initial Pokemon data', () => {
    expect(wrapper.text()).toContain('Bulbasaur')
    expect(wrapper.text()).toContain('1')
  })
})
