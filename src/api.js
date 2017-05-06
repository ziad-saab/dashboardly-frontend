import superagent from 'superagent'
import { API_HOST } from './config'

class Api {
  
  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
  )
  
  getListOfBoards = (page, count) => (
    superagent
    .get(`${API_HOST}/boards`)
  )
  
}

export default new Api();
