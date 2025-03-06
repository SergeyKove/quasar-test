<template>
  <span v-if="true">Отрасль:</span>
  <ul>
    <li>
      {{ industries.name }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(["industries"]);
</script>
