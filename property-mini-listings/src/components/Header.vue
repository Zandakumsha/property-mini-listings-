<template>
  <header class="header">
    <div class="logo-section">
      <h1>Homes & Beyond</h1>
      <p>Find your perfect Cape Town getaway</p>
    </div>

    <div class="stats">
      <div class="stat-card">
        <span class="number">{{ propertyCount }}</span>
        <span class="label">Properties</span>
      </div>

      <div class="stat-card">
        <span class="number">{{ favouritesCount }}</span>
        <span class="label">Favourites</span>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  propertyCount: Number,
  favouritesCount: Number
})
</script>s

<style scoped>
.header {
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.logo-section h1 {
  margin: 0;
  font-size: 2rem;
}

.logo-section p {
  margin-top: 0.3rem;
  opacity: 0.9;
}

.stats {
  display: flex;
  gap: 1rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.15);
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  text-align: center;
  min-width: 100px;
}

.number {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
}

.label {
  font-size: 0.9rem;
}
</style>