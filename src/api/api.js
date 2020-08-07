import * as axios from 'axios';

class SamuraiAPI {
  constructor() {
    this.global = axios.create({
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0',
      headers: {
        'API-KEY' : '8096ef0b-673f-4468-8b4b-134f855c155a'
      }
    })
  }
  getUsers(page, count) {
    return this.global.get(`/users?page=${page}&count=${count}`)
    .then(response => response.data)
  }
  authMe() {
    return this.global.get(`/auth/me`)
    .then(response => response.data)
  }
  getProfile(userId = 2) {
    return this.global.get(`/profile/${userId}`)
    .then(response => response.data)
  }
  follow(userId) {
    return this.global.post(`/follow/${userId}`, null)
    .then(response => response.data)
  }
  unfollow(userId) {
    return this.global.delete(`/follow/${userId}`)
    .then(response => response.data)
  }
}

export const requestAPI = new SamuraiAPI();
