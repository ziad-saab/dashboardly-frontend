import superagent from 'superagent'
import { API_HOST } from './config'

export default class Api {
  
  getListOfBoards = (page, count) => (
    superagent
    .get(`${API_HOST}/boards`)
  )
  
}
