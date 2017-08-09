import superagent from 'superagent'
import { API_HOST } from './config'

class Api {

  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
  )

  requestLogout = (token) => (
    superagent
    .delete(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  getBoardsList = (page, count, token) => (
    superagent
    .get(`${API_HOST}/boards`)
	.set('Authorization', `token ${token}`)
  )

  getBoard = (id, token) => (
    superagent
    .get(`${API_HOST}/boards/${id}`)
	.set('Authorization', `token ${token}`)
  )

  updateBoard = (id, token) => (
	  superagent
	  .patch(`${API_HOST}/boards/${id}`)
	  .set('Authorization', `token ${token}`)
  )

  deleteBoard = (boardId, token) => (
  	 superagent
  	 .delete(`${API_HOST}/boards/${boardId}`)
  	 .set('Authorization', `token ${token}`)
  )

  getBookmarks = (boardId, token) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)
	.set('Authorization', `token ${token}`)
  )

  updateBookmark = (boardId, token) => (
	  superagent
	  .patch(`${API_HOST}/boards/${boardId}/bookmarks`)
	  .set('Authorization', `token ${token}`)
  )

  deleteBookmark = (boardId, token) => (
	   superagent
	   .delete(`${API_HOST}/boards/${boardId}/bookmarks`)
	   .set('Authorization', `token ${token}`)
  )

  getMe = (token) => (
	superagent
	.get(`${API_HOST}/auth/me`)
	.set('Authorization', `token ${token}`)
  )
}

export default new Api();
