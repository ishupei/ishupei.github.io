---
title: 异常
category: Java
tag:
  - Java基础
head:
---


## 1.3 异常

Java异常体系以`Throwable`为顶层父类，分为两大分支：

1. **Error**：系统级错误，程序无法处理（如`OutOfMemoryError`）
2. **Exception**：程序可处理的异常
   - **Checked Exception**：编译时强制检查、必须被捕获或声明抛出（如`IOException`、`ClassNotFoundException`）
   - **Unchecked Exception**：运行时异常、不强制处理（如`NullPointerException`、`ArrayIndexOutOfBoundsException`、`ClassCastException`）

|     特性     |             throw             |                 throws                  |
| :----------: | :---------------------------: | :-------------------------------------: |
|   **作用**   |  主动抛出一个具体的异常对象   |       声明方法可能抛出的异常类型        |
| **语法位置** |         方法内部使用          |            方法签名末尾使用             |
|   **数量**   |   一次只能抛出一个异常对象    |    可以声明多个异常类型（逗号分隔）     |
| **处理方式** | 必须配合try-catch或throws使用 | 调用者必须处理（try-catch或继续throws） |
​        