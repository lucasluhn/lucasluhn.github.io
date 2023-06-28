---
title: Yarn
categories:
 - 前端工程化
tags:
 - Yarn
 - 学习笔记
date: 2023/06/19
---

一、什么是yarn？

Yarn是一个快速、可靠、安全的依赖管理工具，由Facebook开发，旨在解决npm的一些问题。

二、yarn的优点

1.速度快：Yarn使用并行下载，缓存机制和更好的网络请求算法，可以大大提高包的下载速度。

2.可靠性高：Yarn使用一个锁文件（yarn.lock）来确保每个人都使用相同的依赖版本，这可以避免由于依赖版本不一致而导致的构建失败等问题。

3.安全性高：Yarn使用了一个安全漏洞数据库，可以及时通知用户已知的安全漏洞。

三、yarn的安装

1.使用npm安装yarn

```
npm install -g yarn
```

2.使用Homebrew安装yarn（仅适用于Mac）

```
brew install yarn
```

四、yarn的常用命令

1.初始化一个新项目

```
yarn init
```

2.添加一个依赖包

```
yarn add [package]
```

3.添加一个开发依赖包

```
yarn add [package] --dev
```

4.升级一个依赖包

```
yarn upgrade [package]
```

5.移除一个依赖包

```
yarn remove [package]
```

6.安装所有依赖包

```
yarn install
```

7.运行脚本

```
yarn run [script]
```

五、yarn的工作原理

1.生成yarn.lock文件

当你使用yarn add命令添加一个新的依赖包时，Yarn会检查你的package.json文件并生成一个yarn.lock文件。yarn.lock文件包含了所有依赖包的版本信息，以及它们之间的依赖关系。

2.并行下载

Yarn使用并行下载来加速包的下载。它会同时下载多个包，而不是像npm一样一个一个地下载。

3.缓存机制

Yarn会将每个包的下载文件缓存到本地，这样下次再次安装这个包时，Yarn就可以直接从缓存中读取文件，而不需要重新下载。

4.安全漏洞数据库

Yarn使用了一个安全漏洞数据库，可以及时通知用户已知的安全漏洞。如果你安装了一个有已知漏洞的包，Yarn会给你一个警告。

六、总结

Yarn是一个快速、可靠、安全的依赖管理工具，它可以大大提高包的下载速度，确保每个人都使用相同的依赖版本，以及及时通知用户已知的安全漏洞。如果你还没有使用过Yarn，建议你尝试一下。