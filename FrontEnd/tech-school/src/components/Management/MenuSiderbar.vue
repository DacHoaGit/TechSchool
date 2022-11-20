<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    @click="$emit('closeDrawer')"
  >
    <a-menu-item key="courses" >
      <router-link :to="{name:'courses'}"><span><InsertRowBelowOutlined class="me-3" :style="{color: '#08c'}" />Khoá học</span></router-link>
    </a-menu-item>
    <a-menu-item key="classes">
      <router-link :to="{name:'classes'}"><span><TeamOutlined class="me-3" :style="{color: '#08c'}" />Lớp học</span></router-link>
    </a-menu-item>
    <a-menu-item key="teachers">
      <router-link :to="{name:'teachers'}"><span><UserOutlined class="me-3" :style="{color: '#08c'}" />Giảng viên</span></router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
import {InsertRowBelowOutlined} from '@ant-design/icons-vue';
import {TeamOutlined} from '@ant-design/icons-vue';
import {UserOutlined} from '@ant-design/icons-vue';
import { defineComponent } from "vue";
import { useMenu } from "../../stores/use-menu.js";
import { storeToRefs } from "pinia";
export default defineComponent({  
  components:{
    InsertRowBelowOutlined,
    TeamOutlined,
    UserOutlined,
  }, 
  methods: {
        onCloseDrawer: function() {
          this.$parent.onClose();
        }
    },
  setup() {
    const store = useMenu();
    return {
      ...storeToRefs(store),

    };
  },
});
</script>
