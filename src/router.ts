import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';

Vue.use(Router);

let router = new Router({

    /**
     * Push 방식의 routing
     */
    mode: 'history',

    /**
     * 라우트 정의
     */
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About
            }
        }
    ],

    /**
     * 스크롤 Behavior
     * @returns {{x: number, y: number}}
     */
    scrollBehavior() {
        return {x:0, y: 0}
    }
})

/**
 * Router Guard
 */
/*router.beforeEach((to, from, next) => {

});*/

export default router;
