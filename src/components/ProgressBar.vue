<template>
  <div class="progress-bar" :style="{ width: progress + '%' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function onScroll() {
  const h = document.documentElement
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
  progress.value = scrolled
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
