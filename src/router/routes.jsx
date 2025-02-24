import CreatePage from "../pages/create-page";
import UpdatePage from "../pages/update-page";
import UserList from "../pages/user-list";

export default [
  {
    comp: UserList,
  },
  {
    path: "/create-user",
    comp: CreatePage,
  },
  {
    path: "/update-user/:id",
    comp: UpdatePage,
  }
];
