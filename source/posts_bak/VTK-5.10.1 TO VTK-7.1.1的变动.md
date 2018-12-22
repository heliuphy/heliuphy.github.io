---
title: VTK-5.10.1 to VTK-7.1.1的变动
date: 2017-05-07 23:00:15
tags:
  - VTK
categories: VTK
---
1. namespace vtkstd ==>> std；
2. SetInput()方法拆分为两个，一个SetInputData，一个SetInputConnection()。
3. vtk的新版本在vtkImageData类中取消了SetScalarTypeToUnsignedChar()方法；(vtkImageCanvasSource2D类中依然可用)现在仅能用如下方法设置：  
```
static void SetScalarType(int, vtkInformation* meta_data);
```

<!--more-->
