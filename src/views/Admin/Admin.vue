<template>
  <div class="admin">
        <el-container>
          <!--右边-->
    <nav-menu></nav-menu>
    <el-container>
      <!--头-->
        <el-header>Header</el-header>
        <!--主体-->
        <el-main><router-view></router-view></el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from './admincom/navMenu.vue'
export default {
  components: { navMenu },
    name:'Admin'
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>