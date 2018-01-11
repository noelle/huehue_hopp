import React from 'react'
import Circle from 'components/Circle'
import { mount } from 'enzyme'

describe('components', () => {
  describe('Circle', () => {
    test('mount withous errors', () => {
      const wrapper = mount(<Circle text="Foo" />)
      expect(wrapper.text()).toBe('Foo')
    })
  })
})
