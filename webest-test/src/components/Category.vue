<template>
  <div class="category">
    {{ route.params.category }}
    asd
    <div v-for="el in subcats" :key="el.id">
      <router-link
        :to="{ path: `${route.params.category}/${el.name.toLowerCase()}` }"
        >{{ el.name }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const subcats = ref([
  {
    id: 1,
    name: "Transistors",
  },
  {
    id: 2,
    name: "Mechanics",
  },
]);
</script>
