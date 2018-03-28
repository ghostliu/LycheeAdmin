<template>
    <div id="webApp">
        <el-container>
            <el-header class="header-nav">
                <div class="logo">
                    <h1>
            <router-link to="/index" tag="a">江阴天通铝业科技有限公司</router-link>
          </h1>
                </div>
                <div class="navigation">
                    <nav class="menu">
                        <ul>
                            <li>
                                <router-link to="/home/index" tag="a">首页</router-link>
                            </li>
                            <li>
                                <router-link to="/product/index" tag="a">产品</router-link>
                            </li>
                            <li>
                                <router-link to="/about/index" tag="a">关于</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </el-header>
            <router-view></router-view>
            <el-footer class="footer">
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content footer-left">
                            <h3 style="color:#00FF00">导航</h3>
                            <ul>
                                <li>
                                    <router-link to="/home/index" tag="a">首页</router-link>
                                </li>
                                <li>
                                    <router-link to="/product/index" tag="a">产品</router-link>
                                </li>
                                <li>
                                    <router-link to="/about/index" tag="a">关于</router-link>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content footer-center">
                            <h3 style="color:#00FF00;">联系我们</h3>
                            <p>联系地址：江苏省无锡市江阴市周庄镇</p>
                            <p>邮政编码：214400</p>
                            <p>传　　真：0510-80690589</p>
                            <p>邮　　箱：tiantongalu@126.com</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content footer-right">
                            <h2 align="center">
                江阴天通铝业科技有限公司
              </h2>
                            <p align="center">©2016 江阴天通铝业  苏ICP备16019276号
                                <img width="13" height="16" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/copy_rignt_24.png"> </p>
                            <div class="recordcode"><a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank"><i></i>苏公网安备16019276号</a></div>
                        </div>
                    </el-col>
                </el-row>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'webApp',
    data() {
        return {
            activeIndex: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>
body {
    padding: 0px;
    margin: 0px auto;
}

a {
    color: #fff;
    text-decoration: none;
}

#webApp {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
}

.header-nav {
    background-color: #3f67bf;
    color: #fff;
    border-top: 10px solid#0acf66;
    padding: 1em 0;
    height: 120px !important;
    position: relative;
}
/* ul li以横排显示 */
/* 所有class为menu的div中的ul样式 */

nav.menu ul {
    list-style: none;
    /* 去掉ul前面的符号 */
    margin: 0px;
    /* 与外界元素的距离为0 */
    padding: 0px;
    /* 与内部元素的距离为0 */
    width: auto;
    /* 宽度根据元素内容调整 */
}

/* 所有class为menu的div中的ul中的li样式 */

nav.menu ul li {
    float: left;
    /* 向左漂移，将竖排变为横排 */
    font-size: 18px;
}

/* 所有class为menu的div中的ul中的a样式(包括尚未点击的和点击过的样式) */

nav.menu ul li a,
nav.menu ul li a:visited {
    border: 1px rgba(255, 255, 255, 0) solid;
    /* 边框 */
    color: #ffffff;
    /* 文字颜色 */
    display: block;
    /* 此元素将显示为块级元素，此元素前后会带有换行符 */
    line-height: 1.65em;
    /* 行高 */
    padding: 4px 40px;
    /* 内部填充的距离 */
    text-decoration: none;
    /* 不显示超链接下划线 */
    white-space: nowrap;
    /* 对于文本内的空白处，不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
}

/* 所有class为menu的div中的ul中的a样式(鼠标移动到元素中的样式) */

nav.menu ul li a:hover {
    background-color: #bfcbd6;
    /* 背景色 */
    color: #465c71;
    /* 文字颜色 */
    text-decoration: none;
    /* 不显示超链接下划线 */
}

/* 所有class为menu的div中的ul中的a样式(鼠标点击元素时的样式) */

nav.menu ul li a:active {
    background-color: #465c71;
    /* 背景色 */
    color: #cfdbe6;
    /* 文字颜色 */
    text-decoration: none;
    /* 不显示超链接下划线 */
}

.logo {
    float: left;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.logo h1 {
    margin-left: 120px;
    font-size: 36px;
}

.navigation {
    float: left;
    padding-left: 120px;
    position: absolute;
    top: 35%;
    transform: translateX(150%);
}

.footer {
    background-color: #242424;
    height: 250px !important;
}

.footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.footer ul li {
    display: block;
    margin-bottom: .5em;
}

.footer-left {
    margin-left: 120px;
}

.footer-center {
    padding-left: 120px;
}

.footer-right {
    margin-right: 120px;
    text-align: center;
}

.footer-left h3 {
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: 2px;
    font-size: 1.4em;
    margin-bottom: .5em;
    color: #fff;
}

.footer-center,
.footer-right p {
    color: #848484;
    font-size: 1em;
    padding: 5px 0;
}

.footer-right h2,
.footer-right a {
    color: #337ab7;
    font-weight: bold
}

.recordcode a i {
    display: inline-block;
    width: 14px;
    height: 16px;
    margin-right: 6px;
    background: url(../../assets/images/icon-police.png?v=md5) 0 0 no-repeat;
    vertical-align: middle;
    margin-top: -4px;
}
</style>