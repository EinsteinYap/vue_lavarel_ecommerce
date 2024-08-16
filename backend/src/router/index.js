import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

const routes = [
{
    path:'/dashboard',
    name:'dashboard',
    component:Dashboard
},
{
    path:'/login',
    name:'login',
    component:Login
},
];
const router = createRouter({
    history: createWebHashHistory(), 
    routes
})

export default router