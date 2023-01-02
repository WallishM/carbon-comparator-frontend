<script setup lang="ts">
    import { ref } from 'vue';

    const progressValue = ref(0);
    const styleProgressValue = ref({});
    const progressRemaining = ref(100);
    const styleProgressRemaining = ref({});
   
    window.setInterval(loadingBar, 20);

    function loadingBar(){
        progressValue.value = (progressValue.value + 1 )% 100;
        progressRemaining.value = 100 - progressValue.value;
        styleProgressValue.value = `width: ${progressValue.value}%`;
        styleProgressRemaining.value = `width: ${progressRemaining.value}%`;
    };
</script>

<template>
    <div class="progressBar">
        <div class="progressDone" :style="styleProgressValue">
        </div>
        <div class="progressRemaining" :style="styleProgressRemaining">
        </div>
    </div>
</template>

<style>
    .progressBar{
        height: 20px;
        width: 100%;
        padding: 0;
        margin: 0;

        display: flex;
        flex-flow: row nowrap;

        border: solid black 2px;
        background-color: transparent;
    }

    .progressDone{
        height: 100%;
        width: 0%;
        padding: 0;
        margin: 0;

        background-color: chartreuse;
    }

    .progressRemaining{
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;

        background-color: red;
    }
</style>