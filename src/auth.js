import api from './api';

module.exports = {

  login(email, pass) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
	 console.log('working')
      return api.requestLogin(email, pass)
      .then(res => {
		  console.log(res, 'this is it')
		  localStorage.token = res.body.token
	  })
    }
  },

  getToken() {
    return localStorage.token
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => delete localStorage.token)
  },

  isLoggedIn() {
	console.log(localStorage, 'tha token')
    return !!localStorage.token
  },

}
