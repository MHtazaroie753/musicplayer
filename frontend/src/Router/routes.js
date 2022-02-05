
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import NotFound from '../Partials/NotFound';
import Main from '../Main/Main';
import Admin from '../Admin/Index';
export default [
    {
        path: '/auth/login',
        component: Login
    },
    {
        path: '/auth/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Admin
    },
    {
        path: '/',
        component: Main
    },
    {
        component: NotFound
    }
];
