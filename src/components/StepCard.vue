<template>
  <div class="step">
    <div class="step-num">{{ index + 1 }}</div>
    <div class="step-card">
      <h4>{{ step.title }}</h4>
      <p v-html="step.body"></p>

      <div v-if="step.code" class="code" v-html="step.code"></div>

      <div v-if="step.tip" class="tip">{{ step.tip }}</div>

      <div v-if="step.mock" class="mock-screen">
        <div class="mock-bar"><i></i><i></i><i></i></div>
        <div class="mock-body">
          <div v-for="(row, i) in step.mock.rows" :key="i" class="mb-row">
            <span>
              <span v-if="step.mock.pulse" class="mb-pulse"></span>
              {{ row[0] }}
            </span>
            <span v-if="row[2] === 'green'" style="color:var(--green-dark);">{{ row[1] }}</span>
            <span v-else-if="row[2] === 'green-bold'" style="color:var(--green-dark);font-weight:600;">{{ row[1] }}</span>
            <span v-else-if="row[2] === 'btn'" class="mb-btn">{{ row[1] }}</span>
            <span v-else>{{ row[1] }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  step: { type: Object, required: true },
  index: { type: Number, required: true }
})
</script>
