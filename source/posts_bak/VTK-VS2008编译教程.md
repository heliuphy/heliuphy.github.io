---
title: VTK-VS2008编译教程
date: 2017-05-07 22:57:45
tags:
  - VTK
  - visualstudio
categories: VTK
---
## 准备工作
### 环境
* Win10 64bit 家庭版
* VS2008 SP1
* Qt 4.8.4
* CMake 3.8.0 64bit-win
* VTK-7.1.1

<!--more-->

### 下载
将上述组件下载安装好
注意事项：
1. Qt需要下载两个东西：
	* qt-win-opensource-4.8.4-vs2008.exe
	* qt-vs-addin-1.1.11-opensource.exe
直接谷歌搜索文件名即可找到下载地址。
2. VTK-7.1.1可以下载data也可以不下载。
## 安装
### 安装Qt
按照提示一步步安装即可
### 安装 CMAKE
下载后安装即可
### 编译VTK
1. 新建两个文件夹，一个src，用来存放源代码；一个bin，用来存放二进制文件。
2. 将VTK-7.1.1.zip解压至src。
3. 打开CMAKE，`Where is the source code` 填写src的绝对路径，`Where to build the binaries` 填写bin的绝对路径，比那一成功后的文件就放在这里。
4. 点击Config，选择VS2008，确定后，开始编译，过程大约几分钟。
5. 待编译完成后，会出现许多红色的选项，这些都是需要修改的选项。勾选CMake界面上的Grouped和Advanced, Grouped是对配置分组,Advanced是显示高级配置.
6. VTK_Group_Qt          选中,使用Qt.
7. CMAKE_INSTALL_PREFIX  修改为VTK/vsvtk  。这个目录可以自行指定,当VTK编译完成后,安装时,会将VTK安装到指定的目录。
8. INSTALL_BIN_DIR
INSTALL_INC_DIR
INSTALL_LIB_DIR
INSTALL_MAN_DIR
INSTALL_PKGCONFIG_DIR
这些也分别更改到VTK\vsvtk 的相应目录下。
9. configuer
10. generate
11. 完成后，打开VTK\bin 用VS打开构建目录下的VTK.sln解决方案。
12. 等待IDE解析,解析完成后,状态栏会显示就绪.解析过程比较耗时,耐心等待VS解析完成。
13. 生成成功之后,就可以安装VTK了,右击INSTALL项目,选择仅生成INSTALL.然后就开始安装VTK了,安装完成,就可以在之前设置的prefix目录下看到安装之后的VTK.
14. 设置环境变量，将VTK\vsvtk 加入环境变量。
## 案例运行
新建文件夹Example，在文件夹下新建src和bin。
进入网址http://www.vtk.org/Wiki/VTK/Examples/Cxx/Rendering/Cylinder
复制源代码。
若VTK_DIR not found ，则手动填写为VTL\bin。
configure,generate。
用VS打开工程并编译。
打开cmd，进入所在目录，运行*.exe即可。


