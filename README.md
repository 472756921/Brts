# Brts React 框架

实用的 React 基础框架，内置 内置 webpack, mock 服务，webpack 可按需求配置  
代码规范执行 eslint, 结合 prettierrc 美化

## 支持 SSR

内置 SSR 功能，可按照步骤开启
1. 使用 Webpack 构建 server 包 （npm run sbuild）
2. 编写 server 服务文件，引用 构建好的 server 包 (server/index)
3. 启动服务（npm run server）

## 关于样式

1. SSR 时，需要将页面的 样式 一并返回，如何获取 样式 是关键问题
2. 使用 isomorphic-style-loader 可以实现，但需要对业务代码进行改写
3. 我们可以构建一个单独的样式文件出来，这一步是通过 客户端构建时完成的
4. 使用 mini-css-extract-plugin 插件，在构建客户端代码的同时，构建一个 css 文件，并将它交由 node 返回给 浏览器
5. mini-css-extract-plugin 不能和 style-loader 同时使用
