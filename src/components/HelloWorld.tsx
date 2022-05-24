import { defineComponent, withModifiers } from 'vue'
import AButton from './AButton.vue';

export default defineComponent({
  setup() {
    const stop = (e: Event) => {
      console.log(e)
    }
    return () => <a target="_blank" href="https://github.com/vuejs/babel-plugin-jsx/issues/564">
    {/* work fine */}
    <AButton onClick={withModifiers(stop, ['prevent'])}>删除</AButton>
    {/* work fine */}
    <AButton onClick={stop}>删除</AButton>
    {/* not work */}
    <AButton onClickPrevent={stop}>删除</AButton>
  </a>
  }
})