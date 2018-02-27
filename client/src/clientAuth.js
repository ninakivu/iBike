import axios from 'axios'
import jwtDecode from 'jwt-decode'

// During initial app load, instantiate axios, and attempt to set a stored token as a default header for all api requests.
const clientAuth = axios.create()
clientAuth.defaults.headers.common.token = getToken()

function getToken() {
	return localStorage.getItem('token')
}

function setToken(token) {
	localStorage.setItem('token', token)
	return token
}

function getCurrentUser() {
	const token = getToken()
	if(token) return jwtDecode(token)
	return null
}

function logIn(credentials) {
	return clientAuth({ method: 'post', url: '/users/authenticate', data: credentials })
		.then(res => {
			const token = res.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// logIn and signUp functions could be combined into one:
function signUp(userInfo) {
	return clientAuth({ method: 'post', url: '/users', data: userInfo})
		.then(res => {
			const token = res.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

function logOut() {
	localStorage.removeItem('token')
	delete clientAuth.defaults.headers.common.token
	return true
}

function deleteTrip(id) {
	return clientAuth({method: 'delete', url: `/trips/${id}`})
}


export default {
	getCurrentUser,
	logIn,
	signUp,
	logOut,
	deleteTrip
}