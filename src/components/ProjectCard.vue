<template>
  <q-card>
    <q-card-section class="q-pt-xs">
      <div class="text-caption text-grey">{{ card.projectName }}</div>
      <div class="text-caption text-grey">
        <span v-if="card.country !== undefined">Страна: </span>
        {{ card.country !== undefined ? card.country.name : "" }}
      </div>
      <div class="text-caption text-grey">
        Акселераторы:
        <ProjectCardAccelerators
          v-for="accelerators in card.accelerators"
          :accelerators="accelerators"
        />
      </div>
      <div class="text-caption text-grey">
        <ProjectCardIndustries
          v-for="industries in card.industries"
          :industries="industries"
        />
      </div>
      <q-img style="height: 100px; max-width: 200px" :src="card.projectLogo">
      </q-img>
      <q-btn icon="star" title="Избранное"></q-btn>
    </q-card-section>
  </q-card>
</template>

<script setup>
import ProjectCardAccelerators from "./ProjectCardAccelerators.vue";
import ProjectCardIndustries from "./ProjectCardIndustries.vue";
import { ref } from "vue";
const props = defineProps(["card"]);

const favorites = ref([])

function addFavorites(){

}
</script>
