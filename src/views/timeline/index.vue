<template>
    <!--时间轴-->
    <div class="timeline">
        <hzqing-vue-timeline
            timelineColor="#5bbcd5"
            timeContentColor="#fff"
            :dataList="data"
        ></hzqing-vue-timeline>
    </div>
</template>

<script>
    import axios from 'axios'

    var store = {
        queryForm: {keyword: '', startpage: 0, location: '', system: '', createtime: [], browser: '', device: ''},
        system: [],
        browser: [],
        device: [],
        items: [],
        length: 0,
        currentpage: 1,
        data: [
            {
                time: 1522372393000,
                img: 'static/touxiang.jpeg',
                title: 'hzqing.com',
                content: '这是衡钊清的个人博客'
            },
            {
                time: '2018-03-30 14:36:35',
                img: 'static/one.jpeg',
                title: '这是一个简单的vue时间轴插件',
                content: '这是一个简单的vue时间轴插件，使用非常的方便'
            },
            {
                time: 1522372393000,
                img: 'static/three.jpg',
                title: '努力奋斗',
                content: '当你发现你的才华撑不起野心时，就请安静下来学习吧~~~'
            }
        ]
    }
    export default {
        name: 'ainotelist',
        data() {
            return store
        },
        created: function () {
            this.init()
        },
        mounted: function () {
            this.btnquery()

        },
        methods: {
            init: function () {
                var vueThis = this
                axios.post(process.env.VUE_APP_BASE_API + '/queryBrowser', {})
                    .then(function (response) {
                        vueThis.browser = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
                axios.post(process.env.VUE_APP_BASE_API + '/querySystem', {})
                    .then(function (response) {
                        vueThis.system = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
                axios.post(process.env.VUE_APP_BASE_API + '/queryDevice', {})
                    .then(function (response) {
                        vueThis.device = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            handleCurrentChange(val) {
                this.queryForm.startpage = 0 + (val - 1) * 10
                this.query()
                this.currentpage = val
            },
            query: function () {
                var vueThis = this
                axios({
                    url: process.env.VUE_APP_BASE_API + '/queryList',
                    method: 'post',
                    data: vueThis.queryForm,
                })
                    .then(function (response) {
                        vueThis.items = response.data
                        console.log(JSON.stringify(vueThis.items) + '----------------')
                    })
                    .catch(function (error) {
                        console.log('--------------------')
                        console.log(error)
                    })
                axios({
                    url: process.env.VUE_APP_BASE_API + '/queryListCount',
                    method: 'post',
                    data: vueThis.queryForm,
                })
                    .then(function (response) {
                        vueThis.length = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            btnquery: function () {
                var vueThis = this
                /*条件查询就要清空起始页这个查询条件,不然会出问题*/
                vueThis.queryForm.startpage = 0
                vueThis.currentpage = 1
                axios({
                    url: process.env.VUE_APP_BASE_API + '/queryList',
                    method: 'post',
                    data: vueThis.queryForm,
                })
                    .then(function (response) {
                        vueThis.items = response.data
                        console.log(JSON.stringify(vueThis.items))
                    })
                    .catch(function (error) {
                        console.log(vueThis.items + '-=================')
                    })
                axios({
                    url: process.env.VUE_APP_BASE_API + '/queryListCount',
                    method: 'post',
                    data: vueThis.queryForm,
                })
                    .then(function (response) {
                        vueThis.length = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }

        }
    }
</script>

<style>
    /*输入框水平居中*/
    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
