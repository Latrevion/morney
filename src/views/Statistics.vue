<template>
  <div class="nav-wrapper">
    <div class="content">
      statistics.vue
    </div>
    <Nav/>
  </div>
</template>

<script lang='ts'>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Statistics',
  // components: {Nav}
};
</script>

<style scoped lang='scss'>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>