---
title: 利用Dropbox备份vps中的文件
date: 2017-05-07 22:53:30
tags:
  - VPS
  - Dropbox
categories: Linux
---
>部分内容参考自[http://www.pythoner.com/324.html](http://www.pythoner.com/324.html)


## 1.Linux 中安装Dropbox Uploader

```
wget https://raw.github.com/andreafabrizi/Dropbox-Uploader/master/dropbox_uploader.sh
chmod+x dropbox_uploader.sh
./dropbox_uploader.sh
```
<!--more-->
## 2.新建Dropbox App

1. 需要通过浏览器访问 [https://www.dropbox.com/developers/apps](https://www.dropbox.com/developers/apps) 页面，并创建一个新的 Dropbox app。（具体根据上一步中脚本的提示），"the type of access"根据自己的要求选择。

2. 创建好后，将会进入一个新的页面，复制里面的`app key` 和 `app secret`到终端窗口。完成后，dropboxploader.sh 将产生一个oAUTH网址，进去授权就OK了。
3. 现在就可以上传文件了。我此处是做的leanote备份，命令如下。

``` bash
./dropbox_uploader.sh upload /home/wwwroot/blog.heleou.com/web/leanote/public/upload/ /leanote/public/upload/
./dropbox_uploader.sh upload /home/wwwroot/blog.heleou.com/web/leanote/files/ /leanote/files/
./dropbox_uploader.sh upload /home/wwwroot/blog.heleou.com/web/leanote/conf/app.conf /leanote/conf/app.conf
```

也可以做个脚本，定时运行

脚本如下：

```
#!/bin/bash

cd /root/bin
#开始上传

./dropbox_uploader.sh upload /home/wwwroot/blog.heleou.com/web/leanote/public/upload/ /leanote/public/upload/
./dropbox_uploader.sh upload /home/wwwroot/blog.heleou.com/web/leanote/files/ /leanote/files/
./dropbox_uploader.sh upload /home/wwwroot/blog.heleou.com/web/leanote/conf/app.conf /leanote/conf/app.conf

echo -e "Backup Done!"
```

定时运行方法：（添加crontab）

```
crontab –e
添加：
30 3 * * * /root/bin/backup.sh
这样，就可以每天凌晨3：30自动备份到Dropbox了。
```


