---
title: VTK提示MetaImage cannot read data from file
date: 2017-05-10 23:01:49
categories: VTK
tags:
  - VTK
keywords: VTK
---
在运行《VTK图形图像进阶》第五章`5.3_ImageResliceExample.cpp`时，会提示`MetaImage cannot read data from file`或者显示窗口是空白，后来搜索了VTKExample中的例子，发现可以这样解决：
<!--more-->
将原来程序中的语句
```
imgActor->SetInputData(colorMap->GetOutput());
```
更改为：
```
imgActor->GetMapper()->SetInputConnection(colorMap->GetOutputPort());
```
记得在程序开头载入头文件：
```
#include <vtkImageMapper3D.h>
```

>VTKExample:http://www.vtk.org/Wiki/VTK/Examples/Cxx/IO/MetaImageReader