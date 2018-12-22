---
title: 如何利用Dropbox备份指定文件夹
date: 2017-05-07 22:56:06
tags:
  - Dropbox
categories: 软件
---
Dropbox原生只带同步单文件夹的功能，但如果我想同步其他的文件夹怎么办呢？不能把那些文件夹都复制一份到该目录下吧。所以可用`mklink`的方法来同步。(Win Vista 及以上可用)

命令如下，比如我的Dropbox备份文件夹为`C:\Dropbox`，而我想备份的文件夹为`d:\backup`，注意必须用管理员模式运行cmd

```
mklink /d "C:\Dropbox\your-name" D:\backup
```




