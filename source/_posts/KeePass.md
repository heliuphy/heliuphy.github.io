---
title: KeePass+KeePassHTTP+chromeIPass储存个人密码
date: 2016-05-01 18:06:12
categories: 软件
tags: [KeePass,Chrome]
keywords: KeePass,KeePassHTTP,chromeIPass,Chrome
---
## 前言

现在密码越来越多，但是为了密码安全还是不愿所有网站用同一个密码。所以就想到了用密码管理软件。尝试过1Password和Lastpass，可惜都收费。所以找到了KeePass，不仅免费，还开源。支持多平台。结合插件，可以实现在chrome上自动填写密码。
<!--more-->

>本文参考[http://devzc.com/post/465](http://devzc.com/post/465)写作而成，再次对原作者表示感谢。


## 安装步骤

1.	首先从以下网址下载所需文件
	*	KeePass主体程序:
	http://keepass.info/download.html

	*	KeePassHTTP扩展下载:
	https://github.com/pfn/keepasshttp/blob/master/KeePassHttp.plgx?raw=true
	源码: https://github.com/pfn/keepasshttp/

	*	chromeIPass:
	Chrome应用商店搜索[chromeIPass],安装即可;
	chromeIPass源码: https://github.com/pfn/passifox
2.	依次安装以上文件。
	注意KeePassHTTP的配置：
	1.	将KeePassHttp.plgx放在KeePass.exe同目录下,重启KeePass。并单击工具下的“KeePassHttp Options”。
	2.	按照如下图配置：
		![](http://i.imgur.com/0R82YzX.png)
	3.	点击Chrome上的chromeIPass图标，会出现Connect按钮,点击进去；
	4.	Key_Name自己起名
	5.	保存后，重新点击chromeIPass，若出现以下信息，则说明成功：

			![](http://i.imgur.com/PDcuXmf.png)

	
