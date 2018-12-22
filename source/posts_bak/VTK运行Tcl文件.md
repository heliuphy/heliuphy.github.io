---
title: VTK运行Tcl文件
date: 2017-05-07 22:59:20
tags:
  - VTK
  - Tcl
categories: VTK
---
环境：
* Win10 64bit 家庭版
* VS-2008
* VTK-7.1.1
* Tcl-8.6
1. 下载ActiveTcl，可以去activestate网站下载。下载完成后安装，例如安装路径是d:\tcl  **注意：安装时一定要以管理员身份运行，不然会加不进系统变量！**

<!--more-->

2. 打开CMAKE，Configure完成后，将`VTK_WRAP_TCL`勾选上，再次Configure，之后将`TCL_INTERNAL_PATH`更改为`\你的VTK源码解压路径\VTK-7.1.1\ThirdParty\TclTk\internals\tk8.6`
**注意：切记:要用“/”而不是“\”。**
3. 打开生成文件夹，使用VTK.SLN生成，之后在INSTALL方案上选“仅用于项目”->“仅生成INSTALL”安装。
4. 在PATH中添加：D:\Tcl\bin;D:\VTK\bin;新建系统变量`TCLLIBPATH`，内容设为`\你的VTK生成文件夹\VTK-7.1.1-bin\Wrapping\Tcl\Debug`
完成。
遇到的坑：
1. 安装Tcl时，未按照管理员身份运行，导致Tcl没有加进系统变量。
2. 未设置`TCL_INTERNAL_PATH`，因为这个的参数默认是错的。
这两条导致编译VTK.sln时，有80多个项目编译失败。
3. 由于`TCLLIBPATH`的设置错误，导致打开Tcl文件时提示`can't find package vtk`。

>参考：http://www.cnblogs.com/limeng/archive/2010/08/28/1810701.html