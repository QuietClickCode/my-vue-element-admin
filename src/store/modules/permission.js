import { asyncRoutes, constantRoutes } from '@/router'
import Layout from '@/layout'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
  
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  /*SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }*/
  SET_ROUTES: (state, routes) => {
    state.addRoutes = [{
        path: '/example',
        component: Layout,
        redirect: '/example/list',
        name: 'Example',
        meta: {
            title: 'Example',
            icon: 'example'
        },
        children: [
            {
                path: 'create',
                component: () => import('@/views/example/create'),
                name: 'CreateArticle',
                meta: { title: 'Create Article', icon: 'edit' }
            },
            {
                path: 'edit/:id(\\d+)',
                component: () => import('@/views/example/edit'),
                name: 'EditArticle',
                meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
                hidden: true
            },
            {
                path: 'list',
                component: () => import('@/views/example/list'),
                name: 'ArticleList',
                meta: { title: 'Article List', icon: 'list' }
            }
        ]
    }]
    state.routes = [{
        path: '/example',
        component: Layout,
        redirect: '/example/list',
        name: 'Example',
        meta: {
            title: 'Example',
            icon: 'example'
        },
        children: [
            {
                path: 'create',
                component: () => import('@/views/example/create'),
                name: 'CreateArticle',
                meta: { title: 'Create Article', icon: 'edit' }
            },
            {
                path: 'edit/:id(\\d+)',
                component: () => import('@/views/example/edit'),
                name: 'EditArticle',
                meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
                hidden: true
            },
            {
                path: 'list',
                component: () => import('@/views/example/list'),
                name: 'ArticleList',
                meta: { title: 'Article List', icon: 'list' }
            }
        ]
    }]
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
