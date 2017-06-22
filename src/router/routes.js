import { Home, Dashboard, DashHome } from '../app/home/components'
import { Login, RequestPassword } from '../app/auth/components'
import { CreateUser, EditUser, ShowUser, ListUsers } from '../app/users/components'
import { CreateCustomer, EditCustomer, ShowCustomer, ListCustomers } from '../app/customers/components'


export default [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			needsAuth: false
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			needsAuth: false
		}
	},
	{
		path: '/password/request',
		name: 'requestPassword',
		component: RequestPassword,
		meta: {
			needsAuth: false
		}
	},
	{
		path: '/dashboard',
		component: Dashboard,
		meta: {
			needsAuth: true
		},
		children: [
			{
				path: 'home',
				name: 'dashHome',
				component: DashHome,
				meta: {
					needsAuth: true
				}
			},
			{
				path: 'users',
				name: 'listUsers',
				component: ListUsers,
				meta: {
					needsAuth: true
				}
			},
			{
				path: 'user/create',
				name: 'createUser',
				component: CreateUser,
				meta: {
					needsAuth: true
				}
			},
			{
				path: 'user/edit/:uid',
				name: 'editUser',
				component: EditUser,
				meta: {
					needsAuth: true
				}
			},
			{
				path: 'user/show/:uid',
				name: 'showUser',
				component: ShowUser,
				meta: {
					needsAuth: true
				}
			},
			{
				path: 'customers',
				name: 'listCustomers',
				component: ListCustomers,
				meta: {
					needsAuth: true
				}
			},
			{
				path: 'customer/show/:uid',
				name: 'showCustomer',
				component: ShowCustomer,
				meta: {
					needsAuth: true
				}
			}
		]
	}
]