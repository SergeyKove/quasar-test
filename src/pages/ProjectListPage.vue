<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div id="q-app" style="min-height: 100vh">
          <div class="q-pa-md example-column-row-wrapping">
            <div class="row" style="height: 300px; max-height: 100%">
              <div class="col-8">
                <ProjectList :cardProjects="cardProjects" />
              </div>
              <div class="col-4">
                <ProjectListFilterBlock
                  v-model:accelerator-name="acceleratorName"
                  v-model:industrie-name="industrieName"
                  @update:acceleratorName="updateListAccelerator"
                  @update:industrieName="updateListIndustries"
                />
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
import { ref } from "vue";
import axios from "axios";
const acceleratorName = ref([]);
const industrieName = ref([]);
const cardProjects = ref([]);

const url =
  "https://elk-back-dev.businesschain.io/bch-service/public/projectShowcase/getProjectList?page=0&size=6";

async function apiResponse() {
  const data = await axios.post(url, { sortingDirection: "asc" });
  cardProjects.value = data.data.items;
}
apiResponse();

async function updateListAccelerator(accelerators) {
  const data = await axios.post(url, { sortingDirection: "asc", accelerators });
  cardProjects.value = data.data.items;
}

async function updateListIndustries(industries) {
  const data = await axios.post(url, { sortingDirection: "asc", industries });
  cardProjects.value = data.data.items;
}
</script>
