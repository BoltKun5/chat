import { createWebHistory, createRouter } from "vue-router";

import LoginVue from "@/views/LoginVue"
import Homepage from "@/views/HomepageVue"

const routes = [
    {
        path: "/",
        name: "Login",
        component: LoginVue
    },
    {
        path: "/home",
        name: "Homepage",
        component: Homepage
    }
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
})

export default router