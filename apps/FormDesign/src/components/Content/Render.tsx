import { defineComponent, h, ref } from 'vue';
import FieldComponents from '@form/components/Source/preview/index';
import draggable from 'vuedraggable';
import { ConfigProvider, Select } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default defineComponent({
  name: 'Render',
  components: { draggable },
  props: {
    schema: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    const formStruct = ref([]);

    const dragEnd = (e: any) => {
      console.log('dragEnd', e);
    };

    return () => (
      <ConfigProvider locale={zhCN}>
        <div class="w-full h-full pt-20px">
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
              item: ({ element }: any) => (
                <div class="mb-20px w-full flex flex-items-center">
                  <span class="mr-8px text-12px w-120px text-right">{element.options.label}:</span>
                  {h(FieldComponents[element.key], { ...element.options })}
                </div>
              ),
            }}
          </draggable>
        </div>
      </ConfigProvider>
    );
  },
});
