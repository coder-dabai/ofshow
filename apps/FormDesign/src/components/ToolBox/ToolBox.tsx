import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToolBox',
  setup() {
    return () => (
      <div class="h-50px px-8px flex justify-between items-center border-b-1 border-blue-500 border-b-solid">
        <div class="text-blue-500 font-bold text-16px">DForm 表单设计器</div>
        <div>操作按钮区域</div>
      </div>
    );
  },
});
