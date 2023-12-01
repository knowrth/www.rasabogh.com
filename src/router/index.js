// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // Ensure correct path to the store
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import ChangePassword from '../views/ChangePassword.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
    { path: '/', component: Home, },
    // { path: '/', redirect: { path: '/home' } },
    // { path: '/login', component: Login },
    // {
    //     path: '/home',
    //     component: Home,
    //     // meta: { requiresAuth: true }
    // },
    // { path: '/signup', component: Signup },
    // { path: '/change-password', component: ChangePassword },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !store.state.user) {
        next('/login');
    } else {
        next();
    }
});

export default router;