import mainActions from "../Actions/mainActions";
import userActions from "../Actions/userActions";

const mainState = {
  isUserLoggedIn: false,
  isInit: true,
  user_status: 1,
  full_name: '',
  success: null,
  messange: null,
};
const main = (state = mainState, action) => {
  // console.log(action);
  let newState = state;
  switch (action.type) {
    case userActions.USER_REGISTER_SUCCESS:
      newState = { ...state, ...action.payload };
      break;
    case userActions.USER_REGISTER_FAILED:
      break;
    case userActions.USER_LOGIN_SUCCESS:
      newState = {
        ...state,
        ...action.payload,
        isUserLoggedIn: true
      };
      // console.log(action.payload);
      break;
    case userActions.USER_LOGIN_FAILED:
      break;
    case mainActions.INIT_SUCCESS:
      newState = {
        ...state,
        isInit: !action.payload.success,
        // isUserLoggedIn: true,
      };
      // console.log(action)
      break;
    case mainActions.INIT_FAILED:
      newState = { ...state, ...action.payload, isUserLoggedIn: false };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
};

export default main;
