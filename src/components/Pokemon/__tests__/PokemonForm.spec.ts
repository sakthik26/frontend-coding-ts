import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import PokemonForm from '../PokemonForm.vue'
import * as pokemonActions from '../../../actions/pokemonActions'

vi.mock('../../../state/pokedexState', () => ({
  pokedexState: {
    searchText: '',
  },
}))

vi.mock('../../../actions/pokemonActions', () => ({
  changePokemon: vi.fn(),
  searchForPokemon: vi.fn(),
  onHandleViewStat: vi.fn(),
}))

describe('PokemonForm.vue', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(PokemonForm)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders an input field for search', () => {
    const input = wrapper.find('.input_search')
    expect(input.exists()).toBe(true)
  })

  it('triggers search on input enter', async () => {
    const input = wrapper.find('.input_search')
    await input.setValue('pikachu')
    await input.trigger('keyup.enter')
    expect(pokemonActions.searchForPokemon).toHaveBeenCalled()
  })

  it('renders buttons for navigation and viewing stats', () => {
    const viewStatsButton = wrapper.find('.button')
    const prevButton = wrapper.find('.btn-prev')
    const nextButton = wrapper.find('.btn-next')

    expect(viewStatsButton.exists()).toBe(true)
    expect(prevButton.exists()).toBe(true)
    expect(nextButton.exists()).toBe(true)
  })

  it('triggers view stats action on button click', async () => {
    const viewStatsButton = wrapper.find('.button')
    await viewStatsButton.trigger('click')
    expect(pokemonActions.onHandleViewStat).toHaveBeenCalled()
  })

  it('triggers changePokemon for previous and next buttons', async () => {
    const prevButton = wrapper.find('.btn-prev')
    const nextButton = wrapper.find('.btn-next')

    await prevButton.trigger('click')
    expect(pokemonActions.changePokemon).toHaveBeenCalledWith(-1)

    await nextButton.trigger('click')
    expect(pokemonActions.changePokemon).toHaveBeenCalledWith(1)
  })
})
