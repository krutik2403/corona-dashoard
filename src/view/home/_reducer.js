const initialState = {
  loading: false,
  error: false,
  message: null,
  stats: null
};

const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case "STATS_FETCH_PENDING":
      return {
        ...state,
        loading: true,
        error: false,
        message: null,
        stats: null
      };
    case "STATS_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        message: null,
        stats: action.stats
      };
    case "STATS_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
        stats: null
      };
    default:
      return { ...state };
  }
};

export default HomeReducers;
