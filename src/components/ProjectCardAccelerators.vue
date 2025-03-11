<template>
  <li>
    {{ accelerators.name }}
  </li>
</template>

<script setup>
const props = defineProps(["accelerators"]);
</script>
