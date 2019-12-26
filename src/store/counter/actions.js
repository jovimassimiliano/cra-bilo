import { ADD_COUNTER } from './types';

export const addCounter = () => async dispatch => {
  try {
    dispatch({ type: ADD_COUNTER.success })
  } catch (e) {
    dispatch({ type: ADD_COUNTER.failure })
  }
}