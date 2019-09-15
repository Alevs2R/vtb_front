import Login from "../pages/login";
import Board from "../pages/board";
import Room from "../pages/room";
import CreateRoom from "../pages/createRoom";
import NotFound from "../pages/notFound";
import EnterByPhone from "../pages/enterPhone";
import Register from "../pages/register";

export default [
  {
    path: "/",
    component: Login
  },
  {
    name: "user",
    path: "/user/:userId/",
    component: Board
  },
  {
    name: "createroom",
    path: "/room/create/",
    component: CreateRoom
  },
  {
    name: "room",
    path: "/room/:roomId/",
    component: Room
  },
  {
    name: "enter-phone",
    component: EnterByPhone,
    path: "/enter-by-phone"
  },
  {
    name: "register",
    component: Register,
    path: "/register"
  },
  {
    path: "(.*)",
    component: NotFound
  }

];
