<template>
  <div class="q-pa-sm">
    <q-card class="q-pa-md">
      <q-card-section class="q-pt-xs">
        <span class="text-h6">Фильтр проектов</span>
        <div class="q-mt-lg">
          <span>Акселератор</span>
          <q-select
            outlined
            multiple
            v-model="acceleratorName"
            :options="optionsAccelerators.accelerators"
            option-value="id"
            option-label="name"
            style="min-width: 250px; max-width: 300px"
          ></q-select>
        </div>
        <div class="q-mt-lg">
          <span>Отрасль</span>
          <q-select
            outlined
            multiple
            v-model="industrieName"
            :options="optionsIndustries"
            option-value="id"
            option-label="name"
            style="min-width: 250px; max-width: 300px"
          ></q-select>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const optionsAccelerators = ref([]);
const optionsIndustries = ref([]);
const acceleratorName = defineModel("acceleratorName");
const industrieName = defineModel("industrieName");

const urlFilters =
  "https://elk-back-dev.businesschain.io/bch-service/public/projectShowcase/getFilters";
const urlIndustries =
  "https://elk-back-dev.businesschain.io/bch-service/api/v1/catalog/industries?lang=ru";

async function apiResponseAccelerators() {
  const data = await axios.get(urlFilters);
  optionsAccelerators.value = data.data;
}
async function apiResponseIndustries() {
  const data = await axios.get(urlIndustries);
  optionsIndustries.value = data.data;
}
apiResponseAccelerators();
apiResponseIndustries();
</script>
