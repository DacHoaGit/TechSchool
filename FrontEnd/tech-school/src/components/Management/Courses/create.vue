<template>
    <a-card title="Tạo khóa học" style="width: 100%;">
        <div class="row">
            <div class="col-12 col-sm-4 ">

                <div class="row ">
                    <div class="col-12 d-flex justify-content-center">
                        <a-avatar shape="square" :size="200">
                            <template #icon><InsertRowBelowOutlined /></template>
                        </a-avatar>
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-3">
                        <a-button type="primary" >
                            <plus-outlined />
                            <span >Chọn ảnh</span>
                        </a-button>
                    </div>
                </div>

            </div>
            <div class="col-12 col-sm-8">2</div>
        </div>
    </a-card>
</template>

<script setup>
import { useMenu } from "../../../stores/use-menu";
import {InsertRowBelowOutlined} from '@ant-design/icons-vue';
import {PlusOutlined} from '@ant-design/icons-vue';

useMenu().onSelectedKeys(["courses"]);
useMenu().onOpenKeys(["courses"]);

</script>