import Vue from "vue"
import VueRouter from  'vue-router'

import Home from "./Src/components/Home/HomeComponent.vue"

Vue.use(VueRouter)

let routes = [ 
    { path: '/', component: Home },
    { path: '', component: Home },
]

export default new VueRouter ({
    routes
})
   

