---
title: 自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook
date: 2018-07-28 22:40:14
categories: Docker
tags:
  - Linux
  - VPS
  - c++
  - Jupyter
keywords: Docker,服务器,C++,Cling,tensorflow,python,jupyter-notebook,jupyter

---
## 安装Docker软件
不再赘述，可参考本博客中以前的文章。

## Dockerfile
github地址：

https://github.com/heliuphy/myDockerRepo/blob/master/jupyter-cling/Dockerfile


## docker命令
```bash
docker run -d --name jupyter-cling \
-p 9002:8888 \
--user root \
-e GRANT_SUDO=yes \
-e NB_UID=1001 \
-e NB_GID=101 \
-v /home/jupyter-cling:/home/jovyan/work \
heliuphy/jupyter-cling start-notebook.sh \
--NotebookApp.password='sha1:********'
# -------------
# 增加 NB_UID 对目录的权限
$ chown 1001 /home/jupyter-cling

```
