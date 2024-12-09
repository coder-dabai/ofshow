import { defineComponent, h, ref } from 'vue';
import draggable from 'vuedraggable';
import FieldComponents from '../Source/preview/index'

export default defineComponent({
  name: 'Content',
  components: { draggable },
  setup() {
    const formStruct = ref([]);

    const dragEnd = (e: any) => {
      console.log('111', e);
    };

    return () => (
      <div class="w-full h-full border-x-1px border-blue-500 border-x-solid">
        <draggable
          v-model={formStruct.value}
          animation={200}
          ghostClass="ghost"
          group="dForm"
          item-key="key"
          class="h-full"
          onEnd={dragEnd}
        >
          {{
            item: ({ element }: any) => h(FieldComponents[element.key]),
          }}
        </draggable>
      </div>
    );
  },
});