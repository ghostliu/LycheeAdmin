<template>
  <div id="webApp">
    <el-container>
      <el-header>Header</el-header>
      <router-view></router-view>
      <el-footer>Footer</el-footer>
     </el-container>
  </div>
</template>

<script>
export default {
  name: 'webApp'
}
</script>

<style>
body{
  padding:0px;
  margin:0px auto;
}
a{
  text-decoration:none;
}
#webApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
