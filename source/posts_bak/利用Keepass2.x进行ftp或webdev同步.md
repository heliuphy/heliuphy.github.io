---
title: 利用KeePass2.x进行ftp或webdev同步
date: 2016-05-01 18:06:12
categories: 软件
tags: [KeePass,Chrome]
keywords: KeePass,ftp,webdev,同步
---
>方法参考[http://www.cnblogs.com/gumuyueying/p/keepass2-sync-trigger.html](http://www.cnblogs.com/gumuyueying/p/keepass2-sync-trigger.html)

## 前言

上篇博文介绍了利用软件Keepass保存密码。其实借助Dropbox或者其他同步软件将数据库.kpbx文件进行备份也很简单。但是由于某些原因，Dropbox很难上去。所以突然想到能否将文件保存在我的vps服务器上。在网上搜索教程就找到了这个方法。

<!--more-->

## 同步

其实同步很简单，只要借助KeePass自带的URL同步功能即可。如下图：

![](http://i.imgur.com/XkgdsxV.png)

也就是选择“与URL同步”，**但是要注意，必须现在指定位置建立一个.kpdb数据库文件**，同步地址就填写该文件地址。

## 自动同步

手动同步很麻烦，那么怎么设置自动同步呢？这里可以借助KeePass自带的触发器功能，有点像Windows的“计划任务”，以下方法可以实现本地保存后，立马服务器同步的功能。

1.	“属性”选项卡，命名该触发器，如 SavedSync.（注意，后面动作选择“更改触发器 开/关 状态”时触发器名称只能手动输入，无法选择，所以这里命名还是从简，具体描述可以写到下面的注释栏。）同时勾选“启用”和“启动时打开”复选框。 

2.	“事件”选项卡，添加事件，选择“已保存数据库文件”，下面的文件/URL - 比较和过滤器可以无视。不过如果有多个数据库文件需要同步，则可以根据待保存的数据库文件名设定后续同步动作。这里我的设置如下： 
![](http://i.imgur.com/4zcHdI0.png)

3.	“条件”选项卡不加入任何条件。你也可以选择同步到 URL 文件时选择条件“远程主机可以连接(ping)”，这样只有当 URL 文件可以访问时才同步。不过我倾向于不加入这个条件，这样即使后面无法完成同步操作，也会有弹窗提示，让我们能更清楚当前的同步状态。

我这里只做了简写，如果遇到某些问题，或者想更加详细地了解“触发器”功能，请访问原博客地址：[http://www.cnblogs.com/gumuyueying/p/keepass2-sync-trigger.html](http://www.cnblogs.com/gumuyueying/p/keepass2-sync-trigger.html)

在此，对原作者表示感谢！


