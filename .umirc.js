
// 更多配置参见 https://umijs.org/config/

export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'project-template-with-UmiJS',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  define: {
    // everything you want in build
  },
}
