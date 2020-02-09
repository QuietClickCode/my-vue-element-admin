<template>
    <div style="text-align:center">
        <div style="text-align: center">
            <el-link type="primary" style="font-size: large">便签记录详情</el-link>
        </div>
        <!--搜索条件-->
        <div>
            <div style="display:inline">
                <span style="margin-left: 0px;">关键字</span>
                <el-input style="margin-bottom:5px;width: 200px" v-model="queryForm.keyword"></el-input>
                <span style="margin-left: 0px;">位置</span>
                <el-input style="margin-bottom:5px;width: 200px" v-model="queryForm.location"></el-input>
                <span style="margin-left: 0px;">搜索时间</span>
                <el-date-picker style="margin-bottom:5px;width: 400px"
                                v-model="queryForm.createtime"
                                type="datetimerange"
                                format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                </el-date-picker>
            </div>
        </div>

        <div>
            <div style="display:inline">
                <span style="margin-left: 0px;">操作系统</span>
                <el-select style="margin-bottom:5px;width: 200px" v-model="queryForm.system" placeholder="请选择">
                    <el-option
                        label="请选择"
                        value="">
                    </el-option>
                    <el-option
                        v-for="item in system"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                </el-select>
                <span style="margin-left: 37px;">浏览器</span>
                <el-select style="margin-bottom:5px;width: 300px" v-model="queryForm.browser" placeholder="请选择">
                    <el-option
                        label="请选择"
                        value="">
                    </el-option>
                    <el-option
                        v-for="item in browser"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                </el-select>
                <span style="margin-left: 0px;">设备</span>
                <el-select style="margin-bottom:5px;width: 300px" v-model="queryForm.device" placeholder="请选择">
                    <el-option
                        label="请选择"
                        value="">
                    </el-option>
                    <el-option
                        v-for="item in device"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                </el-select>
            </div>
        </div>

        <el-input v-model="content" type="textarea" placeholder="写点什么吧~"></el-input>
        <el-button @click="save">保存</el-button>
        <el-table height="430"
                  :data="items"
        >
            <el-table-column
                prop="id"
                label="Id" fixed
            ></el-table-column>
            <el-table-column width="100px"
                             prop="user.id"
                             label="用户编号"
            ></el-table-column>
            <el-table-column width="100px"
                             prop="user.username"
                             label="用户名"
            ></el-table-column>
            <el-table-column width="100px"
                             prop="user.password"
                             label="密码"
            ></el-table-column>
            <el-table-column width="400px"
                             prop="content"
                             label="内容"
            ></el-table-column>
            <el-table-column width="130px"
                             prop="location.ip"
                             label="外网IP">
            </el-table-column>
            <el-table-column width="120px"
                             prop="location.localIp"
                             label="局域网IP">
            </el-table-column>
            <el-table-column width="150px"
                             prop="location.location"
                             label="位置">
            </el-table-column>
            <el-table-column width="100px"
                             prop="location.x"
                             label="经度">
            </el-table-column>
            <el-table-column width="100px"
                             prop="location.y"
                             label="纬度">
            </el-table-column>

            <el-table-column width="100px"
                             prop="browserInfo.system"
                             label="操作系统">
            </el-table-column>
            <el-table-column width="100px"
                             prop="browserInfo.browserType"
                             label="浏览器类型">
            </el-table-column>
            <el-table-column width="120px"
                             prop="browserInfo.browserVersion"
                             label="浏览器版本">
            </el-table-column>
            <el-table-column width="100px"
                             prop="location.keyword"
                             label="设备">
            </el-table-column>
            <el-table-column fixed="right" width="200px"
                             prop="createtime"
                             label="创建时间">
            </el-table-column>
            <el-table-column fixed="right" width="200px"
                             label="操作">
                <template slot-scope="scope">
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
        <div style="text-align: center">
            <el-button @click="btnquery">查询</el-button>
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
</template>

<script>
    import axios from 'axios'
    import request from '@/utils/request'
    var store = {
        dialogVisible: false,
        content: "",
        queryForm: {keyword: "", startpage: 0, location: "", system: "", createtime: [], browser: "", device: ""},
        system: [],
        browser: [],
        device: [],
        items: [],
        length: 0,
        currentpage: 1
    };
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
            handleClose: function () {
                console.log("dd")
                var vueThis = this
                vueThis.dialogVisible = false
                request({
                    url: 'deleteAINote',
                    method: 'post',
                    data: {
                        'id': vueThis.currentRow.id
                    }
                }).then(function (response) {
                    if (response == 1) {
                        vueThis.$message('删除成功')
                        vueThis.query();
                    }
                })
                    .catch(function (error) {
                        console.log(error)
                    })
                /*axios({
                    url:'https://114.55.94.186'+ '/deletemarkdown',
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
            deletedetail: function (row) {
                var vueThis = this
                vueThis.dialogVisible = true;
                vueThis.currentRow = row;
            },
            save: function () {
                var vueThis = this;
                axios({
                    url: process.env.VUE_APP_BASE_API + "/note",
                    method: 'post',
                    data: JSON.stringify({
                        "content": vueThis.content,
                    }),
                    headers:
                        {
                            'Content-Type': 'application/json'
                        }
                })
                    .then(function (response) {
                        if (response.data.status == 0) {
                            vueThis.$message("保存成功")
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            adddetail: function (row) {
                this.$router.push({
                    path: '/ainote/index'
                })
            },
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
                this.query();
                this.currentpage = val
            },
            query: function () {
                var vueThis = this
                axios({
                    url: process.env.VUE_APP_BASE_API + "/queryAiNote",
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
                    url: process.env.VUE_APP_BASE_API + "/queryAiNoteCount",
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
                vueThis.queryForm.startpage = 0;
                vueThis.currentpage = 1;
                axios({
                    url: process.env.VUE_APP_BASE_API + '/queryAiNote',
                    method: 'post',
                    data: vueThis.queryForm,
                })
                    .then(function (response) {
                        vueThis.items = response.data
                    })
                    .catch(function (error) {
                        console.log(vueThis.items + '-=================')
                    })
                axios({
                    url: process.env.VUE_APP_BASE_API + '/queryAiNoteCount',
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
