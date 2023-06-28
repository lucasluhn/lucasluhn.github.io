---
title: Vite
categories:
 - 前端工程化
tags:
 - Vite
 - 学习笔记
date: 2023/06/19
---

一、什么是Vite

Vite是一款基于ES modules的构建工具和开发服务器，它的目标是提供快速的开发体验。Vite的主要特点是：

1. 快速的冷启动：Vite使用原生ES模块导入，无需打包，因此启动速度非常快。

2. 实时模块热更新：Vite支持实时模块热更新，可以在不刷新浏览器的情况下更新代码。

3. 简单的配置：Vite的配置非常简单，只需要一个vite.config.js文件即可。

4. 支持多种语言：Vite支持多种语言，包括JavaScript、TypeScript、CSS、SCSS、Less等。

5. 支持多种框架：Vite支持多种框架，包括Vue、React、Angular等。

二、Vite的安装和使用

1. 安装Vite

可以使用npm或yarn安装Vite：

```bash
npm install -g vite
```

或者

```bash
yarn global add vite
```

2. 创建项目

可以使用Vite创建一个新项目：

```bash
vite create my-project
```

这个命令会创建一个新的项目，并安装所有必要的依赖。

3. 启动开发服务器

可以使用以下命令启动开发服务器：

```bash
cd my-project
npm run dev
```

或者

```bash
cd my-project
yarn dev
```

这个命令会启动一个开发服务器，并在浏览器中打开一个新的窗口。

4. 构建项目

可以使用以下命令构建项目：

```bash
npm run build
```

或者

```bash
yarn build
```

这个命令会将项目打包成一个可部署的文件。

三、Vite的配置

Vite的配置非常简单，只需要一个vite.config.js文件即可。以下是一个简单的配置示例：

```javascript
module.exports = {
  // 配置选项
}
```

Vite的配置选项非常多，以下是一些常用的配置选项：

1. root：指定项目的根目录。

2. base：指定项目的基础路径。

3. plugins：指定要使用的插件。

4. server：指定开发服务器的配置。

5. build：指定构建的配置。

四、Vite的插件

Vite支持使用插件来扩展其功能。以下是一些常用的Vite插件：

1. @vitejs/plugin-vue：用于支持Vue单文件组件。

2. @vitejs/plugin-react-refresh：用于支持React的热更新。

3. @vitejs/plugin-typescript：用于支持TypeScript。

4. @vitejs/plugin-legacy：用于支持旧版浏览器。

5. @vitejs/plugin-svg：用于支持SVG文件。

五、总结

Vite是一个快速的构建工具和开发服务器，它的主要特点是快速的冷启动和实时模块热更新。Vite的配置非常简单，只需要一个vite.config.js文件即可。Vite还支持使用插件来扩展其功能。