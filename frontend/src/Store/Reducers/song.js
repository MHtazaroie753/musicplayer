import songActions from "../Actions/songActions";

const songState = {
  success: null,
  messange: null,
};
const songs = (state = songState, action) => {
  let newState = state;
  switch (action.type) {
    case songActions.CREATE_SONG_SUCCESS:
      newState = { ...songState, ...action.payload };
console.log(...action.payload)
      break;
    case songActions.CREATE_SONG_FAILED:
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

export default songs;
