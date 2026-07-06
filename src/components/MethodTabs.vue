<template>
  <section class="section alt">
    <div class="wrap">
      <div class="section-head">
        <div class="section-tag">STEP BY STEP</div>
        <h2>分步实操教程</h2>
        <div class="sub">点击下方标签，切换不同方案的详细步骤</div>
      </div>

      <div class="method-tabs">
        <button
          v-for="m in methods"
          :key="m.id"
          class="mtab"
          :class="{ active: activeId === m.id }"
          @click="activeId = m.id"
        >
          {{ m.tab }}<span class="mtag">{{ m.tag }}</span>
        </button>
      </div>

      <div
        v-for="m in methods"
        :key="m.id"
        class="method-panel"
        :class="{ active: activeId === m.id }"
      >
        <div class="method-intro">
          <div class="mi-top">
            <span class="mi-icon">{{ m.icon }}</span>
            <h3>{{ m.title }}</h3>
          </div>
          <p class="mi-desc">{{ m.desc }}</p>
          <div class="mi-meta">
            <span v-for="item in m.meta" :key="item.label">
              {{ item.label }}：<b>{{ item.value }}</b>
            </span>
          </div>
        </div>

        <div class="step-list">
          <StepCard
            v-for="(step, i) in m.steps"
            :key="i"
            :step="step"
            :index="i"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { methods } from '../data/content.js'
import StepCard from './StepCard.vue'

const activeId = ref(methods[0].id)
</script>
