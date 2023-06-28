---
title: CSS-层叠样式表
categories:
 - 前端基础
tags:
 - CSS
 - 学习笔记
date: 2023/06/19
---

::: tip 参考资料
[CSS 参考手册](https://www.w3school.com.cn/cssref/index.asp)  
[维基百科](https://zh.wikipedia.org/wiki/CSS)  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[cubic-bezier三次贝塞尔时间函数](http://xinyuefei.com/uncategorized/cubic-bezier.html)
:::

## 简介
### 是什么
> 层叠样式表（英语：Cascading Style Sheets，缩写：CSS；又称串样式列表、级联样式表、串接样式表、阶层式样式表）是一种用来为结构化文档（如HTML文档或XML应用）添加样式（字体、间距和颜色等）的计算机语言，由W3C定义和维护。CSS3现在已被大部分现代浏览器支持，而下一版的CSS4仍在开发中。 ———— [维基百科](https://zh.wikipedia.org/wiki/CSS)


> Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents. ———— [W3C](https://www.w3.org/Style/CSS/)

层叠样式表(Cascading Style Sheets, CSS)是一种向Web文档添加样式(如字体、颜色、间距)的简单机制（计算机语言），由[W3C](https://www.w3.org/Style/CSS/)定义和维护。
### 作用
> CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。 ———— [维基百科](https://zh.wikipedia.org/wiki/CSS)

对WEB文档（如HTML文档）添加样式（字体，间距和颜色等）。也可配合脚本语言（如JavaScript）动态的对网页各元素添加或修改样式。
### 发展历程

> [维基百科](https://zh.wikipedia.org/wiki/CSS#%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2)

#### 诞生与发展

- 1994 : 哈肯·维姆·莱提出了CSS的最初建议。伯特·波斯当时正在设计一个叫做Argo的浏览器，他们决定一起合作设计CSS
- 1996 : 12月两人发布了CSS规范的第一个版本
- 1997 : W3C组织了专门管CSS的工作组。
- 1998 : 五月出版了第二版CSS规则，网页标准计划的七位成员成立了“CSS武士团”
- 2003 : Dave Shea 推出了一个名为“CSS禅意花园”的站点，产生不小的影响
- 2006 ~ 2009 : “DIV+CSS”布局逐步取代缺乏灵活性的传统表格布局，无表格网页设计成为网页内容布局的主流方案
- 当前 : CSS3现在已被大部分现代浏览器支持，而下一版的CSS4仍在开发中

#### 版本历史

> [维基百科](https://zh.wikipedia.org/wiki/CSS#%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2)

- CSS1 - 1996年
- CSS2-2.1 - 1998年
- CSS3 - 1999年开始制定，2011年6月7日，CSS 3 Color Module终于发布为W3C Recommendation，至今已被大部分现代浏览器支持
- CSS4 - W3C于2011年9月29日开始了设计CSS4，增加一些更方便的选择器，并简化了一些现有选择器的用法


## 基础语法

### 语法规则

CSS语法规则由两个主要的部分构成：选择器，以及一条或多条声明（声明为包含属性和值，属性和值用":"分开），多条声明间用";"隔开。
```css
.example { color: red; font-size: 12px }
```

### 注释

CSS注释用于给代码添加额外的解释，或者用于阻止浏览器解析特定区域内的CSS代码。注释对文档布局没有影响。

```css
/* 单行注释 */
/*
  多行注释
  多行注释
*/
```

### 选择器
> [CSS选择器 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)
#### 基本选择器

- 通配选择器: 选择所有元素。（可选）可以将其限制为特定的名称空间或所有名称空间。
```css
* {} /* 匹配任意类型的HTML元素 */
/* 和命名空间组合使用 */
ns|* {} /* 命名空间ns中的所有元素 */
*|* {} /* 会匹配所有命名空间下的所有元素 */
|* {} /* 会匹配所有没有命名空间的元素 */
```

- 元素选择器/类型选择器: 按照给定的节点名称，选择所有匹配的元素。
```css
h1 {}
/* 和命名空间组合使用 */
ns|h1 {} /* 匹配命名空间为 ns 的 <h1> 元素 */
*|h1 {} /* 匹配所有 <h1> 元素 */
|h1 {} /* 匹配没有声明命名空间的 <h1> 元素 */
```

- 类选择器: 按照给定的 class 属性的值，选择所有匹配的元素。
```css
.classname {} /* 所有包含 class="classname"类的元素 */
```

- ID选择器: 按照 id 属性选择一个与之匹配的元素。需要注意的是，一个文档中，每个 ID 属性都应当是唯一的。
```css
#idName {} /* id="idName"的元素 */
```

- 属性选择器: 按照给定的属性，选择所有匹配的元素。
```css
a[title] {} /* 存在title属性的a元素 */
a[href="https://example.com"] /* 存在href属性且属性值为"https://example.com"的a元素 */
a[href*="example"] /* 存在 href 属性并且属性值包含"example"的 <a> 元素 */
a[href$="example"] /* 存在 href 属性并且属性值结尾是"example"的 <a> 元素 */
a[class~="example"] /* 存在 class 属性并且属性值包含单词"example"的<a>元素 */
```

#### 分组选择器

- 列表选择器: `,`是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点
```css
.className1, .className2 {} /* 包含 class="className1" 或 class="className2" 类的元素 */
```

#### 组合选择器

- 后代选择器: ` `(空格)组合不同选择器，选择前一个元素的后代节点
```css
.className1 .className2 {} /* 包含 class="className1" 的元素其后代中包含 class="className2" 的元素 */
```
- 直接子代选择器: `>`组合不同选择器，选择前一个元素的子代节点
```css
.className1>.className2 {} /* 包含 class="className1" 的元素其子代中包含 class="className2" 的元素  */
```
- 一般兄弟选择器: `~`组合不同选择器，后一个节点在前一个节点后面的任意位置，并且共享一个父节点
```css
.className1 ~ .className2 {} /* 包含 class="className1" 的元素后面任意位置和它共享同一父节点的包含 class="className2"的元素 */
```
- 紧邻兄弟选择器: `+`组合不同选择器，后一个节点紧跟在前一个节点之后，并且共享一个父节点
```css
.className1 + .className2 {} /* 包含 class="className1" 的元素紧跟其后和它共享同一父节点的包含 class="className2"的元素 */
```

#### 伪选择器

- 伪类选择器: `:`选择器支持按照未被包含在文档树中的状态信息来选择元素
- [伪类列表](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes#%E5%AD%97%E6%AF%8D%E7%B4%A2%E5%BC%95)
```css
a:visited {} /* 匹配所有曾被访问过的 <a> 元素 */
```
- 伪元素选择器: `::`选择器用于表示无法用HTML语义表达的实体
- [伪元素列表](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements#%E5%AD%97%E6%AF%8D%E7%B4%A2%E5%BC%95)
```css
p::first-line {} /* 每个<p>元素的第一行 */
```
### 属性和属性值

- [CSS属性值定义语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax)
- 特殊关键字: `inherit`/`initial`/`unset`
- 文本相关属性: `color`/`font-size`/`font-family`/`text-decoration`/`text-align` 等。
- 布局相关属性: `float`/`padding`/`margin`/`display`/`position`/`text-indent` 等。
- 背景相关属性: `background`/`background-image`/`background-clip`/`background-size` 等。
- ...

### 变量
> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

- 基本用法
  - 声明一个自定义变量，变量名需要以`--`开始，属性值可以是任何有效的CSS值。
  - 和其他属性一样，自定义变量也是写在CSS的选择器之内的
  ```css
  element { --main-text-color: #333 }
  ```
  - 自定义变量的可见区域取决于定义时所归属的选择器范围内，通常的最佳实践实在根伪类`:root`下定义，这样可以在HTML的任何地方访问到自定义变量
  ```css
  :root {
    --text-color: #333;
    --text-regular-color: #666;
  }
  ```
  - 使用的时候由`var()`来取值
  ```css
  .class {
    color: var(--text-color);
  }
  ```
  - 和其他CSS属性一样，自定义变量具有继承性

  ```html
  <div class="parent">
    <div class="child">这里的文字是#666</div>
    <div class="sibling">这里的文字是#333</div>
  </div>
  ```
  ```css
  .parent {
    --text-color: #333
  }

  .child {
    --text-color: #666
  }

  .child,.parent {
    color: var(--text-color);
  }
  ```

## 盒子模型
### 盒子模型概述

- 块级盒子 (block box) 和 内联盒子 (inline box)
  - 块级盒子
    - 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
    - 每个盒子都会换行
    - width 和 height 属性可以发挥作用
    - 内边距（padding）, 外边距（margin）和 边框（border）会将其他元素从当前盒子周围“推开”
  - 内联盒子
    - 盒子不会产生换行。
    - width 和 height 属性将不起作用。
    - 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
    - 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。
- 标准盒模型
  - 从内而外依次是
    - content: 内容区域，大小可以通过 width 和 height 来设置
    - padding: 内边距，内容区域外的空白区域，大小通过 padding 来设置
    - border: 边框，边框包裹内容和内边距，大小通过 border 相关属性设置
    - margin: 外边距，和其他元素间的空白间距，大小通过 margin 相关属性设置
- 怪异盒模型
  - content: 内容区域，包含标准盒模型的 content & padding & border 三部分，大小可以通过 width 和 height 来设置
  - margin: 外边距，和其他元素间的空白间距，大小通过 margin 相关属性设置

### 盒子模型属性

- 设置盒模型可以使用 box-sizing 属性，包含以下值
  - content-box: 默认值。标准盒模型，参见上一小节的介绍
  - border-box: 设置盒模型为怪异盒模型，参见上一小节的介绍
### 盒子模型实例

```html
<div class="content-box">标准盒模型</div>

<div class="border-box">怪异盒模型</div>
```

```css
/* 实际content-box所占区域的宽度为 200 + 20 + 2 高度为 40 + 20 + 2 */
.content-box {
  width: 200px;
  height: 40px;
  padding: 10px;
  margin: 10px;
  color: #FFF;
  background: blue;
  border: 1px solid blue;
}
/* border-box所占区域就是宽度为200，高度为40的区域 */
.border-box {
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  padding: 10px;
  margin: 10px;
  color: #FFF;
  background: green;
  border: 1px solid green;
}
```

## 样式表

```html
<html>
  <meta />
  <title>CSS 样式表分类</title>
  <head>
    <!-- 外部样式表 -->
    <link rel="stylesheet" type="text/css" href="css/outside.css">
  </head>
  <!-- 内部样式表 -->
  <style type="text/css">
    h1 { color: red }
  </style>
  <body>
    <!-- 行内样式表 -->
    <h1 style="color: blue">CSS 样式表分类</h1>
  </body>
</html>
```

## 优先级

- 样式表优先级排序为: 行内样式表 > 内部样式表 > 外部样式表
- 选择器优先级排序为: !important(1000) > #id(10) > .className(1) = element(1)
- 关于优先级/层叠
  - 优先级越高的样式规则会被使用，相同优先级则选择离得越近（写在后面）的样式
  - 不同样式会叠加，最终显示**每一个优先级最高的样式规则所定义的样式**叠加的样式结果

## 布局

> CSS布局是网页设计中非常重要的一部分，它决定了网页的外观和结构。在CSS中，有多种布局方式可供选择，包括流式布局、固定布局、弹性布局、栅格布局、浮动布局和定位布局。

### 流式布局

流式布局是指网页元素的大小和位置随着浏览器窗口大小的改变而自动调整。这种布局方式可以使网页在不同分辨率的设备上都能够正常显示，但是在大屏幕上可能会出现空白区域，而在小屏幕上可能会导致元素重叠。

```css
.container {
  width: 80%;
  margin: 0 auto;
}

.box {
  width: 30%;
  float: left;
  margin: 1%;
}
```

### 固定布局

固定布局是指网页元素的大小和位置不随浏览器窗口大小的改变而改变。这种布局方式可以使网页在不同分辨率的设备上显示效果一致，但是在小屏幕上可能会导致元素溢出或者被截断。

```css
.container {
  width: 960px;
  margin: 0 auto;
}

.box {
  width: 300px;
  float: left;
  margin: 20px;
}
```

### 弹性布局

弹性布局是指网页元素的大小和位置可以根据浏览器窗口大小的改变而自动调整，但是调整的比例是固定的。这种布局方式可以使网页在不同分辨率的设备上都能够正常显示，并且可以避免出现空白区域或者元素重叠的问题。

```css
.container {
  display: flex;
  justify-content: space-between;
}

.box {
  flex: 1;
  margin: 10px;
}
```

### 栅格布局

栅格布局是指将网页分成若干列和行，然后将元素放置在这些列和行中。这种布局方式可以使网页在不同分辨率的设备上都能够正常显示，并且可以方便地调整元素的位置和大小。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.box {
  grid-column: span 1;
  grid-row: span 1;
}
```

### 浮动布局

浮动布局是指将元素向左或者向右浮动，然后将其他元素围绕它排列。这种布局方式可以使网页在不同分辨率的设备上都能够正常显示，并且可以方便地调整元素的位置和大小。

```css
.container {
  width: 80%;
  margin: 0 auto;
}

.box {
  width: 30%;
  float: left;
  margin: 1%;
}
```

### 定位布局

定位布局是指将元素的位置固定在网页中的某个位置，然后可以通过调整其位置和大小来实现布局。这种布局方式可以使网页在不同分辨率的设备上都能够正常显示，并且可以方便地调整元素的位置和大小。

```css
.container {
  position: relative;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## 响应式设计

### 简介
使用 CSS 和 HTML 调整大小、隐藏、缩小、放大或移动内容，以使其在任何屏幕上看起来都很好，则称为响应式 Web 设计。  
响应式 web 设计会让您的网页在所有设备上看起来都不错。  
响应式 web 设计仅使用 HTML 和 CSS。  
响应式 web 设计并不是程序或 JavaScript。

### 视口

- 视口（viewport）是用户在网页上的可见区域。
- 设置视口: 建议在在所有网页中包含以下 <meta> 视口元素
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- 把内容调整到视口大小
  - 勿使用较大的固定宽度元素
  - 不要让内容依赖于特定的视口宽度来呈现好的效果
  - 使用 CSS 媒体查询为小屏幕和大屏幕应用不同的样式

### 网格视图

- 响应式网格视图通常有 12 列，总宽度为 100％，并且在调整浏览器窗口大小时会收缩和伸展。
- 构建响应式网格视图
```css
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

/* 针对桌面 */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
  ```

### 媒体查询
> [媒体查询@media规则](https://www.w3school.com.cn/cssref/pr_mediaquery.asp)

- 媒体查询是 CSS3 中引入的一种 CSS 技术。仅在满足特定条件时，它才会使用 @media 规则来引用 CSS 属性块。
- 添加断点
```css
@media only screen and (max-width: 768px) {
  /* 针对手机： */
  [class*="col-"] {
    width: 100%;
  }
}
```
- 始终移动优先设计
  - 移动优先（Mobile First）指的是在对台式机或任何其他设备进行设计之前，优先针对移动设备进行设计（这将使页面在较小的设备上显示得更快）。
  ```css
  /* 针对手机： */
  [class*="col-"] {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    /* 针对桌面： */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
  }
  ```
- 多个断点
  ```css
  /* 针对手机： */
  [class*="col-"] {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    /* 针对平板电脑： */
    .col-s-1 {width: 8.33%;}
    .col-s-2 {width: 16.66%;}
    .col-s-3 {width: 25%;}
    .col-s-4 {width: 33.33%;}
    .col-s-5 {width: 41.66%;}
    .col-s-6 {width: 50%;}
    .col-s-7 {width: 58.33%;}
    .col-s-8 {width: 66.66%;}
    .col-s-9 {width: 75%;}
    .col-s-10 {width: 83.33%;}
    .col-s-11 {width: 91.66%;}
    .col-s-12 {width: 100%;}
  }

  @media only screen and (min-width: 768px) {
    /* 针对桌面： */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
  }
  ```
- 典型的设备断点
```css
/* 超小型设备（电话，600px 及以下） */
@media only screen and (max-width: 600px) {...} 

/* 小型设备（纵向平板电脑和大型手机，600 像素及以上） */
@media only screen and (min-width: 600px) {...} 

/* 中型设备（横向平板电脑，768 像素及以上） */
@media only screen and (min-width: 768px) {...} 

/* 大型设备（笔记本电脑/台式机，992px 及以上） */
@media only screen and (min-width: 992px) {...} 

/* 超大型设备（大型笔记本电脑和台式机，1200px 及以上） */
@media only screen and (min-width: 1200px) {...}
```
- 方向
  - 媒体查询还可用于根据浏览器的方向来更改页面的布局。
```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

### 图像

- `width`属性设置为百分比，且高度设置`auto`，则图像将进行响应式放大和缩小【同样适用于视频`video`元素】
- `max-width`属性设置100%，且高度设置`auto`，则图像将按需放大缩小，但绝不会放大到大于其原始大小【同样适用于视频`video`元素】
- 背景图像
  - 将 background-size 属性设置为 "contain"，则背景图像将缩放，并尝试匹配内容区域。不过图像将保持其长宽比（图像宽度与高度之间的比例关系）
  - 将 background-size 属性设置为 "100% 100%"，则背景图像将拉伸以覆盖整个内容区域
  - background-size 属性设置为 "cover"，则背景图像将缩放以覆盖整个内容区域。请注意，"cover" 值保持长宽比，且可能会裁剪背景图像的某部分
- 为不同设备准备不同图像
  - 大幅的图像在大型计算机屏幕上可以完美显示，但在小型设备上就没用了。为什么在不得不缩小图像时又加载大图像呢？为了减少负载或出于任何其他原因，可以使用媒体查询在不同的设备上显示不同的图像。
- HTML5`<picture>`元素: 可以定义多幅图像
  - srcset 属性是必需的，它定义图像的来源。
  - media 属性是可选的，它接受可在 CSS @media 规则 中找到的媒体查询。
```css
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 400px)">
  <source srcset="img_flowers.jpg">
  <img src="img_flowers.jpg" alt="Flowers">
</picture>
```
## 2D/3D转换，过渡和动画

### 2D/3D转换

> CSS转换（transforms）允许移动、旋转、缩放和倾斜元素。

通过使用CSS `transform`属性，您可以使用以下2D转换方法

- `translate()`: 根据为X轴和Y轴指定的参数从当前位置移动元素
```css
div {
  transform: translate(50px, 100px); /* 把div元素从当前位置向右移动50px，并向下移动100px */
}
```
- `rotate()`: 根据给定的角度顺时针或逆时针旋转元素
```css
div {
  transform: rotate(20deg); /* 把div元素顺时针旋转20度 */
}
```
- `scaleX()`: 根据给定的参数增加或减少元素的宽度
```css
div {
  transform: scaleX(2); /* 把div元素宽度增大到原来的两倍 */
}
```
- `scaleY()`: 根据给定的参数增加或减少元素的宽度
```css
div {
  transform: rotate(2); /* 把div元素高度增大到原来的两倍 */
}
```
- `scale()`: 根据给定的宽度和高度参数增加或减少元素的大小
```css
div {
  transform: scale(2, 3); /* 把div元素增大为原宽度的两倍和原高度的3倍 */
}
```
- `skewX()`: 根据给定的参数使元素沿X轴倾斜给定角度
```css
div {
  transform: skewX(20deg); /* 把div元素沿X轴倾斜20度 */
}
```
- `skewY()`: 根据给定的参数使元素沿Y轴倾斜给定角度
```css
div {
  transform: skewY(20deg); /* 把div元素沿Y轴倾斜20度 */
}
```
- `skew()`: 根据给定的参数使元素沿X和Y轴倾斜给定角度
```css
div {
  transform: skew(20deg, 10deg); /* 把div元素沿X轴倾斜20度，沿Y轴倾斜10度 */
}
```
- `matrix()`: 把所有 2D 变换方法组合为一个，可接收6个参数，`matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`
```css
div {
  transform: matrix(3, 20deg, 10deg, 2, 50px, 100px); /* 把div元素宽度放大为原来的3倍，高度放大为原来的2倍，沿X轴倾斜10度，沿Y轴倾斜20度，从当前位置向右移动50px并向下移动100px */
}
```

通过使用CSS `transform`属性，您可以使用以下3D转换方法

- `rotateX()`: 根据给定参数使元素绕其X轴旋转给定角度
```css
div {
  transform: rotateX(150deg)
}
```
- `rotateY()`: 根据给定参数使元素绕其Y轴旋转给定角度
```css
div {
  transform: rotateY(150deg)
}
```
- `rotateZ()`: 根据给定参数使元素绕其Z轴旋转给定角度
```css
div {
  transform: rotateZ(150deg)
}
```

### 过渡
> 在给定时间内平滑的改变属性

- 创建过渡效果必须明确
  - 指定触发过渡效果的CSS属性
  - 效果的持续时间
```css
div {
  width: 100px;
  height: 100px;
  background: red;
  /* 可以同时指定多个CSS属性 */
  transition: width 2s, height 4s; /* 当指定的CSS属性(width)发生变化时，将开始过渡效果 */
}

div:hover {
  width: 300px;
  height: 200px;
}
```
- 指定过渡的速度曲线
  - `transition-timing-function`属性规定过渡效果的速度曲线，支持一下值
    - ease - 规定过渡效果，先缓慢地开始，然后加速，然后缓慢地结束（默认）
    - linear - 规定从开始到结束具有相同速度的过渡效果
    - ease-in -规定缓慢开始的过渡效果
    - ease-out - 规定缓慢结束的过渡效果
    - ease-in-out - 规定开始和结束较慢的过渡效果
    - cubic-bezier(n,n,n,n) - 允许您在三次贝塞尔函数中定义自己的值
```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}

#div1 {transition-timing-function: linear;}
#div2 {transition-timing-function: ease;}
#div3 {transition-timing-function: ease-in;}
#div4 {transition-timing-function: ease-out;}
#div5 {transition-timing-function: ease-in-out;}

div:hover {
  width: 300px;
}
```
- 延迟过渡效果
  - `transition-delay`属性规定过渡效果的延迟（以秒计）
```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 3s;
  transition-delay: 1s;
}

div:hover {
  width: 300px;
}
```
- 过渡加转换
```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s, height 2s, transform 2s;
}

div:hover {
  width: 300px;
  height: 300px;
  transform: rotate(180deg);
}
```
- 简写过渡属性
```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s linear 1s;
  /* 等同于以下 */
  /* transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s; */
}

div:hover {
  width: 300px;
}
```
### 动画
> 动画使元素逐渐从一种样式变为另一种样式。  
> 您可以随意更改任意数量的 CSS 属性。  
> 如需使用 CSS 动画，您必须首先为动画指定一些关键帧。  
> 关键帧包含元素在特定时间所拥有的样式。

- 下面的例子将 "example" 动画绑定到div元素。动画将持续 4 秒钟，同时将div元素的背景颜色从 "red" 逐渐改为 "yellow"：
```css
/* 动画代码 */
/* 定义关键帧 */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

/* 向此元素应用动画效果 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example; /* animation-name 指定使用的关键帧名称 */
  animation-duration: 4s; /* animation-duration 属性定义需要多长时间才能完成动画。如果未指定 animation-duration 属性，则动画不会发生，因为默认值是 0s（0秒） */
}
```

- 下面的例子将在动画完成 25％，完成 50％ 以及动画完成 100％ 时更改div元素的背景颜色
```css
/* 动画代码 */
@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}

/* 应用动画的元素 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

- 下面的例子将在动画完成 25％，完成 50％ 以及动画完成 100％ 时更改背景颜色和div元素的位置
```css
/* 动画代码 */
@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}

/* 应用动画的元素 */
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

- 延迟动画
  - `animation-delay`属性规定动画开始的延迟时间
```css
div {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s; /* 开始动画前有 2 秒的延迟 */
  /* animation-delay: -2s; */ /* 负值也是允许的。如果使用负值，则动画将开始播放，如同已播放 N 秒 */
}

@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
```

- 设定动画应该运行多少次
  - `animation-iteration-count`属性指定动画应运行的次数。
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
  /* animation-iteration-count: infinite; */ /* 使用值infinite将使动画永远持续下去 */
}

@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
```

- 反向或交替运行动画
  - `animation-direction`属性指定是向前播放、向后播放还是交替播放动画。支持以下值
    - normal - 动画正常播放（向前）。默认值
    - reverse - 动画以反方向播放（向后）
    - alternate - 动画先向前播放，然后向后
    - alternate-reverse - 动画先向后播放，然后向前

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;  
}

@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
```

- 指定动画的速度曲线
  - `animation-timing-function`属性规定动画的速度曲线。支持以下值
    - ease - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）
    - linear - 规定从开始到结束的速度相同的动画
    - ease-in - 规定慢速开始的动画
    - ease-out - 规定慢速结束的动画
    - ease-in-out - 指定开始和结束较慢的动画
    - cubic-bezier(n,n,n,n) - 运行您在三次贝塞尔函数中定义自己的值

```css
div {
  width: 100px;
  height: 50px;
  background-color: red;
  font-weight: bold;
  position: relative;
  animation: mymove 5s infinite;
}

#div1 {animation-timing-function: linear;}
#div2 {animation-timing-function: ease;}
#div3 {animation-timing-function: ease-in;}
#div4 {animation-timing-function: ease-out;}
#div5 {animation-timing-function: ease-in-out;}

@keyframes mymove {
  from {left: 0px;}
  to {left: 300px;}
}
```

- 指定动画的填充模式
  - 在不播放动画时（在开始之前，结束之后，或两者都结束时），`animation-fill-mode`属性规定目标元素的样式。支持以下值
    - none - 默认值。动画在执行之前或之后不会对元素应用任何样式。
    - forwards - 元素将保留由最后一个关键帧设置的样式值（依赖 animation-direction 和animation-iteration-count）。
    - backwards - 元素将获取由第一个关键帧设置的样式值（取决于 animation-direction），并在动画延迟期间保留该值。
    - both - 动画会同时遵循向前和向后的规则，从而在两个方向上扩展动画属性。

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation-name: example;
  animation-duration: 3s;  
  animation-delay: 2s;
  animation-fill-mode: backwards;
}

@keyframes example {
  from {top: 0px; background-color: yellow;}
  to {top: 200px;}
}
```

- 动画简写属性
```css
div {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation: example 5s linear 2s infinite alternate;
  /* 等同于以下拆解语法 */
  /* animation-name: example;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate; */
}

@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
```

## 预处理器
- 使用CSS预处理器的优缺点 ———— 摘自《CSS揭秘》
  - 优点: 如果使用得当，它们在大型项目中可以让代码更加灵活
  - 缺点: 
    - CSS 的文件体积和复杂度可能会失控。即使是简洁明了的源代码， 在经过编译之后也可能会变成一头从天而降的巨兽。
    - 调试难度会增加，因为你在开发工具中看到的 CSS 代码并不是你写 的源代码。不过这个问题已经大大好转了，因为已经有越来越多的 调试工具开始支持 SourceMap。SourceMap 是一种非常酷的新技术， 正是为了解决这个痛点而生的，它会告诉浏览器哪些编译生成的 CSS 代码对应哪些预处理器 CSS 代码，精确到行号。
    - 预处理器在开发过程中引入了一定程度的延时。尽管它们通常很快， 但仍然需要差不多一秒钟的时间来把你的源代码编译成 CSS，而你 不得不等待这段时间才能预览到代码的效果。
- 常用CSS预处理器
  - [less](https://less.bootcss.com/#%E6%A6%82%E8%A7%88)
  - [sass](https://sass-lang.com/)
  - [stylus](https://stylus-lang.com/)

## 框架
- [BootStrap](https://getbootstrap.com/)
- [Foundation](https://get.foundation/)

## 最佳实践

### 最佳实践
- [10-best-practices-for-improving-your-css](https://medium.com/@ferencalmasi/10-best-practices-for-improving-your-css-84c69aac66e)
### 代码规范

- [css代码规范](./specification/css.md)
### 性能优化

- [CSS性能优化的8个技巧](https://juejin.cn/post/6844903649605320711)

::: tip 拓展阅读
[BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)  
[BEM](https://getbem.com/introduction/)
:::
