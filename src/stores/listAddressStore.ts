import { ref} from 'vue'
import { defineStore } from 'pinia'

export const listAdressStore = defineStore('listAdress', () => {
  const addressStart = ref([]);
  const selectedAddressStart = ref(-1);

  const addressEnd = ref([]);
  const selectedAddressEnd = ref(-1);

  function searchAddressStart(addressSearched:string) {

    addressSearched = addressSearched.replace(/\s+/g,"+");

    fetch(`https://api-adresse.data.gouv.fr/search/?q=` + addressSearched +`&limit=10&autocomplete=1`)
    .then(res => res.json())
    .then(data => {
        addressStart.value = data['features'];
    })
  }

  function searchAddressEnd(addressSearched:string) {

    addressSearched = addressSearched.replace(/\s+/g,"+");

    fetch(`https://api-adresse.data.gouv.fr/search/?q=` + addressSearched +`&limit=10&autocomplete=1`)
    .then(res => res.json())
    .then(data => {
        addressEnd.value = data['features'];
    })
  }
  return { addressStart, selectedAddressStart, addressEnd, selectedAddressEnd, searchAddressStart, searchAddressEnd}
})
