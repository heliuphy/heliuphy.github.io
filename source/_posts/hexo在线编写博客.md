---
title: hexo在线编写博客——hexo系列文章（四）
date: 2017-05-10 18:30:03
tags:
  - Hexo
  - VPS
  - Linux
  - cloud9
  - Docker
categories: 博客
---
## 引言
这篇文章就是在线写出来的~

从编辑、到生成，全部云上完成，妈妈再也不用担心我在别的电脑上没法写hexo了！

<!--more-->

效果如图：

![cloud9在线写博客](http://op0n2nyjd.bkt.clouddn.com//nextd/posts/img1705102.jpg)

## 综述
搭建这个环境其实也并不麻烦啦，Cloud9我是用别人的镜像装的，所以简单很多。总体来说，大概需要这些东西：

* VPS一台
* Docker
* Cloud9
* nvm
* node(建议>6.*)
* npm
* hexo
* apache(可选)
* rsync(可选)
* incrond（可选）

## 安装
### VPS篇
我VPS用的系统是CentOS6.8 x64
### Docker安装
CentOS下安装Docker还是很简单的，命令如下：
```
sudo yum install docker-io
```
安装完后启动docker服务
```
service docker start
```

### Cloud9安装（Docker）
#### 用VPS
~~**注：**dockerhub上现成的image是没有密码的，我可不希望别人谁都可以进来编辑我的博客，所以改一下Dockerfile，自己构建镜像。~~

不要用这个办法了，dockerhub上有现成的镜像`sapk/cloud9`，地址[点这里](https://hub.docker.com/r/sapk/cloud9/)
想看旧方法，请[点这里](https://heliublog.com/2017/05/10/hexo%E5%9C%A8%E7%BA%BF%E7%BC%96%E5%86%99%E5%8D%9A%E5%AE%A2/#cloud9-docker)


```
docker pull sapk/cloud9

# start with auth 将username,password替换成自己的账号密码
docker run -d -v your-path/workspace:/workspace -p 8181:8181 sapk/cloud9 --auth username:password

```
http://ip:8181  查看效果吧！

#### 用Docker云
这里仅以[Arukas](https://arukas.io/)为例。
注册账号什么的就不说了。
直接创建应用，按照下图填写就行了：
![Arukas](http://op0n2nyjd.bkt.clouddn.com//nextd/posts/img1705112.jpg)
创建完成后启动应用，如果一次不成功就多试几次。
创建成功后，点击`Endpoint`后面的链接就可以进到你自己的cloud9了。

**千万注意：我不知道这里的数据都储存在了哪里，所以一定要定时将自己的博文通过cloud9页面下载到自己的电脑上，以作备份。**

### nvm、node、npm、hexo
这些我们一起讲，因为都是在cloud9中安装的。

#### nvm、node、npm的安装
nvm是node的版本管理器。
##### 首先安装必要的包
```
sudo apt-get update  
sudo apt-get install build-essential libssl-dev
```

**注意：cloud9镜像是用ubuntu搭建的，所以要用apt-get，这个不是centos系统了，不要弄混了~**
##### 安装nvm的脚本
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash  
```

##### 使用nvm安装并使用node6
```
nvm install v6.10.3
nvm use v6.10.3
node -v
# v6.10.3  即表示安装成功
```
npm有了，就不必装了

#### hexo安装
> 这个不是本文重点，可以参考我以前的文章
> [搭建hexo博客小记——hexo系列文章（一）](https://heliublog.com/2016/05/01/%E6%90%AD%E5%BB%BAhexo%E5%8D%9A%E5%AE%A2%E5%B0%8F%E8%AE%B0/)
```
npm install -g hexo-cli
mkdir hexo
hexo init
npm install
hexo g
```
好了，到此为止，整个在线环境就部署成功了，你可以`hexo d`来提交你的博客到github，当然，也可以用你的VPS来
做网页服务器。如果不想的话，下面的部分就不用看了。

***

### apache安装
由于我没学过前端，这里我用的是[lnmp一键安装包](https://blog.linuxeye.com/31.html)，可以只装Apache，别的都不用装。

将主机目录设置为`your-workspace/hexo/public`

我的这样做是不行，改了权限也不行，所以只能用默认的目录`/data/wwwroot/your-domain-name`然后同步两个文件夹了。
这是就用到最后两个工具：
* rsync用来同步
* incron用来监控文件改动

### rsync的使用
使用方法如下：
```
rsync -av --delete /ressourcen /ressourcen_backup
```
这样当`/ressourcen`目录中的文件有变动、删除时，就会同步到`/ressourcen_backup`。

我们要把这个文件写到一个脚本中，这样才能发挥他的作用（后述）。

### incron
incron的使用，我在前面的文章中也提到过[VPS+Hexo+Dropbox创建个人博客](https://heliublog.com/2016/05/01/VPS+Hexo+Dropbox%E5%88%9B%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/#安装incron)

安装incron
```
yum install incron
service incrond start
```
用incron来监测文件夹变动
```
incrontab -e
# 在其中添加：
your-path/hexo/public IN_MOVE,IN_MODIFY,IN_CREATE,IN_DELETE your-path/runrsync.bash
```

```
vim runrsync.bash 
```

runrsync.bash中写入:
```
#!/usr/bin/env bash
exec 200<$0
flock -n 200 || exit 1
sleep 1
rsync -av --delete /ressourcen /ressourcen_backup
```

赋予权限
```
chmod +x runrsync.bash
```

这样当`hexo g`，`public`文件夹就会发生变动，此时incron检测到了文件变动，运行脚本`runrsync.bash`，实现两个文件夹的同步。


## 补充
### 时区问题
若用国外主机，在`hexo new`时，会由于时区设置的问题，`date`显示的不是本地时间，可以更改时区：
```
date -R  # 查看当前系统时区
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime  # 设置时区为东八区
```

### 开机启动
我们写了很多脚本，运行了很多服务，机器重启之后都不会开起来，所以我们要加入开机自启，才能保证功能的正常。
```
vim /etc/rc.d/rc.local

# 写入以下内容

# Docker
service docker start

# cloud9
docker start 3e9a55a

# incrond
service incrond start

```

## old
### cloud9-docker
**(此方法已过期)**
Dockerfile的github地址在这里：[https://github.com/kdelfour/cloud9-docker](https://github.com/kdelfour/cloud9-docker)

我们将它克隆下来：

```
cd ~
mkdir cloud9
cd cloud9
git clone https://github.com/kdelfour/cloud9-docker.git
```

然后就要改改文件了，方法如下：

（我是参考别人的）

> 参考issue页面https://github.com/kdelfour/cloud9-docker/issues/15
> pbelyaev的回答:
> Just clone this repository and edit conf/cloud9.conf:
> 
> [program:cloud9]
> command = node /cloud9/server.js --listen 0.0.0.0 --port 80 --auth user:password -w /workspace
> directory = /cloud9
> user = root
> autostart = true
> autorestart = true
> stdout_logfile = /var/log/supervisor/cloud9.log
> stderr_logfile = /var/log/supervisor/cloud9_errors.log
> environment = NODE_ENV="production"
> Then edit docker-compose.yml file:
> 
> ...
>   cnine:
>     build: ./dir/to/cloned/repository

改好以后就可以构建镜像了，build命令格式如下
```
docker build -t image_name Dockerfile_path
```

所以我们敲命令：
```
cd Dockerfile所在目录
docker build -t yourname/cloud9 .
```

构建完成后，我们来创建并启动容器：

```
docker run -it -d -p 80:80 -v /your-path/workspace/:/workspace/ yourname/cloud9 --auth user:password 
```
**注：记得将user:password改为你自己的用户名:密码；yourname/cloud9是你自己起的image名字。**

http://your-server-ip

就可以进入icloud了。

## 推荐
推荐大家看我以前写的hexo系列：

[搭建hexo博客小记——hexo系列文章（一）](https://heliublog.com/2016/05/01/%E6%90%AD%E5%BB%BAhexo%E5%8D%9A%E5%AE%A2%E5%B0%8F%E8%AE%B0/)

[利用Swiftype建立站内搜索——hexo系列文章（二）](https://heliublog.com/2016/05/14/Hexo%E5%88%A9%E7%94%A8Swiftype%E5%BB%BA%E7%AB%8B%E7%AB%99%E5%86%85%E6%90%9C%E7%B4%A2/)

[VPS+Hexo+Dropbox创建个人博客——hexo系列教程（三）](https://heliublog.com/2016/05/01/VPS+Hexo+Dropbox%E5%88%9B%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/)