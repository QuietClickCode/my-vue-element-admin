<template>
    <div>
        css3 入门
        CSS 用于控制网页的样式和布局。
        CSS3 是最新的 CSS 标准。
        <div>你好。这是一个 DIV 元素。</div>

        <div id="div2">你好。这是一个 DIV 元素。</div>
        对CSS3已完全向后兼容，所以你就不必改变现有的设计。浏览器将永远支持CSS2。

        CSS3被拆分为"模块"。旧规范已拆分成小块，还增加了新的。

        一些最重要CSS3模块如下：

        选择器
        盒模型
        背景和边框
        文字特效
        2D/3D转换
        动画
        多列布局
        用户界面

        CSS3 边框
        用 CSS3，你可以创建圆角边框，添加阴影框，并作为边界的形象而不使用设计程序，如 Photoshop。

        在本章中，您将了解以下的边框属性：

        border-radius
        box-shadow
        border-image

        CSS3 圆角
        在 CSS2 中添加圆角棘手。我们不得不在每个角落使用不同的图像。

        在 CSS3 中，很容易创建圆角。

        在 CSS3 中 border-radius 属性被用于创建圆角：

        这是圆角边框！

        CSS3 盒阴影
        CSS3 中的 box-shadow 属性被用来添加阴影:
        CSS3 边界图片
        有了 CSS3 的 border-image 属性，你可以使用图像创建一个边框：

        border-image 属性允许你指定一个图片作为边框！ 用于创建上文边框的原始图像：
        在 div 中使用图片创建边框:


        属性	说明	CSS
        border-image	设置所有边框图像的速记属性。	3
        border-radius	一个用于设置所有四个边框- *-半径属性的速记属性	3
        box-shadow	附加一个或多个下拉框的阴影	3

        CSS3 圆角
        使用 CSS3 border-radius 属性，你可以给任何元素制作 "圆角"。

        CSS3 border-radius - 指定每个圆角
        如果你在 border-radius 属性中只指定一个值，那么将生成 4 个 圆角。

        但是，如果你要在四个角上一一指定，可以使用以下规则：

        四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。
        三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角
        两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角
        一个值： 四个圆角值相同

        CSS3 圆角属性
        属性	描述
        border-radius	所有四个边角 border-*-*-radius 属性的缩写
        border-top-left-radius	定义了左上角的弧度
        border-top-right-radius	定义了右上角的弧度
        border-bottom-right-radius	定义了右下角的弧度
        border-bottom-left-radius	定义了左下角的弧度

        CSS3 背景
        CSS3中包含几个新的背景属性，提供更大背景元素控制。

        在本章您将了解以下背景属性：

        background-image
        background-size
        background-origin
        background-clip
        您还将学习如何使用多重背景图像。

        CSS3 background-image属性
        CSS3中可以通过background-image属性添加背景图片。

        不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。

        可以给不同的图片设置多个不同的属性

        CSS3 background-size 属性
        background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。

        CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。

        你指定的大小是相对于父元素的宽度和高度的百分比的大小。

        CSS3的background-Origin属性
        background-Origin属性指定了背景图像的位置区域。

        content-box, padding-box,和 border-box区域内可以放置背景图像。


        CSS3 多个背景图像
        CSS3 允许你在元素上添加多个背景图像。

        CSS3 教程
        CSS3 教程
        CSS3 简介
        CSS3 边框
        CSS3 圆角
        CSS3 背景
        CSS3 渐变
        CSS3 文本效果
        CSS3 字体
        CSS3 2D 转换
        CSS3 3D 转换
        CSS3 过渡
        CSS3 动画
        CSS3 多列
        CSS3 用户界面
        CSS3 图片
        CSS3 按钮
        CSS3 分页
        CSS3 框大小
        CSS3 弹性盒子
        CSS3 多媒体查询
        CSS3 多媒体查询实例
        CSS3 圆角 CSS3 渐变
        CSS3 背景
        CSS3 背景
        CSS3中包含几个新的背景属性，提供更大背景元素控制。

        在本章您将了解以下背景属性：

        background-image
        background-size
        background-origin
        background-clip
        您还将学习如何使用多重背景图像。

        浏览器支持
        表格中的数字表示支持该属性的第一个浏览器版本号。

        紧跟在 -webkit-, -ms- 或 -moz- 前的数字为支持该前缀属性的第一个浏览器版本号。

        属性
        background-image
        (with multiple backgrounds)	4.0	9.0	3.6	3.1	11.5
        background-size	4.0
        1.0 -webkit-	9.0	4.0
        3.6 -moz-	4.1
        3.0 -webkit-	10.5
        10.0 -o-
        background-origin	1.0	9.0	4.0	3.0	10.5
        background-clip	4.0	9.0	4.0	3.0	10.5
        CSS3 background-image属性
        CSS3中可以通过background-image属性添加背景图片。

        不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。

        实例
        #example1 {
        background-image: url(img_flwr.gif), url(paper.gif);
        background-position: right bottom, left top;
        background-repeat: no-repeat, repeat;
        }

        尝试一下 »

        可以给不同的图片设置多个不同的属性

        实例
        #example1 {
        background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
        }

        尝试一下 »

        CSS3 background-size 属性
        background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。

        CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。

        你指定的大小是相对于父元素的宽度和高度的百分比的大小。

        OperaSafariChromeFirefoxInternet Explorer
        实例 1
        重置背景图像：

        div
        {
        background:url(img_flwr.gif);
        background-size:80px 60px;
        background-repeat:no-repeat;
        }

        尝试一下 »

        OperaSafariChromeFirefoxInternet Explorer
        实例 2
        伸展背景图像完全填充内容区域：

        div
        {
        background:url(img_flwr.gif);
        background-size:100% 100%;
        background-repeat:no-repeat;
        }

        尝试一下 »

        CSS3的background-Origin属性
        background-Origin属性指定了背景图像的位置区域。

        content-box, padding-box,和 border-box区域内可以放置背景图像。



        OperaSafariChromeFirefoxInternet Explorer
        实例
        在 content-box 中定位背景图片：

        div
        {
        background:url(img_flwr.gif);
        background-repeat:no-repeat;
        background-size:100% 100%;
        background-origin:content-box;
        }

        尝试一下 »

        CSS3 多个背景图像
        CSS3 允许你在元素上添加多个背景图像。

        OperaSafariChromeFirefoxInternet Explorer
        实例
        在 body 元素中设置两个背景图像：

        body
        {
        background-image:url(img_flwr.gif),url(img_tree.gif);
        }

        尝试一下 »

        CSS3 background-clip属性
        CSS3中background-clip背景剪裁属性是从指定位置开始绘制。
        新的背景属性
        顺序	描述	CSS
        background-clip	规定背景的绘制区域。	3
        background-origin	规定背景图片的定位区域。	3
        background-size	规定背景图片的尺寸。	3

        CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。

        以前，你必须使用图像来实现这些效果。但是，通过使用 CSS3 渐变（gradients），你可以减少下载的时间和宽带的使用。此外，渐变效果的元素在放大时看起来效果更好，因为渐变（gradient）是由浏览器生成的。
        CSS3 定义了两种类型的渐变（gradients）：

        线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
        径向渐变（Radial Gradients）- 由它们的中心定义

        CSS3 线性渐变
        为了创建一个线性渐变，你必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以设置一个起点和一个方向（或一个角度）。

        background-image: linear-gradient(#e66465, #9198e5);

        线性渐变 - 对角

        你可以通过指定水平和垂直的起始位置来制作一个对角渐变。

        下面的实例演示了从左上角开始（到右下角）的线性渐变。起点是红色，慢慢过渡到黄色：

        使用角度
        如果你想要在渐变的方向上做更多的控制，你可以定义一个角度，而不用预定义方向（to bottom、to top、to right、to left、to bottom right，等等）。

        CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。

        为了添加透明度，我们使用 rgba() 函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。

        下面的实例演示了从左边开始的线性渐变。起点是完全透明，慢慢过渡到完全不透明的红色：
        重复的线性渐变
        repeating-linear-gradient() 函数用于重复线性渐变：


        CSS3 径向渐变
        径向渐变由它的中心定义。

        为了创建一个径向渐变，你也必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。

        CSS3中包含几个新的文本特征。

        在本章中您将了解以下文本属性：

        text-shadow
        box-shadow
        text-overflow
        word-wrap
        word-break


        CSS3 中，text-shadow属性适用于文本阴影。

        阴影效果!

        您指定了水平阴影，垂直阴影，模糊的距离，以及阴影的颜色

        CSS3 box-shadow属性
        CSS3 中 CSS3 box-shadow 属性适用于盒子阴影

        CSS3文本溢出属性指定应向用户如何显示溢出内容

        CSS3的换行
        如果某个单词太长，不适合在一个区域内，它扩展到外面：

        CSS3中，自动换行属性允许您强制文本换行 - 即使这意味着分裂它中间的一个字：

        CSS代码如下：

        CSS3 单词拆分换行
        CSS3 单词拆分换行属性指定换行规则：

        CSS代码如下：


        新文本属性
        属性	描述	CSS
        hanging-punctuation	规定标点字符是否位于线框之外。	3
        punctuation-trim	规定是否对标点字符进行修剪。	3
        text-align-last	设置如何对齐最后一行或紧挨着强制换行符之前的行。	3
        text-emphasis	向元素的文本应用重点标记以及重点标记的前景色。	3
        text-justify	规定当 text-align 设置为 "justify" 时所使用的对齐方法。	3
        text-outline	规定文本的轮廓。	3
        text-overflow	规定当文本溢出包含元素时发生的事情。	3
        text-shadow	向文本添加阴影。	3
        text-wrap	规定文本的换行规则。	3
        word-break	规定非中日韩文本的换行规则。	3
        word-wrap	允许对长的不可分割的单词进行分割并换行到下一行。	3


        CSS3 @font-face 规则
        使用以前 CSS 的版本，网页设计师不得不使用用户计算机上已经安装的字体。

        使用 CSS3，网页设计师可以使用他/她喜欢的任何字体。

        当你发现您要使用的字体文件时，只需简单的将字体文件包含在网站中，它会自动下载给需要的用户。

        您所选择的字体在新的 CSS3 版本有关于 @font-face 规则描述。

        您"自己的"的字体是在 CSS3 @font-face 规则中定义的。

        在新的 @font-face 规则中，您必须首先定义字体的名称（比如 myFirstFont），然后指向该字体文件。

        lamp	提示：URL请使用小写字母的字体，大写字母在IE中会产生意外的结果
        如需为 HTML 元素使用字体，请通过 font-family 属性来引用字体的名称 (myFirstFont)：


        CSS3 字体描述
        下表列出了所有的字体描述和里面的@font-face规则定义：

        描述符	值	描述
        font-family	name	必需。规定字体的名称。
        src	URL	必需。定义字体文件的 URL。
        font-stretch
        normal
        condensed
        ultra-condensed
        extra-condensed
        semi-condensed
        expanded
        semi-expanded
        extra-expanded
        ultra-expanded
        可选。定义如何拉伸字体。默认是 "normal"。
        font-style
        normal
        italic
        oblique
        可选。定义字体的样式。默认是 "normal"。
        font-weight
        normal
        bold
        100
        200
        300
        400
        500
        600
        700
        800
        900
        可选。定义字体的粗细。默认是 "normal"。
        unicode-range	unicode-range	可选。定义字体支持的 UNICODE 字符范围。默认是 "U+0-10FFFF"。

        CSS3 转换
        CSS3 转换可以对元素进行移动、缩放、转动、拉长或拉伸。

        translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。

        translate值（50px，100px）是从左边元素移动50个像素，并从顶部移动100像素。

        rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。

        rotate值（30deg）元素顺时针旋转30度。

        scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数

        scale（2,3）转变宽度为原来的大小的2倍，和其原始大小3倍的高度。

        skew() 方法
        语法
        transform:skew
        包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。

        skewX(<>);表示只在X轴(水平方向)倾斜。
            skewY(>);表示只在Y轴(垂直方向)倾斜。

        matrix()方法和2D变换方法合并成一个。

        matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。

        3D 转换
        CSS3 允许您使用 3D 转换来对元素进行格式化。

        在本章中，您将学到其中的一些 3D 转换方法：

        rotateX()
        rotateY()
        点击下面的元素，来查看 2D 转换与 3D 转换之间的不同之处：

        CSS3中，我们为了添加某种效果可以从一种样式转变到另一个的时候，无需使用Flash动画或JavaScript。用鼠标移过下面的元素：

        CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。

        要实现这一点，必须规定两项内容：

        指定要添加效果的CSS属性
        指定效果的持续时间。
        注意： 如果未指定的期限，transition将没有任何效果，因为默认值是0。

        指定的CSS属性的值更改时效果会发生变化。一个典型CSS属性的变化是用户鼠标放在一个元素上时：

        要添加多个样式的变换效果，添加的属性由逗号分隔：

        CSS3 可以创建动画，它可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果

        CSS3 @keyframes 规则
        要创建 CSS3 动画，你需要了解 @keyframes 规则。

        @keyframes 规则是创建动画。

        @keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。

        CSS3 动画
        当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。

        指定至少这两个CSS3的动画属性绑定向一个选择器：

        规定动画的名称
        规定动画的时长

        CSS3动画是什么？
        动画是使元素从一种样式逐渐变化为另一种样式的效果。

        您可以改变任意多的样式任意多的次数。

        请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

        0% 是动画的开始，100% 是动画的完成。

        为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。

        下面的表格列出了 @keyframes 规则和所有动画属性：

        属性	描述	CSS
        @keyframes	规定动画。	3
        animation	所有动画属性的简写属性，除了 animation-play-state 属性。	3
        animation-name	规定 @keyframes 动画的名称。	3
        animation-duration	规定动画完成一个周期所花费的秒或毫秒。默认是 0。	3
        animation-timing-function	规定动画的速度曲线。默认是 "ease"。	3
        animation-fill-mode	规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。	3
        animation-delay	规定动画何时开始。默认是 0。	3
        animation-iteration-count	规定动画被播放的次数。默认是 1。	3
        animation-direction	规定动画是否在下一周期逆向地播放。默认是 "normal"。	3
        animation-play-state	规定动画是否正在运行或暂停。默认是 "running"。	3

        CSS3 可以将文本内容设计成像报纸一样的多列布局，CSS3 用户界面
        在 CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框。

        在本章中，您将了解以下的用户界面属性：

        resize
        box-sizing
        outline-offsetCSS3 用户界面
        在 CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框。

        在本章中，您将了解以下的用户界面属性：

        resize
        box-sizing
        outline-offset

        如下实例:

        CSS3中，resize属性指定一个元素是否应该由用户去调整大小。

        这个 div 元素由用户调整大小。 (在 Firefox 4+, Chrome, 和 Safari中)
        CSS代码如下：

        CSS3 方框大小调整(Box Sizing)
        box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。

        CSS3 外形修饰（outline-offset ）
        outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

        轮廓与边框有两点不同：

        轮廓不占用空间
        轮廓可能是非矩形

        新的用户界面特性
        属性	说明	CSS
        appearance	允许您使一个元素的外观像一个标准的用户界面元素	3
        box-sizing	允许你以适应区域而用某种方式定义某些元素	3
        icon	为创作者提供了将元素设置为图标等价物的能力。	3
        nav-down	指定在何处使用箭头向下导航键时进行导航	3
        nav-index	指定一个元素的Tab的顺序	3
        nav-left	指定在何处使用左侧的箭头导航键进行导航	3
        nav-right	指定在何处使用右侧的箭头导航键进行导航	3
        nav-up	指定在何处使用箭头向上导航键时进行导航	3
        outline-offset	外轮廓修饰并绘制超出边框的边缘	3
        resize	指定一个元素是否是由用户调整大小	3
    </div>
</template>
<style scoped>
    div
    {
        border-image:url(border.png) 30 30 round;
        -webkit-border-image:url(border.png) 30 30 round; /* Safari 5 and older */
        -o-border-image:url(border.png) 30 30 round; /* Opera */
    }
    div
    {
        box-shadow: 10px 10px 5px #888888;
    }

    div#div2 {
        transform: rotate(30deg);
        -ms-transform: rotate(30deg); /* IE 9 */
        -webkit-transform: rotate(30deg); /* Safari and Chrome */
    }

    div
    {
        border:2px solid;
        border-radius:25px;
    }
</style>
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


