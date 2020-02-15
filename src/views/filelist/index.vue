<template>
    <div style="text-align:center">
        <div id="filelist" style="text-align: center;">
            <div style="text-align: center">
                <el-link type="primary" style="font-size: large">文件列表</el-link>
            </div>


            <el-table height="430"
                      :data="items"
            >
                <el-table-column
                    prop="id"
                    label="Id" fixed
                    width="80px"
                ></el-table-column>
                <el-table-column width="80px"
                                 label="文件名"
                >
                    <template slot-scope="scope">
                        <span v-html="scope.row.fileName"></span>
                    </template>
                </el-table-column>
                <el-table-column width="600px"
                                 prop="filePath"
                                 label="文件路径"
                ></el-table-column>
                <!-- <el-table-column
                     label="文件内容">
                     <template slot-scope="scope">
                         <span v-html="scope.row.fileContent"></span>
                     </template>
                 </el-table-column>-->
                <el-table-column
                    width="80px"
                    label="文件大小">
                    <template slot-scope="scope">
                        <span v-html="scope.row.fileSize"></span>
                    </template>
                </el-table-column>
                <el-table-column width="80px"
                                 prop="fileType"
                                 label="文件类型">
                </el-table-column>
                <el-table-column
                    width="80px"
                    prop="createtime"
                    label="创建时间">
                </el-table-column>
                <el-table-column width="80px"
                                 prop="createuser"
                                 label="创建人">
                </el-table-column>
                <el-table-column fixed="right" width="200px"
                                 label="操作">
                    <template slot-scope="scope">
                        <el-button @click="adddetail(scope.row)" type="text" size="small">新增</el-button>
                        <el-button @click="viewdetail(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click="deletedetail(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block" style="text-align: center">
                <el-pagination
                    layout="prev, pager, next"
                    :total="length"
                    @current-change="handleCurrentChange"
                    :current-page="currentpage"
                >
                </el-pagination>
            </div>
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
                <span>删除后不可恢复,确认删除?</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleClose">确 定</el-button>
  </span>
            </el-dialog>
        </div>
        <div id="viewfiledetail">
            <el-input type="textarea" :value="currentRow.fileContent" autosize readonly></el-input>
            <el-button @click="exit">退出</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import $ from 'jquery'
    import request from '@/utils/request'

    var store = {
        queryForm: {keyword: '', startpage: 0, location: '', system: '', createtime: [], browser: '', device: ''},
        system: [],
        browser: [],
        device: [],
        items: [],
        length: 0,
        currentpage: 1,
        updatemarkdowndetailtitle: '',
        updatemarkdowndetailcontent: '',
        viewmarkdowndetailtitle: '',
        viewmarkdowndetailcontent: '',
        currentId: '',
        dialogVisible: false,
        currentRow: "",
        toolbars: {
            bold: true, // 粗体
            italic: true, // 斜体
            header: true, // 标题
            underline: true, // 下划线
            mark: true, // 标记
            superscript: true, // 上角标
            quote: true, // 引用
            ol: true, // 有序列表
            link: true, // 链接
            imagelink: true, // 图片链接
            help: true, // 帮助
            code: true, // code
            subfield: true, // 是否需要分栏
            fullscreen: true, // 全屏编辑
            readmodel: true, // 沉浸式阅读
            /* 1.3.5 */
            undo: true, // 上一步
            trash: true, // 清空
            save: true, // 保存（触发events中的save事件）
            /* 1.4.2 */
            navigation: true // 导航目录
        }
    }
    export default {
        name: 'filelist',
        data() {
            return store
        },
        created: function () {
            /*this.init()*/
        },
        mounted: function () {
            this.query()
        },
        methods: {
            exit:function () {
                $('#filelist').show()
                $('#viewfiledetail').hide()
            },
            handleClose: function () {
                var vueThis = this
                vueThis.dialogVisible = false
                var filePath = vueThis.currentRow.filePath.substring(vueThis.currentRow.filePath.lastIndexOf("/") + 1);
                console.log(filePath);
                request({
                    url: 'deleteFile?id=' + vueThis.currentRow.id + "&filePath=/group1/M00/00/00/" + filePath,
                    method: 'get',
                }).then(function (response) {
                    vueThis.query();
                    vueThis.$message('删除成功')
                })
                    .catch(function (error) {
                        console.log(error)
                    })
                /*axios({
                    url:process.env.VUE_APP_BASE_API+ '/deletemarkdown',
                    method: 'post',
                    data: {
                        'id': vueThis.currentRow.id
                    },
                })
                    .then(function (response) {
                        if (response.data == 1) {
                            vueThis.$message('删除成功')
                            vueThis.$router.go(0)
                        }
                    })
                    .catch(function (error) {
                        console.log('--------------------')
                        console.log(error)
                    })*/
            },
            updatemarkdown: function () {
                var vueThis = this
                /*axios({
                    url: process.env.VUE_APP_BASE_API+'/updatemarkdown',
                    method: 'post',
                    data: {
                        'title': vueThis.updatemarkdowndetailtitle,
                        'content': vueThis.updatemarkdowndetailcontent,
                        'id': vueThis.currentId
                    },
                })
                    .then(function (response) {
                        if (response.data == 1) {
                            vueThis.$message('保存成功')
                            vueThis.$router.go(0)
                        }
                    })
                    .catch(function (error) {
                        console.log('--------------------')
                        console.log(error)
                    })*/
                request({
                    url: 'updatemarkdown',
                    method: 'post',
                    data: {
                        'title': vueThis.updatemarkdowndetailtitle,
                        'content': vueThis.updatemarkdowndetailcontent,
                        'id': vueThis.currentId
                    }
                }).then(function (response) {
                    if (response == 1) {
                        vueThis.$message('保存成功')
                    }
                })
                    .catch(function (error) {
                        console.log(error)
                    })

            },
            enter: function () {
                $('#markdownlist').show()
                $('#viewmarkdowndetail').hide()
                $('#updatemarkdowndetail').hide()
            },
            viewdetail: function (row) {
                $('#filelist').hide()
                $('#viewfiledetail').show()
                this.currentRow = row;

            },
            adddetail: function (row) {
                this.$router.push({
                    path: '/fileupload/index'
                })
            },
            deletedetail: function (row) {
                var vueThis = this
                vueThis.dialogVisible = true;
                vueThis.currentRow = row;
            },
            updatedetail: function (row) {
                $('#markdownlist').hide()
                $('#updatemarkdowndetail').show()
                this.updatemarkdowndetailcontent = row.content
                this.updatemarkdowndetailtitle = row.title
                this.currentId = row.id
            },
            /*init: function () {
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
            },*/
            handleCurrentChange(val) {
                this.queryForm.startpage = 0 + (val - 1) * 10
                this.query()
                this.currentpage = val
            },
            query: function () {
                var vueThis = this
                request({
                    url: 'queryFileList',
                    method: 'post'
                }).then(function (response) {
                    console.log(response)
                    vueThis.items = response
                })
                    .catch(function (error) {
                        console.log(error)
                    })
            }

        }
    }
</script>

<style>
    #viewtitle {
        height: 50px; /*至少300px*/
    }

    #viewcontent {
        height: 500px;
    }

    #updatetitle {
        height: 50px; /*至少300px*/
    }

    #updatecontent {
        height: 500px;
    }
</style>
