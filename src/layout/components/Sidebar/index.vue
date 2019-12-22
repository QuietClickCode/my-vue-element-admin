<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import Layout from '@/layout'
export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    /*activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },*/
    activeMenu() {
      const route = [{
          path: '/example',
          component: Layout,
          redirect: '/example/list',
          name: 'Example',
          /*meta: {
              title: 'Example',
              icon: 'example'
          },*/
          meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
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
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
        return "/example/list"
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
