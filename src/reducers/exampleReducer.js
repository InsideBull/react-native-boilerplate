import * as actionTypes from '../actions';

const initialState = {
  list: []
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXAMPLE_LIST: {

      return {
        ...initialState,
        list: action.data
      };
    }

    case actionTypes.EXAMPLE_CLEAR: {
      return {
        list: []
      }
    }

    default: {
      return state;
    }
  }
};

export default exampleReducer;
