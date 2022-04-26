<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="money"/>
      记账</router-link>
    |
    <router-link to="/labels">
      <Icon name="label"/>
      标签</router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics"/>
      统计</router-link>
  </div>
</template>

<script lang='ts'>
// import x from '@/assets/icons/label.svg';
// import y from '@/assets/icons/money.svg';
// console.log(x)


export default {
  name: 'NAV',
};
</script>

<style scoped lang='scss'>
.nav {
  display: flex;
  border: 1px solid red;
}
</style>