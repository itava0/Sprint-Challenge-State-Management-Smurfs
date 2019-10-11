import axios from "axios";

// action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const START_POST = "START_POST";
export const POST_SUCESS = "POST_SUCESS";
export const POST_FAILURE = "POST_FAILURE";
export const DELETE_SUCESS = "DELETE_SUCESS";

// action creator
export const fetchSmurfs = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("GET Request Response: ", res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addSmurfs = smurf => dispatch => {
  dispatch({ type: START_POST });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log("POST Request Response: ", res);
      dispatch({ type: POST_SUCESS, payload: res.data.smurf });
    })
    .catch(err => dispatch({ type: POST_FAILURE, payload: err.payload }));
};

export const deleteSmurfs = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("Delete Request Response: ", res);
      dispatch({ type: DELETE_SUCESS, payload: res.data.smurf.id});
    })
    .catch(err => console.log('Delete Request fail', err));
};
