import { defineStore } from "pinia";
import { ref } from "vue";

export const useCatalogStore = defineStore("catalog", () => {
  const activeFilters = ref([]);

  const addFilter = (filter) => {
    if (!activeFilters.value.includes(filter)) {
      activeFilters.value.push(filter);
    }
  };

  const removeFilter = (filter) => {
    activeFilters.value = activeFilters.value.filter((f) => f !== filter);
  };

  return { activeFilters, addFilter, removeFilter };
});
