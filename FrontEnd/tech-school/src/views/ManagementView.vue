<template>
  <Header></Header>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-sm-3 d-none d-sm-flex">
        <a-list bordered class="w-100">
          <template #header>
            <div>DashBoard</div>
          </template>
          <MenuSiderbar />
        </a-list>
      </div>
      <div class="col-sm-9 col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Management/Header.vue";
import MenuSiderbar from "../components/Management/MenuSiderbar.vue";

</script>
