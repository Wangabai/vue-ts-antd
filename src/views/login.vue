<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-06-30 10:10:44
-->
<template>
  <div class="login">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { login } from '@/api/user';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});

const onFinish = (values: any) => {
  login({ username: formState.username, password: formState.password }).then(
    (res: any) => {
      if(res.status === 200){
        alert(res.data.message);
      }
    }
  ).catch(function(error: any) {
    alert(error);
  })
};

</script>
<style scoped>
.login {
  width: 800px;
  margin: 0 auto;
  margin-top: 300px;
}
</style>
