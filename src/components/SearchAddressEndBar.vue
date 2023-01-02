<script setup lang="ts">
    import { listAdressStore } from '@/stores/listAddressStore';
    import { ref } from 'vue';

    const listAddressStr = listAdressStore();
    const searchAddress = ref('');

    function search(){
        if (searchAddress.value.length > 3)
            listAddressStr.searchAddressEnd(searchAddress.value);
    }

    function selectAddress(addressIndex:number){
        listAddressStr.selectedAddressEnd = addressIndex;
        searchAddress.value = listAddressStr.addressEnd[addressIndex]['properties']['label'];
    }
</script>

<template>
    <div>
        <input type="text" placeholder="Addresse" v-model="searchAddress" v-on:keypress="search" />
        <ul>
            <li v-for="(address, index) in listAddressStr.addressEnd" v-on:click="selectAddress(index)" :class="listAddressStr.selectedAddressEnd == index ? 'addressSelected' : ''">{{address['properties']['label']}}</li>
        </ul>
    </div>
</template>

<style>
    .addressSelected{
        background-color: var(--tc-c-green-soft);
    }
    li{
        list-style-type: none;
        background-color: var( --tc-c-white-mute);
        border-radius: 2px;
        width: 90%;
        margin: 8px;
        padding: 4px;
        box-shadow: 2px 2px 2px var( --tc-c-black-soft);
    }
    li:hover{
        cursor: pointer;
        
    }
    input{
        width: 90%;
    }
    ul{        
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    div{
        display: flex;
        flex-flow: column;
        align-items: center;
    }
</style>