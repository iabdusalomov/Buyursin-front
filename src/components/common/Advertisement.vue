<template>
  <div class="adv-block-wrapper">
    <div class="adv-block">
      <slot>ADV</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvBlock',
}
</script>

<style scoped>
.adv-block-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.adv-block {
  width: 100%;
  max-width: 1000px;
  height: 180px;
  background: var(--bg-purple);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: var(--primary-color);
  font-weight: bold;
  margin: 40px 0;
}
@media (max-width: 600px) {
  .adv-block {
    height: 60px;
    font-size: 16px;
    border-radius: 10px;
    margin: 16px 0;
  }
}
</style> 