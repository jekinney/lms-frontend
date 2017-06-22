import Vue from 'vue'
import Vuex from 'vuex'

import auth from '../app/auth/store'
import users from '../app/users/store'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
		users
	}
})