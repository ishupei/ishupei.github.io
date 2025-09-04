---
title: 集合概述
category: Java
tag:
  - 集合
head:
---

# Java 集合

## Java 集合概述

Java 集合，也叫作容器，主要是由两大接口派生而来：一个是`Collection`接口，主要用于存放单一元素；另一个是`Map`接口，主要用于存放键值对。
![java-collection-hierarchy](https://gitee.com/ishupei/picgo_img/raw/master/typora/java-collection-hierarchy.png)
### 1. Collection 接口

存放单一元素

**主要子接口：**

- **List**：有序、可重复
- **Set**：不可重复
- **Queue**：按特定规则排序，有序、可重复

### 2. Map 接口

存放键值对(key-value)



## Collection 接口详解

### 1. List 实现类对比

| 实现类     | 底层结构 | 特点                     | 线程安全 |
| :--------- | :------- | :----------------------- | :------- |
| ArrayList  | 动态数组 | 查询快，增删慢           | 不安全   |
| Vector     | 动态数组 | 线程安全（synchronized） | 安全     |
| LinkedList | 双向链表 | 增删快，查询慢           | 不安全   |

**ArrayList vs LinkedList：**

- **插入性能**：
  - ArrayList 头插 O(n)，尾插 O(1)
  - LinkedList 头尾插都是 O(1)
- **内存占用**：
  - ArrayList 会有预留空间
  - LinkedList 每个节点需存储前后指针

### 2. Set 实现类对比

| 实现类        | 底层结构      | 特点       | 排序方式          |
| :------------ | :------------ | :--------- | :---------------- |
| HashSet       | HashMap       | 无序       | 无                |
| LinkedHashSet | LinkedHashMap | 按插入顺序 | 插入顺序          |
| TreeSet       | 红黑树        | 自动排序   | 自然排序/定制排序 |

## Map 接口详解

### 1. 主要实现类对比

| 实现类            | 底层结构         | 线程安全 | 允许 null 键值 |
| :---------------- | :--------------- | :------- | :------------- |
| HashMap           | 数组+链表/红黑树 | 不安全   | 允许           |
| LinkedHashMap     | 链表+哈希表      | 不安全   | 允许           |
| TreeMap           | 红黑树           | 不安全   | 键不能为 null  |
| ConcurrentHashMap | 分段锁/CAS       | 安全     | 不允许         |

### 2. HashMap 核心机制

- **扩容机制**：默认容量 16，负载因子 0.75，扩容 2 倍
- **哈希冲突解决**：
  - 链表长度 > 8 且数组长度 ≥ 64 时转为红黑树
  - 红黑树节点数 < 6 时退化为链表

## Queue/Deque

### 1. Queue 方法对比

| 操作     | 抛出异常方法 | 返回特殊值方法 |
| :------- | :----------- | :------------- |
| 插入队尾 | add(e)       | offer(e)       |
| 删除队首 | remove()     | poll()         |
| 查询队首 | element()    | peek()         |

### 2. Deque 实现类对比

- **ArrayDeque**：基于可变长数组+双指针，性能优于 LinkedList
- **LinkedList**：基于双向链表

## 其他重要知识点

### 1. Fail-fast vs Fail-safe

- **Fail-fast**：快速失败（如 ArrayList 迭代时修改会抛 `ConcurrentModificationException`）
- **Fail-safe**：安全失败（如 `CopyOnWriteArrayList` 使用写时复制）

### 2. 排序接口对比

- **Comparable**：自然排序（需实现 `compareTo()`）
- **Comparator**：定制排序（可定义多个比较器）

### 3. 阻塞队列 (BlockingQueue)

**主要实现类：**

- **ArrayBlockingQueue**：数组实现有界队列
- **LinkedBlockingQueue**：链表实现可选有界队列
- **PriorityBlockingQueue**：优先级无界队列
- **SynchronousQueue**：不存储元素的同步队列


