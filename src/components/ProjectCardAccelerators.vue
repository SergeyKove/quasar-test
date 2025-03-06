<template>
    <ul >
        <li>
            {{ accelerators.name }}
        </li>
    </ul>
</template>

<script setup>
const props = defineProps(["accelerators"]);
</script>