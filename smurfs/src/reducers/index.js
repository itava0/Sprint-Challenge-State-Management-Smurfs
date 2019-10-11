import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, START_POST, POST_SUCESS, POST_FAILURE  } from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case START_POST: 
      return {
        ...state,
        isFetching: false,
        error: ''
      }
    case POST_SUCESS: 
      return {
        ...state,
        isFetching: false,
        smurfs:[...state.smurfs, ...action.payload]
      }
    case POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
};