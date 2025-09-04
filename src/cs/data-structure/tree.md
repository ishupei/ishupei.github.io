

# 树

## **5.1 树的基本概念**

### **5.1.1 树的定义**

* 空树

* 根结点、分支结点、叶子结点

* 非空树的特性

* 子树

### **5.1.2 基本术语**

1. 结点之间的关系描述 

   1. 祖先、子孙、双亲、兄弟…结点

   2. **路径、路径长度**

2. 结点、树的属性描述 

   1. 结点的层次（深度）——从上往下

   2. 结点的高度——从下往上

   3. 树的高度——总共多少层

   4. **结点的度**——有几个孩子

   5. **树的度**——各结点的度的最大值

3. 有序树、无序树

4. 森林

### **5.1.3 树的性质**

1. 结点数 = 总度数 + 1

2. 度为`m`的数、`m`叉数的区别



| **度为m的树**                         | **m叉树**                                              |
| :------------------------------------ | :----------------------------------------------------- |
| 树的度：m为各结点的度的最大值         | m叉树：每个结点最多只能有 m 个孩子的树                 |
| 任意结点的度 ≦ m                      | 任意结点的度 ≦ m                                       |
| 至少有一个结点度 = m                  | 允许所有结点的度 < m                                   |
| 一定是非空树，至少有m+1个结点         | 可以是空树                                             |
| 第i层至多有 m^(i-1)个结点             | 第i层至多有 m^(i-1)个结点                              |
| 高度为h、度为 m 的树至少有h+m-1个结点 | 高度为h的m叉树至多有(m^h-1)/(m-1)个结点；至少有h个结点 |
|                                       | 具有n个结点的m叉树，最小高度为⌈ logm(n(m-2)+1)⌉        |

## **5.2 二叉树的概念**

### **5.2.1 二叉树的定义与特性**

1. 二叉树有左右之分，次序不能颠倒

### **5.2.2几种特殊的二叉树**

1. 满二叉树

2. 完全二叉树

3. 二叉排序树

4. 平衡二叉树

### **5.2.3 二叉树的存储结构**

1. 顺序存储

二叉树的顺序存储中，一定要把二叉树的结点编号与完全二叉树对应起来；

```plain
#define MaxSize 100
struct TreeNode{
   ElemType value; //结点中的数据元素
   bool isEmpty;   //结点是否为空
};

main(){
   TreeNode t[MaxSize];
   for (int i=0; i<MaxSize; i++){
      t[i].isEmpty = true;
   }
}
```

**考点：**

* `i`的左孩子：`2i`

* `i`的右孩子：`2i + 1`

* `i`的父节点：`⌊i/2⌋`

* `i`所在的层次：`⌊log2n + 1⌋` or `⌈ log2n+1)⌉`

**若完全二叉树中共有n个结点**（非完全二叉树不能用）

* 判断`i`是否有左孩子：`2i ≦ n`

* 判断`i`是否有右孩子：`2i+1 ≦ n`

* 判断`i`是否时叶子/分支结点：`i > ⌊n/2⌋`

**最坏情况：** 高度为h且只有h个结点的单支树（所有结点只有右孩子），也至少需要2^h-1个存储单元；

**结论：** 二叉树的顺序存储结构，只适合存储完全二叉树和满二叉树

1. 链式存储

```plain
//二叉树的结点
struct ElemType{
   int value;
};

typedef struct BiTNode{
   ElemType data;            //数据域
   struct BiTNode *lchild, *rchild;     //左、右孩子指针
}BiTNode, *BiTree;

//定义一棵空树
BiTree root = NULL;

//插入根节点
root = (BiTree) malloc (sizeof(BiTNode));
root -> data = {1};
root -> lchild = NULL;
root -> rchild = NULL;

//插入新结点
BiTNode *p = (BiTree*) malloc (sizeof(BiTNode));
p -> data = {2};
p -> lchild = NULL;
p -> rchild = NULL;
root -> lchild = p;         //作为根节点的左孩子
```

* 找到指定结点p的左/右孩子；

* 找到指定节点p的父结点: 只能从根结点开始遍历，也可以使用**三叉链表**

```plain
//二叉树的结点（链式存储）
typedef struct BiTNode{
   ElemType data;          //数据域
   struct BiTNode *lchild, *rchild;     //左、右孩子指针
   struct BiTNode *parent;              //父节点指针
}BiTNode, *BiTree;
```

* n个结点的二叉链表共有n+1个空链域

## **5.3 二叉树的遍历和线索二叉树**

### **5.3.1 二叉树的遍历**

1. 先序遍历（根左右）

* 若二叉树为空，不用操作

* 若二叉树非空： 

  * 访问根节点

  * 先序遍历左子树

  * 先序遍历右子树


```plain
//先序遍历
typedef struct BiTNode{
   ElemType data;          
   struct BiTNode *lchild, *rchild; 
}BiTNode, *BiTree;

void PreOrder(BiTree T){
   if(T!=NULL){
      visit(T);                   //访问根结点
      PreOrder(T->lchild);        //递归遍历左子树
      PreOrder(T->rchild);        //递归遍历右子树
   }
}

```

**空间复杂度：** O(h)

1. 中序遍历（左根右）

* 若二叉树为空，不用操作

* 若二叉树非空： 

  * 先序遍历左子树

  * 访问根节点

  * 先序遍历右子树


```plain
//中序遍历
typedef struct BiTNode{
   ElemType data;          
   struct BiTNode *lchild, *rchild; 
}BiTNode, *BiTree;

void InOrder(BiTree T){
   if(T!=NULL){
      InOrder(T->lchild);         //递归遍历左子树
      visit(T);                   //访问根结点
      InOrder(T->rchild);         //递归遍历右子树
   }
}
```

1. 后续遍历（左右根）

* 若二叉树为空，不用操作

* 若二叉树非空： 

  * 先序遍历左子树

  * 先序遍历右子树

  * 访问根节点


```plain
//后序遍历
typedef struct BiTNode{
   ElemType data;          
   struct BiTNode *lchild, *rchild; 
}BiTNode, *BiTree;

void PostOrder(BiTree T){
   if(T!=NULL){
      PostOrder(T->lchild);       //递归遍历左子树    
      PostOrder(T->rchild);       //递归遍历右子树
      visit(T);                 //访问根结点
   }
}
```

求数的深度

```plain
int treeDepth(BiTree T){
    if(T== NULL){
        return 0;
}
else {
    int l = treeDepth(T->lchild);
    int r = treeDepth(T->rchild);
      //树的深度=Max(左子树深度，右子树深度)+1
    return l>r ? l+1 : r+1;
}
```

1. 二叉树的层次遍历

算法思想：

* 初始化一个辅助队列

* 根节点入队

* 若队列非空，则队头结点出队，访问该结点，依次将其左、右孩子插入队尾（如果有的话）

* 重复以上操作直至队列为空

```plain
//二叉树的结点(链式存储)
typedef struct BiTNode{
   char data;          
   struct BiTNode *lchild, *rchild; 
}BiTNode, *BiTree;

//链式队列结点
typedef struct LinkNode{
   BiTNode * data;
   struct LinkNode *next;
}LinkNode;

typedef struct{
   LinkNode *front, *rear;  
}LinkQueue;

//层序遍历
void LevelOrder(BiTree T){
   LinkQueue Q;
   InitQueue (Q);                //初始化辅助队列
   BiTree p;
   EnQueue(Q,T);                   //将根节点入队
   while(!isEmpty(Q)){              //队列不空则循环
      DeQueue(Q,p);                //队头结点出队
      visit(p);                    //访问出队结点
      if(p->lchild != NULL)
         EnQueue(Q,p->lchild);         //左孩子入队
      if(p->rchild != NULL)
         EnQueue(Q,p->rchild);         //右孩子入队
   }
}
```

1. 由遍历序列构造二叉树

* 先序序列 + 中序序列

* 后序序列 + 中序序列

* 层序序列 + 中序序列

**key:** 找到树的根节点，并根据中序序列划分左右子树，再找到左右子树根节点、

### **5.3.2 线索二叉树**

1. 线索二叉树的概念与作用

2. 线索二叉树的存储结构

* 中序线索二叉树——线索指向中序前驱、中序后继

```plain
//线索二叉树结点
typedef struct ThreadNode{
   ElemType data;
   struct ThreadNode *lchild, *rchild;
   int ltag, rtag;                // 左、右线索标志
}ThreadNode, *ThreadTree;
```

>tag == 0: 指针指向孩子
>tag == 1: 指针是“线索”

* 先序线索二叉树——线索指向先序前驱、先序后继

* 后序线索二叉树——线索指向后序前驱、后序后继

1. 二叉树的线索化

* 中序线索化

```plain
//线索二叉树结点
typedef struct ThreadNode{
   int data;
   struct ThreadNode *lchild, *rchild;
   int ltag, rtag;                // 左、右线索标志
}ThreadNode, *ThreadTree;

//全局变量pre, 指向当前访问的结点的前驱
TreadNode *pre=NULL;

//中序遍历二叉树，一边遍历一边线索化
void InThread(ThreadTree T){
    if(T!=NULL){
        InThread(T->lchild);        //中序遍历左子树
        visit(T);                   //访问根节点
        InThread(T->rchild);        //中序遍历右子树
    }
}

void visit(ThreadNode *q){
   if(q->lchild == NULL){               //左子树为空，建立前驱线索   
      q->lchild = pre;
      q->ltag = 1;
   }
   if(pre!=NULL && pre->rchild == NULL){ 
      pre->rchild = q;           //建立前驱结点的后继线索
      pre->rtag = 1;
   }
   pre = q;
}

//中序线索化二叉树T
void CreateInThread(ThreadTree T){
   pre = NULL;                  //pre初始为NULL
   if(T!=NULL){                  //非空二叉树才能进行线索化
      InThread(T);              //中序线索化二叉树
      if(pre->rchild == NULL)
         pre->rtag=1;           //处理遍历的最后一个结点
   }
}
```

* 先序线索化 o555ooooooo

*注意【转圈】问题，当*`ltag==0`时，才能对左子树先序线索化

```plain
typedef struct ThreadNode{
   int data;
   struct ThreadNode *lchild, *rchild;
   int ltag, rtag;                // 左、右线索标志
}ThreadNode, *ThreadTree;

//全局变量pre, 指向当前访问的结点的前驱
TreadNode *pre=NULL;

//先序遍历二叉树，一边遍历一边线索化
void PreThread(ThreadTree T){
   if(T!=NULL){
      visit(T);
      if(T->ltag == 0)         //lchild不是前驱线索
         PreThread(T->lchild);
      PreThread(T->rchild);
   }
}

void visit(ThreadNode *q){
   if(q->lchid = NULL){                 //左子树为空，建立前驱线索   
      q->lchild = pre;
      q->ltag = 1;
   }

   if(pre!=NULL && pre->rchild = NULL){ 
      pre->rchild = q;           //建立前驱结点的后继线索
      pre->rtag = 1;
   }
   pre = q;
}

//先序线索化二叉树T
void CreateInThread(ThreadTree T){
   pre = NULL;                //pre初始为NULL
   if(T!=NULL);{              //非空二叉树才能进行线索化
      PreThread(T);            //先序线索化二叉树
      if(pre->rchild == NULL)
         pre->rtag=1;         //处理遍历的最后一个结点
   }
}

```

* 后序线索化

```plain
typedef struct ThreadNode{
   int data;
   struct ThreadNode *lchild, *rchild;
   int ltag, rtag;                // 左、右线索标志
}ThreadNode, *ThreadTree;

//全局变量pre, 指向当前访问的结点的前驱
TreadNode *pre=NULL;

//先序遍历二叉树，一边遍历一边线索化
void PostThread(ThreadTree T){
   if(T!=NULL){
      PostThread(T->lchild);
      PostThread(T->rchild);
      visit(T);                  //访问根节点
   }
}

void visit(ThreadNode *q){
   if(q->lchid = NULL){                 //左子树为空，建立前驱线索   
      q->lchild = pre;
      q->ltag = 1;
   }

   if(pre!=NULL && pre->rchild = NULL){ 
      pre->rchild = q;           //建立前驱结点的后继线索
      pre->rtag = 1;
   }
   pre = q;
}

//先序线索化二叉树T
void CreateInThread(ThreadTree T){
   pre = NULL;                //pre初始为NULL
   if(T!=NULL);{              //非空二叉树才能进行线索化
      PostThread(T);            //后序线索化二叉树
      if(pre->rchild == NULL)
         pre->rtag=1;         //处理遍历的最后一个结点
   }
}

```

1. 线索二叉树中找前驱、后继

中序线索二叉树找中序后继：在中序线索二叉树中找到指定节点 `*p` 的中序后继 `next`

>若 `p->rtag == 1`, 则 `next = p->rchild`;
>若 `p->rtag == 0`, 则 p 必有右孩子, 则 next = p的右子树中最左下结点;

```plain
//1. 找到以P为根的子树中，第一个被中序遍历的结点
ThreadNode *Firstnode(ThreadNode *p){
   //循环找到最左下的结点（不一定是叶结点）
   while(p->ltag == 0)
      p=p->lchild;
   return p;
}

//2. 在中序线索二叉树中找到结点p的后继结点
ThreadNode *Nextnode(ThreadNode *p){
   //右子树最左下结点
   if(p->rtag==0)
      return Firstnode(p->rchild);
   else 
      return p->rchild; //rtag==1，直接返回后继线索
}

//3. 对中序线索二叉树进行中序遍历
void Inorder(ThreadNode *T){            //T为根节点指针
   for(ThreadNode *p = Firstnode(T); p!=NULL; p = Nextnode(p))
      visit(p);
}

```

时间复杂度 = O(1)
中序线索二叉树找中序前驱：在中序线索二叉树中找到指定节点 `*p` 的中序前驱 `pre`

>若 `p->ltag == 1`, 则 `next = p->lchild`;
>若 `p->ltag == 0`, 则 p 必有左孩子, 则 next = p的左子树中最右下结点;

```plain
//1. 找到以P为根的子树中，第一个被中序遍历的结点
ThreadNode *Lastnode(ThreadNode *p){
   //循环找到最右下的结点（不一定是叶结点）
   while(p->rtag == 0)
      p=p->rchild;
   return p;
}

//2. 在中序线索二叉树中找到结点p的前驱结点
ThreadNode *Prenode(ThreadNode *p){
   //左子树最右下结点
   if(p->ltag==0)
      return Lastnode(p->lchild);
   else 
      return p->lchild; //rtag==1，直接返回前驱线索
}

//3. 对中序线索二叉树进行逆向中序遍历
void RevInorder(ThreadNode *T){            //T为根节点指针
   for(ThreadNode *p = Lastnode(T); p!=NULL; p = Prenode(p))
      visit(p);
}

```

先序线索二叉树找先序后继：在先序线索二叉树中找到指定节点 `*p` 的先序后继 `next`

>若 `p->rtag == 1`, 则 `next = p->rchild`;
>若 `p->rtag == 0`, 则 p 必有右孩子（左孩子不知道）
>case1: 若p有左孩子 ——— 根 **左** 右 / 根 (**根** 左 右) 右
>case2: 若p没有左孩子 ——— 根 **右** / 根 (根* *左 右)
>先序线索二叉树找先序前驱：在先序线索二叉树中找到指定节点 `*p` 的先序前驱`pre`

>若 `p->ltag == 1`, 则 `next = p->lchild`;
>若 `p->ltag == 0`, 则 p 必有左孩子，但是先序遍历中，左右子树的结点只可能是根的后继，不可能是前驱，所以不能从左右孩子里寻找p的先序前驱，（除非从头开始遍历/三叉链表
>case1: 如果能够找到p的父节点，且p是左孩子 —— p的父节点就是p的前驱；
>case2: 如果能够找到p的父节点，且p是右孩子，且其左兄弟为空 —— p的父节点就是p的前驱；
>case3: 如果能够找到p的父节点，且p是右孩子，且其左兄弟非空 —— p的前驱为左兄弟子树中最后一个被先序遍历到的结点（根节点出发，先往右，右没有往左，找到最下一层的结点）；
>case4: p没有父节点，即p为根节点，则p没有先序前驱

* [外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-YjVVJjtQ-1623943811481)(先序线索二叉树找先序前驱.PNG)]

后序线索二叉树找后序前驱：在后序线索二叉树中找到指定节点 `*p` 的后序前驱`pre`

>若 `p->ltag == 1`, 则 `next = p->lchild`;
>若 `p->ltag == 0`, 则 p 必有左孩子（不知道有没有右孩子）
>case1: 若p有右孩子 ——— 左 **右** 根 / 左 (左 右 **根**) 根
>case2: 若p没有右孩子 ——— **左** 根 （左子树按后序遍历，最后一个结点，p的左孩子）
>后序线索二叉树找后序后继：在后序线索二叉树中找到指定节点 `*p` 的后序后继`next`

>若 `p->rtag == 1`, 则 `next = p->rchild`;
>若 `p->rtag == 0`, 则 p 必有右孩子, 左孩子不知道, 但是在后序遍历中，左右子树中的结点只有可能是根的前驱，而不可能是根的后继，所以找不到后继，（除非从头开始遍历/三叉链表
>case1: 如果能找到p的父节点，且p是右孩子 —— p的父节点即为其后继
>case2: 如果能找到p的父节点，且p是左孩子，其右兄弟为空 —— p的父节点即为其后继
>case3: 如果能找到p的父节点，且p是左孩子，其右兄弟非空 —— p的后继为其右兄弟子树中第一个被后序遍历的结点；
>case4: p没有父节点，即p为根节点，则p没有后序后继；
>**总结**



|        | **中序线索二叉树** | **先序线索二叉树** | **后续线索二叉树** |
| :----- | :----------------- | :----------------- | :----------------- |
| 找前驱 | T                  | F                  | T                  |
| 找后继 | T                  | T                  | F                  |

## **5.4 树、森林**

### **5.4.1 树的存储结构**

1. 双亲表示法(顺序存储)：每个结点中保存指向双亲的指针

```plain
#define MAX_TREE_SIZE 100  //树中最多结点数

typedef struct{      //树的结点定义
   ElemType data; 
   int parent;      //双亲位置域
}PTNode;

typedef struct{                   //树的类型定义
   PTNode nodes[MAX_TREE_SIZE];   //双亲表示
   int n;                         //结点数
}PTree;

```

* 增：新增数据元素，无需按逻辑上的次序存储；（需要更改结点数`n`）

* 删（叶子结点）：① 将伪指针域设置为`-1`；②用后面的数据填补；（需要更改结点数`n`）

* 查询：①优点-查指定结点的双亲很方便；②缺点-查指定结点的孩子只能从头遍历，空数据导致遍历更慢；

1. 孩子表示法(顺序+链式)

```plain
struct CTNode{
   int child;    //孩子结点在数组中的位置
   struct CTNode *next;    // 下一个孩子
};

typedef struct{
   ElemType data;
   struct CTNode *firstChild;    // 第一个孩子
}CTBox;

typedef struct{
   CTBox nodes[MAX_TREE_SIZE];
   int n, r;   // 结点数和根的位置
}CTree;

```

2. 孩子兄弟表示法（链式）

```plain
typedef struct CSNode{
   ElemType data;                               //数据域
   struct CSNode *firstchild, *nextsibling;     //第一个孩子和右兄弟指针, *firstchild 看作左指针，*nextsibling看作右指针
}CSNode. *CSTree;

```

### **5.4.2 树、森林与二叉树的转换**

本质：森林中各个树的根节点之间视为兄弟关系

### **5.4.3 树、森林的遍历**

1. 树的遍历

* 先根遍历：若树非空，先访问根节点，再依次对每棵子树进行先根遍历；（与对应二叉树的先序遍历序列相同）

```plain
void PreOrder(TreeNode *R){
   if(R!=NULL){
      visit(R);    //访问根节点
      while(R还有下一个子树T)
         PreOrder(T);      //先跟遍历下一个子树
   }
}

```

* 后根遍历：若树非空，先依次对每棵子树进行后根遍历，最后再返回根节点；（与对应二叉树的中序遍历序列相同）

```plain
void PostOrder(TreeNode *R){
   if(R!=NULL){
      while(R还有下一个子树T)
         PostOrder(T);      //后跟遍历下一个子树
      visit(R);    //访问根节点
   }
}

```

* 层序遍历（队列实现）： 

  * 若树非空，则根结点入队；

  * 若队列非空，队头元素出队并访问，同时将该元素的孩子依次入队；

  * 重复以上操作直至队尾为空；


1. 森林的遍历

* 先序遍历：等同于依次对各个树进行**先根遍历**；也可以先转换成与之对应的二叉树，对二叉树进行**先序遍历**；

* 中序遍历：等同于依次对各个树进行**后根遍历**；也可以先转换成与之对应的二叉树，对二叉树进行**中序遍历**；

## **5.5 树与二叉树的应用**

