---
title: HTML
categories:
 - 前端基础
tags:
 - HTML
 - 学习笔记
date: 2023/06/19
---

## 一、HTML是什么
1. HTML是Hyper Text Markup Language的缩写，即超文本标记语言。
2. HTML是一种用于创建网页的标准标记语言，它描述了网页的结构和内容。
3. HTML使用标记来描述网页的各个部分，包括文本、图像、链接等。

## 二、HTML基础语法
1. HTML文档以`<!DOCTYPE html>`声明开始。
2. HTML文档由`<html>`标签开始，以`</html>`标签结束。
3. `<head>`标签用于定义文档的头部，包括文档的标题、样式表等。
4. `<body>`标签用于定义文档的主体部分，包括文本、图像、链接等。
5. HTML标记通常以开始标记和结束标记的形式出现，例如`<p>`和`</p>`。
6. HTML标记可以包含属性，属性用于描述标记的特性，例如`<img src="image.jpg">`中的src属性表示图像的来源。

## 三、常用HTML标签
1. 标题标记：用于定义文档的标题，共有6个级别，分别为`<h1>`到`<h6>`。
2. 段落标记：用于定义文本的段落，使用`<p>`标记。
3. 链接标记：用于创建链接，使用`<a>`标记，其中href属性表示链接的目标。
4. 图像标记：用于插入图像，使用`<img>`标记，其中src属性表示图像的来源。
5. 列表标记：用于创建有序或无序列表，分别使用`<ol>`和`<ul>`标记，其中`<li>`标记表示列表项。
6. 表格标记：用于创建表格，使用`<table>`标记，其中`<tr>`标记表示表格的行，`<td>`标记表示表格的单元格。

## 四、HTML样式
1. HTML可以使用内联样式、内部样式和外部样式表来定义样式。
2. 内联样式：将样式直接应用于标记，例如`<p style="color:red;">`。
3. 内部样式：将样式定义在`<head>`标签内的`<style>`标签中，例如`<style>p{color:red;}</style>`。
4. 外部样式表：将样式定义在外部CSS文件中，例如`<link rel="stylesheet" href="style.css">`。

## 五、HTML元素属性
1. HTML元素可以包含属性，属性用于描述元素的特性。
2. 属性通常以名称/值对的形式出现，例如`<img src="image.jpg">`中的src属性。
3. 属性可以用于控制元素的行为和外观，例如`<a href="http://www.baidu.com" target="_blank">`中的target属性表示链接在新窗口中打开。

## 六、HTML表单
1. HTML表单用于收集用户输入的数据。
2. 表单由`<form>`标记开始，以`</form>`标记结束。
3. 表单包含各种表单元素，例如文本框、单选框、复选框、下拉列表等。
4. 表单元素通常包含名称和值，例如`<input type="text" name="username">`中的name属性表示元素的名称，用户输入的值将被提交到服务器。

## 七、HTML语义化
1. HTML语义化是指使用恰当的标记来描述文档的结构和内容。
2. HTML语义化可以提高文档的可读性和可访问性，同时也有利于搜索引擎优化。
3. HTML5引入了一些新的语义化标记，例如`<header>、<nav>、<section>、<article>、<aside>、<footer>`等。
