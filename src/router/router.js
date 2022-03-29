import { createWebHistory, createRouter } from "vue-router";

import LoginVue from "@/vues/LoginVue"

const routes = [
    {
        path: "/",
        name: "Login",
        component: LoginVue
    },
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
})

export default router