<template>
  <a-card title="Danh sách giáo viên" style="width: 100"></a-card>
</template>


<script setup>
import { useMenu } from '../../../stores/use-menu';
    useMenu().onSelectedKeys(["teachers"])
    useMenu().onOpenKeys(["teachers"])
</script>