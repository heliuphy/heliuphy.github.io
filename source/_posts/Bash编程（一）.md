---
title: Bash编程（一）
date: 2017-05-15 18:00:27
tags:
  - Linux
  - Bash
categories: Linux
---
## 入门
### Shell
shell是一个命令解释器，是介于操作系统内核与用户之间的一个绝缘层。准确地说，它也是能力很强的计算机语言，被称为解释性语言或脚本语言。它可以通过将**系统调用、公共程序、工具和编译过的二进制程序**“粘合”在一起来建立应用，这是大多数脚本语言的共同特征，所以有时候脚本语言又叫做“胶水语言”

<!--more-->

### 重定向
`>` 这个符号是重定向,执行以下代码，就会在当前目录下生成一个my.txt。
```
#!/bin/bash
 echo "Hello World" > my.txt
```
### 小案例
如何利用bash将某文件的内容清楚而保留文件？
```
#!/bin/bash

# 初始化一个变量
LOG_DIR=/var/log

cd $LOG_DIR

cat /dev/null > messages
cat /dev/null > wtmp

echo "Logs cleaned up."

exit
```
注：
`/dev/null` 这个东西可以理解为一个黑洞，里面是空的，将这个空文件写入某个文件，里面的内容就被删了。
## 特殊字符
### 注释
行首以`#`开头(除`#!`之外)的是注释。`#!`是用于指定当前脚本的解释器，我们这里为`bash`，且应该指明完整路径，所以为`/bin/bash`。
```
 #!/bin/bash

 echo "The # here does not begin a comment."
 echo 'The # here does not begin a comment.'
 echo The \# here does not begin a comment. # \#是转义字符
 echo The # 这里开始一个注释
 echo $(( 2#101011 ))     # 数制转换（使用二进制表示），不是一个注释，双括号表示对于数字的处理

 # 欢迎来到实验楼参观学习
```
