---
title: win8.1与ubuntu双系统安装（硬盘安装）
date: 2016-05-13 20:27:14
tags: [Ubuntu,系统安装,Linux]
categories: Linux
keywords: Ubuntu, 系统安装, Linux
---
>部分内容引用自[http://blog.csdn.net/risingwonderland/article/details/37902777](http://blog.csdn.net/risingwonderland/article/details/37902777)
>作者：RisingWonderland

## 安装特点

此方法可使用Win8.1,Ubuntu双系统，直接硬盘安装，无需制作U盘启动，很方便。

## 准备

* 下载Ubuntu镜像文件
* 下载EasyBCD
<!--more-->
## 第一步，磁盘分区

在Windows下，分割出一块分区，我分出来的是50G，建议在磁盘最后分。注意该分区不要增添盘符，而是让其保持“空闲”状态。

## 第二步，NeoGrub

Windows安装好EasyBCD软件，安好后，点击左侧“添加新条目”，再点击右侧“NeoGrub”选项卡，点击“安装”按钮。如下图：

![](http://i.imgur.com/ygVfVWC.png)

安装后，点击“配置”按钮，会打开一个名为“menu.lst”的记事本文件。清空文件内容，写入下面的文字：
```
title Install Ububtu
root (hd0,0)
kernel (hd0,0)/vmlinuz.efi boot=casper iso-scan/filename=/ubuntu-14.04-desktop-amd64.iso ro quiet splash locale=zh_CN.UTF-8
initrd (hd0,0)/initrd.lz
```
如下图所示，注意空格：

![](http://i.imgur.com/6tqyUBh.png)

<p style="color:#DD2D2D">**注意1**</p>文件第2、3、4行出现的“(hd0,0)”指向的是当前系统盘的位置，我这里是C盘。但假如C盘并非首个分区，而是第二个，需要修改为“(hd0,1)”，依此类推。
<p style="color:#DD2D2D">**注意2**</p>文件第三行，“ubuntu-14.04-desktop-amd64.iso”是我的Ubuntu系统镜像的文件名，将其修改为你的。
<p style="color:#DD2D2D">**注意3**</p>文件第三行出现了“vmlinuz.efi”，由于我安装的Ubuntu是64位操作系统，此处必须是“vmlinuz.efi”，不能缺少扩展名。

## 第三步

使用压缩工具打开Ubuntu镜像文件，将“.disk”文件夹和casper文件夹内的“initrd.lz”和“vmlinuz.efi”文件复制到C盘根目录，再将Ubuntu系统镜像文件复制到C盘根目录：

![](http://i.imgur.com/XVxEkBK.png)

## 第四步

* 重启计算机，在启动界面看到操作系统选择项，选择“NeoGrub引导加载器”：
![](http://o6hbo6ufa.bkt.clouddn.com/4.png)
* 之后出现Ubuntu选择界面，选择“Install Ubuntu”。
* 注意：此处有可能出现“File not found”错误，若出现，请转至原文博客查看：[http://blog.csdn.net/risingwonderland/article/details/37902777](http://blog.csdn.net/risingwonderland/article/details/37902777)

## 第五步

成功进入Ubuntu试用界面后，桌面上有两个文件。
按Ctrl+Alt+T打开终端，输入`sudo umount –l /isodevice`，取消光盘驱动器挂载，否则在后面安装过程中可能会无限卡进度：

<p style="color:#DD2D2D">**注意**</p>注意空格，而且“-l”中的“l”是大写字母“L”的小写形态。不是数字1，也不是字母“i”。

## 第六步

双击桌面图标“安装Ubuntu14.04 LTS”，开始安装Ubuntu。
如果你连接了网络，可以选择“安装中下载更新”，会延长安装时间，也可以在安装完Ubuntu系统后再下载安装更新。
在“安装类型”界面会有多个安装选项：
如果选择第一项，Ubuntu会自动进行分区安装，之后与Windows操作系统共存为双系统。对分区没有细致要求的用户选择此项即可，本教程即可直接跳过步骤Step7、Step8。如果要自定义分区，选择“其它选项”。此处，我选择“其他选项”。
![](http://o6hbo6ufa.bkt.clouddn.com/5.png)

我们要将Ubuntu安装在“空闲”分区内。选择“空闲”分区，再点击左下方红线处的加号，进行分区。

下面说一下我的分区状况：

总共50GB空闲分区，（分区时需要选择文件系统类型，选择“Ext4”即可）

* 根目录“/”我分了8 GB；
* 交换分区swap我分了2 GB；（类似于虚拟内存）
* /boot我分了200 MB；（引导分区）
* /home 10 GB;（存放用户文件）
* /usr 30GB;（存放应用程序）

## 第七步

分区完成后，开始安装。
如果你没有分配交换空间，系统会给出提示，跳过即可。

## 安装成功

安装完成后，选择重启。如果一切正常，可以看到如下图所示的Ubuntu样式的启动项选择界面：

![](http://o6hbo6ufa.bkt.clouddn.com/6.png)

## 可选操作

在系统启动界面，Win8.1系统处于最后一项，如果需要让Win8.1处于第一项，可以这样设置：
1. 进入Ubuntu系统。
2. Ctrl+Alt+T打开终端，输入“sudo nautilus”，以root权限打开资源管理器。
3. 找到“30_os-prober”文件，将其名称修改为“06_os-prober”即可：

进入Windows系统，清除C盘下之前复制的文件。
打开EasyBCD，在之前的“添加新条目”功能中，点击“删除”按钮，清除“NeoGrub”引导。










