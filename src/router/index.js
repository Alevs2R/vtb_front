import Login from '../pages/login'
import Board from '../pages/board'
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
        path: "(.*)",
        component: NotFound
    }
];
