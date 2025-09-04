

# 串

## **4.1 串的定义和实现**

### **4.1.1 串的定义**

1. 串: 零个或多个字符组成的有限序列，如 `S = 'iPhone 11 Pro Max?'`；

2. 串名：S是串名；

3. 串的长度：串中字符的个数n；

4. 空串：n=0时的串；

5. 子串：串中任意多个连续的字符组成的子序列称为该串的子串；

6. 主串：包含子串的串；

7. 字符在主串中的位置：某个字符在串中的序号（从1开始）；

8. 子串在主串中的位置：子串的第一个字符在主串中的位置；

9. 空串 V.S 空格串： 

   1. `M = ''` 是空串；

   2. `N = ' '` 是空格串；

10. 串 V.S 线性表： 

   11. 串是特殊的线性表，数据元素之间呈线性关系（逻辑结构相似）；

   12. 串的数据对象**限定**为字符集：中文字符、英文字符、数字字符、标点字符…

   13. 串的基本操作，如增删改除通常以**子串**为操作对象


### **4.1.2 串的基本操作**

假设有串 `T = ''`, `S = 'iPhone 11 Pro Max?'`, `W = 'Pro'`

* `StrAssign(&T, chars)`: 赋值操作，把串T赋值为chars；

* `StrCopy(&T, S)`: 复制操作，把串S复制得到串T；

* `StrEmpty(S)`: 判空操作，若S为空串，则返回TRUE，否则返回False；

`StrLength(S)`: 求串长，返回串S的元素个数； 

>返回`length`值
>`ClearString(&S)`: 清空操作，将S清为**空串**； 

>将`length = 0`，逻辑上清空，但是内存中还有

* `DestroyString(&S)`: 销毁串，将串S销毁——**回收存储空间**；

`Concat(&T, S1, S2)`: 串联联接，用T返回由S1和S2联接而成的新串———可能会导致存储空间的扩展； 

>Concat(&T, S, W)
>T = ‘iPhone 11 Pro Max?Pro’
>`SubString(&Sub, S, pos, len)`: 求子串，用Sub返回串S的第pos个字符起长度为len的子串； 

>SubString(&T, S, 4, 6)
>T = ‘one 11’
>`Index(S, T)`: 定位操作，若主串S中存在与串T值相同的子串，则返回它再主串S中第一次出现的位置，否则函数值为0； 

>Index(S, T)
>11

* `StrCompare(S, T)`: 串的比较操作，参照英文词典排序方式；若S > T,返回值>0; S = T,返回值=0 **(需要两个串完全相同)** ; S < T,返回值<0;

### **拓展：字符集编码**

1. 字符集:

2. 编码方案

3. 乱码问题

### **4.1.3 串的存储结构**

1. 定长顺序存储表示

```plain
#define MAXLEN 255   //预定义最大串长为255
typedef struct{
    char ch[MAXLEN];   //静态数组实现（定长顺序存储）每个分量存储一个字符                   
    int length;         //串的实际长度 每个char字符占1B   
}SString;
```

* 串长的两种表示法：

  * 方案一：用一个额外的变量`length`来存放串的长度（保留`ch[0]`）；

  * 方案二：用`ch[0]`充当`length`； 

    * 优点：字符的位序和数组下标相同；

  * 方案三：没有`length`变量，以字符`'\0'`表示结尾（对应ASCII码的0）； 

    * 缺点：需要从头到尾遍历；

  * **方案四——最终使用方案：**`ch[0]`废弃不用，声明int型变量`length`来存放串的长度（方案一与方案二的结合）

* 基本操作实现（基于方案四）

```plain
#define MAXLEN 255            //预定义最大串长为255
typedef struct{
    char ch[MAXLEN];           //每个分量存储一个字符
    int length;                //串的实际长度 
}SString;

// 求子串
bool SubString(SString &Sub, SString S, int pos, int len){
    //子串范围越界
    if (pos+len-1 > S.length)
        return false;
    for (int i=pos; i<pos+len; i++)
        Sub.cn[i-pos+1] = S.ch[i];
    Sub.length = len;
    return true;
}

//比较操作。若S>T，则返回值>0;若S=T，则返回值=0;若S<T，则返回值<0。
int StrCompare(SString S, SString T){
    for(int i; i<=S.length && i<=T.length; i++){
        if(S.ch[i] != T.ch[i])
            return S.ch[i] - T.ch[i];
    }
    //扫描过的所有字符都相同，则长度长的串更大
    return S.length - T.length;
}

//定位操作。若主串S中存在与串T相同的子串，返回它在主串S第一次出现的位置，否则为0。
int Index(SString S, SString T){
    int i=1;
    n = StrLength(S);
    m = StrLength(T);
    SString sub;        //用于暂存子串

    while(i<=n-m+1){
        SubString(Sub,S,i,m);
        if(StrCompare(Sub,T)!=0)
            ++i;
        else 
            return i;    // 返回子串在主串中的位置
    }
    return 0;            //S中不存在与T相等的子串
}
```

*ps:结合顺序表思考优缺点*

1. 堆分配存储表示

```plain
//动态数组实现
typedef struct{
    char *ch;           //按串长分配存储区，ch指向串的基地址
    int length;         //串的长度
}HString;

HString S；        //指针指向连续空间的起始位置
S.ch = (char *) malloc(MAXLINE * sizeof(char)); 
                                //malloc()需要手动free()
S.length;
```

2. 串的链式存储

```plain
typedef struct StringNode{
    char ch;           //每个结点存1个字符
    struct StringNode *next;
}StringNode, * String;
```

问题：存储密度低，每个字符1B，每个指针4B；
解决方案：每一个链表的结点存储多个字符——每个结点称为块——块链结构

```plain
typedef struct StringNode{
    char ch[4];           //每个结点存多个个字符
    struct StringNode *next;
}StringNode, * String;
```

*ps:结合链表思考优缺点*

* 存储分配角度：链式存储的字符串无需占用连续空间，存储空间分配更灵活；

* 操作角度：若要在字符串中插入或删除某些字符，则顺序存储方式需要移动大量字符，而链式存储不用；

* 若要按位序查找字符，则顺序存储支持随机访问，而链式存储只支持顺序访问；

## **4.2 串的模式匹配**

### **4.2.1 朴素模式匹配算法**

```plain
int Index(SString S, SString T){
    int i=1;                //扫描主串S
    int j=1;                //扫描模式串T
    while(i<=S.length && j<=T.length){
        if(S.ch[i] == T.ch[j]){
            ++i;
            ++j;             //继续比较后继字符
        }
        else{
            i = i-j+2;
            j=1;             //指针后退重新开始匹配
        }
    }
    if(j>T.length)
        return i-T.length;
    else
        return 0;
}
```

**时间复杂度分析：**

* 主串长度为n，模式串长度为m

* 最多比较`n-m+1`个子串

* 最坏时间复杂度 = `O(nm)`

  * 每个子串都要对比m个字符(对比到最后一个字符才匹配不上)，共要对比n-m+1个子串，复杂度 = `O((n-m+1)m) = O(nm - m^2 + m) = O(nm)`

  * *PS:大多数时候，n>>m*

* 最好时间复杂度 = `O(n)`

  * 每个子串的第一个字符就匹配失败，共要对比n-m+1个子串，复杂度 = `O(n-m+1) = O(n)`


### **4.2.2 改进的模式匹配算法——KMP算法**

* 不匹配的字符之前，一定是和模式串一致的；

根据模式串T，求出`next数组`（只与模式串有关，与主串无关），利用`next数组`进行匹配，**当匹配失败时，主串的指针**`i` 不再回溯！

>当第一个元素匹配失败时，匹配下一个相邻子串，令`j=0,i++,j++`

1. 求`next数组`（会手算即可）

* 作用：当模式串的第`j`个字符失配时，从模式串的第`next[j]`继续往后匹配;

* 对于任何模式串，当第1个字符不匹配时，只能匹配下一个子串，因此，`next[1] = 0`——表示模式串应右移一位，主串当前指针后移一位，再和模式串的第一字符进行比较；

* 对于任何模式串，当第2个字符不匹配时，应尝试匹配模式串的第一个字符，因此，`next[2] = 0`;

例：对于串 `T = 'abaabc'`



| **next[0]** | **next[1]** | **next[2]** | **next[3]** | **next[4]** | **next[5]** | **next[6]** |
| :---------- | :---------- | :---------- | :---------- | :---------- | :---------- | :---------- |
|             | 0           | 1           | 1           | 2           | 2           | 3           |

1. 利用`next数组`进行模式匹配

```plain
int Index_KMP(SString S, SString T, int next[]){
    int i=1;     //主串
    int j=1;     //模式串
    while（i<=S.length && j<=T.length){
        if(j==0 || S.ch[i]==T.ch[j]){      //第一个元素匹配失败时
            ++j;
            ++i;         //继续比较后继字符
        }
        else
            j=next[j];     //模式串向右移动
    }
    if(j>T.length)
        return i-T.length;     //匹配成功
    else
        return 0;
}
```

**3. 时间复杂度分析：**

* 求next数组时间复杂度 = `O(m)`

* 模式匹配过程最坏时间复杂度 = `O(n)`

* KMP算法的最坏时间复杂度 = `O(m+n)`

### **4.2.3 KMP算法的进一步优化**