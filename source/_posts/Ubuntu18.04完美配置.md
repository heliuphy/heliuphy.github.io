---
title: Ubuntu18.04完美配置优化美化
date: 2018-12-22 17:01:00
tags:
  - Linux
  - Ubuntu
  - 系统美化
categories: Linux
keywords: Ubuntu, 优化, 美化, 配置, 安装
---

## 效果预览
这里先展示一下美化完成Ubuntu18.04之后的效果。
![Chrome浏览器](https://hexo-1252865648.cos.ap-chengdu.myqcloud.com/images/2018-12-22%2017-05-04%20%E7%9A%84%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE.png)

![桌面](https://hexo-1252865648.cos.ap-chengdu.myqcloud.com/images/2018-12-22%2017-06-32%20%E7%9A%84%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE.png)

![文档管理器](https://hexo-1252865648.cos.ap-chengdu.myqcloud.com/images/2018-12-22%2017-06-45%20%E7%9A%84%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE.png)

![launch](https://hexo-1252865648.cos.ap-chengdu.myqcloud.com/images/2018-12-22%2017-06-56%20%E7%9A%84%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE.png)

是不是很心动呢，那就跟我的步骤一起来做吧。很简单的。

## 主题美化
### 预习部分
这里需要首先知道的一点小姿势是：在Ubuntu 18.04 LTS中，默认桌面系统不再采用Ubuntu 16.04 LTS的Unity，而是改用Gnome3。由于这里的配置工作，需要用到许多apt源，所以建议读者先把Ubuntu的源改为国内的。这里我改为了清华源。步骤如下：
### 更改源
#### 先备份自己电脑上的源
```bash
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

#### 编辑/etc/apt/sources.list文件
将`/etc/apt/sources.list`文件里的内容全部删掉，替换为以下内容：
```bash 
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

#### 更新
打开终端，执行：
```bash
sudo apt-get update
sudo apt-get upgrade
```

### 正式上课
下面就来开始正式美化主题啦。

还记得刚刚预习里提到的内容吗，就是Ubuntu 18.04的桌面系统开始启用gnome3，那么想优化gnome3桌面，需要先下载一个小软件`Gnome-tweak-tool`，安装也是很简单的。

```bash
sudo apt-get install gnome-tweak-tool 
```

安装完成后，就可以在系统启动台里找到这个工具了。（如果你是中文系统，那么这个工具的名字将为“优化“）。

打开这个软件后，就可以在第一个标签页里修改主题了。当然，也可以在这个工具里管理你的ubuntu插件（可以理解为chrome浏览器里的插件）。

#### 下载ubuntu主题

由于系统内置的主题都不是很惊艳，我们可以从别的地方下载。博主的主题下载地址是：

桌面主题：[vinceliuice/vimix-gtk-themes](https://github.com/vinceliuice/vimix-gtk-themes)

图标主题：[vinceliuice/vimix-icon-theme](https://github.com/vinceliuice/vimix-icon-theme)

如果不满意这一款主题，这里有更多图标和主题可以到这里下载：[Eyecandy for your GNOME-Desktop](https://www.opendesktop.org/s/Gnome)

#### 更改ubuntu主题
安装完成后，就可以到“优化”（也就是刚刚安装的那个工具）里更改主题了。这里需要更改主题和图标主题。

### 安装插件

当然，只是更改主题还不能拥有上述效果。这里还需要安装一些插件。

插件的安装方法就是在系统自带的软件中心搜索下载即可。一般在搜索结果的最后。

需要安装的插件有：
* User theme：
  使shell主题可以使用桌面主题。(shell即为顶部栏，shell主题和桌面主题不一样，是个单独的模块)
* Dash to panel：
  类似Windows的任务栏
* Dynamic panel transparency：
  设置透明效果

安装完毕后，就可以在“优化”软件里进行设置了。

### 后续
如果想继续优化terminal的话，可以安装zsh和oh-my-zsh
```bash
# 安装zsh
sudo apt-get install zsh 
# 安装oh-my-zsh
# 没有安装git的话先安装git
sudo apt-get install git 
# 然后
sudo wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
chsh -s /bin/zsh

# 安装完后重启
```

当然了，如果ubuntu的字体看不惯，也可以选择安装微软的字体。这个我会在后续继续出教程，欢迎关注。

>参考：https://zhuanlan.zhihu.com/p/37314255