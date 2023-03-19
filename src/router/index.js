import VueRouter from 'vue-router';
import home from '@/pages/home';
import Search from '@/pages/search';
import Login from '@/pages/login';
import Register from '@/pages/register';

export default new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'shouye',
            component: home,
            meta: { show: true },
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true },
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
            meta: { show: false },
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
            meta: { show: false },
        },
        {
            path: '/',
            redirect: '/home',
        }
    ]
})