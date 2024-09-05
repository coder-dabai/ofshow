import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import { resolve } from 'path';

const resolveBaseRoot = (path: string) => `${resolve(__dirname, path)}/`;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS()],
  resolve: {
    alias: {
      '@dapps/formdesign': resolve(__dirname, '../FormDesign'),
      '@/': resolveBaseRoot('../FormDesign/src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts', '.vue', '.tsx'],
  },
  css: {
    preprocessorOptions: {
      less: {
        // math: 'always', // 括号内才使用数学计算
        globalVars: {
          // 全局变量
        },
      },
    },
  },
});
