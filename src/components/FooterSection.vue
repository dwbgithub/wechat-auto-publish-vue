<template>
  <footer class="footer">
    <div class="wrap">
      <div class="ft-logo">自动化发布教程</div>
      <div class="ft-tags">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
      <p>本教程仅供学习交流，实操请以微信公众平台官方文档为准<br>接口能力可能随平台更新调整，建议定期查阅最新文档</p>
    </div>
  </footer>
</template>

<script setup>
const tags = ['微信公众号', '定时发布', 'AI 写作', 'API 自动化', '运营效率']
</script>
