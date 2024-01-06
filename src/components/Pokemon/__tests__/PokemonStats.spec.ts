import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonStats from '../PokemonStats.vue'

vi.mock('../../state/pokedexState', () => ({
  pokeStats: {
    type: ['fire'],
  },
}))

describe('PokemonStats.vue', () => {
  it('renders pokemon stats correctly', () => {
    const wrapper = mount(PokemonStats)

    // Check if types are rendered
    const types = wrapper.findAll('.type')
    expect(types.length).toBe(1)
  })
})
