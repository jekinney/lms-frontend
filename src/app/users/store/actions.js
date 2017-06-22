export const getListOfUsers = ({ commit }, context) => {
    return axios.get('/users').then( response => {
        commit('setUsers', response.data)
    }).catch( error => {
        context.errors = error.response.data.errors
    })
}

export const getUserForEditing = ({commit}, { uid, context}) => {
	return axios.get('/user/'+ uid +'/edit').then( response => {
		commit('setUserForEdit', response.data)
	}).catch( error => {
		context.errors = error.response.data.errors
	})
}

export const getUserForShowing = ({commit}, { uid, context}) => {
	return axios.get('/user/'+ uid).then( response => {
		commit('setUserForShow', response.data)
	}).catch( error => {
		context.errors = error.response.data.errors
	})
}