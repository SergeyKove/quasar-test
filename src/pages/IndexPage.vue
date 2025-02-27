<template>
  <q-page>
    <h3>Витрина проектов</h3>
<!-- Кнопки -->
    <div>
      <q-btn label="Витрина проектов"></q-btn>
      <q-btn label="Мои проекты"></q-btn>
      <q-btn label="Создать проект"></q-btn>
    </div>
<!-- блок с карточками -->
    <!--поиск  -->
    <div>
      <q-input outlined v-model="text" label="Outlined"></q-input>
      <q-checkbox v-model="val"></q-checkbox><span>Только избранные</span>
     </div>

    <!-- карточки -->
      <div>
        Карточка 1
      </div>
    <!-- Кнопка (показать еще) -->
     <q-btn label="Показать еще"></q-btn>
<!-- фильтр проектов -->
     <div>
        <h4>Фильтр проектов</h4>
     </div>
  </q-page>
</template>

<script setup>
  import { ref } from 'vue';
  const val = ref(true)
</script>
