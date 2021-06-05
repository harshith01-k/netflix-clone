const list = {
  trending: [],
  originals: [],
  toprated: [],
  action: [],
  comedy: [],
  horror: [],
  romance: [],
  documentary: [],
};
const movieReducer = (state = list, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        trending: action.payload.trending,
        originals: action.payload.originals,
        toprated: action.payload.toprated,
        action: action.payload.action,
        comedy: action.payload.comedy,
        horror: action.payload.horror,
        romance: action.payload.romance,
        documentary: action.payload.documentary,
      };
    default:
      return { ...state };
  }
};
export default movieReducer;
