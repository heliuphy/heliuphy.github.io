---
title: Linux零打碎敲
date: 2017-05-11 09:45:51
tags:
  - Linux
categories: Linux
---
## 引言
整理一些平时用到的Linux小东西，做积累。

<!--more-->

## 定时启动工具crond
### 先看看机子有没有启动crond
```bash
service crond status
```
如果没有安装crond，可以先安装
```bash
#安装Crond
yum install vixie-cron crontabs
#设置开机启动Crontab
chkconfig crond on
#启动Crontab
service crond start
```
### 添加定时任务
```
crontab -e
```
> 以下引用自[来源：Linux社区  作者：RedHat Linux中crond服务与crontab用法](http://www.linuxidc.com/Linux/2010-08/27700.htm)
crontab file的格式: 
    crontab 文件中的行由 6 个字段组成，不同字段间用空格或 tab 键分隔。前 5 个字段指定命令要运行的时间 
       分钟 (0-59) 
       小时 (0-23) 
       日期 (1-31) 
       月份 (1-12) 
       星期几（0-6，其中 0 代表星期日） 
       第 6 个字段是一个要在适当时间执行的字符串 
例子: 
      #MIN HOUR DAY MONTH DAYOFWEEK COMMAND 
      #每天早上6点10分 
      10 6 * * * date 
      #每两个小时 
      0 */2 * * * date    (solaris 5.8似乎不支持此种写法) 
      #晚上11点到早上8点之间每两个小时，早上8点 
      0 23-7/2，8 * * * date 
      #每个月的4号和每个礼拜的礼拜一到礼拜三的早上11点 
      0 11 4 * mon-wed date 
      #1月份日早上4点 
      0 4 1 jan * date

### 重启crond
```
service crond restart
```

## 查看磁盘空间大小
```
df -hl
```
如下图
![df -hl命令效果](http://op0n2nyjd.bkt.clouddn.com/1705111.JPG)

## .sh文件格式
### 开头
文件的第一行必须是：
```
#!/bin/sh
```
符号#!用来告诉系统它后面的参数是用来执行该文件的程序。在这个例子中我们使用/bin/sh来执行程序。
当编写脚本完成时，如果要执行该脚本，还必须使其可执行。
```
chmod +x filename
```
用`./filename`来运行

### 注释
以`#`开头的句子表示注释，直到这一行的结束。