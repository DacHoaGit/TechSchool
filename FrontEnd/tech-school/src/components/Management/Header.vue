<template>
  <div class="containter-fluid">
    <div
      class="row text-white"
      style="background-color: #0c713d; padding: 1rem"
    >
      <div
        @click="showDrawer('default')"
        class="col-4 d-flex d-sm-none align-items-center justify-content-s"
      >
        <span><MenuOutlined /></span>
      </div>
      <a-drawer
        title="Dashboard"
        :placement="placement"
        :closable="false"
        :visible="visible"
        :width="width"
        @close="onClose"
      >
        <MenuSiderBar @closeDrawer="onClose" />
      </a-drawer>
      <div
        class="col-4 col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-start"
      >
        <img
          class="ms-3 me-3"
          height="34"
          width="34"
          src="../../assets/images/logo.png"
          alt="logo"
        />
        <div class="d-none d-sm-flex">TECHSCHOOL MANAGEMENT</div>
      </div>
      <div
        class="col-4 d-flex col-sm-6 d-sm-flex align-items-center justify-content-end"
      >
        <a href="" class="me-3">Login</a>
        <a href="" class="">Register</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import {MenuOutlined} from '@ant-design/icons-vue';
import MenuSiderBar from "./MenuSiderbar.vue";
    const visible = ref(false);
    const placement = ref('left');
    const size = ref('default');
    const showDrawer = () => {
      size.value = size;
      visible.value = true;
    };
    const width = ref(2*(screen.width)/3);
    const onClose = () => {
      visible.value = false;
    };
</script>
