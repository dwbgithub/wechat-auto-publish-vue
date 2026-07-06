<template>
  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div class="section-tag">METHODS</div>
        <h2>三种方案，怎么选？</h2>
        <div class="sub">先看对比，再选最适合你的那一种</div>
      </div>
      <div class="compare-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th v-for="h in headers" :key="h">{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.feat">
              <td class="feat">{{ row.feat }}</td>
              <td v-for="(key, i) in ['v1','v2','v3']" :key="key">
                <span v-if="typeof row[key] === 'object'" :class="row[key].t">{{ row[key].s }}</span>
                <span v-else>{{ row[key] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="text-align:center;font-size:13px;color:var(--gray-3);margin-top:16px;">提示：三种方案可组合使用，例如"第三方工具生成内容 + 官方定时发布"</p>
    </div>
  </section>
</template>

<script setup>
import { compareHeaders as headers, compareRows as rows } from '../data/content.js'
</script>
