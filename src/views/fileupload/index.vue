<template>
    <div>
        <div style="text-align: center">
            <el-link type="primary" style="font-size: large">文件上传</el-link>
        </div>

        <!--   <input type="file" name="file" id="file" @change="uploadImage">
           {{progress}}%
           <el-progress type="circle" :percentage="progress"></el-progress>-->
        <el-upload
            :headers="header"
            :on-exceed="beyondNumber"
            :on-success="handleAvatarSuccess"
            :action="uploadurl"
            :file-list="fileList"
            multiple
            :on-remove="handleRemove">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">支持各种类型的文件,最好不要存超过1m的文件,fastDFS适合小文件,大文件用hadoop</div>
        </el-upload>
        <ol>
            <li v-for="item in uploadresult">{{item}}</li>
        </ol>
    </div>
</template>
<script>
    import axios from 'axios'
    import $ from 'jquery'

    export default {
        name: 'index',
        data() {
            return {
                //上传到服务器
                uploadurl: process.env.VUE_APP_BASE_API + "/upload",
                //上传到本地
                //uploadurl: process.env.VUE_APP_BASE_API + "/uploadlocal",
                //上传到本地缓冲接口
                //uploadurl: process.env.VUE_APP_BASE_API + "/uploadlocalfast",
                uploadresult: [],
                result: [],
                fileList: [],
                keyword: "",
                deleteid: '',
                imageUrl: '',
                header: {
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6amoifQ.WduZcdFyZSMdrx82JOYFbAKoDPQ4evDFPvt6i6USK5Y'
                },
                article: [],
                keyword: '',
                progress: 0,
            }
        },
        created: function () {
            //this.query()
        },
        methods: {
            queryDocument: function () {
                var vueThis = this;
                axios({
                    method: 'post',

                    url: process.env.HOST + '/toqueryDocument',
                    data: {
                        keyword: vueThis.keyword
                    },
                })
                    .then(function (response) {
                        console.log(response)
                        console.log("--------");
                        vueThis.$router.push('/' + response.data.url)
                        vueThis.result = response.data.data;
                        vueThis.$message(response.data.msg)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            deleteDocument: function () {
                var vueThis = this;
                axios({
                    method: 'post',

                    url: process.env.HOST + '/deleteDocumentById',
                    data: {
                        deleteid: vueThis.deleteid
                    },
                })
                    .then(function (response) {
                        console.log(response)
                        vueThis.$message(response.data.msg)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            handleAvatarSuccess(res, file, fileList) {
                console.log(res)
                console.log(file)
                console.log(fileList)
                this.$message(res.msg);
                this.uploadresult.push(res.url);
            },
            beyondNumber: function () {

            },
            handleLogoSuccess: function () {
            },
            handleRemove: function () {
            },
            uploadImage: function (file) {
                var vueThis = this
                var formData = new FormData()
                // debugger
                formData.append('file', $('#file')[0].files[0])
                axios({
                    onUploadProgress: function (progressEvent) {
                        // 对原生进度事件的处理
                        var complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
                        vueThis.progress = parseInt((progressEvent.loaded / progressEvent.total * 100).toFixed(0))
                    },
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    method: 'post',
                    url: process.env.HOST + '/uploadImg',
                    data: formData
                })
                    .then(function (response) {
                        vueThis.$message(response.data.msg)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            /*highlight: function () {
                var oBox = document.getElementsByTagName('table')[1]
                var oContent = oBox.innerHTML
                var val = this.keyword
                var findText = oContent.split(val)
                oBox.innerHTML = findText.join('<span style="color:red;">' + val + '</span> ')
            },*/
            query: function () {
                var vueThis = this
                axios({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'post',
                    url: process.env.HOST + '/detaillist',
                    data: JSON.stringify({
                        'content': vueThis.keyword.substring(1)
                    }),
                })
                    .then(function (response) {
                        vueThis.article = response.data.data
                        console.log(response.data.data)
                        vueThis.keyword = response.data.msg
                        //这儿必须延迟1秒执行,不然空白
                        /*setTimeout(function () {
                            vueThis.highlight()
                        }, 100)*/
                    })
                    .catch(function (error) {
                        console.log(vueThis.items + '-=================')
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
