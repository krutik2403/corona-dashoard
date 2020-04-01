import axios from "axios";

export const fetchStats = () => {
  return dispatch => {
    dispatch({ type: "STATS_FETCH_PENDING" });

    axios
      .get("https://corona.lmao.ninja/all")
      .then(res => {
        dispatch({ type: "STATS_FETCH_SUCCESS", stats: res.data });
      })
      .catch(error => {
        dispatch({ type: "STATS_FETCH_FAILURE", message: error.response });
      });
  };
};
