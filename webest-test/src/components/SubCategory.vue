<template>
  <div>
    <h1>Маршрут: {{ fullPath }}</h1>
    <div v-if="hasFilters">
      <h2>Активные фильтры:</h2>
      <ul>
        <li v-for="filter in store.activeFilters" :key="filter">
          {{ filter }}
        </li>
      </ul>
    </div>
    <button @click="addNewFilter">Добавить фильтр (тест)</button>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCatalogStore } from "@/store/store";

const route = useRoute();
const store = useCatalogStore();

const fullPath = computed(() => route.fullPath);
const hasFilters = computed(() => route.path.includes("/filter/"));

onMounted(() => {
  const pathParts = route.fullPath.split("/");
  const filterIndex = pathParts.indexOf("filter");

  if (filterIndex !== -1) {
    const filters = pathParts.slice(
      filterIndex + 1,
      pathParts.indexOf("apply")
    );
    store.activeFilters = filters;
  }
});

const addNewFilter = () => {
  const newFilter = `filter_${store.activeFilters.length + 1}`;
  store.addFilter(newFilter);
  let editedOldPath = route.path.split("/");
  if (editedOldPath.indexOf("filter") !== -1)
    editedOldPath = editedOldPath.slice(0, editedOldPath.indexOf("filter"));
  const newPath =
    editedOldPath.join("/") +
    "/filter/" +
    `${store.activeFilters.join("/")}/apply`;
  window.history.pushState({}, "", newPath);
};
</script>
