<template>
  <div class="numberPad">
    <div class="output">{{ output || "&nbsp;" }}</div>
    <div class="buttons clearfix">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click='ok' class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output = this.value.toString();

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent as string;
    //const input = button.textContent ! 把空的情况排除掉。
    if (this.output.length === 16) {return;}
    if (this.output === '0') {
      if (input === '0') {
        return;
      } else if ('1234567890'.indexOf(input) >= 0) {
        this.output = input;
        this.output = this.output.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
        return;
      } else {
        this.output += input;
        this.output = this.output.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
        return;
      }
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}
    this.output += input;
    this.output = this.output.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {

      this.output = this.output.slice(0, -1);
    }
  }

  clear() {
    this.output = '0';
  }

  ok() {
    const number = parseFloat(this.output)
    this.$emit('update:value',number );
    this.$emit('submit', number);
    this.output = '0';
  }

}


</script>

<style scoped lang='scss'>
@import "~@/assets/style/helper.scss";

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.numberPad {
  .output {
    font-size: 30px;
    font-family: Consolas, monospace;
    padding: 5px 16px;
    text-align: right;
    color: #81ba89;
    @extend %innerShadow;
    @extend %clearFix;
  }

  .buttons {
    @extend %clearFix;

    button {
      width: calc(25% - 2px);
      height: 52px;
      float: left;
      background: transparent;
      border: 1px solid #cacaca;
      margin: 1px ;
      font-size: 20px;

      &.zero {
        width: calc(50% - 2px);

      }
      //$bg: #f2f2f2;
      $bg: rgb(243,243,243);


      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
        background: $bg;
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 8%);
        background: $bg;
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 12%);
        background: $bg;
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 16%);
        background: $bg;
      }

      &:nth-child(14) {
        background: darken($bg, 20%);
        background: $bg;
      }

      &:nth-child(12) {
        background: darken($bg, 24%);
        background: $bg;
      }


      &.ok {
        height: 106px;
        float: right;
        background: rgb(129,186,137);
        color: #ffffff;
        border-radius: 5px;
      }

      &.ok:active {
        background-color: rgb(133,161,138);
        color: black;
      }
    }
    button:active {
      background-color: #cccccc;
      color: white;
    }
  }
}
</style>