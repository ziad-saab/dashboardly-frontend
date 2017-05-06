import superagent from 'superagent'
import { API_HOST } from './config'

class Api {
  
  getListOfBoards = (page, count) => (
    superagent
    .get(`${API_HOST}/boards`)
  )
  
}

export default new Api();
