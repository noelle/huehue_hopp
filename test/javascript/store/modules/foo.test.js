import fooReducer, { flipFoo, initialState, FOO_FLIP } from 'store/modules/foo'
import mockStore from '__mock__/store'

describe('store module foo', () => {
  describe('action creators', () => {
    test('flipFoo', () => {
      const store = mockStore({ text: '' })

      // because `flipFoo` is async and returns a promise, we need to wait it
      // to be resolved before we can continue with the assertion
      return store.dispatch(flipFoo(true)).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: FOO_FLIP,
            payload: {
              isFlipped: true
            }
          }
        ])
      })
    })
  })

  describe('reducer', () => {
    test('FOO_FLIP', () => {
      const action = {
        type: FOO_FLIP,
        payload: { isFlipped: true }
      }

      expect(fooReducer(initialState, action)).toEqual({
        ...initialState,
        isFlipped: true
      })
    })
  })
})
