export const getListOfCustomers = ({ commit }, context) => {
    return axios.get('/customers').then((response) => {
    	commit('setCustomers', response.data)
    }).catch((error) => {
        context.errors = error.response.data.errors
    })
}

export const getDetailsOfCustomer = ({ commit }, {uid, context}) => {
    return axios.get('/customer/' + uid).then((response) => {
    	commit('setCustomers', response.data)
    }).catch((error) => {
        context.errors = error.response.data.errors
    })
}