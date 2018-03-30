import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter'

export function incrementCounter(){
  return { type: INCREMENT_COUNTER }
}

export function decrementCounter(){
  return { type: DECREMENT_COUNTER }
}
