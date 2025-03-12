import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

const urlProjects =
  "https://elk-back-dev.businesschain.io/bch-service/public/projectShowcase/getProjectList?page=0&size=6";

export const useProjectsStore = defineStore("cardProject", () => {
  const cardProject = ref([]);

  async function getProjects(filters) {
    const data = await axios.post(urlProjects, filters);
    cardProject.value = data.data.items;
  }

  return {
    cardProject,
    getProjects,
  };
});

