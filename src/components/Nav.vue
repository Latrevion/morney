<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="label"/>标签
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang='ts'>
// import x from '@/assets/icons/label.svg';
// import y from '@/assets/icons/money.svg';
// console.log(x)


export default {
  name: 'NAV',
};
</script>

<style  lang='scss' scoped>
nav {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0  3px rgba(0,0,0,0.3);

   > .item {
     padding: 2px 0;
     width: 33.33333%;
      display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     font-size: 12px;
   }
}


</style>