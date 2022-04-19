<template>
    <div class="login">
        <!--账号-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="账号：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
        <!--密码-->
            <el-form-item label="密码：" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
        <el-form-item>
          <el-radio-group v-model="ruleForm.role">
            <el-radio label="0">学生</el-radio>
            <el-radio label="1">教师</el-radio>
            <el-radio label="2">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            ruleForm:{
                name:'',
                password:'',
                captcha: '',
                role: '0',
            },
            rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ],

    },
        }
    },
     methods: {
      submitForm(formName) {
        this.$router.push("/admin");
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功!');
          } else {
            console.log('登录失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
.login{
  margin: auto;
  margin-top: 10%;
  width: 330px;
  text-align: center;
  padding: 60px 100px 40px 60px;
  box-shadow: 0 4px 8px 0 rgb(103, 171, 240), 0 -4px 8px 0 rgb(141, 196, 245);
  border-radius: 5%;
}

</style>