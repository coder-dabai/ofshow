import { defineComponent, PropType } from 'vue';
import type { Source as SourceType } from './index.d';
import { getImgUrl } from '@form/utils.ts';

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
  setup(props) {
    const renderSouceList = () => {
      return (
        <div class="flex flex-wrap justify-between">
          {props.sourceList.map(source => {
            return (
              <div
                draggable={true}
                class="w-118px px-8px py-4px mb-8px border-1px border-solid border-gray-300 rounded-6px flex items-center cursor-pointer"
              >
                <img src={getImgUrl(source.icon)} alt="" class="w-25px h-25px" />
                <div class="text-12px ml-4px">{source.name}</div>
              </div>
            );
          })}
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
