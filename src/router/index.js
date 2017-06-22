import Vue from 'vue'
import Router from 'vue-router'
import before from './before'
import routes from './routes'

Vue.use(Router)

const router = new Router({
	linkActiveClass: 'active',
	routes
})

router.beforeEach(before)

export default router