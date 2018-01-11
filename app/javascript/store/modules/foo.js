export const FOO_FLIP = 'FOO_FLIP'

export function flipFoo(isFlipped) {
  return (dispatch, _getState) => {
    // A promise should be returned from an async action.
    // Usually you will perform an async call to a backend api here, which will
    // return a promise by itself.
    // Here we are constructing the promise ourselves. The promise is resolved
    // in the setTimeout callback.
    return new Promise((resolve, _reject) =>
      setTimeout(
        () =>
          resolve(
            dispatch({
              type: FOO_FLIP,
              payload: { isFlipped }
            })
          ),
        1000
      )
    )
  }
}

const initialState = {
  isFlipped: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FOO_FLIP: {
      const { isFlipped } = action.payload

      return {
        ...state,
        isFlipped
      }
    }

    default:
      return state
  }
}
