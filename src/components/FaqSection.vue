<template>
  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div class="section-tag">FAQ</div>
        <h2>常见问题</h2>
        <div class="sub">点击问题展开查看答案</div>
      </div>

      <div
        v-for="(item, i) in items"
        :key="i"
        class="faq-item"
        :class="{ open: openIndex === i }"
      >
        <div class="faq-q" @click="toggle(i)">
          {{ item.q }}
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-a" ref="answerRefs">
          <div class="faq-a-inner" v-html="item.a"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { faqItems as items } from '../data/content.js'

const openIndex = ref(null)
const answerRefs = ref([])

function toggle(i) {
  if (openIndex.value === i) {
    answerRefs.value[i].style.maxHeight = '0'
    openIndex.value = null
  } else {
    if (openIndex.value !== null && answerRefs.value[openIndex.value]) {
      answerRefs.value[openIndex.value].style.maxHeight = '0'
    }
    openIndex.value = i
    nextTick(() => {
      const el = answerRefs.value[i]
      if (el) el.style.maxHeight = el.scrollHeight + 'px'
    })
  }
}
</script>
