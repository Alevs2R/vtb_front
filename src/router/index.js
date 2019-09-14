import Login from '../pages/login'
import Board from '../pages/board'

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
];
