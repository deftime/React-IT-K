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
  authLogin(login, pass) {
    return this.global.post(`/auth/login`, {email: login, password: pass, rememberMe: true})
    .then(response => response.data)
  }
  authLogout() {
    return this.global.delete(`/auth/login`)
    .then(response => response.data)
  }
  getProfile(userId) {
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
  getStatus(userId) {
    return this.global.get(`/profile/status/${userId}`)
    .then(response => response.data)
  }
  updateStatus(status) {
    return this.global.put(`/profile/status`, {status})
  }
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append('image', file);

    return this.global.put('/profile/photo', formData)
    .then(response => response.data)
  }
  updateProfile(profileObject) {
    return this.global.put(`/profile`, profileObject)
  }
}

export const requestAPI = new SamuraiAPI();
