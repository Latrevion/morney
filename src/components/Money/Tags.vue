<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTag.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
      <li class="new" @click="createTag">新增标签</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';

@Component
export default class Tags extends mixins(TagHelper) {

  selectedTag: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTag.indexOf(tag);
    if (index >= 0) {
      this.selectedTag.splice(index, 1);
    } else {
      this.selectedTag.splice(0);
      this.selectedTag.push(tag);
    }
    this.$emit('update:value', this.selectedTag);
  }
}

</script>

<style scoped lang='scss'>
@use "sass:math";
.tags {
  background: white;
  font-size: 16px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  overflow: auto;
  align-items: start;
  > .current {
    flex-grow: 1;
    display: flex;
    align-items: end;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: left;

    > li {

      text-overflow: ellipsis;
      width: 23%;
      $bg: #f3f3f3;
      $h: 48px;
      border: 1px solid #d3d3d3;
      box-shadow: 1px 2px 2px #d3d3d3;
      text-align: center;
      height: $h;
      line-height: $h;
      border-radius: 12px;
      padding: 0 10px;
      margin:0 1%;
      margin-bottom: 8px;

      &.selected {
        background: darken($bg, 50%);
        background: #81ba89;
        color: #ffffff;
        font-weight: bold;
        box-shadow: 0 0 10px rgba(0,0,0,0.25);
      }
    }
  }

  .new{
    font-size: 14px;
  }
}
</style>