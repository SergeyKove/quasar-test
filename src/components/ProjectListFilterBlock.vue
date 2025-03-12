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
            :options="optionsAccelerators"
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
import {
  useFilterAcceleratorsStore,
  useFilterIndustriesStore,
} from "../stores/FiltersStore";
import { computed } from "vue";

const acceleratorName = defineModel("acceleratorName");
const industrieName = defineModel("industrieName");

const storeAccelerators = useFilterAcceleratorsStore();
const storeIndustries = useFilterIndustriesStore();

function getItems() {
  storeAccelerators.getAccelerators();
  storeIndustries.getIndustries();
}
getItems();

const optionsAccelerators = computed(() => {
  return storeAccelerators.accelerators;
});
const optionsIndustries = computed(() => {
  return storeIndustries.industries;
});
</script>
