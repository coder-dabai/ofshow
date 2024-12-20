import { defineComponent, PropType, ref } from 'vue';
import type { Source as SourceType } from './index.d';
import { getImgUrl } from '@form/utils.ts';
import draggable from 'vuedraggable';

export default defineComponent({
  name: 'SourceContainer',
  props: {
    sourceList: {
      type: Array as PropType<SourceType[]>,
      required: true,
      default: () => [],
    },
    title: {
      type: String,
    },
  },
  components: { draggable },
  setup(props) {
    const dataList = ref<any[]>(props.sourceList);
    const renderSouceList = () => {
      return (
        <div>
          <draggable
            v-model={dataList.value}
            sort={false}
            group={{ name: 'dForm', pull: 'clone', put: false }}
            item-key="key"
            class="flex flex-wrap justify-between"
          >
            {{
              item: ({ element }: any) => (
                <div class="w-118px px-8px py-4px mb-8px border-1px border-solid border-gray-300 rounded-6px flex items-center cursor-pointer">
                  <img src={getImgUrl(element.icon)} alt="" class="w-25px h-25px" />
                  <div class="text-12px ml-4px">{element.name}</div>
                </div>
              ),
            }}
          </draggable>
        </div>
      );
    };

    return () => (
      <div>
        <div class="font-bold mb-12px">{props.title}</div>
        {renderSouceList()}
      </div>
    );
  },
});
