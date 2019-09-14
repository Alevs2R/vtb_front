import Login from '../pages/login'
import Board from '../pages/board'
import Room from '../pages/room'
import NotFound from '../pages/notFound'

export default [
    {
        path: '/',
        component: Login
    },
    {
        name: 'user',
        path: '/user/:userId/',
        component: Board
    },
    {
        name: 'room',
        path: '/room/:roomId/',
        component: Room
    },
    {
        path: "(.*)",
        component: NotFound
    }
];
