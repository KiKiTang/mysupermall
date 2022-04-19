<template>
  <div class="nav-menu">
      <el-aside width="200px">
        <el-menu
      default-active="1"
      class="el-menu-vertical-demo" router>
      <el-menu-item index="/admin">
        <i class="el-icon-menu"></i>
        <template v-slot:title><span>首页</span></template>
      </el-menu-item>
      <el-menu-item-group>
          <el-menu-item index="/admin/teacher" >教师管理</el-menu-item>
          <el-menu-item index="/admin/student">学生管理</el-menu-item>
          <el-menu-item index="/admin/course">课程管理</el-menu-item>
        </el-menu-item-group>
    </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
    name:'navMenu'
}
</script>

<style>

</style>