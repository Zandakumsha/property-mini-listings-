<template>
  <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option value="asc">Price: Low to High</option>
    <option value="desc">Price: High to Low</option>
  </select>
</template>

<script setup>
defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>