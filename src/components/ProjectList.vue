<template>
  <div>
    <ProjectCard v-for="card in cardProjects" :card="card" />
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
const props = defineProps(["cardProjects"]);
</script>
