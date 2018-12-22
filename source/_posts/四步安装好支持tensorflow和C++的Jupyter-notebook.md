---
title: 四步安装好支持tensorflow和C++的Jupyter-notebook
date: 2018-07-26 21:28:33
categories: Docker
tags:
  - Linux
  - VPS
  - python
  - c++
  - jupyter-notebook
keywords: tensorflow,c++,jupyter,notebook,jupyter-notebook,python

---
## 安装docker
```bash
sudo apt-get update # Ubuntu
sudo apt-get install docker
```
## 使用docker安装tensorflow-jupyter
> 参考网址        https://www.chenshaowen.com/blog/interactive-notebook-jupyter.html

```bash
docker run -d --name jupyter \
-p 9001:8888 \
--user root \
-e GRANT_SUDO=yes \
-e NB_UID=1000 \
-e NB_GID=100 \
-v /home/jupyter:/home/jovyan/work \
jupyter/tensorflow-notebook start-notebook.sh \
--NotebookApp.password='sha1:********'
```

参数解释：

\ 表示换行，把一条命令拆成多行以方便阅读
-d 表示启动的容器进入到后台运行；
-p 表示指定端口，这里把宿主机的 8888 端口映射到容器的 8888 端口；
–user=root，允许运行 sudo；
-e 指定 jovyan 用户相关权限 ID；
–name 表示给启动的容器设定名字;
-v 表示把宿主机的目录挂载到容器中。Jupyter Docker 的文档目录是 /home/jovyan/work，为了使得容器被销毁时，文档不受影响，将本地目录 /home/local/jupyter 挂载到 /home/jovyan/work;
-NotebookApp.password 是登录的密码，可以在 Ipython 中使用如下命令生成：
```python
In [1]: from notebook.auth import passwd
In [2]: passwd()
Enter password: ****
Verify password: ****
Out[2]: 'sha1:********'
```
## 配置 Nginx
按照以上网址安装好后可以通过http://ip:9001访问自己的jupyter notebook 。 但是带个端口号总是很别扭，所以这里通过Nginx来反向代理。
步骤如下：
通过 nginx -t 命令找到 Nginx 的配置文件地址。在 nginx.conf 文件中，新增如下内容：
```bash
    upstream notebook {
        server localhost:8888;
    }
    server{
        listen 80;
        server_name yourdomain.com;
    location / {
        proxy_pass            http://notebook;
        proxy_set_header      Host $host;
        }

    location ~ /api/kernels/ {
        proxy_pass            http://notebook;
        proxy_set_header      Host $host;
        # websocket support
        proxy_http_version    1.1;
        proxy_set_header      Upgrade "websocket";
        proxy_set_header      Connection "Upgrade";
        proxy_read_timeout    86400;
        }
    location ~ /terminals/ {
        proxy_pass            http://notebook;
        proxy_set_header      Host $host;
        # websocket support
        proxy_http_version    1.1;
        proxy_set_header      Upgrade "websocket";
        proxy_set_header      Connection "Upgrade";
        proxy_read_timeout    86400;
        }
    }
```
使用 `nginx -s reload` ，重启 Nginx 服务后生效。

## 使用
Jupyter 的基本单元是编程 cell 组成，也就是一个 `In[ ]`:

Jupyter 有三种类型的 cells：`code`，`markdown cells`，`raw cells`，常用的是 code cells 和 markdown cells 类型。

Cells 状态分为命令模式和编辑模式，Enter 进入编辑模式，ESC 进入命令模式，命令模式和编辑模式下支持很多操作快捷键。

常用命令模式快捷键：

- y: 单元进入代码状态
- m: 转入markdown状态
- r：转入raw状态
- a: 上方插入新单元
- b：下方插入新单元
- x：剪切选中单元
- c: 复制选中单元
- shift-v：粘贴到上方单元


### 插入 Markdown
直接输入 Markdown ，然后 Run 即可渲染结果。支持标题，文本，视频，图片等。

### 插入 LaTeX 公式
* 创建行内公式
```
$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$
```
* 块级公式
```
$$ x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$
```
### 代码块
可以直接在页面输出代码块，只需要在前后加上`代码块 `即可。

### 嵌入图片
```
from IPython.display import Image
Image(filename="yourpath.jpg")
```
### 嵌入音乐
可以嵌入本地音乐和网络音乐
```
from IPython.display import Audio
Audio(filename="yourpath.wma")
from IPython.display import Audio
Audio(url="http://yourpath.wma")
```
### 嵌入本地视频
```
import io
import base64
from IPython.display import HTML
video = io.open('/home/test.mp4', 'r+b').read()
encoded = base64.b64encode(video)
HTML(data='''<video alt="test" controls>
     <source src="data:video/mp4;base64,{0}" type="video/mp4" />
     </video>'''.format(encoded.decode('ascii')))
```
### 嵌入网页
```
from IPython.display import IFrame
IFrame('http://yourpath.com', width='100%', height=350)
```
### 嵌入链接
```
from IPython.display import FileLink
FileLink('./test/a.ipynb')
```
### 魔法命令
所有以 `%` 开头的方法，都是所谓的魔术方法 (Magic function)，也就是 IPython 内置的一些方法。需要注意的是，魔术方法有%和 %% 之分，比如 `%timeit` 和 `%% timeit`。在 IPython 中有专门的叫法，前者叫 `line magic` 后者叫`cell magic`。顾名思义，前者是专门针对一行的命令，后者针对多行的命令。
通过 `%lsmagic`可以查看所有的 magic 命令，使用 `?` 或者 `??` 可以查看该命令的信息，后者可以查看源码。如： `%alias?`，会出现该方法的描述。

## 参考
https://www.chenshaowen.com/blog/interactive-notebook-jupyter.html
https://github.com/jupyter/docker-stacks
http://www.cnblogs.com/giserliu/p/4997144.html


-------
## 安装C++环境
> https://github.com/QuantStack/xeus-cling

- 安装
xeus-cling已经在linux和OS X平台上为conda包管理器打包。
为确保安装正常，最好安装xeus-cling在新的conda环境中。还需要使用miniconda安装，因为使用完整的anaconda，您可能会与zeromq已安装在anaconda发行版中的库发生冲突。
最安全的用法是创建一个以clingminiconda安装命名的环境

```bash
conda create -n cling
source activate cling
```

然后，您可以在此环境xeus-cling及其依赖项中安装
```bash
conda install xeus-cling notebook -c QuantStack -c conda-forge
```
或者，如果已经安装了所有依赖项，则可以直接从源安装它。
```bash
cmake -DCMAKE_INSTALL_PREFIX = your_conda_path -DCMAKE_INSTALL_LIBDIR = your_conda_path / lib
make && make install
```

-------
## 附：Jupyter-kernels

https://github.com/jupyter/jupyter/wiki/Jupyter-kernels