import { defineComponent } from "vue";
import SourceContainer from './SourceContainer.tsx'
import baseList from './base.ts'

export default defineComponent({
  name: 'Source',
  setup() {
    return () => (
      <div class="p-8px">
        <SourceContainer title="基础组件" sourceList={baseList}></SourceContainer>
      </div>
    );
  }
})