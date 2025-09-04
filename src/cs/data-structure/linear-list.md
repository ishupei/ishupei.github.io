

# 线性表

## **2.1 线性表的定义和基本操作**

定义：线性表是具有相同数据类型的n (n≥0)个数据元素的有限序列，其中n为表长，当n =0时线性表是一个空表。


![图片](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACeCAYAAACl+hgFAAAgAElEQVR4Ae3dB7Q2VXU3cNZyfVmJK81oxEgiNgwosYJBxCAGLCAGUcDeRVQEFQsqWFBsKKLYCYqCoqAI9oKCIhJ7V1Swgb3GlhiTzLd+o/uu8847ZZ+XO3mfy33OWs8zZ878z96nzPxnnzpb/O///m+TcVkcWTXYjO5amVn9Wdxa0395K9NlPeWe0Zr7dK4y3Zz3Xlb3VDlt8T//8z8tiSmksV8WR0YNdkxnea1GZhabxdXmKSs3i6vVX5bbmH8O/WtFZk2ZzpGnsXrpXptD/xwyu+keO19k/VtIeMZlcVMsnNHVh5lD/xwya/I/l/6+8usLm0P/WpG5rKfcc19TTn332FDYHPfJkK6+8DH9S1LsK7GesLFC7MKz2CyO/BpsNz1D5zUys9gsriZPc8hcBP1D9dINnyP/c8jspnvsfJH1L0lxrOaKa3NU4hwyiyRPeufQv1ZkKpxsWrO4GpmTlVMA5tA/h8wiyZPeRda/JMXJ6vs9YI5KnENmMjstbA79a0WmAsimNYurkXl5rKfNnafV0r8caJkYYPJA+M3RMTyHzEhv5jiH/rUis6ZO58hTpn4CM4f+OWRGejPHRda/tBSTrxcVnXVZbBZHbw12tdNZo78mnVlsFleTzhrsXPovb/WUzU9N2ddis2kYq9MlKSZLcawQuyKy2Cxuc9wYi5SnucopKzeLW+/11L1nxs4XuUyXpDhWc8W1OSpxDplFkie9c+hfKzIVTjatWVyNzMnKKQBz6J9DZpHkSe8i61+S4mT1/R4wRyXOITOZnRY2h/61IlMBZNOaxdXIvDzW0+bO02rpXw60rNJAy69//evml7/8Ze+gzGc+85k23MNV/nQ2/+xnP2sOP/zw5ic/+ckG10ocf7dj+qlPfWrzrW99azSOeGeddVbzu9/9bgPc85///OanP/3pRjK7Osvzrv7yWunP4sTJYrO4Gpk12Ln0l+U25p9D/xwyx/LQvbbI+peWYvL1olK77hWveEVzwQUXNJ/73Oear33ta82+++7bPOMZz2he/vKXN3e7292aI488soFBep/61KdWor/vfe9rSQkRIqfjjz++edWrXtX6nX/3u99t7n//+zff//732zj/+Z//2ZKma34XX3xxc5Ob3KQ9RpgjOT/60Y9W9CDpbbbZpk3fb3/725XwnXbaqfnFL37REiVZGdeX/754WZy4WWwWVyOzi1XGfe6//uu/mqFr8B/84AebT3/60ytRM2n9zW9+07zrXe9q/vu//3sl3pgnIzPiZ7FZHLk12EjH1LFGZg12Sm9cH5O5JMUopYljXyE+7nGPawlnl112aT72sY81z3nOc1assnvd616Nm5/rPlQ3vOENm1NOOaV54xvf2Pt7/etf34Z/5StfaeOfd955zYknnriCve1tb9uSb1/8r371qys5ee1rX9sce+yxzSc+8Ynm4Q9/eEuyH/jAB5rtt9++Oeqoo1ryvu51r9v8+7//+0qcIU9f/vuwWZy4WWwWVyNTnSifcMr0ec97XvPCF76wefWrX90cccQRzUknndQ84QlPaJ7ylKcErPn5z3/elC8YL56dd955heCk1QuwJMqVyH/weBne+MY3bhBuuM9+9rPtiyrOy+Mc+Z9DZpnmKf8i61+SYqf2ugQWl/sqESmy0O50pzu1liJS9KB5kA4++ODWSnzWs57V7L777isPDXnXv/71m2984xvNoYce2mJYk/HTLL7RjW7UvPe97w3V7TH0ewj32muvRnP9P/7jP5pf/epXrR+B/uAHP9ggzq1udasVwnvoQx/akvO3v/3thqUo/p577tlccsklG8QZOgn9Q9cjPIuDz2KzuBqZ8r/33nu3L5vXve51ze1ud7vIQuMl9IIXvKA9j66HuOilovyjvhy9YF784he3YVoJRx99dEuwEUfLoMSTfYMb3KANixfg4x//+PalF3HK4xz5n0NmmeYp/yLrX5Ji07SExRJDIle5ylV63/J9lRik6IHSb4gU3/CGNzSnnnpq88UvfrElHJbbAQccsME9Eg8gmZrdHkoE9573vKd5xCMe0T6UXYKD1TS+733v2z7IL33pS5u3vvWtzTve8Y72yPr0MIb7whe+0Py///f/2ma3MA83Amel7LPPPm2T/ulPf3qbVg/tlOvLf1+cLE7cLDaLq5GJFB/5yEe2lvTJJ5/c3PrWt24tey8qVr6yQWR3vvOdm4985CMrWUWKhx12WPPxj3+8ec1rXrMB2cG7B0444YQNXoIiq19l76d7xAspzlmW6nLIzZH/OWQOpb8vfJH1r3tS1K/zsIc9rG3OeBDe/va3b9TcVal9lRik6IEqSRHBIsYHPehBDVLUP1g65FvK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)

## **2.2 线性表的顺序表示**

### **2.2.1 顺序表的实现**

线性表的顺序存储称为顺序表。特点是表中元素的逻辑顺序与其物理顺序相同，是一种随机存取的数据结构，通常用高级程序设计语言中的数组来描述线性表的顺序存储结构。

注意：线性表中元素的位序从1开始，而数组元素下标从0开始。

1. 顺序表的实现——**静态分配**

```plain
#include <stdio.h>
#define MaxSize 10      //定义最大长度 
typedef struct{
    int data[MaxSize];  //用静态的“数组”存放数据元素 ElemType:int
    int Length;         //顺序表的当前长度
}SqList;                //顺序表的类型定义

//基本操作——初始化一个顺序表
void InitList(SqList &L){
    for(int j=0; j<MaxSize; j++){
        L.data[j]=0;  //将数据元素设置为默认初始值0,内存中可能有遗留的“脏数据”
    }
    L.Length=0;        //顺序表初始长度为0
}

//主函数
int main(){            
    SqList L;          //声明一个顺序表  在内存里分配存储顺序表L的空间
                       //包括MaxSize*sizeof(ElemType)和存储length的空间
    InitList(L);       //初始化这个顺序表
    //...
    return 0;
}
```

2. 顺序表的实现——**动态分配**

`malloc`函数:

`L.data=(ElemType*)malloc(sizeof(ElemType)*InitSize)` 

其中`(ElemType*)`可强制转换数据类型

```plain
#include <stdlib.h>       //malloc,free函数的头文件
#define InitSize 10       //默认的最大初始长度

typedef struct{
    int *data;            //指示动态分配数组的指针
    int MaxSize;         //顺序表的最大容量
    int length;          //顺序表的当前长度
}SeqList;

int main(){
    SeqList L;
    InitList(L);
    //...其余操作
    IncreaseSize(L,5);
    return 0;
}
void InitList(SeqList &L){
    L.data = (int*)malloc(InitSize*sizeof(int));  //用malloc函数申请一片连续的存储空间
    L.length = 0;         //此时尚未存入任何数据
    L.MaxSize = InitSize;
}

//增加动态数组的长度
void IncreaseSize(SeqList &L, int len){
    int *p=L.data;
    L.data = (int*)malloc((L.MaxSize+len)*sizeof(int));
    for(int i=0; i<L.length; i++){
        L.data[i] = p[i];       //将数据复制到新区域
    }
    L.MaxSize = L.MaxSize + len; //顺序表最大长度增加len
    free(p);                 //释放原来的内存空间
}
```

### **2.2.2 顺序表上基本操作的实现 (插入和删除)**

1. 顺序表基本操作——插入

**基于静态分配的代码实现** 

```plain
#define MaxSize 10      //定义最大长度 
typedef struct{
    int data[MaxSize];  //用静态的“数组”存放数据元素
    int Length;         //顺序表的当前长度
}SqList;                //顺序表的类型定义

//基本操作——在L的位序i处插入元素e
bool ListInsert(SqList &L, int i, int e){ 
    //判断i的范围是否有效
    if(i<1||i>L.length+1) 
        return false;
    if(L.length>=MaxSize)  //当前存储空间已满，不能插入  
        return false;
    for(int j=L.length; j>=i; j--){    //将第i个元素及其之后的元素后移
        L.data[j]=L.data[j-1];
    }
    L.data[i-1]=e;  //在位置i处放入e
    L.length++;      //长度加1
    return true;
}

int main(){
    SqList L;          //声明一个顺序表
    InitList(L);       //初始化这个顺序表
    //...插入几个元素
    ListInsert(L,3,3);
    return 0;
}
```

**时间复杂度分析**

* 关注最深层循环语句——`L.data[j]=L.data[j-1]`的执行次数与问题规模n——`L.length`的关系;

* 最好情况：插入表尾，不需要移动元素，i=n+1，循环0次；最好时间复杂度 = O(1)

* 最坏情况：插入表头，需要将原有的n个元素全都向后移动，i=1，循环n次；最坏时间复杂度 = O(n)

平均情况：假设新元素插入到任何一个位置的概率p(=1/n+1)相同

| **插入到第i个位置** | **循环次数** |
| :------------------ | :----------- |
| **1**               | **n**        |
| **2**               | **n-1**      |
| **3**               | **n-2**      |
| **…**               | **…**        |
| **n+1**             | **0**        |

**平均循环次数** = np + (n-1)p + (n-2)p + … + 1×p = [ n(n+1)/2 ]×[ 1/(n+1) ] = n/2

**平均时间复杂度** = O(n)

1. 顺序表基本操作——删除

`ListDelete(&L,i,e)`:删除表L中的第i个位置的元素，并用e返回删除元素的值

**基于静态分配的代码实现**

```plain
#define MaxSize 10      //定义最大长度 
typedef struct{
    int data[MaxSize];       //用静态的“数组”存放数据元素 
    int Length;             //顺序表的当前长度
}SqList;                   //顺序表的类型定义

bool ListDelete(SqList &L, int i, int &e){       // e用引用型参数 
    if(i<1||i>L.length)           //判断i的范围是否有效
        return false;
    e = L.data[i-1];         //将被删除的元素赋值给e
    for(int j=i; j<L.length; j++){        //将第i个后的元素前移
        L.data[j-1]=L.data[j];
    }
    L.length--;        //长度减1
    return true;
}

int main(){
    SqList L;            //声明一个顺序表
    InitList(L);         //初始化这个顺序表
    //省略代码...插入几个元素
    int e = -1;          //用变量e把删除的元素“带回来”
    if(ListDelete(L,3,e))
        printf("已删除第三个元素，删除元素值=%d\n",e);
    else
        printf("位序i不合法，删除失败\n");
    return 0;
}
```

**时间复杂度分析**

* 关注最深层循环语句——`L.data[j-1]=L.data[j]`的执行次数与问题规模n——`L.length`的关系;

* 最好情况：删除表尾元素，不需要移动元素，i=n，循环0次；最好时间复杂度 = O(1);

* 最坏情况：删除表头元素，需要将后续的n-1个元素全都向前移动，i=1，循环n-1次；最坏时间复杂度 = O(n);

平均情况：假设删除任何一个元素(1,2,3,…,length)的概率相同 p=1/n

| **删除第i个元素** | **循环次数** |
| :---------------- | :----------- |
| **1**             | **n-1**      |
| **2**             | **n-2**      |
| **3**             | **n-3**      |
| **…**             | **…**        |
| **n**             | **0**        |

**平均循环次数** = (n-1)p + (n-2)p + … + 1×p = [ n(n-1)/2 ]×[ 1/(n) ] = n-1/2

**平均时间复杂度** = O(n)

1. 顺序表基本操作——**按位查找(顺序表)**

`GetElem(L,i)` : 按位查找操作——获取表L中第i个位置元素的值

**基于静态分配的代码实现**

```plain
#define MaxSize 10            //定义最大长度 
typedef struct{
    ElemType data[MaxSize];  //用静态的“数组”存放数据元素 
    int Length;              //顺序表的当前长度
}SqList;                     //顺序表的类型定义

ElemType GetElem(SqList L, int i){
    // ...判断i的值是否合法
    return L.data[i-1];      //注意是i-1
}

```

**基于动态分配的代码实现**

```plain
#define InitSize 10  //顺序表的初始长度

typedef struct{
    ElemType *data;  //指示动态分配数组的指针
    int MaxSize;     //顺序表的最大容量
    int length;      //顺序表的当前长度
}SeqList;

ElemType GetElem(SqList L, int i){
    // ...判断i的值是否合法
    return L.data[i-1];       //就算是指针也能用数组下标哦!
}
```

**时间复杂度分析**
**O(1)**

由于顺序表的各个数据元素在内存中连续存放，因此可以根据**起始地址**和**数据元素大小**立即找到第i个元素———“随机存取”特性；

1. 顺序表基本操作——**按值查找**

`LocateElem(L, e)`: 按值查找操作，在表L中查找具有给定关键字值的元素；

**基于动态分配的代码实现**

```plain
#define InitSize 10            //定义最大长度 
typedef struct{
    ElemTyp *data;            //用静态的“数组”存放数据元素
    int MaxSize;             //顺序表的最大容量
    int Length;              //顺序表的当前长度
}SqList;                     //顺序表的类型定义（动态分配方式）

//在顺序表L中查找第一个元素值等于e的元素，并返回其位序
int LocateElem(SqList L, ElemType e){
    for(int i=0; i<L.length；i++)
        if(L.data[i] == e)     //基本数据类型可以直接用运算符'=='比较
            return i+1;       //数组下标为i的元素值等于e，返回其位序i+1
    return 0;                 //退出循环，说明查找失败
}
```

**Q:** 如果顺序表里存放的是结构类型的数据元素，可不可以用 `==` 进行比较？
**A:** 不能！结构类型的比较，需要依次对比各个分量来判断两个结构体是否相等；

例： hedui

```plain
typedef struct{
    int num;
    int people;
}Customer;

void test(){
    Customer a;
    a.num = 1; a.people = 1;
    Customer b;
    b.num = 1; b.people = 1;
    //...
    if (a.num == b.num && a.people == b.people){
        printf("相等");
    }else{
        printf("不相等");
    }
}

bool isCustomerEqual(Customer a,Customer b){
      if(a.num == b.num && a.people == b.people)
      return true;
      else
      return false;
}    
```

**时间复杂度分析**

* 最深处循环语句: `if(L.data[i] == e)` 与问题规模n=`L.length(表长)`的关系；

* 最好情况：查找目标元素在表头，循环1次，最好时间复杂度=O(1)

* 最坏情况：查找目标元素在表尾，循环n次，最好时间复杂度=O(n)

* 平均情况：假设目标元素出现在任何一个位置的概率相同，p=1/n

| **目标元素所在位置i** | **循环次数** |
| :-------------------- | :----------- |
| **1**                 | **1**        |
| **2**                 | **2**        |
| **3**                 | **3**        |
| **…**                 | **…**        |
| **n**                 | **n**        |

**平均循环次数** = 1×1/n + 2×1/n +…+ n×1/n = [ n(n+1)/2 ] × 1/n = (n+1)/2

**平均时间复杂度** = O(n)


## **2.3 线性表的链式表示**

### **2.3.1 单链表的定义**

1. 何为单链表？

* 链式存储

* 每个结点存储：数据元素自身信息 & 指向下一个结点(后继)的指针

* 优点：不要求大片连续空间，改变容量方便

* 缺点：不可随机存取，要耗费一定空间存放指针

1. 代码定义单链表

```plain
struct LNode{            //定义单链表节点类型  LNode:结点
    ElemType data;       //每个结点存放一个数据元素 data:数据域
    struct LNode *next;  //指针指向下一个结点 next:指针域
};
```

增加一个新的结点：在内存中申请一个结点所需的空间，并用指针p指向这个结点

```plain
struct LNode* p = (struct LNode*) malloc(sizeof(struct LNode))；
```

如果每次都要写struct很麻烦，所以可以利用typedef关键字——数据类型重命名：`type<数据类型><别名>`
Eg:

```plain
typedef int zhengshu;
typedef int *zhengshuzhizhen;  //指向int型的指针
```

上面操作可以化简为:

```plain
typedef struct LNode LNode;
LNode* p = (LNode*)malloc(sizeof(LNode));
```

**最简洁代码实现:**

```plain
typedef struct LNode{            //定义单链表结点类型
    ElemType data;               //每个节点存放一个数据元素
    struct LNode *next;          //指针指向下一个节点
}LNode, *LinkList;
```

以上代码等同于：

```plain
struct LNode{                   //定义单链表结点类型
    ElemType data;              //每个节点存放一个数据元素
    struct LNode *next;         //指针指向下一个节点
};

typedef struct LNode LNode; //重命名
typedef struct LNode *LinkList; 
```

要表示一个单链表时，只需声明一个头指针L，指向单链表的第一个结点：

```plain
LNode *L;    // 声明一个指向单链表第一个结点的指针，强调这是结点
LinkList L;  // 声明一个指向单链表第一个结点的指针，强调这是链表
```

1. 单链表两种实现方法

* 不带头结点的单链表

```plain
typedef struct LNode{              //定义单链表结点类型
    ElemType data;                 //每个节点存放一个数据元素
    struct LNode *next;            //指针指向下一个节点
}LNode, *LinkList;

//初始化一个空的单链表
bool InitList(LinkList &L){      //注意用引用 &，要'带回来'
    L = NULL;                   //空表，暂时还没有任何结点
    return true;
}

void test(){
    LinkList L;            //声明一个指向单链表的指针: 头指针
    InitList(L);          //初始化一个空表
    //...后续代码...
}

//判断单链表是否为空
bool Empty(LinkList L){
    if (L == NULL)
        return true;
    else
        return false;
}
//或者：等价于判断单链表是否为空
bool Empty(LinkList L){
   return (L == NULL);
}
```

* 带头结点的单链表

```plain
typedef struct LNode{              //定义单链表结点类型
    ElemType data;                 //每个节点存放一个数据元素
    struct LNode *next;            //指针指向下一个节点
}LNode, *LinkList;

//初始化一个单链表（带头结点）
bool InitList(LinkList &L){  
    L = (LNode*)malloc(sizeof(LNode));     //分配一个头结点（不存储数据）
    if (L == NULL)                //内存不足，分配失败
        return false;
    L -> next = NULL;           //头结点之后暂时还没有结点
    return true;
}

void test(){
    LinkList L;            //声明一个指向单链表的指针: 头指针
    InitList(L);           //初始化一个空表
    //...后续代码
}

//判断单链表是否为空（带头结点）
bool Empty(LinkList L){
    if (L->next == NULL)
        return true;
    else
        return false;
}
```

**不带头结点 V.S. 带头结点**

* 不带头结点：写代码麻烦！对第一个数据节点和后续数据节点的处理需要用不同的代码逻辑，对空表和非空表的处理也需要用不同的代码逻辑; 头指针指向的结点用于存放实际数据;

* 带头结点：头指针指向的头结点不存放实际数据,头结点指向的下一个结点才存放实际数据;

* 单链表设置头结点的目的是方便运算的实现。

### **2.3.2 单链表上基本操作的实现**

**1. 单链表的插入**

* **按位序插入 (带头结点)**

`ListInsert(&L, i, e)`: 在表L中的第i个位置上插入指定元素e = 找到第i-1个结点(前驱结点)，将新结点插入其后；其中头结点可以看作第0个结点，故i=1时也适用。

代码实现 hedui

```plain
typedef struct LNode{
    ElemType data;
    struct LNode *next;
}LNode, *LinkList;

//在第i个位置插入元素e（带头结点）
bool ListInsert(LinkList &L, int i, ElemType e){  
    //判断i的合法性, i是位序号(从1开始)
    if(i<1)
        return false; 
    LNode *p;           //指针p指向当前扫描到的结点 
    int j = 0;          //当前p指向的是第几个结点
    p = L;              //L指向头结点，头结点是第0个结点（不存数据）
    
    //循环找到第i-1个结点
    while(p!=NULL && j<i-1){     //如果i>lengh, p最后会等于NULL
        p = p->next;             //p指向下一个结点
        j++;
    }
    if (p==NULL)                 //i值不合法
        return false;    
    //在第i-1个结点后插入新结点
    LNode *s = (LNode *)malloc(sizeof(LNode)); //申请一个结点
    s->data = e;
    s->next = p->next;
    p->next = s;                 //将结点s连到p后,后两步千万不能颠倒qwq
    return true;
}
```

时间复杂度分析

>最好情况：插入第1个位置 O(1)
>最坏情况：插入表尾 O(n)
>平均时间复杂度 = O(n)

* **按位序插入 (不带头结点)** 

`ListInsert(&L, i, e)`: 在表L中的第i个位置上插入指定元素e = 找到第i-1个结点(前驱结点)，将新结点插入其后; 因为不带头结点，所以不存在“第0个”结点，因此！i=1 时，需要特殊处理——插入(删除)第1个元素时，需要更改头指针L;

代码实现 hedui

```plain
typedef struct LNode{
    ElemType data;
    struct LNode *next;
}LNode, *LinkList;

bool ListInsert(LinkList &L, int i, ElemType e){
    if(i<1)
        return false;
    if(i==1){          //插入到第1个位置时的操作有所不同！
        LNode *s = (LNode *)malloc(sizeof(LNode));
        s->data =e;
        s->next =L;
        L=s;          //头指针指向新结点
        return true;
    }

    //i>1的情况与带头结点一样！唯一区别是j的初始值为1
    LNode *p;       //指针p指向当前扫描到的结点 
    int j=1;        //当前p指向的是第几个结点
    p = L;          //L指向头结点，头结点是第0个结点（不存数据）
   
     //循环找到第i-1个结点
    while(p!=NULL && j<i-1){     //如果i>lengh, p最后会等于NULL
        p = p->next;             //p指向下一个结点
        j++;
    }
    if (p==NULL)                 //i值不合法
        return false;  
    //在第i-1个结点后插入新结点
    LNode *s = (LNode *)malloc(sizeof(LNode)); //申请一个结点
    s->data = e;
    s->next = p->next;
    p->next = s;          
    return true;
}
```

除非特别声明，否则之后的代码都默认为带头结点哦，做题注意审题

* **指定结点的后插操作**

`InsertNextNode(LNode *p, ElemType e)`: 给定一个结点p，在其之后插入元素e; 根据单链表的链接指针只能往后查找，故给定一个结点p，那么p之后的结点我们都可知，但是p结点之前的结点无法得知;

代码实现 hedui

```plain
typedef struct LNode{
    ElemType data;
    struct LNode *next;
}LNode, *LinkList;

//后插操作：在p结点之后插入元素e
bool InsertNextNode(LNode *p, ElemType e){     
    if(p==NULL)
        return false;
    LNode *s = (LNode *)malloc(sizeof(LNode));
    //某些情况下有可能分配失败，比如内存不足
    if(s==NULL)
        return false;
    s->data = e;          //用结点s保存数据元素e 
    s->next = p->next;
    p->next = s;          //将结点s连到p之后
    return true;
}                         //平均时间复杂度 = O(1)


//有了后插操作，那么在第i个位置上插入指定元素e的代码可以改成：
bool ListInsert(LinkList &L, int i, ElemType e){  
    if(i<1)
        return False;   
    LNode *p;       //指针p指向当前扫描到的结点 
    int j=0;        //当前p指向的是第几个结点
    p = L;          //L指向头结点，头结点是第0个结点（不存数据）

    //循环找到第i-1个结点
    while(p!=NULL && j<i-1){     //如果i>lengh, p最后会等于NULL
        p = p->next;             //p指向下一个结点
        j++;
    }

    return InsertNextNode(p, e)
}

```

* **指定结点的前插操作**

**Q:** 如何找到p结点的前驱节点？

**A:** 传入头指针L！就可以知道整个链表的信息了！

`InsertPriorNode(LinkList L, LNode *p, ElemType e)`：循环查找p的前驱q，再对q进行后插操作，时间复杂度为O(n);

**Q:** 那如果不传入头指针L呢？

不传入头指针L的代码实现 hedui

```plain
//前插操作：在p结点之前插入元素e
bool InsertPriorNode(LNode *p, ElenType e){
    if(p==NULL)
        return false;
    LNode *s = (LNode *)malloc(sizeof(LNode));
    if(s==NULL)           //内存分配失败
        return false;

    //重点来了！
    s->next = p->next;
    p->next = s;             //新结点s连到p之后
    s->data = p->data;       //将p中元素复制到s
    p->data = e;             //p中元素覆盖为e
    return true；
}        //时间复杂度为O(1)

```

王道书版本代码 hedui

```plain
bool InsertPriorNode(LNode *p, LNode *s){
    if(p==NULL || S==NULL)
        return false;
    s->next = p->next;
    p->next = s;                    //s连接到p
    ELemType temp = p->data;        //交换数据域部分
    p->data = s->data;
    s->data = temp;
    return true;
}
 
```

**2. 单链表的删除**

* **按位序删除(带头结点)**

`ListDelete(&L, i, &e)`: 删除操作，删除表L中第i个位置的元素，并用e返回删除元素的值;头结点视为“第0个”结点；

*思路：找到第i-1个结点，将其指针指向第i+1个结点，并释放第i个结点；*

代码实现 hedui

```plain
typedef struct LNode{
    ElemType data;
    struct LNode *next;
}LNode, *LinkList;

bool ListDelete(LinkList &L, int i, ElenType &e){
    if(i<1)
       return false;
    LNode *p;           //指针p指向当前扫描到的结点 
    int j=0;            //当前p指向的是第几个结点
    p = L;              //L指向头结点，头结点是第0个结点（不存数据）

    //循环找到第i-1个结点
    while(p!=NULL && j<i-1){     //如果i>lengh, p最后会等于NULL
        p = p->next;             //p指向下一个结点
        j++;
    }
    if(p==NULL)                 //i值不合法
        return false;
    if(p->next == NULL)         //第i-1个结点之后已无其他结点
        return false;
    LNode *q = p->next;         //令q指向被删除的结点
    e = q->data;                //用e返回被删除元素的值
    p->next = q->next;          //将*q结点从链中“断开”
    free(q)                     //释放结点的存储空间
    return true;
}
```

时间复杂度分析：

>最坏，平均时间复杂度：O(n)
>最好时间复杂度：删除第一个结点 O(1)

* **指定结点的删除**

删除结点p，需要修改其前驱结点的next指针(两个方法)；

"偷天换日"代码实现  hedui

```plain
bool DeleteNode(LNode *p){
    if(p==NULL)
        return false;
    LNode *q = p->next;            //令q指向*p的后继结点
    p->data = p->next->data;       //让p和后继结点交换数据域
    p->next = q->next;             //将*q结点从链中“断开”
    free(q);
    return true;
}                         //时间复杂度 = O(1)
```

**但是** 如果p是最后一个结点，那么`p->next = q->next` and `p->data = p->next->data` 就会出错，只能从表头开始依次寻找o的前驱，时间复杂度为O(n); 这就是单链表的**局限性**——无法逆向检索。
**3. 单链表的查找**

*探讨带头结点！*

* **按位查找**

`GetElem(L, i):` 按位查找操作，获取表L中第i个位置的元素的值;

代码实现 hedui

```plain
LNode * GetElem(LinkList L, int i){
    if(i<0)
         return NULL;
    LNode *p;                   //指针p指向当前扫描到的结点
    int j=0;                    //当前p指向的是第几个结点
    p = L;                      //L指向头结点,头结点是第0个结点(不存数据)
    while(p!=NULL && j<i){      //循环找到第i个结点
        p = p->next;
        j++;
    }
    return p;               //返回p指针指向的值
}
```

**平均时间复杂度** = O(n)
王道书版本代码 hedui 

```plain
LNode * GetElem(LinkList L, int i){
    int j=1;                      //从第一个结点开始
    LNode *p = L->next;           //p先指向第一个结点
    if(i==0)
         return L;
    if(i<1)  
         return NULL;
    while(p!=NULL && j<i){        //循环找到第i个结点
        p = p->next;
        j++;
    }
    return p;                 //返回p指针指向的值
}
```

那么上一节的按位插入和按位删除就可以封装了！

* **按值查找**

`LocateElem(L, e):`按值查找操作，在表L中查找具有给定关键字值的元素;

代码实现 hedui

```plain
//按值查找，找到数据域==e的结点
LNode * LocateElem(LinkList L, ElemType e){
    LNode *p = L->next;            //p指向第一个结点
    //从第一个结点开始查找数据域为e的结点
    while(p!=NULL && p->data != e){
        p = p->next;
    }
    return p;           //找到后返回该结点指针，否则返回NULL
}
```

**注意当ElemType是结构体时的操作**
**4. 求单链表的长度**

`Length(LinkList L)`

代码实现 (带头结点)

```plain
//求表的长度
int Length(LinkList L){
    int len=0;         //统计表长
    LNode *p = L;
    while(p->next != NULL){
        p = p->next;
        len++;
    }
    return len;
}
```

**平均时间复杂度=** O(n)
**5. 单链表的建立**

**思路：** 初始化一个单链表 -> 每取一个数据元素，插入到表尾/表头

**核心：** 初始化操作 and 指定结点的后插操作

*探讨带头结点！*

* 尾插法建立单链表

**解决方法**：设置一个表尾指针r，对r这个结点进行后插操作`InsertNextNode()`

最终代码实现 hedui

```plain
LinkList List_TailInsert(LinkList &L){       //正向建立单链表
    int x;                                   //设ElemType为整型int
    L = (LinkList)malloc(sizeof(LNode));     //建立头结点(初始化空表)
    LNode *s, *r = L;                        //r为表尾指针
    scanf("%d", &x);                         //输入要插入的结点的值
    while(x!=9999){                          //输入9999表结束
        s = (LNode *)malloc(sizeof(LNode));
        s->data = x;
        r->next = s;
        r = s;                             //r指针指向新的表尾结点
        scanf("%d", &x);   
    }
    r->next = NULL;                          //尾结点指针置空
    return L;
}
```

**平均时间复杂度**：O(n)

* 头插法建立单链表

对头结点进行后插操作`InsertNextNode()`

最终代码实现 hedui

```plain
LinkList List_HeadInsert(LinkList &L){       //逆向建立单链表
    LNode *s; 
    int x;
    L = (LinkList)malloc(sizeof(LNode));     //建立头结点
    L->next = NULL;                          //初始为空链表,这步不能少！
    scanf("%d", &x);                         //输入要插入的结点的值
    while(x!=9999){                          //输入9999表结束
        s =(LNode*)malloc(sizeof(LNode));    //创建新结点
        s->data = x;
        s->next = L->next;
        L->next = s;                         //将新结点插入表中，L为头指针
        scanf("%d", &x);   
    }
    return L;
}
```

**PS: 只要是初始化单链表，都先将头指针指向NULL —**`L->next = NULL`;

## **重要应用：链表的逆置**

* 算法思想：逆置链表初始为空，原表中结点从原链表中依次“删除”，再逐个插入逆置链表的表头（即“头插”到逆置链表中），使它成为逆置链表的“新”的第一个结点，如此循环，直至原链表为空；

```plain
LNode *Inverse(LNode *L)
{
	LNode *p, *q;
	p = L->next;     //p指针指向第一个结点
	L->next = NULL;  //头结点指向NULL

	while (p != NULL){
		q = p;
		p = p->next;
		q->next = L->next;  
		L->next = q;
	}
	return L;
```

### **2.3.3 双链表**

1. 双链表的初始化 (带头结点) hedui

```plain
typedef struct DNode{                //定义双链表结点类型
    ElemType data;                   //数据域
    struct DNode *prior, *next;      //前驱和后继指针
}DNode, *DLinklist;

//初始化双链表
bool InitDLinkList(Dlinklist &L){
    L = (DNode *)malloc(sizeof(DNode));      //分配一个头结点
    if(L==NULL)                              //内存不足，分配失败
        return false; 
    L->prior = NULL;       //头结点的prior指针永远指向NULL
    L->next = NULL;        //头结点之后暂时还没有结点
    return true;
}

void testDLinkList(){     
    DLinklist L;         //初始化双链表，定义指向头结点的指针L
    InitDLinkList(L);    //申请一片空间用于存放头结点，指针L指向这个头结点
    //...后续代码
}

//判断双链表是否为空
bool Empty(DLinklist L){
    if(L->next == NULL)        //判断头结点的next指针是否为空
        return true;
    else
        return false;
}
```

与单链表中一样，`DLinklist` 强调链表， `DNode *`强调结点，二者本质上等价;

1. 双链表的插入操作

* 后插操作

`InsertNextDNode(p, s)`: 在p结点后插入s结点

代码实现:

```plain
bool InsertNextDNode(DNode *p, DNode *s){     //在p结点后插入s结点
    if(p==NULL || s==NULL) //非法参数
        return false;
    s->next = p->next;
    if (p->next != NULL)   //p不是最后一个结点=p有后继结点  
        p->next->prior = s;
    s->prior = p;
    p->next = s;    
    return true;
}
```

* 按位序插入操作

思路：从头结点开始，找到某个位序的前驱结点，对该前驱结点执行后插操作；

* 前插操作

思路：找到给定结点的前驱结点，再对该前驱结点执行后插操作；

1. 双链表的删除操作

删除p的后继结点q

```plain
p->next = q->next;
q->next->prior = p;
free(q);
```

如果要删除的结点q是最后一个结点，会出现错误，故增加条件判断以提高代码健壮性
代码实现 hedui

```plain
//删除p结点的后继结点
bool DeletNextDNode(DNode *p){
    if(p==NULL) 
        return false;
    DNode *q = p->next;            //找到p的后继结点q
    if(q==NULL)
        return false;     //p没有后继结点;
    p->next=q->next;
    if(q->next != NULL)           //q结点不是最后一个结点
        q->next->prior=p;
    free(q);
    return true;
}

//销毁一个双链表
void DestoryList(DLinklist &L){
    //循环释放各个数据结点
    while(L->next != NULL)
        DeletNextDNode(L);    //删除头结点的后继结点
    free(L);       //释放头结点
    L=NULL;        //头指针指向NULL
}
```

1. 双链表的遍历操作**后向遍历**

```plain
while(p!=NULL){
    //对结点p做相应处理，如打印
    p = p->next;
}
```

**前向遍历**

```plain
while(p!=NULL){
    //对结点p做相应处理，如打印
    p = p->prior;

```

如果我们不想处理头结点，那就跳过头结点！

```plain
while(p->prior!=NULL){
    //对结点p做相应处理
    p = p->prior;
}
```

**注意**：双链表不可随机存取，按位查找和按值查找操作都只能用遍历的方式实现，时间复杂度为**O(n)**

### **2.3.4 循环链表**

**1. 循环单链表**

**最后一个结点的指针不是NULL,而是指向头结点hedui**

```plain
typedef struct LNode{         //定义单链表类型   
    ElemType data;             //每个节点存放一个数据元素  
    struct LNode *next;        //指针指向下一个节点
}LNode, *Linklist;

//初始化一个循环单链表
bool InitList(LinkList &L){
    L = (LNode *)malloc(sizeof(LNode));     //分配一个头结点
    if(L==NULL)               //内存不足，分配失败
        return false;
    L->next = L;              //头结点next指针指向头结点
    return true;
}

//判断循环单链表是否为空
bool Empty(LinkList L){
    if(L->next == L)
        return true;    //为空
    else
        return false;
}

//判断结点p是否为循环单链表的表尾结点
bool isTail(LinkList L, LNode *p){
    if(p->next == L)
        return true;
    else
        return false;
}
```

## **单链表 & 循环单链表**

* **单链表**：从一个结点出发只能找到该结点后续的各个结点；对链表的操作大多都在头部或者尾部；设立头指针，从头结点找到尾部的时间复杂度=O(n)，即对表尾进行操作需要O(n)的时间复杂度;

* **循环单链表**：从一个结点出发，可以找到其他任何一个结点；设立尾指针，从尾部找到头部的时间复杂度为O(1)，即对表头和表尾进行操作都只需要O(1)的时间复杂度;

>可以让L指向表尾元素(插入，删除时可能需要修改L)
>**2. 循环双链表**

**表头结点的**`prior`指向表尾结点，表尾结点的`next`指向头结点

循环双链表的初始化 hedui

```plain
typedef struct DNode{          
    ElemType data;               
    struct DNode *prior, *next;  
}DNode, *DLinklist;

//初始化空的循环双链表
bool InitDLinkList(DLinklist &L){
    L = (DNode *) malloc(sizeof(DNode));    //分配一个头结点
    if(L==NULL)            //内存不足，分配失败
        return false;  
    L->prior = L;          //头结点的prior指向头结点
    L->next = L;           //头结点的next指向头结点
}

void testDLinkList(){
    //初始化循环单链表
    DLinklist L;
    InitDLinkList(L);
    //...后续代码
}

//判断循环双链表是否为空
bool Empty(DLinklist L){
    if(L->next == L)
        return true;
    else
        return false;
}

//判断结点p是否为循环双链表的表尾结点
bool isTail(DLinklist L, DNode *p){
    if(p->next == L)
        return true;
    else
        return false;
}
```

## **双链表 & 循环双链表**

* **插入操作**

对于循环双链表，操作 `p->next->prior = s` 不会出问题辣！因为就算p是最后一个结点，也不会出现空指针现象了(这个问题在双链表里会出现！)

```plain
bool InsertNextDNode(DNode *p, DNode *s){ 
    s->next = p->next;          //将结点*s插入到结点*p之后
    p->next->prior = s;
    s->prior = p;
    p->next = s;
}
```

* **删除操作**

和插入操作一样！`q->next->prior` 对于循环双链表不会出错了

```plain
//删除p的后继结点q
p->next = q->next;
q->next->prior = p;
free(q);
```

### **2.3.5 静态链表**

1. 何为静态链表

* 单链表: 各个结点散落在内存中的各个角落，每个结点有指向下一个节点的指针(下一个结点在内存中的地址);

* 静态链表——用数组的方式实现的链表: 分配一整片连续的内存空间，各个结点集中安置，包括了——数据元素and下一个结点的数组下标(游标)

  * 其中数组下标为0的结点充当"头结点"

  * 游标为-1表示已经到达表尾

  * 若每个数据元素为4B，每个游标为4B，则每个结点共8B；假设起始地址为`addr`，则数据下标为2的存放地址为：`addr`+8*2

  * **注意**： 数组下标——物理顺序，位序——逻辑顺序；

  * 优点：增、删操作不需要大量移动元素；

  * 缺点：不能随机存取，只能从头结点开始依次往后查找，**容量固定不变！**


1. 代码定义一个静态链表 hedui

```plain
#define MaxSize 10        //静态链表的最大长度
struct Node{              //静态链表结构类型的定义
    ElemType data;        //存储数据元素
    int next;             //下一个元素的数组下标
};

//用数组定义多个连续存放的结点
void testSLinkList(){
    struct Node a[MaxSize];  //每一个数组元素的类型都是struct Node
    //...后续代码
}
```

也可以这样：

```plain
#define MaxSize 10        //静态链表的最大长度
typedef struct{           //静态链表结构类型的定义
    ELemType data;        //存储数据元素
    int next;             //下一个元素的数组下标
}SLinkList[MaxSize];

void testSLinkList(){
    SLinkList a;
}
```

上面这个代码等同于

```plain
#define MaxSize 10        //静态链表的最大长度
struct Node{              //静态链表结构类型的定义
    ElemType data;        //存储数据元素
    int next;             //下一个元素的数组下标
};

//重命名struct Node，用SLinkList定义一个长度为MaxSize的Node型数组;
typedef struct Node SLinkList[MaxSize]; 
```

PS: `SLinkList a` 强调a是静态链表；`struct Node a` 强调a是一个Node型数组；

1. 静态链表基本操作的实现

* 初始化静态链表：把`a[0]`的`next`设为-1

* 查找某个位序（不是数组下标，位序是各个结点在逻辑上的顺序）的结点：从头结点出发挨个往后遍历结点，时间复杂度O=(n)

* 在位序为i上插入结点：① 找到一个空的结点，存入数据元素；② 从头结点出发找到位序为i-1的结点；③修改新结点的next；④ 修改i-1号结点的next；

>Q：如何判断结点为空？
>A：在初始化时，将空闲结点的next设置为某个特殊值，eg：-2；

* 删除某个结点：① 从头结点出发找到前驱结点；② 修改前驱节点的游标；③ 被删除节点next设为-2；

### **2.3.6 顺序表和链表的比较**

**1. 逻辑结构**

* 顺序表和链表都属于线性表，都是线性结构

**2. 存储结构**

* 顺序表：顺序存储 

  * 优点：支持随机存取，存储密度高

  * 缺点：大片连续空间分配不方便，改变容量不方便

* 链表：链式存储 

  * 优点：离散的小空间分配方便，改变容量方便

  * 缺点：不可随机存取，存储密度低


**3. 基本操作 - 创**

* 顺序表：需要预分配大片连续空间。若分配空间过小，则之后不方便拓展容量；若分配空间过大，则浪费内存资源；

  * 静态分配：静态数组，容量不可改变

  * 动态分配：动态数组，容量可以改变，但是需要移动大量元素，时间代价高（`malloc()`,`free()`）

* 链表：只需要分配一个头结点或者只声明一个头指针，之后方便拓展

**4. 基本操作 - 销毁**

* 顺序表：修改 `Length` = 0

静态分配：静态数组——系统自动回收空间

```plain
typedef struct{
    ElemType *data;
    int MaxSize;
    int length;
}SeqList;
```


动态分配：动态数组——需要手动free

```plain
//创
L.data = (ELemType *)malloc(sizeof(ElemType) *InitSize)
//销
free(L.data);

//！malloc() 和 free() 必须成对出现
```


* 链表：依次删除各个结点 `free()`

**5. 基本操作 - 增/删**

* 顺序表：插入/删除元素要将后续元素后移/前移；时间复杂度=O(n)，时间开销主要来自于移动元素；

* 链表：插入/删除元素只需要修改指针；时间复杂度=O(n)，时间开销主要来自查找目标元素

**6. 基本操作 - 查**

* 顺序表

  * 按位查找：O(1)

  * 按值查找：O(n)，若表内元素有序，可在O(log2n)时间内找到

* 链表：

  * 按位查找：O(n)

  * 按值查找：O(n)


**7. 开放式问题答题思路**

**Q:** 请描述顺序表和链表的balabalabala…实现线性表时，用顺序表还是链表好？

**A:** 顺序表和链表的**存储结构**都是线性结构，都属于线性表；但是二者的**存储结构**不同，顺序表采用顺序存储…(特点，优缺点)；链表采用链式存储…(特点，优缺点)；由于采用不同的存储方式实现，因此**基本操作**的实现效率也不同；当初始化时…；当插入一个数据元素时…；当删除一个数据元素时…；当查找一个数据元素时…；
