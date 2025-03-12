import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

const urlAccelerators =
  "https://elk-back-dev.businesschain.io/bch-service/public/projectShowcase/getFilters";
const urlIndustries =
  "https://elk-back-dev.businesschain.io/bch-service/api/v1/catalog/industries?lang=ru";


export const useFilterAcceleratorsStore = defineStore("accelerators", () => {
  const accelerators = ref([]);

  async function getAccelerators() {
    const data = await axios.get(urlAccelerators);
    accelerators.value = data.data.accelerators;
  }

  return {
    accelerators,
    getAccelerators,
  };
});

export const useFilterIndustriesStore = defineStore("industries", () => {
  const industries = ref([]);

  async function getIndustries() {
    const data = await axios.get(urlIndustries);
    industries.value = data.data;
  }

  return {
    industries,
    getIndustries,
  };
});