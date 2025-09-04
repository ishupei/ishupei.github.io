
# 栈与队列

## **3.1 栈 (stack)**

### **3.1.1 栈的基本概念**

1. 栈的定义

* 栈是特殊的线性表：只允许在一端进行插入或删除操作， 其逻辑结构与普通线性表相同；

* 栈顶：允许进行插入和删除的一端 （最上面的为**栈顶元素**）；

* 栈底：不允许进行插入和删除的一端 （最下面的为**栈底元素**）；

* 空栈：不含任何元素的空表；

* 特点：后进先出（后进栈的元素先出栈）；

* 缺点：栈的大小不可变，解决方法——共享栈；

1. 栈的基本操作 （运算）

### **"创&销"**

* `InitStack(&S)` **初始化栈**：构造一个空栈S，分配内存空间；

* `DestroyStack(&S)` **销毁栈**：销毁并释放栈S所占用的内存空间；

### **"增&删"**

* `Push(&S, x)` **进栈**：若栈S未满，则将x加入使其成为新栈顶；

* `Pop(&S, &x)` **出栈**：若栈S非空，则弹出（删除）栈顶元素，并用x返回；

### **"查&其他"**

* `GetTop(S, &x)` **读取栈顶元素**：若栈S非空，则用x返回栈顶元素；（栈的使用场景大多只访问栈顶元素）；

* `StackEmpty(S)` **判空**： 断一个栈S是否为空，若S为空，则返回`true`,否则返回`false`；

1. 栈的常见题型

* 给个进栈顺序，判断有哪些合法的出栈顺序；

```plain
例：进栈顺序为：a -> b -> c -> d -> e
    
    合法的出栈顺序：e d c b a / b e d c a (出栈和进栈交替进行) / ... 
    
```

### **3.1.2 栈的顺序存储**

1. 顺序栈的定义 hedui

```plain
#define MaxSize 10         //定义栈中元素的最大个数
typedef struct{
    ElemType data[MaxSize];       //静态数组存放栈中元素
    int top;                      //栈顶元素
}SqStack;

void testStack(){
    SqStack S;       //声明一个顺序栈(分配空间)
                  //连续的存储空间大小为 MaxSize*sizeof(ElemType)
}

```

2. 顺序栈的基本操作  hedui

```plain
#define MaxSize 10         //定义栈中元素的最大个数
typedef struct{
    ElemType data[MaxSize];       //静态数组存放栈中元素
    int top;                      //栈顶指针
}SqStack;

//初始化栈
void InitStack(SqStack &S){
    S.top = -1;                   //初始化栈顶指针
}

void testStack(){
    SqStack S;       //声明一个顺序栈(分配空间)
    InitStack(S);
    
//判断栈空
bool StackEmpty(SqStack S){
    if(S.top == -1)      //栈空  如果初始化S.top指向0，则S.top=0判空
        return true;
    else                 //栈不空
        return false;
}

//新元素进栈
bool Push(SqStack &S, ElemType x){
    if(S.top == MaxSize-1)        //栈满
        return false;
    S.top = S.top + 1;    //指针先加1
    S.data[S.top] = x;   //新元素入栈 这两行等价于 S.data[++S.top]=x;
    return true;
}

//出栈操作
bool Pop(SqStack &S, ElemType &x){
    if(S.top == -1)          //栈空
        return false;
    x = S.data[S.top];       //栈顶元素先出栈
    S.top = S.top - 1;     //栈顶指针减1 这两行等价x = S.data[S.top--];
    return true;
}

//读栈顶元素
bool GetTop(SqStack S, ElemType &x){
    if(S.top == -1)
        return false;
    x = S.data[S.top];      //x记录栈顶元素
    return true; 
}
```

**PS:** 也可以初始化时定义 `S.top = 0` ：top指针指向下一个可以插入元素的位置(栈顶元素的后一个位置)；

* 判空：`if(S.top == 0)`

* 进栈使用：`S.data[S.top++] = x;`

* 出栈使用：`x = S.data[--S.top];`

* 判断栈满：`s.top == MaxSize`

1. 共享栈

两个栈共享同一片空间 hedui

```plain
#define MaxSize 10         //定义栈中元素的最大个数
typedef struct{
    ElemType data[MaxSize];       //静态数组存放栈中元素
    int top0;                     //0号栈栈顶指针
    int top1;                     //1号栈栈顶指针
}ShStack;

//初始化栈
void InitStack(ShStack &S){
    S.top0 = -1;        //初始化栈顶指针
    S.top1 = MaxSize;   
}

栈满条件：top0 + 1 == top1
```

### **3.1.3 栈的链式存储结构**

1. 用链式存储方式实现的栈

* 进栈和出栈都只能在栈顶一端进行(链头作为栈顶)

* 链表的头部作为栈顶，意味着： 

  * 在实现数据"入栈"操作时，需要将数据从链表的头部插入；

  * 在实现数据"出栈"操作时，需要删除链表头部的首元节点；


**因此，链栈实际上就是一个只能采用头插法插入或删除数据的链表;** **hedui**

```plain
typedef struct Linknode{
    ElemType data;              //数据域
    struct Linknode *next;      //指针域
}*LiStack;                      //栈类型的定义
```

1. 链栈的基本操作 (类比单链表的操作 / **带头结点&不带头结点**)

[参考：链栈基本操作(带头结点及不带头结点)](https://blog.csdn.net/Xulidanga/article/details/108895669)

* 初始化

* 进栈

* 出栈

* 获取栈顶元素

* 判空、判满

**带有头结点的链栈基本操作**

```plain
#include<stdio.h>
struct Linknode{
    int data;             //数据域
    Linknode *next;       //指针域
}Linknode,*LiStack;   

typedef Linknode *Node;   //结点结构体指针变量
typedef Node List;        //结点结构体头指针变量

//1. 初始化
void InitStack(LiStack &L){   //L为头指针
    L = new Linknode; 
    L->next = NULL;
}

//2.判栈空
bool isEmpty(LiStack &L){
    if(L->next == NULL){
        return true;
    }
    else
        return false;
}

//3. 进栈(：链栈基本上不会出现栈满的情况)
void pushStack(LiStack &L, int x){
    Linknode s;          //创建存储新元素的结点
    s = new Linknode;
    s->data = x;

    //头插法
    s->next = L->next;
    L->next = s;
}

//4.出栈
bool popStack(LiStack &L, int &x){
    Linknode s;
    if(L->next == NULL) //栈空不能出栈
        return false;
    s = L->next;
    x = s->data;
    L->next = L->next->next;
    delete(s);
    return true;
}
```

**不带头结点的链栈基本操作**

```plain
#include<stdio.h>
struct Linknode{
    int data;             //数据域
    Linknode *next;       //指针域
}Linknode,*LiStack;   

typedef Linknode *Node;   //结点结构体指针变量
typedef Node List;        //结点结构体头指针变量

//1.初始化 
void initStack(LiStack &L){
    L=NULL;
}

//2.判栈空
bool isEmpty(LiStack &L){
    if(L == NULL)
        return true;
    else
        teturn false;
}

//3.进栈
void pushStack(LiStack &L, int x){
    Linknode s;          //创建存储新元素的结点
    s = new Linknode;
    s->next = L;
    L = s;
}

//4.出栈
bool popStack(LiStack &L, int &x){
    Linknode s; 
    if(L = NULL)     //栈空不出栈
        return false;
    s = L;
    x = s->data;
    L = L->next;
    delete(s);  
    return true;
}
```

## **3.2 队列(Queue)**

### **3.2.1 队列的基本概念**

1. 队列的定义

* 队列是操作受限的**线性表**，只允许在一端进行插入 (入队)，另一端进行删除 (出队)

* 操作特性：**先进先出 FIFO**

* 队头：允许删除的一端

* 队尾：允许插入的一端

* 空队列：不含任何元素的空表

1. 队列的基本操作

### **"创&销"**

* `InitQueue(&Q)`: 初始化队列，构造一个空列表Q

* `DestroyQueue(&Q)`: 销毁队列，并释放队列Q所占用的内存空间

### **"增&删"**

* `EnQueue(&Q, x)`: 入队，若队列Q未满，将x加入，使之成为新的队尾

* `DeQueue(&Q, &x)`: 出队，若队列Q非空，删除队头元素，并用x返回

### **"查&其他"**

* `GetHead(Q,&x)`: 读队头元素，若队列Q非空，则将队头元素赋值给x

* `QueueEmpty(Q)`: 判队列空，若队列Q为空，则返回true

### **3.2.2 队列的顺序存储结构**

* 队头指针：指向队头元素；

* 队尾指针：指向队尾元素的后一个位置（下一个应该插入的位置）

1. 队列的顺序存储结构的基本操作

```plain
//队列的顺序存储类型
#define MaxSize 10;     //定义队列中元素的最大个数
typedef struct{       //连续的存储空间，大小为——MaxSize*sizeof(ElemType)
    ElemType data[MaxSize];   //用静态数组存放队列元素       
    int front, rear;          //队头指针和队尾指针
}SqQueue;

//初始化队列
void InitQueue(SqQueue &Q){
    //初始化时，队头、队尾指针指向0
    Q.rear = Q.front = 0;
}

void testQueue(){
    SqQueue Q;                //声明一个队列(顺序存储)
    InitQueue(Q);
    //...后续操作
}

// 判断队列是否为空
bool QueueEmpty(SqQueue Q){
    if(Q.rear == Q.front)    //判空条件
        return true;
    else 
        return false;
}
```

2. 循环队列

**Q:** 能否用 `Q.rear == MaxSize` 作为队列满的条件？

**A:** 不能！会有假溢出, 所以需要用 **模运算** 将存储空间 {0,1,2,…,MaxSize} 在逻辑上变成“环状”——**循环队列！**

>a%b == a除以b的余数
>初始：Q.front = Q.rear = 0;
>队首指针进1：Q.front = (Q.front + 1) % MaxSize
>队尾指针进1：Q.rear = (Q.rear + 1) % MaxSize —— 队尾指针后移，当移到最后一个后，下次移动会到第一个位置
>队列长度：(Q.rear + MaxSize - Q.front) % MaxSize

### **循环队列如何判满**

**Q:** 能否用`Q.rear == Q.front` 作为队列满的条件？

**A:** 不能！这已经作为队列空的判断条件了；

### **方案一: 牺牲一个单元来区分队空和队满**

队尾指针的再下一个位置就是队头，即 `(Q.rear+1)%MaxSize == Q.front`

* 循环队列——入队：只能从队尾插入（判满使用方案一）

```plain
bool EnQueue(SqQueue &Q, ElemType x){
    if((Q.rear+1)%MaxSize == Q.front)        //队满
        return false;
    Q.data[Q.rear] = x;                      //将x插入队尾
    Q.rear = (Q.rear + 1) % MaxSize;         //队尾指针加1取模
    return true;
}
```

* 循环队列——出队：只能让队头元素出队

```plain
//出队，删除一个队头元素，用x返回
bool DeQueue(SqQueue &Q, ElemType &x){
    if(Q.rear == Q.front)              //队空报错
        return false;  
    x = Q.data[Q.front];
    Q.front = (Q.front + 1) % MaxSize; //队头指针后移动
    return true;
}

//循环队列——获得队头元素的值，用x返回
bool GetHead(SqQueue Q, ElemType &x){
    if(Q.rear == Q.front)             
        return false;       //队空报错
    x = Q.data[Q.front];
    return true;
}
```

### **方案二: 不牺牲存储空间，设置size**

定义一个变量 `size`用于记录队列此时记录了几个数据元素，初始化 `size = 0`，进队成功 `size++`，出队成功`size--`，根据size的值判断队满与队空

队满条件：`size == MaxSize`

队空条件：`size == 0`

```plain
# define MaxSize 10;     
typedef struct{
    ElemType data[MaxSize];   
    int front, rear;        
    int size;               //队列当前长度
}SqQueue;

//初始化队列
void InitQueue(SqQueue &Q){
    Q.rear = Q.front = 0;
    size = 0;
}

```

### **方案三: 不牺牲存储空间，设置tag**

定义一个变量 `tag`，`tag = 0` --最近进行的是删除操作；`tag = 1` --最近进行的是插入操作；

* 每次删除操作成功时，都令`tag = 0`；只有删除操作，才可能导致队空；

* 每次插入操作成功时，都令`tag = 1`；只有插入操作，才可能导致队满；

队满条件：`Q.front == Q.rear && tag == 1`

队空条件：`Q.front == Q.rear && tag == 0`

```plain
# define MaxSize 10;     
typedef struct{
    ElemType data[MaxSize];   
    int front, rear;        
    int tag;               //最近进行的是删除or插入
}SqQueue;
```

### **其他出题方法——队尾指针指向队尾元素**

* 判空

```plain
(Q.rear + 1) % MaxSize == Q.front
```

* 判满

  * 方案一：牺牲一个存储单元

  * 方案二：增加辅助变量

* 入队操作

```plain
Q.rear = (Q.rear + 1) % MaxSize; //后移一位
Q.data[Q.rear] = x; 
```

### **3.2.3 队列的链式存储结构**

1. 队列的链式存储

```plain
typedef struct LinkNode{      //链式队列结点
    ElemType data;
    struct LinkNode *next;
}LinkNode;

typedef struct{               //链式队列
    LinkNode *front, *rear;   //队列的队头和队尾指针
}LinkQueue;
```

2. 链式队列的基本操作——**带头结点**

* 初始化 & 判空

```plain
//初始化队列（带头结点）
void InitQueue(LinkQueue &Q){
    //初始化时，front、rear都指向头结点
    Q.front = Q.rear = (LinkNode*)malloc(sizeof(LinkNode));
    Q.front -> next = NULL;
}

//判断队列是否为空
bool IsEmpty(LinkQueue Q){
    if(Q.front == Q.rear)     //也可用 Q.front -> next == NULL
        return true;
    else
        return false;
}

void testLinkQueue(){
    LinkQueue Q;        //声明一个队列
    InitQueue (Q)；      //初始化队列
  //...后续操作  
}
```

* 入队操作

```plain
//新元素入队 (表尾进行)
void EnQueue(LinkQueue &Q, ElemType x){
    LinkNode *s = (LinkNode *)malloc(sizeof(LinkNode)); //申请一个新结点
    s->data = x;
    s->next = NULL;     //s作为最后一个结点，指针域指向NULL
    Q.rear->next = s;   //新结点插入到当前的rear之后
    Q.rear = s;         //表尾指针指向新的表尾
}

```

* 出队操作

```plain
//队头元素出队
bool DeQueue(LinkQueue &Q, ElemType &x){
    if(Q.front == Q.rear)
        return false;                    //空队
    LinkNode *p = Q.front->next;      //p指针指向即将删除的结点
    x = p->data;
    Q.front->next = p->next;             //修改头结点的next指针
    if(Q.rear == p)                      //此次是最后一个结点出队
        Q.rear = Q.front;                //修改rear指针
    free(p);                             //释放结点空间
    return true;
}

```

* 队列满的条件

顺序存储：预分配存储空间

链式存储：一般不会队满，除非内存不足

* 计算链队长度 (遍历链队)

设置一个`int length` 记录链式队列长度

1. 链式队列的基本操作——**不带头结点**

* 初始化 & 判空

```plain
//初始化队列（不带头结点）
void InitQueue(LinkQueue &Q){
      //初始化时，front、rear都指向NULL
    Q.front = NULL;
    Q.rear = NULL;
}

//判断队列是否为空
bool IsEmpty(LinkQueue Q){
    if(Q.front == NULL)         //也可以用 Q.rear == NULL
        return true;
    else
        return false;
}
```

* 入队操作

```plain
//新元素入队 不带头结点 (表尾进行)
void EnQueue(LinkQueue &Q, ElemType x){
    LinkNode *s = (LinkNode *)malloc(sizeof(LinkNode)); //申请一个新结点
    s->data = x;
    s->next = NULL;
    //不带头结点的队列，第一个元素入队时需要特别处理
    if(Q.front = NULL){            //在空队列中插入第一个元素
        Q.front = s;               //修改队头队尾指针
        Q.rear = s;
    }else{
        Q.rear->next = s;           //新结点插入到rear结点之后
        Q.rear = s;                 //修改rear指针指向新的表尾结点
    }
}
```

出队（不带头结点）

```plain
//队头元素出队（不带头结点)
bool DeQueue(LinkQueue &Q,ElemType &x){
    if(Q.front==NULL)
        return false;          //空队
    LinkNode *p=Q.front;      //p指向此次出队的结点
    x=p->data;                //用变量x返回队头元素
    Q.front=p->next;          //修改front指针
    if(Q.rear==p){            //此次是最后一个结点出
        Q.front = NULL;       //front指向NULL
        Q.rear =NULL;         //rear指向NULL
     }
     free(p);                 //释放结点空间
     return true;
}
```

### **3.2.4 双端队列**

1. 定义

* 双端队列允许从**两端插入**、**两端删除**的线性表；

* 如果只使用其中一端的插入、删除操作，则等同于栈；

* 输入受限的双端队列：允许**一端插入**，**两端删除**的线性表；

* 输出受限的双端队列：允许**两端插入**，**一端删除**的线性表；

1. **考点：** 判断输出序列的合法化（视频07）

**例**: 数据元素输入序列为 `1,2,3,4`，判断 4!=24 个输出序列的合法性

*PS: 栈中合法的序列，双端队列中一定也合法*



| **栈**             | **输入受限的双端队列**   | **输出受限的双端队列**   |
| :----------------- | :----------------------- | :----------------------- |
| 14个合法(卡特兰数) | 验证在栈中不合法的序列   | 验证在栈中不合法的序列   |
|                    | 只有 4213 和 4231 不合法 | 只有 4132 和 4231 不合法 |

## **3.3 栈的应用**

### **3.3.1 栈在括号匹配中的应用**

用栈实现括号匹配

* `((()))` 最后出现的左括号最先被匹配 (栈的特性—LIFO);

* 遇到左括号就入栈;

* 遇到右括号，就“消耗”一个左括号 (出栈);

匹配失败情况：

* 扫描到右括号且栈空，则该右括号单身;

* 扫描完所有括号后，栈非空，则该左括号单身;

* 左右括号不匹配;

```plain
#define MaxSize 10             //定义栈中元素的最大个数
typedef struct{
    char data[MaxSize];        //静态数组存放栈中元素
    int top;                   //栈顶指针
} SqStack;

//初始化栈
void InitStack(SqStack &S)          //考试中直接使用基本操作，简要说明接口

//判断栈是否为空
bool StackEmpty(SqStack &S)

//新元素入栈
bool Push(SqStack &S, char x)

//栈顶元素出栈，用x返回
bool Pop(SqStack &S, char &x)

bool bracketCheck(char str[], int length){
    SqStack S;      //声明
    InitStack(S);   //初始化栈
    for(int i=0; i<length; i++){
        if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
            Push(S, str[i]);       //扫描到左括号，入栈
        }else{
            if(StackEmpty(S))      //扫描到右括号，且当前栈空
                return false;      //匹配失败
            
            char topElem;          //存储栈顶元素
            Pop(S, topElem);       //栈顶元素出栈
            if(str[i] == ')' && topElem != '(' )
                return false;
            if(str[i] == ']' && topElem != '[' )
                return false;
            if(str[i] == '}' && topElem != '{' )
                return false;       
        }
    }
    return StackEmpty(S);        //检查完全部括号，栈空说明匹配成功
}
```

### **3.3.2 栈在表达式求值中的应用**

### **1. 中缀表达式 (需要界限符)**

运算符在两个操作数中间:

```plain
① a + b
② a + b - c
③ a + b - c*d
④ ((15 ÷ (7-(1+1)))×3)-(2+(1+1))
⑤ A + B × (C - D) - E ÷ F
```

### **2. 后缀表达式 (逆波兰表达式)**

运算符在两个操作数后面:

```plain
① a b +
② ab+ c - / a bc- +
③ ab+ cd* -
④ 15 7 1 1 + - ÷ 3 × 2 1 1 + + -
⑤ A B C D - × + E F ÷ - (机算结果)
  A B C D - × E F ÷ - + (不选择)
```

* **中缀表达式转后缀表达式-手算**

**步骤1：** 确定中缀表达式中各个运算符的运算顺序

**步骤2：** 选择下一个运算符，按照`[左操作数 右操作数 运算符]`的方式组合成一个新的操作数

**步骤3：** 如果还有运算符没被处理，继续步骤2

**“左优先”原则:** 只要左边的运算符能先计算，就优先算左边的 (保证运算顺序唯一)；

```plain
中缀：A + B - C * D / E + F
       ①   ④   ②   ③   ⑤     
后缀：A B + C D * E / - F +
```

### **重点：中缀表达式转后缀表达式-机算**

初始化一个栈，用于保存暂时还不能确定运算顺序的运算符。**从左到右**处理各个元素，直到末尾。可能遇到三种情况:

* 遇到**操作数**: 直接加入后缀表达式。

* 遇到**界限符**: 遇到 `'('` 直接入栈; 遇到 `')'` 则依次弹出栈内运算符并加入后缀表达式，直到弹出 `'('` 为止。注意: `'('` 不加入后缀表达式。

* 遇到**运算符**: 依次弹出栈中优先级**高于或等于**当前运算符的所有运算符，并加入后缀表达式，若碰到 `'('` 或栈空则停止。之后再把当前运算符入栈。

按上述方法处理完所有字符后，将栈中剩余运算符依次弹出，并加入后缀表达式。

* **后缀表达式的计算—手算:**

从左往右扫描，每遇到一个运算符，就让运算符前面最近的两个操作数执行对应的运算，合体为一个操作数；

**注意：** 两个操作数的左右顺序

### **重点：后缀表达式的计算—机算**

用栈实现后缀表达式的计算（栈用来存放当前暂时不能确定运算次序的操作数）

**步骤1:** 从左往后扫描下一个元素，直到处理完所有元素;

**步骤2:** 若扫描到操作数，则压入栈，并回到`步骤1`;否则执行`步骤3`;

**步骤3:** 若扫描到运算符，则弹出两个栈顶元素，执行相应的运算，运算结果压回栈顶，回到`步骤1`;

**注意:** 先出栈的是“右操作数”

### **3.前缀表达式 (波兰表达式)**

```plain
运算符在两个操作数前面:
① + a b
② - +ab  c
③ - +ab *cd
```

* **中缀表达式转前缀表达式—手算**

**步骤1：** 确定中缀表达式中各个运算符的运算顺序

**步骤2：** 选择下一个运算符，按照`[运算符 左操作数 右操作数]`的方式组合成一个新的操作数

**步骤3：** 如果还有运算符没被处理，就继续执行`步骤2`

**“右优先”原则:** 只要右边的运算符能先计算，就优先算**右边**的;

```plain
中缀：A + B * (C - D) - E / F
       ⑤   ③    ②    ④   ①
前缀：+ A - * B - C D / E F
```

* **前缀表达式的计算—机算**

用栈实现前缀表达式的计算

**步骤1:** 从右往左扫描下一个元素，直到处理完所有元素；

**步骤2:** 若扫描到操作数则压入栈，并回到`步骤1`，否则执行`步骤3`

**步骤3:** 若扫描到运算符，则弹出两个栈顶元素，执行相应运算，运算结果压回栈顶，回到`步骤1`；

**注意:** 先出栈的是“左操作数”

### **4.中缀表达式的计算(用栈实现)**

两个算法的结合： [中缀转后缀](https://blog.csdn.net/iosapp#%E9%87%8D%E7%82%B9%E4%B8%AD%E7%BC%80%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%BD%AC%E5%90%8E%E7%BC%80%E8%A1%A8%E8%BE%BE%E5%BC%8F-%E6%9C%BA%E7%AE%97) + [后缀表达式的求值](https://blog.csdn.net/iosapp#%E9%87%8D%E7%82%B9%E5%90%8E%E7%BC%80%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%AE%97)

* 初始化两个栈，**操作数栈** 和**运算符栈**

* 若扫描到操作数，压人操作数栈

* 若扫描到运算符或界限符，则按照“中缀转后缀”相同的逻辑压入运算符栈 (期间也会弹出运算符，每当弹出一个运算符时，就需要再弹出两个操作数栈的栈项元素并执行相应运算，运算结果再压回操作数栈)

### **3.3.3 栈在递归中的应用**

函数调用的特点：最后被调用的函数最先执行结束(LIFO)

函数调用时，需要用一个栈存储：

* 调用返回地址

* 实参

* 局部变量

递归调用时，函数调用栈称为 “递归工作栈”:

* 每进入一层递归，就将递归调用所需信息压入栈顶；

* 每退出一层递归，就从栈顶弹出相应信息；

**缺点**：太多层递归可能回导致栈溢出；

适合用“递归”算法解决：可以把原始问题转换为属性相同，但规模较小的问题；

## **3.3 队列的应用**

### **3.3.1 树的层次遍历**

*（详见“树”章节）*

### **3.3.2 图的广度优先遍历**

*（详见“图”章节）*

### **3.3.3 队列在操作系统中的应用**

多个进程争抢着使用优先的系统资源时，FCFS（先来先服务）是一种常用策略

Eg: CPU资源分配、打印数据缓冲区

## **3.4 特殊矩阵的压缩存储**

### **3.4.1 数组的存储结构**

1. 一维数组

```plain
Elemtype a[10];
1
```

各数组元素大小相同，物理上连续存放；
起始地址：`LOC`

数组下标：默认从0开始！

数组元素 `a[i]` 的存放地址 = `LOC + i × sizeof(ElemType)`

1. 二维数组

```plain
Elemtype b[2][4]; //2行4列的二维数组
1
```

行优先/列优先存储优点：实现随机存储
起始地址：`LOC`

M行N列的二维数组 `b[M][N]` 中，`b[i][j]`的存储地址：

* 行优先存储: `LOC + (i×N + j) × sizeof(ElemType)`

* 列优先存储：`LOC + (j×M + i) × sizeof(ElemType)`

### **3.4.2 普通矩阵的存储**

二维数组存储

* 描述矩阵元素时，行、列号通常从`1`开始；

* 描述数组时，通常下标从 `0` 开始；

### **3.4.3 特殊矩阵的存储**

*特殊矩阵——压缩存储空间*

1. 对称矩阵(方阵)

2. 三角矩阵(方阵)

3. 三对角矩阵(方阵)

4. 稀疏矩阵

* 顺序存储——三元组

* 链式存储——十字链表法