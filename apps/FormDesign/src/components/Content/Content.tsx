import { defineComponent } from "vue";

export default defineComponent({
  name: 'Content',
  setup() {
    const dragenterFn = (e: any) => {
      e.preventDefault();
      console.log('enter', e)
    }

    const dragoverFn = (e: any) => {
      e.preventDefault();
      console.log('over', e);
    };

    return () => (
      <div
        onDragenter={dragenterFn}
        onDragover={dragoverFn}
        class="w-full h-full border-x-1px border-blue-500 border-x-solid"
      >
        内容区域
      </div>
    );
  }
})