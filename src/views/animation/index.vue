<template>
    <div>
        <div>伪类</div>
        <div class="quote">
            <span>小户型</span>
            <span>fjksal</span>
        </div>
        <div>
            fjkafla
        </div>
        <param name="wmode" value="transparent"/>
        <object id="flash-show" type="application/x-shockwave-flash" data="*.swf">
            <param name="movie" value="*.swf"/>
            <param name="wmode" value="transparent"/>
            <img src="*.jpg" alt="用于不支持flash或屏蔽flash时显示"/>
        </object>
        如何在点文字时也选中复选框或单选框？
        <input type="checkbox" id="chk1" name="chk"/><label for="chk1">选项一</label>
        <input type="checkbox" id="chk2" name="chk"/><label for="chk2">选项二</label>

        <input type="radio" id="rad1" name="rad"/><label for="rad1">选项一</label>
        <input type="radio" id="rad2" name="rad"/><label for="rad2">选项二</label>
        <div>
            如何区别display:none与visibility:hidden？
            方法：

            相同的是display:none与visibility:hidden都可以用来隐藏某个元素；
            不同的是display:none在隐藏元素的时候，将其占位空间也去掉；而visibility:hidden只是隐藏了内容而已，其占位空间仍然保留。
        </div>
        <div>
            三、Vue双向绑定的实现
            3.1 简易双绑
            首先，我们把注意力集中在这个属性上：Object.defineProperty。

            Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
            语法：Object.defineProperty(obj, prop, descriptor)
            什么叫做，定义或修改一个对象的新属性，并返回这个对象呢？
            可以从这里看到，这是在对更底层的对象属性进行编程。简单地说，也就是我们对其更底层对象属性的修改或获取的阶段进行了拦截（对象属性更改的钩子函数）。

            在这数据拦截的基础上，我们可以做到数据的双向绑定：
        </div>
        <div id="mvvm">
            <input v-model="text" id="test"></input>
            <div id="test1"></div>
        </div>

        <div>
            let 命令
            基本用法
            ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
            var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

            为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。
            不允许重复声明
            let不允许在相同作用域内，重复声明同一个变量。
            为什么需要块级作用域？
            ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

            第一种场景，内层变量可能会覆盖外层变量。
            第二种场景，用来计数的循环变量泄露为全局变量。
            const声明一个只读的常量。一旦声明，常量的值就不能改变。
            const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
            const的作用域与let命令相同：只在声明所在的块级作用域内有效。
            上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。
            数组的解构赋值 § ⇧
            ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

            以前，为变量赋值，只能直接指定值。
            ES6 允许写成下面这样。

            let [a, b, c] = [1, 2, 3];
            本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
            默认值
            解构赋值允许指定默认值。
            注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
            上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

            如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
            字符的 Unicode 表示法
            ES6 加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
            字符串的遍历器接口
            ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
            模板字符串
            传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）。

            $('#result').append(
            'There are <b>' + basket.count + '</b> ' +
            'items in your basket, ' +
            '<em>' + basket.onSale +
            '</em> are on sale!'
            );
            上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。

            $('#result').append(`
            There are <b>${basket.count}</b> items
            in your basket, <em>${basket.onSale}</em>
            are on sale!
            `);
            模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
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
            Object.defineProperty(obj, 'hello', {
                get: function () {
                    //我们在这里拦截到了数据
                    console.log("get方法被调用");
                },
                set: function (newValue) {
                    //改变数据的值，拦截下来额
                    console.log("set方法被调用");
                    document.getElementById('test').value = newValue;
                    document.getElementById('test1').innerHTML = newValue;
                }
            });
            //obj.hello;
            //obj.hello = '123';
            document.getElementById('test').addEventListener('input', function (e) {
                obj.hello = e.target.value;//触发它的set方法
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
