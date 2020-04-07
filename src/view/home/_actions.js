import axios from "axios";

export const fetchStats = () => {
  return (dispatch) => {
    dispatch({ type: "STATS_FETCH_PENDING" });

    axios
      .get("https://corona.lmao.ninja/all")
      .then((res) => {
        dispatch({ type: "STATS_FETCH_SUCCESS", stats: res.data });
      })
      .catch((error) => {
        dispatch({ type: "STATS_FETCH_FAILURE", message: error.response });
      });
  };
};

export const fetchCounries = () => {
  return (dispatch) => {
    dispatch({ type: "COUNTRIES_FETCH_PENDING" });

    axios
      .get("https://corona.lmao.ninja/countries")
      .then((res) => {
        dispatch({ type: "COUNTRIES_FETCH_SUCCESS", stats: res.data });
      })
      .catch((error) => {
        dispatch({ type: "COUNTRIES_FETCH_FAILURE", message: error.response });
      });
  };
};

export const fetchUsaReport = () => {
  return (dispatch) => {
    dispatch({ type: "USA_REPORT_PENDING" });

    axios
      .get("https://corona.lmao.ninja/states")
      .then((res) => {
        dispatch({ type: "USA_REPORT_SUCCESS", stats: res.data });
      })
      .catch((error) => {
        dispatch({ type: "USA_REPORT_FAILURE", message: error.response });
      });
  };
};
