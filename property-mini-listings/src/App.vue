<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import properties from './data/properties'

import PropertyCard from './components/PropertyCard.vue'

import SearchBar from './components/SearchBar.vue'
import SortDropdown from './components/SortDropdown.vue'

const search = ref('')
const sortOrder = ref('asc')

const filteredProperties = computed(() => {
  let filtered = properties.filter(property =>
    property.title.toLowerCase().includes(search.value.toLowerCase()) ||
    property.location.toLowerCase().includes(search.value.toLowerCase())
  )

  return filtered.sort((a, b) =>
    sortOrder.value === 'asc'
      ? a.price - b.price
      : b.price - a.price
  )
})
</script>

<template>
  <Header :propertyCount="properties.length" :favouritesCount="0" />

  <div>

    <SearchBar v-model="search" />

    <SortDropdown v-model="sortOrder" />

    <div class="property-grid">
      <PropertyCard v-for="property in filteredProperties" :key="property.id" :property="property" />
    </div>
  </div>
</template>

<style>
.card-content {
  padding: 15px;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #1d4ed8;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
