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
  padding-right: 16px ;
  display: flex;
  align-items: center;
  background: #f3f3f3;
  .name {
    padding-right: 16px;
    font-weight: bold;
  }

  input {
    height: 36px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }

  /*这是控制上下小箭头的*/
  ::-webkit-calendar-picker-indicator {
    /*这是控制下拉小箭头的*/
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px #fff, 0 1px #eee;
    /* background-color: rgb(165, 65, 65); */
    background-image: -webkit-linear-gradient(top,#81ba89 , #e6e6e6);
    color: #666;
    cursor: pointer;
  }

  input:focus {
    background: rgb(219,236,221);
    color: black;
    border: 1px solid #cccccc;
  }
}
</style>