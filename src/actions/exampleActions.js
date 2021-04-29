export const EXAMPLE_LIST = 'EXAMPLE_LIST';
export const EXAMPLE_CLEAR = 'EXAMPLE_CLEAR';

export const exampleFetchAction = (data) => dispatch =>
  dispatch({
    type: EXAMPLE_LIST,
    data: data
  });

export const exampleClearAction = () => dispatch =>
  dispatch({
    type: EXAMPLE_CLEAR
  });
