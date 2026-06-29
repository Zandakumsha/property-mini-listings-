<template>
  <div class="property-card">
    <span v-if="!property.available" class="badge">
      Not Available
    </span>

    <img :src="property.image" />

    <h3>{{ property.title }}</h3>
    <p>{{ property.location }}</p>
    <p>R{{ property.price }}</p>
    <p>{{ property.type }}</p>

    <button @click="$emit('toggle-favourite', property.id)">
      Buy now
    </button>
  </div>
</template>

<script setup>
defineProps({
  property: Object
})

defineEmits(['toggle-favourite'])
</script>

<style scoped>
.property-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding-bottom: 1rem;
  position: relative;
}

.property-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.property-card img {
  width: 100%;
  height: 300px;
  object-fit: contain;
}

.badge {
  position: absolute;
  top: 15px;
  right: -35px;
  background: #2563EB;
  color: white;
  padding: 5px 40px;
  font-size: 0.75rem;
  font-weight: bold;
  transform: rotate(45deg);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>