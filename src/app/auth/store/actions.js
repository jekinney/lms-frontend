import { isEmpty } from 'lodash'
import { setHttpToken } from '../../../helpers'
import localforage from 'localforage'

export const register = ({ dispatch }, { payload, context }) => {
    return axios.post('/register', payload).then((response) => {
        dispatch('setToken', response.data.meta.token).then(() => {
            dispatch('fetchUser')
        })
    }).catch((error) => {
        context.errors = error.response.data.errors
    })
}

export const login = ({ dispatch }, { payload, context }) => {
    return axios.post('/login', payload).then((response) => {
       dispatch('setToken', response.data.meta.token).then(() => {
            dispatch('fetchUser')
        })
       return Promise.resolve(response.data.user.name)
    }).catch((error) => {
        return Promise.reject(error.response.data.errors)
    })
}

export const reset = ({ dispatch }, { payload, context }) => {
    return axios.post('/password/reset', payload).then((response) => {
        return Promise.resolve(response)
    }).catch((error) => {
        return Promise.reject(error.response.data.errors)
        //context.errors = error.response.data.errors
    })
}

export const fetchUser = ({ commit }) => {
    return axios.get('/user').then((response) => {
        commit('setAuthenticated', true)
        commit('setUserData', response.data.user)
    })
}

export const logout = ({ dispatch }) => {
    return axios.post('/logout').then((response) => {
        dispatch('clearAuth')
    })
}

export const setToken = ({ commit, dispatch }, token) => {
    if (isEmpty(token)) {
        return dispatch('checkTokenExists').then((token) => {
            setHttpToken(token)
        })
    }
    commit('setToken', token)
    setHttpToken(token)
}

export const checkTokenExists = ({ commit, dispatch }, token) => {
    return localforage.getItem('authtoken').then( token => {
        if (isEmpty(token)) {
            return Promise.reject('NO_STORAGE_TOKEN');
        }
        return Promise.resolve(token)
    })
}

export const clearAuth = ({ commit }, token) => {
    commit('setAuthenticated', false)
    commit('setUserData', null)
    commit('setToken', null)
    setHttpToken(null)
}
