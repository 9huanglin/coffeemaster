// vite.config.ts
export default defineConfig({
  base: '/coffeemaster/', // 替换为您的仓库名称
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
