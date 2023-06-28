---
title: Rollup
categories:
 - 前端工程化
tags:
 - Rollup
 - 学习笔记
date: 2023/06/19
---

一、什么是Rollup

Rollup是一个JavaScript模块打包器，它采用ES6模块语法，可以将多个模块打包成一个文件，以减少HTTP请求的数量，提高页面加载速度。与Webpack和Browserify等打包工具不同，Rollup专注于打包JavaScript库和组件，而不是应用程序。

二、Rollup的优点

1. Tree shaking：Rollup可以通过静态分析代码，删除未使用的代码，从而减少打包后的文件大小。

2. ES6模块支持：Rollup支持ES6模块语法，可以更好地管理模块之间的依赖关系。

3. 代码分割：Rollup可以将代码分割成多个文件，以便在需要时按需加载。

4. 性能优化：Rollup的打包速度比Webpack和Browserify等打包工具更快。

三、Rollup的安装和使用

1. 安装Rollup：

```
npm install rollup -g
```

2. 创建一个JavaScript文件，例如index.js，然后编写代码：

```
import { sum } from './math.js';

console.log(sum(1, 2));
```

3. 创建一个math.js文件，然后编写代码：

```
export function sum(a, b) {
  return a + b;
}
```

4. 执行以下命令打包代码：

```
rollup index.js --file bundle.js --format iife
```

其中，index.js是入口文件，bundle.js是打包后的文件名，iife是输出格式。

5. 在HTML文件中引入打包后的文件：

```
<script src="bundle.js"></script>
```

四、Rollup的配置文件

Rollup支持使用配置文件来配置打包选项。创建一个名为rollup.config.js的文件，然后编写以下代码：

```
export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  }
}
```

其中，input是入口文件，output是输出选项。

然后执行以下命令打包代码：

```
rollup -c
```

-c选项表示使用配置文件。

五、Rollup插件

Rollup支持使用插件来扩展其功能。以下是一些常用的插件：

1. rollup-plugin-babel：将ES6代码转换为ES5代码。

2. rollup-plugin-commonjs：将CommonJS模块转换为ES6模块。

3. rollup-plugin-node-resolve：解析模块路径，以便正确地处理依赖关系。

4. rollup-plugin-uglify：压缩打包后的代码。

六、总结

Rollup是一个优秀的JavaScript模块打包器，它支持ES6模块语法、Tree shaking、代码分割等功能，可以帮助我们更好地管理JavaScript库和组件。同时，Rollup还支持使用配置文件和插件来扩展其功能。