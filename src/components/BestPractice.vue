<template>
  <section class="section alt">
    <div class="wrap">
      <div class="section-head">
        <div class="section-tag">BEST PRACTICE</div>
        <h2>自动化发布的 5 条铁律</h2>
        <div class="sub">避免踩坑，让自动化真正省心</div>
      </div>
      <div class="bp-grid">
        <div v-for="item in practices" :key="item.title" class="bp-card">
          <div class="bp-icon">{{ item.icon }}</div>
          <div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { bestPractices as practices } from '../data/content.js'
</script>
