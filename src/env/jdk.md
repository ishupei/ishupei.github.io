---
title: JDK
category:
  - 环境部署
---
### JDK 安装

1、下载 JDK1.8

2、安装解压到本地 D:\environment\java\jdk1.8 文件夹

3、配置环境变量

我的电脑-->右键-->属性-->高级系统设置-->环境变量-->系统环境变量

(一) 新建系统变量 <br />

::: tip JAVA_HOM
D:\environment\java\jdk1.8
:::

(二) 配置 path 系统变量 <br />
::: tip 系统变量
%JAVA_HOME%\bin  <br />
%JAVA_HOME%\jre\bin
:::

![img](/assets/image/env/jdk-2.png)

4、检查是否安装成功 java -version

![img](/assets/image/env/jdk-3.png)

### JDK 卸载

1、找到 JDK 安装目录，删除

2、删除环境变量

3、DOS 下检查 java -version
