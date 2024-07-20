import { defineComponent } from "vue";

export default defineComponent({
  name: 'Panel',
  setup() {
    return () => (
      <div class="w-full h-full">属性面板</div>
    )
  }
})