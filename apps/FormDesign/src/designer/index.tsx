import { defineComponent } from 'vue';
import ToolBox from '../components/ToolBox/ToolBox';
import Source from '../components/Source/Source';
import Content from '../components/Content/Content';
import Panel from '../components/Panel/Panel';

export default defineComponent({
  name: 'DesignerApp',
  setup() {
    return () => (
      <div class="w-full h-100vh">
        <ToolBox />
        <div class="flex h-[calc(100vh-51px)]">
          <div class="w-300px">
            <Source />
          </div>
          <div class="flex-1">
            <Content />
          </div>
          <div class="w-300px">
            <Panel />
          </div>
        </div>
      </div>
    );
  },
});
