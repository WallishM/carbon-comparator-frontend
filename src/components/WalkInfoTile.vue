<script setup lang="ts">
    import { TransportData } from '@/models/transportModel';
    import LoadingBar from '@/components/LoadingBar.vue';


    const walkInfo = defineProps({walkInfo: TransportData});

</script>

<template>
    <div class="tile">
        <LoadingBar></LoadingBar>
        <h2>Si on marchait ?</h2>
        {{walkInfo.distance}}
        <br>
        {{walkInfo.duration}}
        <br>
        {{walkInfo.price}}
        <br>
        {{walkInfo.carbon}}
    </div>
</template>

<style>
    .tile{
        border: 1px black solid;
        border-radius: 4px;
        box-shadow: 2px 2px chartreuse;
        background-color: transparent;
        width: 200px;
        height: 400px;
    }
</style>