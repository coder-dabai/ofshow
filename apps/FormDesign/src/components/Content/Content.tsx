import { defineComponent } from "vue";

export default defineComponent({
  name: 'Content',
  setup() {
    return () => (
      <div class="w-full h-full border-x-1px border-blue-500 border-x-solid">内容区域</div>
    )
  }
})