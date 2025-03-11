<template>
  <q-chip square>
    {{ industries.name }}
  </q-chip>
</template>

<script setup>
const props = defineProps(["industries"]);
</script>
