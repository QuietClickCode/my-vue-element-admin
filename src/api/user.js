import request from '@/utils/request'

export function login(data) {
 /* return request({
    url: '/user/login',
    method: 'post',
    data
  })*/
  return request({
    url: process.env.VUE_APP_BASE_API + '/tologin',
    method: 'post',
    data
  })
}
export function regist(data) {
 /* return request({
    url: '/user/login',
    method: 'post',
    data
  })*/
  return request({
    url: process.env.VUE_APP_BASE_API + '/toregist',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  /*return request({
    url: '/user/logout',
    method: 'post'
  })*/
  return request({
    url: '/logout',
    method: 'post'
  })
}
