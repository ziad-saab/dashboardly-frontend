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
	.send({token})
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

  createBoard = (title, description, token,) => (
	  superagent
	  .post(`${API_HOST}/boards`)
	  .send({title, description})
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

  createBookmark = (title, url, description, boardId, token) => (

	  superagent
	  .post(`${API_HOST}/boards/${boardId}/bookmarks`, console.log("in create bookmark"))
	  .send({title, url, description})
	  .set('Authorization', `token ${token}`)
  )

  updateBookmark = (boardId, bookmarkId, token) => (
	  superagent
	  .patch(`${API_HOST}/boards/${boardId}/bookmarks/${bookmarkId}`)
	  .set('Authorization', `token ${token}`)
  )

  deleteBookmark = (boardId, bookmarkId, token) => (
	   superagent
	   .delete(`${API_HOST}/boards/${boardId}/bookmarks/${bookmarkId}`)
	   .set('Authorization', `token ${token}`)
  )

  getMe = (token) => (
	superagent
	.get(`${API_HOST}/auth/me`)
	.set('Authorization', `token ${token}`)
  )

  requestSignup = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({ email, password })
  )
}

export default new Api();
