import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCatalogStore = defineStore("catalog", () => {
  const activeFilters = ref([]);

  // Добавление фильтра
  const addFilter = (filter) => {
    if (!activeFilters.value.includes(filter)) {
      activeFilters.value.push(filter);
    }
  };

  // Удаление фильтра
  const removeFilter = (filter) => {
    activeFilters.value = activeFilters.value.filter((f) => f !== filter);
  };

  return { activeFilters, addFilter, removeFilter };
});
