<template>
  <div>
    <q-select
      filled
      v-model="acceleratorsName"
      :options="optionsAccelerators.accelerators"
      option-value="id"
      option-label="name"
      emit-value
      map-options
      style="min-width: 250px; max-width: 300px"
    ></q-select>
    <q-select
      filled
      v-model="industriesName"
      :options="optionsIndustries"
      option-value="id"
      option-label="name"
      emit-value
      map-options
      style="min-width: 250px; max-width: 300px"
    ></q-select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const optionsAccelerators = ref([]);
const optionsIndustries = ref([]);
const acceleratorsName = defineModel("acceleratorsName");
const industriesName = defineModel("industriesName");

const url1 =
  "https://elk-back-dev.businesschain.io/bch-service/public/projectShowcase/getFilters";
const url2 =
  "https://elk-back-dev.businesschain.io/bch-service/api/v1/catalog/industries?lang=ru";

async function apiResponse() {
  const data = await axios.get(url1);
  optionsAccelerators.value = data.data;
}
async function apiResponse1() {
  const data = await axios.get(url2);
  optionsIndustries.value = data.data;
}
apiResponse();
apiResponse1();
</script>
