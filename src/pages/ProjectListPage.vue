<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div id="q-app">
          <div class="q-pa-md example-column-row-wrapping">
            <div class="flex">
              <div class="q-mx-auto flex">
                <div class="col-8" style="max-width: 600px">
                  <ProjectList :cardProjects="cardProjects" />
                </div>
                <div class="col-4">
                  <ProjectListFilterBlock
                    v-model:accelerator-name="acceleratorName"
                    v-model:industrie-name="industrieName"
                    @update:acceleratorName="getItems"
                    @update:industrieName="getItems"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import ProjectList from "src/components/ProjectList.vue";
import ProjectListFilterBlock from "src/components/ProjectListFilterBlock.vue";
import { computed, ref } from "vue";
import { useProjectsStore } from "src/stores/ProjectsStore";

const acceleratorName = ref([]);
const industrieName = ref([]);
const store = useProjectsStore();

function getItems() {
  const filters = {
    sortingDirection: "asc",
    industries: industrieName.value,
    accelerators: acceleratorName.value,
  };
  store.getProjects(filters);
}
getItems();

const cardProjects = computed(() => {
  return store.cardProject;
});
</script>
