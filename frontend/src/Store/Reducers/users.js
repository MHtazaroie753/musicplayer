import userActions from "../Actions/userActions";

const userState = {
  success: null,
  messange: null,
  isUserLoggedIn: false,
};
const users = (state = userState, action) => {
  console.log(action);
  let newState = state;
  switch (action.type) {
    case userActions.USER_REGISTER_SUCCESS:
      newState = { ...userState, ...action.payload };

      break;
    case userActions.USER_REGISTER_FAILED:
      break;
    case userActions.USER_LOGIN_SUCCESS:
      newState = { ...userState, ...action.payload, isUserLoggedIn: true };
      break;
    case userActions.USER_LOGIN_FAILED:
      // console.log(action);
      newState = { ...userState, ...action.payload };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

export default users;
