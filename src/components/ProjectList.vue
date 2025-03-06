<template>
  <div>
    <ProjectCard v-for="card in cardProjects" :card="card" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

const cardProjects = ref([]);

const url =
  "https://elk-back-dev.businesschain.io/bch-service/public/projectShowcase/getProjectList?page=0&size=6";
const url1 =
  "https://elk-back-dev.businesschain.io/bch-service/public/projectShowcase/getFilters";

async function apiResponse() {
  const data = await axios.post(url, { sortingDirection: "asc" });
  cardProjects.value = data.data.items;
}
apiResponse();
</script>
