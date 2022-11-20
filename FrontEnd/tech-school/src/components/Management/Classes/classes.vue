<template>
      <a-card title="Danh sách lớp học" style="width: 100"></a-card>
</template>


<script setup>
import { useMenu } from '../../../stores/use-menu';
    useMenu().onSelectedKeys(["classes"])
    useMenu().onOpenKeys(["classes"])
</script>