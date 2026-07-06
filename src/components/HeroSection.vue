<template>
  <section class="hero">
    <div class="wrap">
      <span class="hero-badge">实操教程 · 2026 最新版</span>
      <h1>自动化发布<br>微信公众号文章<span class="em">完整指南</span></h1>
      <p>从官方定时发布到 API 脚本全自动，三种方案覆盖所有场景。跟着步骤做，零基础也能让公众号"自动写作、自动排版、自动发送"。</p>
      <div class="hero-stats">
        <div v-for="item in stats" :key="item.lbl" class="hero-stat">
          <div class="num">{{ item.num }}</div>
          <div class="lbl">{{ item.lbl }}</div>
        </div>
      </div>
      <div class="scroll-hint"><span>向下滚动开始学习</span><span class="arrow">↓</span></div>
    </div>
  </section>
</template>

<script setup>
import { heroStats as stats } from '../data/content.js'
</script>
