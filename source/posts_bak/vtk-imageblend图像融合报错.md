---
title: vtk-imageblend图像融合报错
date: 2017-05-07 23:01:49
tags:
  - VTK
categories: VTK
---
>参考：http://blog.csdn.net/u012526003/article/details/52066403

在运行《VTK图像开发进阶》中`5.2_ImageBlendExample.cpp`代码时，报错`vtkCompositeDataPipeline (004A4880): Input for connection on index 0 input port index 1 for algorithm vtkImageBlend(004A1958) is of type vtkImageData, but a vtkImageStencilData is required.`正在无解之际，找到了解决办法，感谢原博主。
只需将原程序中
```
imageBlend->SetInput(0,reader->GetOutput());
imageBlend->SetInput(1,imageSource->GetOutput());
```
改为
```
imageBlend->AddInputData(reader->GetOutput());
imageBlend->AddInputData(imageSource->GetOutput());
```
即可。