<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div id="q-app" style="min-height: 100vh">
          <div class="q-pa-md example-column-row-wrapping">
            <div class="row" style="height: 300px; max-height: 100%">
              <div class="col-8"><ProjectList /></div>
              <div class="col-4"><ProjectListFilterBlock /></div>
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
</script>
