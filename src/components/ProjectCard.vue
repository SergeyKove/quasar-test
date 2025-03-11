<template>
  <div class="q-pa-sm">
    <q-card class="q-pa-md">
      <q-card-section class="q-pt-xs row">
        <div class="col-8">
          <div class="text-grey text-h6 text-weight-bolder q-mb-sm">
            {{ card.projectName }}
          </div>
          <div class="text-caption text-grey q-mb-sm">
            <span v-if="card.country !== undefined">Страна: </span>
            {{ card.country !== undefined ? card.country.name : "" }}
          </div>
          <div>
            <span class="text-caption text-grey">Акселератор:</span>
            <ul class="q-mt-none q-pl-md text-caption">
              <ProjectCardAccelerators
                v-for="accelerators in card.accelerators"
                :accelerators="accelerators"
              />
            </ul>
          </div>
          <div class="text-caption text-grey q-pl-none">
            <q-chip
              color="primary"
              text-color="white"
              square
              v-if="card.industries.length"
              >Отрасль</q-chip
            >

            <ProjectCardIndustries
              v-for="industries in card.industries"
              :industries="industries"
            />
          </div>
        </div>
        <div class="col-4">
          <q-img
            style="height: 120px; max-width: 200px; border-radius: 10px"
            :src="card.projectLogo"
          >
          </q-img>
          <q-btn style="position: absolute; top: 10px; right: 20px;" icon="star" title="Избранное"></q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import ProjectCardAccelerators from "./ProjectCardAccelerators.vue";
import ProjectCardIndustries from "./ProjectCardIndustries.vue";
import { ref } from "vue";
const props = defineProps(["card"]);

const favorites = ref([]);

function addFavorites() {}
</script>
