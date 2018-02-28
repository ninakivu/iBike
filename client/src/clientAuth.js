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
	return clientAuth({ method: 'post', url: '/api/users/authenticate', data: credentials })
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
	return clientAuth({ method: 'post', url: '/api/users', data: userInfo})
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

function getTrips() {
	return clientAuth({ method: 'get', url: '/api/trips' })
}

function createTrip(fields) {
	return clientAuth({ method: 'post', url: '/api/trips', data: fields })
}

function updateTrip(id, fields) {
	return clientAuth({ method: 'patch', url: `/api/trips/${id}`, data: fields })
}

function deleteTrip(id) {
	return clientAuth({ method: 'delete', url: `/api/trips/${id}` })
}

function getUsers() {
	return clientAuth({ method: 'get', url: '/api/users' })
}

function getUserDetails(id) {
	return clientAuth({ method: 'get', url: `/api/users/${id}` })
}

function getTripDetails(id) {
	return clientAuth({ method: 'get', url: `/api/trips/${id}` })
}
	

export default {
	getCurrentUser,
	logIn,
	signUp,
	logOut,
	getTrips,
	createTrip,
	updateTrip,
	deleteTrip,
	getUsers,
	getUserDetails,
	getTripDetails
}