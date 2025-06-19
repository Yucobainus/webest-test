<template>
  <div class="catalog">
    <div class="catalog__wrapper">
      <div class="catelog__item" v-for="el in categories" :key="el.id">
        <router-link :to="{ path: `/catalog/${el.name.toLowerCase()}` }">{{
          el.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
  {
    id: 1,
    name: "Shoes",
  },
  {
    id: 2,
    name: "Glasses",
  },
  {
    id: 3,
    name: "Shirts",
  },
]);
</script>
