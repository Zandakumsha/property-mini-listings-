<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Search properties..." />
</template>

<script setup>
defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>