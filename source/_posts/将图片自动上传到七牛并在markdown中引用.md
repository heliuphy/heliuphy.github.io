---
title: 将图片自动上传到七牛并在markdown中引用
date: 2017-05-16 11:50:27
tags:
  - Markdown
  - 七牛云
categories: 博客
keywords: Mpic,mpic,七牛,七牛云,图床
---
## 引言
Markdown传统的插入图片的步骤实在是让人心累，所以我就上网搜了搜有没有啥简单的解决办法。倒是找到了不少支持自动上传到七牛云的Markdown编辑器，然而大多是只支持OSX,Win用户哭晕在厕所。。。。不过经过一番搜索，还是找到了不少顺手的工具。

这里推荐两种方式：

1. Mpic软件，不管是拖拽上传、复制上传还是截图上传通通都支持，并且可以自动复制，官网地址：[MPic-图床神器](http://mpic.lzhaofu.cn/)
2. 可以借助一个工具，Github地址在这里：[qiniu-image-tool-win](https://github.com/jiwenxing/qiniu-image-tool-win)

这两种方式都可以，由于第一种很简单，这里只介绍第二种方式的配制方法。配置完后，使用起来体验也很好。

<!--more-->

## 安装
1. 从[release](https://github.com/jiwenxing/qiniu-image-tool-win/releases)页面下载成功后，解压。
2. 安装AutoHotkey。
## 配置
编辑`qiniu-image-upload.ahk`文件，将一下内容做一些修改：
```
ACCESS_KEY = ***
SECRET_KEY = ***
BUCKET_NAME = ***  ;qiniu bucket name
BUCKET_DOMAIN = http://7xry05.com1.z0.glb.clouddn.com/  ;qiniu domain for the image
WORKING_DIR = E:\TOOLS\qiniu-image-tool-win\  ;directory that you put the qshell.exe 
```
具体的内容请参考原作者博客，点[这里](http://jverson.com/2016/08/30/autohotkey-markdown-uploadImage/)

## 使用
安装并配置成功后，只需两步即可插入图片到`markdown`文档中：
1. `Ctrl+c`复制图片
2. `Ctrl+Alt+v`即可将`markdown`引用地址粘贴到文档中。
> 参考：[http://jverson.com/2016/08/30/autohotkey-markdown-uploadImage/](http://jverson.com/2016/08/30/autohotkey-markdown-uploadImage/)
> [https://github.com/jiwenxing/qiniu-image-tool-win](https://github.com/jiwenxing/qiniu-image-tool-win)
