---
title: I/O、NIO
category: Java
tag:
  - Java基础
head:
---

## I/O

IO 即 `Input/Output`，输入和输出。数据输入到计算机内存的过程即输入，反之输出到外部存储（比如数据库，文件，远程主机）的过程即输出。数据传输过程类似于水流，因此称为 IO 流。IO 流在 Java 中分为输入流和输出流，而根据数据的处理方式又分为字节流和字符流。字节流：处理原始二进制数据（如zip文件、图片）保持原始I/O的高效性，字符流：处理人类可读文本（自动处理字符编码）提供缓冲等文本特化功能

Java IO 流的 40 多个类都是从如下 4 个抽象类基类中派生出来的。

- `InputStream`/`Reader`: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。
- `OutputStream`/`Writer`: 所有输出流的基类，前者是字节输出流，后者是字符输出流。

用于序列化和反序列化的类必须实现 `Serializable` 接口，对象中如果有属性不想被序列化，使用 `transient` 修饰

**标记接口机制**：Serializable 是空接口（标记接口），仅用于标识该类允许被序列化

**安全控制**：防止任意对象被意外序列化（可能泄露敏感信息）

**版本控制**：实现 Serializable 后自动支持 serialVersionUID 字段验证

**transient 关键字**：只有实现 Serializable 后，transient 修饰的字段才会被排除序列化

**继承关系**：父类实现 Serializable 时子类自动可序列化（但建议显式声明）

**静态字段**：即使实现接口，static 字段也不会被序列化（属于类而非对象）

**典型应用场景**

**字节流**

文件复制（FileInputStream/FileOutputStream）

网络数据传输（Socket.getInputStream()）

序列化对象（ObjectOutputStream）

**字符流**

配置文件读取（FileReader）

控制台输入（InputStreamReader）

日志文件写入（PrintWriter）

字符流本质是通过`InputStreamReader/OutputStreamWriter`包装字节流实现

底层公式：字符流 = 字节流 + 编码处理

**为什么需要缓冲流**：字符流默认带缓冲（BufferedReader），字节流需手动包装（BufferedInputStream）

**编码问题现象**：用字节流直接读文本会导致乱码（如中文UTF-8文件用FileInputStream读取）

**性能对比**：字符流处理文本效率比"字节流+手动解码"高30%以上（测试案例：读取10MB文本文件）



Q：缓冲区数据何时实际写入磁盘？

A：缓冲区满、调用flush()或close()时

Q：为什么读取文件推荐用缓冲流？

A：减少磁盘I/O次数（机械硬盘寻道时间约10ms/次）

Q：缓冲流可能引起的数据一致性问题？

A：未及时flush()可能导致数据未持久化
