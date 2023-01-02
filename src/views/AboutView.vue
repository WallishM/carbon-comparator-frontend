<script setup lang="ts">

    import { onMounted, ref } from 'vue';

    

    const props = defineProps({
        newMessage: String
    })

    let message = ref(props.newMessage);
    
    function changemessage(){
      console.log('test')
      message.value = message.value + 'la';
    }

</script>

<template>
    <h1 v-on:click="changemessage">{{message}}</h1>

</template>
