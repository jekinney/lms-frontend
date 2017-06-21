import { Login, Register, RequestPassword } from '../components'

export default [
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			guest: true,
			needsAuth: false
		}
	},
	{
		path: '/password/request',
		name: 'requestPassword',
		component: RequestPassword,
		meta: {
			guest: true,
			needsAuth: false
		}
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
		meta: {
			guest: false,
			needsAuth: true
		}
	}
]