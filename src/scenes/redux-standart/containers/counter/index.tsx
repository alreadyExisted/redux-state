import React, { useCallback } from 'react'
import { Counter } from 'scenes/@components'
import {
  incCounter,
  decCounter,
  incCounterAsync
} from 'scenes/redux-standart/actions/counter'
import { useDispatch, RootStore, useMappedState } from 'store'

export const CounterContainer = () => {
  const mapState = useCallback(
    (state: RootStore) => ({ counter: state.counter.value }),
    []
  )
  const { counter } = useMappedState(mapState)
  const dispatch = useDispatch()
  const incValue = useCallback(() => dispatch(incCounter()), [dispatch])
  const incValueAsync = useCallback(() => dispatch(incCounterAsync()), [
    dispatch
  ])
  const decValue = useCallback(() => dispatch(decCounter()), [dispatch])

  return (
    <Counter
      counter={counter}
      incValue={incValue}
      incValueAsync={incValueAsync}
      decValue={decValue}
    />
  )
}
