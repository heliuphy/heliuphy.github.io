---
title: VPS+Hexo+Dropbox创建个人博客——hexo系列教程（三）
date: 2016-05-01 18:06:12
categories: web
tags: [Hexo,VPS,Dropbox]
keywords: VPS,Hexo,Dropbox
---
>本文参考以下文章完成：
1.[用Hexo+Vps搭建博客并用Dropbox同步自动发布](http://www.fanicy.com/2014/06/01/0001.hexowithvpsdropbox/)
2.[VPS+Dropbox+markeditor打造Hexo完美体验 (长期更新)](http://www.jianshu.com/p/0839b09dc381#)
3.[使用 Dropbox 和 VPS 实现实时部署 Hexo 博客](http://www.xmt.design/2016/04/04/blog-depoly-via-dropbox.html)

废话少说，直接进入正题：

## VPS
为CentOS 6.8 x64 ,512MB内存

## 安装需要的所有软件
### 安装 Git
```
yum install git-core
```

<!--more-->
### 安装NodeJS
```
% 前三步是先安装EPEL
# wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm 
# wget http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
# rpm -Uvh remi-release-6*.rpm epel-release-6*.rpm
% 安装node
yum install nodejs npm --enablerepo=epel
```

### 安装Dropbox
```
cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -
%然后，从新建的 .dropbox-dist 文件夹运行 Dropbox 守护程序.
~/.dropbox-dist/dropboxd
%下载官方提供的 cli 来控制和管理Dropbox
wget https://linux.dropbox.com/packages/dropbox.py
%更改权限:
chmod +x ./dropbox.py
%启动Dropbox:
./dropbox.py start y
关闭局域网广播:
./dropbox.py lansync n
```

### 安装Hexo

```
npm install -g hexo-cli
cd Dropbox
mkdir hexo
cd hexo
hexo init
```

### 安装Nginx
这里推荐不是很熟悉Nginx设置的用以下链接提供的一键安装包安装，可以只安装Nginx，自动设置
[lnmp、lamp、lnmpa一键安装包](https://blog.linuxeye.com/31.html)
这里设置时，可以将主机目录设置为dropbox的同步目录
```
/root/Dropbox/hexo/public
```
添加权限：
```
chmod -R 755 /root/Dropbox/hexo/public
chown www:www /root/Dropbox/hexo/public
chmod +x /root/Dropbox/ /root/Dropbox/hexo/
```

### 安装incron
```
yum install incron
service incrond start
```
## 同步发布

incron 监测文件夹配置
```
incrontab -e
```
在其中添加：
```
/root/Dropbox/hexo/source/_posts/ IN_MOVE,IN_MODIFY,IN_CREATE,IN_DELETE /root/runhexo.bash
/root/Dropbox/hexo/theme/ IN_MOVE,IN_MODIFY,IN_CREATE,IN_DELETE /root/runhexo.bash
```

runhexo.bash:
```
#!/usr/bin/env bash
exec 200<$0
flock -n 200 || exit 1
sleep 10
cd /root/Dropbox/hexo && hexo g
```
添加权限
```
chmod +x runhexo.bash
```

