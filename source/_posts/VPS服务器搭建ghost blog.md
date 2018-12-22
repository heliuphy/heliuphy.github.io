---
title: VPS服务器搭建ghost blog
date: 2016-05-01 18:06:12
categories: web
tags: [ghost blog]
keywords: VPS,ghost blog
---

####前传
***
&#160;&#160;无意中看到markdown语法，立马就喜欢上它，所以就想博客能不能也用这种语法写，因为我的博客原来一直用wordpress来搞，第一个想到的当然是用插件，当然也下到了，不过估计是主题css的问题，代码框老显示不出来，对于想要代码框的我来说实在是不能忍，就上网搜有没有其他的博客工具，哈哈终于找到了它，ghostblog！

&#160;&#160;但是安装下来着实费了不少功夫。总结起来比较简便的方法还是AMH+Node.js
<!--more-->
注：以下步骤引用自：
http://www.tuicool.com/articles/jQnIJf3

1.  安装AMH，网上有详细教程

2.  安装Node.js

  也是网上的教程，不过有些gcc版本可能支持不了太新的Node.js

3.  安装ghost
  
 1. 新建数据库

      登陆AMH面板，进入数据库，快速建库，很简单。

 2. 新建站点

     登陆AMH面板，点击虚拟主机，新建虚拟主机，这也很简单。

 3. 安装Ghost程序

     这里我们使用的是 http://ghostchina.com/ 发布的中文版Ghost。

     登陆ssh，运行命令，

            wget http://dl.ghostchina.com/Ghost-0.5.9-zh-full.zip //下载Ghost到VPS  
            unzip Ghost-0.5.9-zh-full.zip -d ghost //解压Ghost-0.5.9-zh-full.zip并xiu修改文件夹名为ghost  
如没有安装unzip，请执行 sudo yum install unzip 来安装，

     &#160;&#160;到这里需要注意，ghost文件夹里的所有文件全部移动到之前你新建虚拟主机的web根目录下，不然会出错，文件移动号后，进入虚拟主机的web根目录下

            cd /虚拟主机web根目录路径   //进入虚拟主机web根目录，此步骤不能少  
            cp config.example.js config.js //复制config.example.js成config.js  
            vim config.js //用vim编辑config.js文件  
将相关位置修改成以下这样：

            production: {  
            url: 'http://your_blog_url',
            mail: {},
            database: {
            client: 'mysql',
            connection: {
            host	 : '127.0.0.1', 
            user	 : 'root', //暂且直接用root账户
            password : 'password', //你的root账户密码
            database : 'ghost', //你之前建立的数据库名
            charset  : 'utf8'
            },
            debug: false
            },
            server: {
            // Host to be passed to node's                 `net.Server#listen()`
            host: '127.0.0.1',//改为0.0.0.0，否则他人无法访问
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
            }
            },

     这里说一下vim编辑器的一般用法：

     i: 进入插入编辑模式

      ESC: 退出编辑模式

      :x : 退出并保存文件（退出编辑模式下使用）

 4. 配置Nginx

     由于之前你新建的虚拟主机的Nginx配置是为php服务的，所以，我们要将其进行修改成为node.js服务，

            vim /usr/local/nginx/conf/***.conf //进入Nginx配置文件目录,并编辑与你新建的虚拟主机相应的Nginx配置文件  
清空里面的内容，替换成以下：

            server {  
            listen 80;
            server_name  xxx.com www.xxxx.com; //替换为你自己的域名！
            location / {
            proxy_set_header   X-Real-IP $remote_addr;
            proxy_set_header   Host	  $http_host;
            proxy_pass		 http://127.0.0.1:2368;
             }
            }

     然后进AMH控制面板重启一下Nginx，

            npm start --production //启动Ghost，如果不出差错，在浏览器输入你的域名就可以看见Ghost的界面了，--production不能少  
   别以为到这就结束了，目前Ghost在我们SSH断开后就会结束进程，所以我们继续：

 5. 安装forever守护Ghost进程

      为了让Ghost程序能够后台运行不中断，我们还得再安装个工具，就是forever，使用-g参数就是在全局模式中安装，这样我们就可以再任何地方都能使用forever命令了。

     以下命令都请在网站根目录下运行

            npm install forever -g //forever的安装命令  
            NODE_ENV=production forever start index.js  //安装forever后的Ghost启动命令  
          好了，Ghost就此安装完成

Ghost相关命令：

//以下命令都请在网站根目录下运行
                   
    NODE_ENV=production forever start index.js //启动Ghost  
    NODE_ENV=production forever stop index.js //停止Ghost  
    NODE_ENV=production forever restart index.js //重启Ghost  
现在，你就可以通过AMH控制面板进行数据管理、在线的文件编辑和上传 同样，你也可以按正常步骤新建一个php网站。