import { createWebHistory, createRouter } from "vue-router";

import LoginVue from "@/views/LoginVue"
import Homepage from "@/views/HomepageVue"
import DiscussionVue from "@/views/DiscussionVue"
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
    },
    {
        path: "/discussion/:id",
        name: "Discussion",
        component: DiscussionVue
    }
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
})

export default router