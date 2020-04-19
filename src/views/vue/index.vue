<template>
    <div>
        三、Vue双向绑定的实现
        3.1 简易双绑
        首先，我们把注意力集中在这个属性上：Object.defineProperty。

        Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
        语法：Object.defineProperty(obj, prop, descriptor)

        什么叫做，定义或修改一个对象的新属性，并返回这个对象呢？

        <div id="mvvm">
            <input v-model="d" id="test">{{text}}
            <div>{{d}}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'


    var store = {
        text: "",
        article: [],
        keyword: ''

    }
    export default {
        name: 'demo',
        data() {
            return store
        },
        created: function () {
            this.query()
        },
        mounted: function () {
            var obj = {};

            function nodeContainer(node, vm, flag){
                var flag = flag || document.createDocumentFragment();

                var child;
                while(child = node.firstChild){
                    compile(child, vm);
                    flag.appendChild(child);
                    if(child.firstChild){
                        nodeContainer(child, vm, flag);
                    }
                }
                return flag;
            }

//编译
            function compile(node, vm){
                var reg = /\{\{(.*)\}\}/g;
                if(node.nodeType === 1){
                    var attr = node.attributes;
                    //解析节点的属性
                    for(var i = 0;i < attr.length; i++){
                        if(attr[i].nodeName == 'v-model'){

                            var name = attr[i].nodeValue;
                            node.addEventListener('input',function(e){
                                vm[name] = e.target.value;
                            });

                            node.value = vm[name];//讲实例中的data数据赋值给节点
                            node.removeAttribute('v-model');
                        }
                    }
                }
                //如果节点类型为text
                if(node.nodeType === 3){

                    if(reg.test(node.nodeValue)){
                        // console.dir(node);
                        var name = RegExp.$1;//获取匹配到的字符串
                        name = name.trim();
                        // node.nodeValue = vm[name];
                        new Watcher(vm,node,name);
                    }
                }
            }

            function defineReactive (obj, key, value){
                var dep = new Dep();
                Object.defineProperty(obj,key,{
                    get:function(){
                        console.log(Dep.global);
                        if(Dep.global){
                            dep.add(Dep.global);
                        }
                        console.log("get了值"+value);
                        return value;
                    },
                    set:function(newValue){
                        if(newValue === value){
                            return;
                        }
                        value = newValue;
                        console.log("set了最新值"+value);
                        dep.notify();
                    }
                })
            }

            function observe (obj,vm){
                Object.keys(obj).forEach(function(key){
                    defineReactive(vm,key,obj[key]);
                })
            }

            function Vue(options){
                this.data = options.data;
                var data = this.data;
                observe(data,this);
                var id = options.el;
                var dom = nodeContainer(document.getElementById(id),this);
                document.getElementById(id).appendChild(dom);
            }

            function Dep(){
                this.subs = [];
            }
            Dep.prototype ={
                add:function(sub){
                    this.subs.push(sub);
                },
                notify:function(){
                    this.subs.forEach(function(sub){
                        console.log(sub);
                        sub.update();
                    })
                }
            }


            function Watcher(vm,node,name){
                Dep.global = this;
                this.name = name;
                this.node = node;
                this.vm = vm;
                this.update();
                Dep.global = null;
            }

            Watcher.prototype = {
                update:function(){
                    this.get();
                    switch (this.node.nodeType) {
                        case 1:
                            this.node.value = this.value;
                            break;
                        case 3:
                            this.node.nodeValue = this.value;
                            break;
                        default: break;
                    }
                },
                get:function(){
                    this.value = this.vm[this.name];
                }
            }


            var Demo = new Vue({
                el:'mvvm',
                data:{
                    text:'HelloWorld',
                    d:'123'
                }
            })
        },
        methods: {
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
                    url: process.env.VUE_APP_BASE_API + '/detaillist',
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
    .quote:before, .quote:after {
        content: "";
        display: inline-block;
        width: 5%;
        margin: 5px 1%;
        border-bottom: 1px solid blue;
    }

    /*输入框水平居中*/
    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
