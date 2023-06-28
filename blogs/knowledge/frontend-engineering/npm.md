---
title: NPM
categories:
 - 前端工程化
tags:
 - npm
 - 学习笔记
date: 2023/06/19
---

一、什么是npm？

npm（Node Package Manager）是Node.js的包管理器，用于安装、升级、删除和管理Node.js模块。

二、npm的安装

npm是随Node.js一起安装的，因此只需安装Node.js即可使用npm。

三、npm的常用命令

1. 安装模块：npm install module_name

2. 卸载模块：npm uninstall module_name

3. 更新模块：npm update module_name

4. 查看模块信息：npm info module_name

5. 查看已安装模块列表：npm list

6. 查看全局安装的模块列表：npm list -g

7. 搜索模块：npm search module_name

8. 发布模块：npm publish

9. 安装指定版本的模块：npm install module_name@version

四、npm的配置

1. 查看npm配置：npm config list

2. 设置npm代理：npm config set proxy http://proxy.company.com:8080

3. 设置npm registry：npm config set registry https://registry.npm.taobao.org

五、npm的包管理

1. 创建一个新的包：npm init

2. 安装包并将其添加到依赖项：npm install module_name --save

3. 安装包并将其添加到开发依赖项：npm install module_name --save-dev

4. 安装全局包：npm install -g module_name

5. 更新所有依赖项：npm update

6. 更新特定依赖项：npm update module_name

七、npm的常见问题

1. npm install失败：可能是网络问题，可以尝试更换npm源。

2. npm install速度慢：可以尝试更换npm源或使用cnpm。

3. npm install后无法找到模块：可能是路径问题，可以尝试使用npm link。

八、总结

npm是Node.js的包管理器，可以方便地安装、升级、删除和管理Node.js模块。掌握npm的基本命令和配置，可以更好地使用Node.js开发。