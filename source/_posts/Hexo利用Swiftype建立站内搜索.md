---
title: 利用Swiftype建立站内搜索——hexo系列文章（二）
date: 2016-05-14 16:12:29
tags: [Hexo,Swiftype,站内搜索]
categories: 博客
keywords: Hexo,Swiftype,站内搜索
---
>部分内容引用自[http://www.jianshu.com/p/2010ad07d960](http://www.jianshu.com/p/2010ad07d960)

>原文链接：[http://drunkevil.com/2015/04/08/swiftype-search-engine-for-hexo/](http://drunkevil.com/2015/04/08/swiftype-search-engine-for-hexo/)
作者：drunkevil

## 说明
此方法是基于jacman主题，其余主题可能稍有不同

## Swiftype账号注册及搜索引擎开通

* 进入[Swiftype官网](https://swiftype.com/)注册账号，并根据提示初始化搜索引擎。
* 获得js代码，复制到jacman\layout\ _partial目录下的footer.ejs文件，在最后一个`</div>`标签前即可。
<!--more-->
## 本地操作
1. 在jacman主题下的_config.yml文件末尾添加如下代码：

	```
	swift_search:
      	enable: true
	```

2. 在hexo的source目录下建立一个search文件夹，并在其中新建一个index.md文件，其内容为：

	```
	layout: search
	title: search
	---
	```

3. 找到jacman\layout\ _partial目录下的header.ejs文件，在其中添加如下代码：

	```
	<% if (theme.swift_search.enable){ %>
    <form class="search" action="<%- config.root %>search/index.html" method="get" accept-charset="utf-8">
    <input type="text" id="st-search-inpu" maxlength="20" placeholder="搜索" />
    </form>
	<% }
	```
4. 将jacman\layout\ _partial目录下的search.ejs中的内容替换为如下代码（主要用来控制结果的显示样式，可根据个人爱好修改）：

	```
	<% if(theme.swift_search.enable) { %>
    <div  id="container" class="page">
      <div id="st-results-container" style="width:70%; margin:1.5em auto">正在加载搜索结果，请稍等。</div>
	<style>
	.st-result-text {
	background: #fafafa;
	display: block;
	border-left: 0.5em solid #ccc;
	-webkit-transition: border-left 0.45s;
	-moz-transition: border-left 0.45s;
	-o-transition: border-left 0.45s;
	-ms-transition: border-left 0.45s;
	transition: border-left 0.45s;
	padding: 0.5em;
	}
	@media only screen and (min-width: 768px) {
	.st-result-text {
	padding: 1em;
      }
	}
	.st-result-text:hover {
      border-left: 0.5em solid #ea6753;
    }
	.st-result-text h3 a{
      color: #2ca6cb;
      line-height: 1.5;
      font-size: 22px;
    }
	.st-snippet em {
      font-weight: bold;
      color: #ea6753;
    }
	</style>
	<% } %>
	```

## 完成

至此，配置完成，hexo d -g重新部署一下即可出现站内搜索功能。搜索框的样式可根据个人爱好在CSS文件中修改。

麻雀虽小，五脏俱全，博客的基础功能基本上都已实现。


