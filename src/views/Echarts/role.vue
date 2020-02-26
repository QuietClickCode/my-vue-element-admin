<template>
    <div class="app-container">
        <div class="item">
            <div id="wclphmc" class="wclphmcchart"/>
        </div>
        <div class="text item">
            <div id="zjhywcl" class="zjhywcl"/>
        </div>
    </div>
</template>

<script>
    import path from 'path'
    import {deepClone} from '@/utils'
    import {getRoutes, getRoles, addRole, deleteRole, updateRole} from '@/api/role'

    const defaultRole = {
        key: '',
        name: '',
        description: '',
        routes: []
    }

    export default {
        data() {
            return {
                role: Object.assign({}, defaultRole),
                routes: [],
                rolesList: [],
                dialogVisible: false,
                dialogType: 'new',
                checkStrictly: false,
                defaultProps: {
                    children: 'children',
                    label: 'title'
                }
            }
        },
        mounted: function () {
            this.drawwclphmc()
            this.drawzjhywcl()
        },
        computed: {
            routesData() {
                return this.routes
            }
        },
        created() {
            // Mock: get all routes and roles list from server
            this.getRoutes()
            this.getRoles()
        },
        methods: {
            // 周计划与完成率
            drawzjhywcl: function () {
                var vueThis = this
                const myChart = vueThis.$echarts.init(document.getElementById('zjhywcl'))
                myChart.setOption({
                    color: 'rgb(196, 118, 251)',
                    grid: {
                        show: false,
                        left: 0
                    },
                    xAxis: {
                        show: false,
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        max: 2000,
                        show: false,
                        type: 'value'
                    },
                    series: [{
                        lineStyle: {
                            color: '#fff'
                        },
                        symbol: 'none',
                        smooth: true,
                        data: [820, 100, 901, 200, 400, 700, 290, 1290, 330, 820],
                        type: 'line',
                        areaStyle: {}
                    }]
                })
            },
            // 完成率排行名次
            drawwclphmc: function () {
                var vueThis = this
                const myChart = vueThis.$echarts.init(document.getElementById('wclphmc'))
                myChart.setOption({
                    /*调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。*/
                    color: ['#3398DB'],
                    grid: {
                        show: false,
                        left: '0%',
                        bottom: '10%'
                    },
                    xAxis: [
                        {
                            show: false,
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            max: 100,
                            show: false,
                            type: 'value'
                        }
                    ],

                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '50%',
                            data: [{
                                value: 10,
                                itemStyle: {
                                    color: 'rgb(199, 127, 252)'
                                }
                            }, {
                                value: 20,
                                itemStyle: {
                                    color: 'rgb(55, 145, 255)'
                                }
                            }, {
                                value: 10,
                                itemStyle: {
                                    color: 'rgb(199, 127, 252)'
                                }
                            }, {
                                value: 20,
                                itemStyle: {
                                    color: 'rgb(55, 145, 255)'
                                }
                            }, {
                                value: 10,
                                itemStyle: {
                                    color: 'rgb(199, 127, 252)'
                                }
                            }, {
                                value: 30,
                                itemStyle: {
                                    color: 'rgb(55, 145, 255)'
                                }
                            }, {
                                value: 40,
                                itemStyle: {
                                    color: 'rgb(199, 127, 252)'
                                }
                            }, {
                                value: 10,
                                itemStyle: {
                                    color: 'rgb(199, 127, 252)'
                                }
                            }, {
                                value: 20,
                                itemStyle: {
                                    color: 'rgb(55, 145, 255)'
                                }
                            }, {
                                value: 10,
                                itemStyle: {
                                    color: 'rgb(199, 127, 252)'
                                }
                            }, {
                                value: 30,
                                itemStyle: {
                                    color: 'rgb(55, 145, 255)'
                                }
                            }, {
                                value: 40,
                                itemStyle: {
                                    color: 'rgb(199, 127, 252)'
                                }
                            }]
                        }
                    ]
                })
            },
            async getRoutes() {
                const res = await getRoutes()
                this.serviceRoutes = res.data
                this.routes = this.generateRoutes(res.data)
            },
            async getRoles() {
                const res = await getRoles()
                this.rolesList = res.data
            },

            // Reshape the routes structure so that it looks the same as the sidebar
            generateRoutes(routes, basePath = '/') {
                const res = []

                for (let route of routes) {
                    // skip some route
                    if (route.hidden) {
                        continue
                    }

                    const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

                    if (route.children && onlyOneShowingChild && !route.alwaysShow) {
                        route = onlyOneShowingChild
                    }

                    const data = {
                        path: path.resolve(basePath, route.path),
                        title: route.meta && route.meta.title

                    }

                    // recursive child routes
                    if (route.children) {
                        data.children = this.generateRoutes(route.children, data.path)
                    }
                    res.push(data)
                }
                return res
            },
            generateArr(routes) {
                let data = []
                routes.forEach(route => {
                    data.push(route)
                    if (route.children) {
                        const temp = this.generateArr(route.children)
                        if (temp.length > 0) {
                            data = [...data, ...temp]
                        }
                    }
                })
                return data
            },
            handleAddRole() {
                this.role = Object.assign({}, defaultRole)
                if (this.$refs.tree) {
                    this.$refs.tree.setCheckedNodes([])
                }
                this.dialogType = 'new'
                this.dialogVisible = true
            },
            handleEdit(scope) {
                this.dialogType = 'edit'
                this.dialogVisible = true
                this.checkStrictly = true
                this.role = deepClone(scope.row)
                this.$nextTick(() => {
                    const routes = this.generateRoutes(this.role.routes)
                    this.$refs.tree.setCheckedNodes(this.generateArr(routes))
                    // set checked state of a node not affects its father and child nodes
                    this.checkStrictly = false
                })
            },
            handleDelete({$index, row}) {
                this.$confirm('Confirm to remove the role?', 'Warning', {
                    confirmButtonText: 'Confirm',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                })
                    .then(async () => {
                        await deleteRole(row.key)
                        this.rolesList.splice($index, 1)
                        this.$message({
                            type: 'success',
                            message: 'Delete succed!'
                        })
                    })
                    .catch(err => {
                        console.error(err)
                    })
            },
            generateTree(routes, basePath = '/', checkedKeys) {
                const res = []

                for (const route of routes) {
                    const routePath = path.resolve(basePath, route.path)

                    // recursive child routes
                    if (route.children) {
                        route.children = this.generateTree(route.children, routePath, checkedKeys)
                    }

                    if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
                        res.push(route)
                    }
                }
                return res
            },
            async confirmRole() {
                const isEdit = this.dialogType === 'edit'

                const checkedKeys = this.$refs.tree.getCheckedKeys()
                this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)

                if (isEdit) {
                    await updateRole(this.role.key, this.role)
                    for (let index = 0; index < this.rolesList.length; index++) {
                        if (this.rolesList[index].key === this.role.key) {
                            this.rolesList.splice(index, 1, Object.assign({}, this.role))
                            break
                        }
                    }
                } else {
                    const {data} = await addRole(this.role)
                    this.role.key = data.key
                    this.rolesList.push(this.role)
                }

                const {description, key, name} = this.role
                this.dialogVisible = false
                this.$notify({
                    title: 'Success',
                    dangerouslyUseHTMLString: true,
                    message: `
            <div>Role Key: ${key}</div>
            <div>Role Nmae: ${name}</div>
            <div>Description: ${description}</div>
          `,
                    type: 'success'
                })
            },
            // reference: src/view/layout/components/Sidebar/SidebarItem.vue
            onlyOneShowingChild(children = [], parent) {
                let onlyOneChild = null
                const showingChildren = children.filter(item => !item.hidden)

                // When there is only one child route, the child route is displayed by default
                if (showingChildren.length === 1) {
                    onlyOneChild = showingChildren[0]
                    onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
                    return onlyOneChild
                }

                // Show parent if there are no child route to display
                if (showingChildren.length === 0) {
                    onlyOneChild = {...parent, path: '', noShowingChildren: true}
                    return onlyOneChild
                }

                return false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app-container {
        .wclphmcchart {
            width: 110%;
            height: 200px;
            margin-bottom: -20px;
        }
        .zjhywcl {
            width: 110%;
            height: 200px;
            margin-bottom: -60px;
        }
        .roles-table {
            margin-top: 30px;
        }
        .permission-tree {
            margin-bottom: 30px;
        }
    }
</style>
