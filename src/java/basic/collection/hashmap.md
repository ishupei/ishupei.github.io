---
title: HashMap详解
category: Java
tag:
  - 集合
head:
---



## HashMap底层实现

HashMap 基于 **数组 + 链表 + 红黑树** 实现。
**核心原理：**

1. **存值 (put)：** 先用 key 的 `hashCode()` 经过**扰动计算**（(h = key.hashCode()) ^ (h >>> 16)）得到 hash 值，再用 `(n - 1) & hash` 确定数组下标。如果目标桶为空则直接插入；若不为空，则遍历该桶的链表或树：若找到相同 key 则覆盖 value，否则将新节点插入链表尾部或树中。
2. **取值 (get)：** 类似 put 过程，计算 hash 和下标后，遍历该桶的链表或树查找 key。
3. **扩容 (resize)：** 当元素数量超过（容量 * 负载因子(默认0.75)）时，数组扩容为原来的 2 倍，并重新排列所有元素。

**JDK8 优化：**

1. **红黑树：** 当链表长度 > 8 **且** 数组容量 ≥ 64 时，链表转为红黑树，解决哈希冲突严重时链表查询慢(O(n))的问题，将查询效率提升至 O(log n)。节点数小于 6 时退化为链表。

2. **尾插法：** 插入链表时改用尾插法（JDK7是头插法），避免了多线程环境下扩容时可能产生的死循环问题。

3. **扩容优化：** 扩容时，元素的新位置要么是**原位置**，要么是**原位置+旧容量**。通过 `(e.hash & oldCap) == 0` 一位判断即可，无需重新计算 hash，提升了 rehash 效率。

4. **hash() 简化：** 扰动函数计算比 JDK7 更简洁，性能略有提升。

## HashMap遍历

我们不能在遍历中使用集合 `map.remove()` 来删除数据，这是非安全的操作方式，但我们可以使用迭代器的 `iterator.remove()` 的方法来删除数据，这是安全的删除集合的方式。同样的我们也可以使用 Lambda 中的 `removeIf` 来提前删除数据，或者是使用 Stream 中的 `filter` 过滤掉要删除的数据进行循环，这样都是安全的，当然我们也可以在 `for` 循环前删除数据在遍历也是线程安全的。

 HashMap 4 种遍历方式：迭代器、for、lambda、stream，以及具体的 7 种遍历方法，综合性能和安全性来看，**我们应该尽量使用迭代器（Iterator）来遍历 `EntrySet` 的遍历方式来操作 Map 集合**，这样就会既安全又高效了。HashMap **遍历从大的方向来说，可分为以下 4 类**：

1. 迭代器（Iterator）方式遍历；
2. For Each 方式遍历；
3. Lambda 表达式遍历（JDK 1.8+）;
   1. Streams API 遍历（JDK 1.8+）。


但每种类型下又有不同的实现方式，因此具体的遍历方式又可以分为以下 7 种：

1. 使用迭代器（Iterator）EntrySet 的方式进行遍历；
2. 使用迭代器（Iterator）KeySet 的方式进行遍历；
3. 使用 For Each EntrySet 的方式进行遍历；
4. 使用 For Each KeySet 的方式进行遍历；
5. 使用 Lambda 表达式的方式进行遍历；
6. 使用 Streams API 单线程的方式进行遍历；
7. 使用 Streams API 多线程的方式进行遍历。

接下来我们来看每种遍历方式的具体实现代码。

**性能分析**

`EntrySet` 之所以比 `KeySet` 的性能高是因为，`KeySet` 在循环时使用了 `map.get(key)`，而 `map.get(key)` 相当于又遍历了一遍 Map 集合去查询 `key` 所对应的值。为什么要用“又”这个词？那是因为**在使用迭代器或者 for 循环时，其实已经遍历了一遍 Map 集合了，因此再使用 `map.get(key)` 查询时，相当于遍历了两遍**。

而 `EntrySet` 只遍历了一遍 Map 集合，之后通过代码“Entry<Integer, String> entry = iterator.next()”把对象的 `key` 和 `value` 值都放入到了 `Entry` 对象中，因此再获取 `key` 和 `value` 值时就无需再遍历 Map 集合，只需要从 `Entry` 对象中取值就可以了。

所以，**`EntrySet` 的性能比 `KeySet` 的性能高出了一倍，因为 `KeySet` 相当于循环了两遍 Map 集合，而 `EntrySet` 只循环了一遍**。



使用工具类 Arrays.asList()把数组转换成集合时，不能使用其修改集合相关的方法， 它的add/remove/clear方法会抛出`UnsupportedOperationException`异常。Arrays.asList()方法返回的并不是java.util.ArrayList，而是java.util.Arrays 的一个内部类,这个内部类并没有实现集合的修改方法或者说并没有重写这些方法。

