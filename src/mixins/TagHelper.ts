import Vue from 'vue';
import Component from 'vue-class-component';
import {values} from 'lodash';


const map: { [key: string]: string } = {
  'tag name duplicated': '标签名重复了'
};

@Component
export class TagHelper extends Vue {
  createTag() {
      // @ts-ignore
       this.$prompt('不要超过4个汉字', '请输入标签名', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern: /^.{1,4}$/,
      inputErrorMessage: '标签名太长',
         // @ts-ignore
    }).then(({value})=>{
      let name: string;
      name =  value;
         this.$store.commit('createTag', name);
         if (this.$store.state.createTagError) {
           window.alert(map[this.$store.state.createTagError.message] || '未知错误');
         }
    })
  }
}

export default TagHelper;