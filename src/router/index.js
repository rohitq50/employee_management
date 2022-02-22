import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
{
	path: '/',
	name: 'Home',
	component: Home
},
{
	path: '/message',
	name: 'Message',
	component: () => import('../views/Message.vue')
},
{
	path: '/application',
	name: 'Application',
	component: () => import('../views/Application.vue')
},
{
	path: '/employee',
	name: 'Employee',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ '../views/Employee.vue')
},
{
	path: '/calendar',
	name: 'Calendar',
	component: () => import('../views/Calendar.vue')
},
{
	path: '/file',
	name: 'File',
	component: () => import('../views/File.vue')
},
{
	path: '/settings',
	name: 'Settings',
	component: () => import('../views/Settings.vue')
},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router