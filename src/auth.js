import api from './api';

module.exports = {
  login(email, pass) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestLogin(email, pass)
      .then(res => localStorage.token = res.body.token)
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
    return !!localStorage.token
  },
  
}
