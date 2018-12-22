---
title: Leanote安装教程
date: 2017-05-07 22:47:13
tags:
  - leanote
  - VPS
  - web
categories: web
---
> 此教程参考官方教程[Leanote安装教程](https://github.com/leanote/leanote/wiki/leanote%E4%BA%8C%E8%BF%9B%E5%88%B6%E7%89%88%E8%AF%A6%E7%BB%86%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B)而成，只是做了一点修改。

## 下载Leanote

此处我下载的是二进制版，假设下载到`/home/wwwroot/blog.heleou.com/web/`下，那么下载后解压，命令如下：
```
tar -xzvf leanote-*.tar.gz
```

<!--more-->

## 安装数据库-mongodb

到 http://www.mongodb.org/downloads 去下载

64位linux mongodb2.6.4下载链接: http://www.mongodb.org/dr//fastdl.mongodb.org/linux/mongodb-linux-x86_64-2.6.4.tgz/download
64位linux mongodb 3.0.1下载链接: https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.1.tgz

我下载的是3.0.1版，这两个版本的拷贝数据库操作不太一样，到后面的时候需要稍微注意一下。

还是直接解压
```
tar -xzvf mongodb-linux-x86_64-3.0.1.tgz/
```

为了快速使用mongodb的命令, 可以配置环境变量,

编辑`/etc/profile` 将mongodb bin路径加入即可.（写到文件最后即可）
```
vim /etc/profile
export PATH=$PATH:/home/wwwroot/blog.heleou.com/web/mongodb/bin
source /etc/profile
```

## 简单使用mongoDB

先在/home/wwwroot/blog.heleou.com/web下新建一个目录data存放mongodb数据

开启mongodb
```
mongod --dbpath /home/wwwroot/blog.heleou.com/web/data
```

附：后台开启命令：
```
mongod --fork --dbpath /home/wwwroot/blog.heleou.com/web/data --logpath /home/wwwroot/blog.heleou.com/web/logpath1/mongodb.log
```
`--logpath`是日志路径，自己设置即可。

这时mongod已经启动了

重新打开一个终端, 使用下mongodb

```
> mongo
> show dbs
```
mongodb安装到此为止, 下面为mongodb导入数据leanote初始数据

## 导入初始数据

v3的导入命令
```
mongorestore -h localhost -d leanote --dir /home/wwwroot/blog.heleou.com/web/leanote/mongodb_backup/leanote_install_data/

```

## 配置leanote

```
vim conf/app.conf
```

这里要做的有两件事，一个是修个URL，一个是修改安全信息。
1. 修改网址：
```
http.port=80
site.url=http://blog.heleou.com
```

当然你还需要将a.com绑定ip到Leanote服务器.

如果服务器上已有其它程序运行了80端口, 怎么办呢? 请google或百度下 "使用nginx分发请求到不同端口".

## 运行leanote

注意 在此之前请确保mongodb已在运行!

新开一个窗口, 运行:

```
cd /home/wwwroot/blog.heleou.com/web/leanote/bin
bash run.sh (或 sh run.sh)
# 最后出现以下信息证明运行成功
...
TRACE 2013/06/06 15:01:27 watcher.go:72: Watching: /home/life/leanote/bin/src/github.com/leanote/leanote/conf/routes
Go to /@tests to run the tests.
Listening on :80...
```

附：后台运行方法

此时按`Crtl + z`暂停进程，然后敲入`bg`命令即可，退出终端还可继续运行。