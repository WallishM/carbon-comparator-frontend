<script setup lang="ts">
    import SearchAddressStartBar from '@/components/SearchAddressStartBar.vue';
    import SearchAddressEndBar from '@/components/SearchAddressEndBar.vue';
    import { listAdressStore } from '@/stores/listAddressStore';

    const listAddressStr = listAdressStore();
</script>

<template>
    <div class="homeView">
        <input type="button" value="Cherche" v-on:click="() => $router.push({name:'journey', params:{
            startLon:listAddressStr.addressStart[listAddressStr.selectedAddressStart]['geometry']['coordinates'][0],
            startLat:listAddressStr.addressStart[listAddressStr.selectedAddressStart]['geometry']['coordinates'][1], 
            endLon:listAddressStr.addressEnd[listAddressStr.selectedAddressEnd]['geometry']['coordinates'][0],
            endLat:listAddressStr.addressEnd[listAddressStr.selectedAddressEnd]['geometry']['coordinates'][1]
            }})">
        <SearchAddressStartBar></SearchAddressStartBar>
        <SearchAddressEndBar></SearchAddressEndBar>
    </div>
</template>

<style>
    .homeView{
        display: flex;
        flex-flow: row wrap;
    }
</style>