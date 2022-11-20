<template>
  <a-card title="Danh sách khóa học" style="width: 100"></a-card>
  <div class="row mt-3 mb-3">
    <div class="col-12 d-flex justify-content-end">
        <a-button type="primary">
            <router-link :to="{name: 'courses-create'}">
                <plus-outlined />
            </router-link>
            
        </a-button>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
        <a-table  :dataSource="courses" :columns="columns" :scroll="{ x: 576 }" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import {PlusOutlined} from '@ant-design/icons-vue';
import { useMenu } from "../../../stores/use-menu";
useMenu().onSelectedKeys(["courses"]);
useMenu().onOpenKeys(["courses"]);
    const courses = ref([]);

    const getCourses = () => {
    axios
        .get("http://127.0.0.1:8000/api/courses")
        .then(function (response) {
        if (response.data.status) 
            courses.value = response.data.courses;
        })
        .catch(function (error) {
        console.log(error);
        });
    };
    getCourses();   

    const columns = [
        {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        },
        {
        title: 'Tên Khóa Học',
        dataIndex: 'name',
        key: 'name',
        },
        {
        title: 'Mô tả',
        dataIndex: 'mo_ta',
        key: 'mo_ta',
        },
        {
        title: 'Học Phí',
        dataIndex: 'hoc_phi',
        key: 'hoc_phi',
        },
        {
        title: 'Số buổi',
        dataIndex: 'so_buoi',
        key: 'so_buoi',
        },
        {
        title: 'Ảnh Khóa Học',
        dataIndex: 'anh_khoa_hoc',
        key: 'anh_khoa_hoc',
        },
    ]

</script>
