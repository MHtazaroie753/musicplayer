import { combineReducers } from "redux";
import users from "./users";
import main from "./main";
import songs from "./song";
export default combineReducers({
  users,
  main,
  songs,
});
