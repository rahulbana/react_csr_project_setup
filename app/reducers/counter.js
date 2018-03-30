import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter'

const initialState = {
  counter: 10
}

function incrementCounter(oldState) {
  let newCounter = Object.assign({}, oldState).counter
  newCounter = newCounter + 1
  return newCounter
}

function decrementCounter(oldState) {
  let newCounter = Object.assign({}, oldState).counter
  newCounter = newCounter - 1
  return newCounter
}

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: incrementCounter(state) }
    case DECREMENT_COUNTER:
      return { ...state, counter: decrementCounter(state) }
    default:
      return state
  }
}
