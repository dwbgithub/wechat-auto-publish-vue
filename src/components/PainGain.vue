<template>
  <section class="section alt">
    <div class="wrap">
      <div class="section-head">
        <div class="section-tag">WHY AUTOMATE</div>
        <h2>为什么要自动化发布？</h2>
        <div class="sub">手动发文的痛，只有天天发推文的人懂</div>
      </div>
      <div class="pain-gain">
        <div class="pg-card pain">
          <h4>手动发文</h4>
          <ul>
            <li v-for="item in pains" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="pg-card gain">
          <h4>自动化发布</h4>
          <ul>
            <li v-for="item in gainsList" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { painPoints as pains, gains as gainsList } from '../data/content.js'
</script>
