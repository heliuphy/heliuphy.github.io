---
title: 搭建hexo博客小记——hexo系列文章（一）
date: 2016-05-01 18:06:12
categories: 博客
tags: [Hexo]
keywords: Hexo,网站,Github
---

## 引言

本文主要介绍在Github下搭建Hexo博客。总体说来，搭建Hexo总共需要两步：

* 第一部分，部署本地博客，也就是在你的电脑上搭建起来Web环境；
* 第二部分，生成静态页面，并上传到Github上去。<!--more-->

## 搭建本地博客系统

搭建本地博客系统首先要部署环境，即Node.js和Git。

### Node.js的安装

可以[点此](https://nodejs.org/)下载nodejs，并按照步骤一步步安装；一切默认即可；

### Git的安装

git bash，[点此](https://git-scm.com/downloads)下载即可。
部署好本地环境，便可以开始安装博客系统Hexo了

### Hexo的安装

Hexo可直接用`npm`安装，可在电脑任意文件夹下右键Git Bash Here，进去后，在命令行中输入

	npm install -g hexo

### 安装依赖包

	npm install

### 发布本地博客

到上一步为止，本地博客已搭建完成，下面我们可以发布本地博客看看效果：（即生成静态页面）

	hexo generate
	hexo server

当然，也可以用简写：

	hexo g
	hexo s

本地服务器开启后，我们就可以进入[http://localhost:4000](http://localhost:4000)浏览本地博客了。

## 上传本地文件到Github

### 申请账号并建立仓库。

账号自行申请，建立仓库即在页面右上角的+除新建一个`repository`。但是命名有要求，必须用你的用户名加上github.io来命名仓库名。比如你的用户名为user123，那么就命名为user123.github.io。

### 获取SSH公钥，并与Github账号绑定。

#### 设置邮箱和用户名
	
	git config --global user.email "user123@gmail.com" 
git config --global user.name "user123"

#### 生成密钥

	ssh-keygen -t rsa -C "user@gmail.com"

命令运行后，会在`C:\Users\你的计算机名\.ssh`中找到`id_rsa.pub`这个文件，貌似是pubication的文件，但是我用office打不开，所以不管它了，如果有老兄知道这个究竟是用什么打开比较好，可以在评论区告诉我。不过它也是可以用txt打开的，将其中的内容复制到以下位置：
			
先登录github，点击右上角你的账户头像，进入settings，进入SSH key选项卡，将`id_rsa.pub`中的所有内容添加进去即可。

#### 更改博客配置，为上传做准备。


打开`D:\hexo`目录下的配置文件`_config.yml`（推荐用软件Sublime Text打开，不要用txt打开，因为这要UTF-8编码，而txt不会编码），翻到最下面，并改成以下内容，把`user123g`替换成你的用户名即可

	deploy:
	type: git
	repository: https://github.com/user123/user123.github.io.git
	branch: master

注意：`type`后面一定要是`git`，不要填`Github`。这是最新版hexo的要求。还有就是上面配置文件的语法较为严格`type: `后面一定要留一个空格，`repository`，`branch`也一样。

## 上传博客内容

### 先生成静态文件

	hexo g

### 部署前先输入以下命令，不然会出现`error deployer not found:github`的报错。

	npm install hexo-deployer-git --save


### 上传文档（部署）

	hexo d

待出现`INFO Deploy done: git`即成功。成功后，进入网址`http://user123..github.io`浏览查看。

至此，所有工作都已完成，如果想更改主题什么的，可以看我后续的博客。有问题欢迎大家留言。