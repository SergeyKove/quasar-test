<template>
  <q-layout view="hHh LpR lfr">
    <q-header elevated class="bg-black">
      <div class="container">
        <q-toolbar>
          <q-icon name="apple" :size="'xl'" />

          <q-toolbar-title>
            BusinessChain
          </q-toolbar-title>
          
          <q-btn flat color="grey" label="Главная"></q-btn>
          <q-btn flat color="grey" label="Мои проекты" ></q-btn>
          <q-btn-dropdown flat label="Витрины">
            <q-list>
              <q-item>Один</q-item>
              <q-item>Два</q-item>
              <q-item>Три</q-item>
            </q-list>
          </q-btn-dropdown>
          
          <q-icon name="apple" :size="'sm'" />
          <q-icon name="apple" :size="'xl'" />
        </q-toolbar>
      </div>
    </q-header>

    
    <q-page-container class="bg-grey">
        <div class="container">
          <router-view />
        </div>
    </q-page-container>
    
    <q-footer class="bg-white">
      <div class="container">
        <q-toolbar class="column">
          <q-toolbar-title class="text-black"> 
            ©  2017-2025, ООО «ИПИ-Лаб». Все права защищены
          </q-toolbar-title>
          <q-tabs class="text-black">
            <q-tab label="Пользовательское соглашение"></q-tab>
            <q-tab label="Политика конфиденциальности"></q-tab>
            <q-tab label="Связаться с нами"></q-tab>
            <q-tab><q-icon name="telegram" :size="'sm'" /></q-tab>
            <q-tab><q-icon name="facebook" :size="'sm'" /></q-tab>
          </q-tabs>
        </q-toolbar>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'


const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
  .container {width: 70%; margin: 0 auto;};
</style>
