import { ADD_COUNTER } from './types';

const initState = {
  count: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_COUNTER.success:
      return ({
        ...state,
        count: state.count + 1
      });
    default:
      return state;
  }
}