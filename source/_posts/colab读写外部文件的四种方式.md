---
title: colab读写外部文件的四种方式
date: 2018-10-20 17:05:35
categories: 机器学习
tags:
  - colab
keywords: google, colab, jupyter, notebook, 机器学习, gpu
---


## 引言
众所周知，colab是google提供的运行在云端的jupyter notebook环境。里面集成了许多著名的机器学习python库。由于这个环境是运行在google虚拟机上的，显然与自己的pc不在一个文件系统。那么怎么与我们自己的文件交互呢？

colab文档里提供了四种方式，分别是：
1. 从本地直接上传
2. 连接Google Drive
3. 连接Google Sheet
4. 连接Google Cloud Storage

下面就来分别描述。



### 与本地文件交互
#### 本地文件上传
`files.upload()` 返回一个由我们上传的所有文件构成的一个字典。 这个字典的`key`是文件名, 这个字典的`value`是我们上传的文件的`data`。
```python
from google.colab import files

uploaded = files.upload()

for fn in uploaded.keys():
    print('User uploaded file "{name}" with length {length} bytes'.format(name=fn, length=len(uploaded[fn])))
```

#### 从colab下载文件到本地
```python
from google.colab import files
with open('example.txt', 'w') as f:
      f.write('some content')
files.download('example.txt')
```

### 连接Google Drive
这里官方有提供了许多种方法。这里我就挑一种介绍了，有兴趣的可以点进这个[链接](https://colab.research.google.com/notebooks/io.ipynb#scrollTo=P3KX0Sm0E2sF)进去看。

这里只介绍使用`PyDrive`的方法。PyDrive是google-api-python-client的包装库，简化了许多常见的Google Drive API任务。

```python
!pip install -U -q PyDrive

from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from google.colab import auth
from oauth2client.client import GoogleCredentials

# 1. 验证身份并创建pydrive客户端.
auth.authenticate_user()
gauth = GoogleAuth()
gauth.credentials = GoogleCredentials.get_application_default()
drive = GoogleDrive(gauth)

# PyDrive 参考:
# https://gsuitedevs.github.io/PyDrive/docs/build/html/index.html

# 2. 创建并上传一个文本文档.
uploaded = drive.CreateFile({'title': 'Sample upload.txt'})
uploaded.SetContentString('Sample upload file content')
uploaded.Upload()
print('Uploaded file with ID {}'.format(uploaded.get('id')))

# 3. 通过id访问文件并输出它的内容.
downloaded = drive.CreateFile({'id': uploaded.get('id')})
print('Downloaded content "{}"'.format(downloaded.GetContentString()))
```
### 连接Google Sheet
### 连接Google Cloud Storage