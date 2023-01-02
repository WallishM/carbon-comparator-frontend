<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import WalkInfoTile from '@/components/WalkInfoTile.vue';
    import { TransportData } from '@/models/transportModel';

    const props = defineProps({
        startLon: Number,
        startLat: Number,
        endLon: Number,
        endLat: Number
    });

    const walkInfoJourney = ref(new TransportData());
    const communTransportInfoJourney = ref(new TransportData());
    const carInfoJourney = ref(new TransportData());
    const bikeInfoJourney = ref(new TransportData());

    onMounted(() => {
        // Call API to get info for each transport
    });
</script>

<template>
    <h1>Alors on se déplace comment ?</h1>
    <div class="tiles">
        <WalkInfoTile :walkInfo=walkInfoJourney></WalkInfoTile>
        <WalkInfoTile :walkInfo=walkInfoJourney></WalkInfoTile>
        <WalkInfoTile :walkInfo=walkInfoJourney></WalkInfoTile>
        <WalkInfoTile :walkInfo=walkInfoJourney></WalkInfoTile>
        <WalkInfoTile :walkInfo=walkInfoJourney></WalkInfoTile>
    </div>
    <p>Survey utility</p>
    <p>adresse mail pour améliorer la chose</p>
</template>

<style>
    .tiles{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
</style>