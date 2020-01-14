import request from '@/utils/request'

export function login(data) {
<<<<<<< HEAD
  return request({
    url: 'tologin',
=======
 /* return request({
    url: '/user/login',
>>>>>>> Branch_624c435d
    method: 'post',
    data
  })*/
  return request({
    url: '/tologin',
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
<<<<<<< HEAD
  return request({
    /*url: '/user/logout',*/
    url: '/logout',
=======
  /*return request({
    url: '/user/logout',
>>>>>>> Branch_624c435d
    method: 'post'
  })*/
  return request({
    url: '/logout',
    method: 'post'
  })
}
