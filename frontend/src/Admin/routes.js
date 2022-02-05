import NotFound from "../Partials/NotFound";
import Main from "../Main/Main";
import Admin from "./Index";
import CreateSongUploder from "./components/CreateSongUploder";
export default [
  {
    path: "/dashboard/songs",
    component: CreateSongUploder,
  },
  {
    path: "/dashboard/add-new-song",
    component: CreateSongUploder,
  },
  {
    component: NotFound,
  },
];
