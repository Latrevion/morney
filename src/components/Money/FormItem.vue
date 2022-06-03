<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.filedName}}</span>
      <template v-if="type === 'date'">
        <input :type="type || 'text'"
               :value="x(value)"
               @input="onValueChanger($event.target.value)"
               :placeholder="placeholder">
      </template>
      <template v-else>
        <input :type="type || 'text'"
               :value="value"
               @input="onValueChanger($event.target.value)"
               :placeholder="placeholder">
      </template>
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import dayjs from 'dayjs';


@Component
export default class FormItem extends Vue {

  @Prop({default:''}) readonly value!:string;
  @Prop({required:true}) filedName!:string;
  @Prop()placeholder?:string;
  @Prop()type?:string;

  onValueChanger(value:string){
    this.$emit('update:value',value)
  }
  x(isoSting:string){
    return dayjs(isoSting).format('YYYY-MM-DD')
  }
}
</script>

<style scoped lang='scss'>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>