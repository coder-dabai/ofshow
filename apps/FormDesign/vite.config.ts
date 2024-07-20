import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS()],
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
