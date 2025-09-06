import{_ as n,c as a,b as i,o as e}from"./app-Bmvlbfib.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="栈与队列" tabindex="-1"><a class="header-anchor" href="#栈与队列"><span>栈与队列</span></a></h1><h2 id="_3-1-栈-stack" tabindex="-1"><a class="header-anchor" href="#_3-1-栈-stack"><span><strong>3.1 栈 (stack)</strong></span></a></h2><h3 id="_3-1-1-栈的基本概念" tabindex="-1"><a class="header-anchor" href="#_3-1-1-栈的基本概念"><span><strong>3.1.1 栈的基本概念</strong></span></a></h3><ol><li>栈的定义</li></ol><ul><li><p>栈是特殊的线性表：只允许在一端进行插入或删除操作， 其逻辑结构与普通线性表相同；</p></li><li><p>栈顶：允许进行插入和删除的一端 （最上面的为<strong>栈顶元素</strong>）；</p></li><li><p>栈底：不允许进行插入和删除的一端 （最下面的为<strong>栈底元素</strong>）；</p></li><li><p>空栈：不含任何元素的空表；</p></li><li><p>特点：后进先出（后进栈的元素先出栈）；</p></li><li><p>缺点：栈的大小不可变，解决方法——共享栈；</p></li></ul><ol><li>栈的基本操作 （运算）</li></ol><h3 id="创-销" tabindex="-1"><a class="header-anchor" href="#创-销"><span><strong>&quot;创&amp;销&quot;</strong></span></a></h3><ul><li><p><code>InitStack(&amp;S)</code> <strong>初始化栈</strong>：构造一个空栈S，分配内存空间；</p></li><li><p><code>DestroyStack(&amp;S)</code> <strong>销毁栈</strong>：销毁并释放栈S所占用的内存空间；</p></li></ul><h3 id="增-删" tabindex="-1"><a class="header-anchor" href="#增-删"><span><strong>&quot;增&amp;删&quot;</strong></span></a></h3><ul><li><p><code>Push(&amp;S, x)</code> <strong>进栈</strong>：若栈S未满，则将x加入使其成为新栈顶；</p></li><li><p><code>Pop(&amp;S, &amp;x)</code> <strong>出栈</strong>：若栈S非空，则弹出（删除）栈顶元素，并用x返回；</p></li></ul><h3 id="查-其他" tabindex="-1"><a class="header-anchor" href="#查-其他"><span><strong>&quot;查&amp;其他&quot;</strong></span></a></h3><ul><li><p><code>GetTop(S, &amp;x)</code> <strong>读取栈顶元素</strong>：若栈S非空，则用x返回栈顶元素；（栈的使用场景大多只访问栈顶元素）；</p></li><li><p><code>StackEmpty(S)</code> <strong>判空</strong>： 断一个栈S是否为空，若S为空，则返回<code>true</code>,否则返回<code>false</code>；</p></li></ul><ol><li>栈的常见题型</li></ol><ul><li>给个进栈顺序，判断有哪些合法的出栈顺序；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>例：进栈顺序为：a -&gt; b -&gt; c -&gt; d -&gt; e</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    合法的出栈顺序：e d c b a / b e d c a (出栈和进栈交替进行) / ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-2-栈的顺序存储" tabindex="-1"><a class="header-anchor" href="#_3-1-2-栈的顺序存储"><span><strong>3.1.2 栈的顺序存储</strong></span></a></h3><ol><li>顺序栈的定义 hedui</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#define MaxSize 10         //定义栈中元素的最大个数</span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>    ElemType data[MaxSize];       //静态数组存放栈中元素</span></span>
<span class="line"><span>    int top;                      //栈顶元素</span></span>
<span class="line"><span>}SqStack;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void testStack(){</span></span>
<span class="line"><span>    SqStack S;       //声明一个顺序栈(分配空间)</span></span>
<span class="line"><span>                  //连续的存储空间大小为 MaxSize*sizeof(ElemType)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>顺序栈的基本操作 hedui</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#define MaxSize 10         //定义栈中元素的最大个数</span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>    ElemType data[MaxSize];       //静态数组存放栈中元素</span></span>
<span class="line"><span>    int top;                      //栈顶指针</span></span>
<span class="line"><span>}SqStack;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//初始化栈</span></span>
<span class="line"><span>void InitStack(SqStack &amp;S){</span></span>
<span class="line"><span>    S.top = -1;                   //初始化栈顶指针</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void testStack(){</span></span>
<span class="line"><span>    SqStack S;       //声明一个顺序栈(分配空间)</span></span>
<span class="line"><span>    InitStack(S);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>//判断栈空</span></span>
<span class="line"><span>bool StackEmpty(SqStack S){</span></span>
<span class="line"><span>    if(S.top == -1)      //栈空  如果初始化S.top指向0，则S.top=0判空</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    else                 //栈不空</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//新元素进栈</span></span>
<span class="line"><span>bool Push(SqStack &amp;S, ElemType x){</span></span>
<span class="line"><span>    if(S.top == MaxSize-1)        //栈满</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    S.top = S.top + 1;    //指针先加1</span></span>
<span class="line"><span>    S.data[S.top] = x;   //新元素入栈 这两行等价于 S.data[++S.top]=x;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//出栈操作</span></span>
<span class="line"><span>bool Pop(SqStack &amp;S, ElemType &amp;x){</span></span>
<span class="line"><span>    if(S.top == -1)          //栈空</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    x = S.data[S.top];       //栈顶元素先出栈</span></span>
<span class="line"><span>    S.top = S.top - 1;     //栈顶指针减1 这两行等价x = S.data[S.top--];</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//读栈顶元素</span></span>
<span class="line"><span>bool GetTop(SqStack S, ElemType &amp;x){</span></span>
<span class="line"><span>    if(S.top == -1)</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    x = S.data[S.top];      //x记录栈顶元素</span></span>
<span class="line"><span>    return true; </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PS:</strong> 也可以初始化时定义 <code>S.top = 0</code> ：top指针指向下一个可以插入元素的位置(栈顶元素的后一个位置)；</p><ul><li><p>判空：<code>if(S.top == 0)</code></p></li><li><p>进栈使用：<code>S.data[S.top++] = x;</code></p></li><li><p>出栈使用：<code>x = S.data[--S.top];</code></p></li><li><p>判断栈满：<code>s.top == MaxSize</code></p></li></ul><ol><li>共享栈</li></ol><p>两个栈共享同一片空间 hedui</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#define MaxSize 10         //定义栈中元素的最大个数</span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>    ElemType data[MaxSize];       //静态数组存放栈中元素</span></span>
<span class="line"><span>    int top0;                     //0号栈栈顶指针</span></span>
<span class="line"><span>    int top1;                     //1号栈栈顶指针</span></span>
<span class="line"><span>}ShStack;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//初始化栈</span></span>
<span class="line"><span>void InitStack(ShStack &amp;S){</span></span>
<span class="line"><span>    S.top0 = -1;        //初始化栈顶指针</span></span>
<span class="line"><span>    S.top1 = MaxSize;   </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>栈满条件：top0 + 1 == top1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-3-栈的链式存储结构" tabindex="-1"><a class="header-anchor" href="#_3-1-3-栈的链式存储结构"><span><strong>3.1.3 栈的链式存储结构</strong></span></a></h3><ol><li>用链式存储方式实现的栈</li></ol><ul><li><p>进栈和出栈都只能在栈顶一端进行(链头作为栈顶)</p></li><li><p>链表的头部作为栈顶，意味着：</p><ul><li><p>在实现数据&quot;入栈&quot;操作时，需要将数据从链表的头部插入；</p></li><li><p>在实现数据&quot;出栈&quot;操作时，需要删除链表头部的首元节点；</p></li></ul></li></ul><p><strong>因此，链栈实际上就是一个只能采用头插法插入或删除数据的链表;</strong> <strong>hedui</strong></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>typedef struct Linknode{</span></span>
<span class="line"><span>    ElemType data;              //数据域</span></span>
<span class="line"><span>    struct Linknode *next;      //指针域</span></span>
<span class="line"><span>}*LiStack;                      //栈类型的定义</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>链栈的基本操作 (类比单链表的操作 / <strong>带头结点&amp;不带头结点</strong>)</li></ol><p><a href="https://blog.csdn.net/Xulidanga/article/details/108895669" target="_blank" rel="noopener noreferrer">参考：链栈基本操作(带头结点及不带头结点)</a></p><ul><li><p>初始化</p></li><li><p>进栈</p></li><li><p>出栈</p></li><li><p>获取栈顶元素</p></li><li><p>判空、判满</p></li></ul><p><strong>带有头结点的链栈基本操作</strong></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#include&lt;stdio.h&gt;</span></span>
<span class="line"><span>struct Linknode{</span></span>
<span class="line"><span>    int data;             //数据域</span></span>
<span class="line"><span>    Linknode *next;       //指针域</span></span>
<span class="line"><span>}Linknode,*LiStack;   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef Linknode *Node;   //结点结构体指针变量</span></span>
<span class="line"><span>typedef Node List;        //结点结构体头指针变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//1. 初始化</span></span>
<span class="line"><span>void InitStack(LiStack &amp;L){   //L为头指针</span></span>
<span class="line"><span>    L = new Linknode; </span></span>
<span class="line"><span>    L-&gt;next = NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2.判栈空</span></span>
<span class="line"><span>bool isEmpty(LiStack &amp;L){</span></span>
<span class="line"><span>    if(L-&gt;next == NULL){</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//3. 进栈(：链栈基本上不会出现栈满的情况)</span></span>
<span class="line"><span>void pushStack(LiStack &amp;L, int x){</span></span>
<span class="line"><span>    Linknode s;          //创建存储新元素的结点</span></span>
<span class="line"><span>    s = new Linknode;</span></span>
<span class="line"><span>    s-&gt;data = x;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //头插法</span></span>
<span class="line"><span>    s-&gt;next = L-&gt;next;</span></span>
<span class="line"><span>    L-&gt;next = s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//4.出栈</span></span>
<span class="line"><span>bool popStack(LiStack &amp;L, int &amp;x){</span></span>
<span class="line"><span>    Linknode s;</span></span>
<span class="line"><span>    if(L-&gt;next == NULL) //栈空不能出栈</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    s = L-&gt;next;</span></span>
<span class="line"><span>    x = s-&gt;data;</span></span>
<span class="line"><span>    L-&gt;next = L-&gt;next-&gt;next;</span></span>
<span class="line"><span>    delete(s);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不带头结点的链栈基本操作</strong></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#include&lt;stdio.h&gt;</span></span>
<span class="line"><span>struct Linknode{</span></span>
<span class="line"><span>    int data;             //数据域</span></span>
<span class="line"><span>    Linknode *next;       //指针域</span></span>
<span class="line"><span>}Linknode,*LiStack;   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef Linknode *Node;   //结点结构体指针变量</span></span>
<span class="line"><span>typedef Node List;        //结点结构体头指针变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//1.初始化 </span></span>
<span class="line"><span>void initStack(LiStack &amp;L){</span></span>
<span class="line"><span>    L=NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2.判栈空</span></span>
<span class="line"><span>bool isEmpty(LiStack &amp;L){</span></span>
<span class="line"><span>    if(L == NULL)</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        teturn false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//3.进栈</span></span>
<span class="line"><span>void pushStack(LiStack &amp;L, int x){</span></span>
<span class="line"><span>    Linknode s;          //创建存储新元素的结点</span></span>
<span class="line"><span>    s = new Linknode;</span></span>
<span class="line"><span>    s-&gt;next = L;</span></span>
<span class="line"><span>    L = s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//4.出栈</span></span>
<span class="line"><span>bool popStack(LiStack &amp;L, int &amp;x){</span></span>
<span class="line"><span>    Linknode s; </span></span>
<span class="line"><span>    if(L = NULL)     //栈空不出栈</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    s = L;</span></span>
<span class="line"><span>    x = s-&gt;data;</span></span>
<span class="line"><span>    L = L-&gt;next;</span></span>
<span class="line"><span>    delete(s);  </span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-队列-queue" tabindex="-1"><a class="header-anchor" href="#_3-2-队列-queue"><span><strong>3.2 队列(Queue)</strong></span></a></h2><h3 id="_3-2-1-队列的基本概念" tabindex="-1"><a class="header-anchor" href="#_3-2-1-队列的基本概念"><span><strong>3.2.1 队列的基本概念</strong></span></a></h3><ol><li>队列的定义</li></ol><ul><li><p>队列是操作受限的<strong>线性表</strong>，只允许在一端进行插入 (入队)，另一端进行删除 (出队)</p></li><li><p>操作特性：<strong>先进先出 FIFO</strong></p></li><li><p>队头：允许删除的一端</p></li><li><p>队尾：允许插入的一端</p></li><li><p>空队列：不含任何元素的空表</p></li></ul><ol><li>队列的基本操作</li></ol><h3 id="创-销-1" tabindex="-1"><a class="header-anchor" href="#创-销-1"><span><strong>&quot;创&amp;销&quot;</strong></span></a></h3><ul><li><p><code>InitQueue(&amp;Q)</code>: 初始化队列，构造一个空列表Q</p></li><li><p><code>DestroyQueue(&amp;Q)</code>: 销毁队列，并释放队列Q所占用的内存空间</p></li></ul><h3 id="增-删-1" tabindex="-1"><a class="header-anchor" href="#增-删-1"><span><strong>&quot;增&amp;删&quot;</strong></span></a></h3><ul><li><p><code>EnQueue(&amp;Q, x)</code>: 入队，若队列Q未满，将x加入，使之成为新的队尾</p></li><li><p><code>DeQueue(&amp;Q, &amp;x)</code>: 出队，若队列Q非空，删除队头元素，并用x返回</p></li></ul><h3 id="查-其他-1" tabindex="-1"><a class="header-anchor" href="#查-其他-1"><span><strong>&quot;查&amp;其他&quot;</strong></span></a></h3><ul><li><p><code>GetHead(Q,&amp;x)</code>: 读队头元素，若队列Q非空，则将队头元素赋值给x</p></li><li><p><code>QueueEmpty(Q)</code>: 判队列空，若队列Q为空，则返回true</p></li></ul><h3 id="_3-2-2-队列的顺序存储结构" tabindex="-1"><a class="header-anchor" href="#_3-2-2-队列的顺序存储结构"><span><strong>3.2.2 队列的顺序存储结构</strong></span></a></h3><ul><li><p>队头指针：指向队头元素；</p></li><li><p>队尾指针：指向队尾元素的后一个位置（下一个应该插入的位置）</p></li></ul><ol><li>队列的顺序存储结构的基本操作</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//队列的顺序存储类型</span></span>
<span class="line"><span>#define MaxSize 10;     //定义队列中元素的最大个数</span></span>
<span class="line"><span>typedef struct{       //连续的存储空间，大小为——MaxSize*sizeof(ElemType)</span></span>
<span class="line"><span>    ElemType data[MaxSize];   //用静态数组存放队列元素       </span></span>
<span class="line"><span>    int front, rear;          //队头指针和队尾指针</span></span>
<span class="line"><span>}SqQueue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//初始化队列</span></span>
<span class="line"><span>void InitQueue(SqQueue &amp;Q){</span></span>
<span class="line"><span>    //初始化时，队头、队尾指针指向0</span></span>
<span class="line"><span>    Q.rear = Q.front = 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void testQueue(){</span></span>
<span class="line"><span>    SqQueue Q;                //声明一个队列(顺序存储)</span></span>
<span class="line"><span>    InitQueue(Q);</span></span>
<span class="line"><span>    //...后续操作</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 判断队列是否为空</span></span>
<span class="line"><span>bool QueueEmpty(SqQueue Q){</span></span>
<span class="line"><span>    if(Q.rear == Q.front)    //判空条件</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    else </span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>循环队列</li></ol><p><strong>Q:</strong> 能否用 <code>Q.rear == MaxSize</code> 作为队列满的条件？</p><p><strong>A:</strong> 不能！会有假溢出, 所以需要用 <strong>模运算</strong> 将存储空间 {0,1,2,…,MaxSize} 在逻辑上变成“环状”——<strong>循环队列！</strong></p><blockquote><p>a%b == a除以b的余数<br> 初始：Q.front = Q.rear = 0;<br> 队首指针进1：Q.front = (Q.front + 1) % MaxSize<br> 队尾指针进1：Q.rear = (Q.rear + 1) % MaxSize —— 队尾指针后移，当移到最后一个后，下次移动会到第一个位置<br> 队列长度：(Q.rear + MaxSize - Q.front) % MaxSize</p></blockquote><h3 id="循环队列如何判满" tabindex="-1"><a class="header-anchor" href="#循环队列如何判满"><span><strong>循环队列如何判满</strong></span></a></h3><p><strong>Q:</strong> 能否用<code>Q.rear == Q.front</code> 作为队列满的条件？</p><p><strong>A:</strong> 不能！这已经作为队列空的判断条件了；</p><h3 id="方案一-牺牲一个单元来区分队空和队满" tabindex="-1"><a class="header-anchor" href="#方案一-牺牲一个单元来区分队空和队满"><span><strong>方案一: 牺牲一个单元来区分队空和队满</strong></span></a></h3><p>队尾指针的再下一个位置就是队头，即 <code>(Q.rear+1)%MaxSize == Q.front</code></p><ul><li>循环队列——入队：只能从队尾插入（判满使用方案一）</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>bool EnQueue(SqQueue &amp;Q, ElemType x){</span></span>
<span class="line"><span>    if((Q.rear+1)%MaxSize == Q.front)        //队满</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    Q.data[Q.rear] = x;                      //将x插入队尾</span></span>
<span class="line"><span>    Q.rear = (Q.rear + 1) % MaxSize;         //队尾指针加1取模</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>循环队列——出队：只能让队头元素出队</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//出队，删除一个队头元素，用x返回</span></span>
<span class="line"><span>bool DeQueue(SqQueue &amp;Q, ElemType &amp;x){</span></span>
<span class="line"><span>    if(Q.rear == Q.front)              //队空报错</span></span>
<span class="line"><span>        return false;  </span></span>
<span class="line"><span>    x = Q.data[Q.front];</span></span>
<span class="line"><span>    Q.front = (Q.front + 1) % MaxSize; //队头指针后移动</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//循环队列——获得队头元素的值，用x返回</span></span>
<span class="line"><span>bool GetHead(SqQueue Q, ElemType &amp;x){</span></span>
<span class="line"><span>    if(Q.rear == Q.front)             </span></span>
<span class="line"><span>        return false;       //队空报错</span></span>
<span class="line"><span>    x = Q.data[Q.front];</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案二-不牺牲存储空间-设置size" tabindex="-1"><a class="header-anchor" href="#方案二-不牺牲存储空间-设置size"><span><strong>方案二: 不牺牲存储空间，设置size</strong></span></a></h3><p>定义一个变量 <code>size</code>用于记录队列此时记录了几个数据元素，初始化 <code>size = 0</code>，进队成功 <code>size++</code>，出队成功<code>size--</code>，根据size的值判断队满与队空</p><p>队满条件：<code>size == MaxSize</code></p><p>队空条件：<code>size == 0</code></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># define MaxSize 10;     </span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>    ElemType data[MaxSize];   </span></span>
<span class="line"><span>    int front, rear;        </span></span>
<span class="line"><span>    int size;               //队列当前长度</span></span>
<span class="line"><span>}SqQueue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//初始化队列</span></span>
<span class="line"><span>void InitQueue(SqQueue &amp;Q){</span></span>
<span class="line"><span>    Q.rear = Q.front = 0;</span></span>
<span class="line"><span>    size = 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案三-不牺牲存储空间-设置tag" tabindex="-1"><a class="header-anchor" href="#方案三-不牺牲存储空间-设置tag"><span><strong>方案三: 不牺牲存储空间，设置tag</strong></span></a></h3><p>定义一个变量 <code>tag</code>，<code>tag = 0</code> --最近进行的是删除操作；<code>tag = 1</code> --最近进行的是插入操作；</p><ul><li><p>每次删除操作成功时，都令<code>tag = 0</code>；只有删除操作，才可能导致队空；</p></li><li><p>每次插入操作成功时，都令<code>tag = 1</code>；只有插入操作，才可能导致队满；</p></li></ul><p>队满条件：<code>Q.front == Q.rear &amp;&amp; tag == 1</code></p><p>队空条件：<code>Q.front == Q.rear &amp;&amp; tag == 0</code></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># define MaxSize 10;     </span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>    ElemType data[MaxSize];   </span></span>
<span class="line"><span>    int front, rear;        </span></span>
<span class="line"><span>    int tag;               //最近进行的是删除or插入</span></span>
<span class="line"><span>}SqQueue;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他出题方法——队尾指针指向队尾元素" tabindex="-1"><a class="header-anchor" href="#其他出题方法——队尾指针指向队尾元素"><span><strong>其他出题方法——队尾指针指向队尾元素</strong></span></a></h3><ul><li>判空</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>(Q.rear + 1) % MaxSize == Q.front</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>判满</p><ul><li><p>方案一：牺牲一个存储单元</p></li><li><p>方案二：增加辅助变量</p></li></ul></li><li><p>入队操作</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Q.rear = (Q.rear + 1) % MaxSize; //后移一位</span></span>
<span class="line"><span>Q.data[Q.rear] = x;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-3-队列的链式存储结构" tabindex="-1"><a class="header-anchor" href="#_3-2-3-队列的链式存储结构"><span><strong>3.2.3 队列的链式存储结构</strong></span></a></h3><ol><li>队列的链式存储</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>typedef struct LinkNode{      //链式队列结点</span></span>
<span class="line"><span>    ElemType data;</span></span>
<span class="line"><span>    struct LinkNode *next;</span></span>
<span class="line"><span>}LinkNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct{               //链式队列</span></span>
<span class="line"><span>    LinkNode *front, *rear;   //队列的队头和队尾指针</span></span>
<span class="line"><span>}LinkQueue;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>链式队列的基本操作——<strong>带头结点</strong></li></ol><ul><li>初始化 &amp; 判空</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//初始化队列（带头结点）</span></span>
<span class="line"><span>void InitQueue(LinkQueue &amp;Q){</span></span>
<span class="line"><span>    //初始化时，front、rear都指向头结点</span></span>
<span class="line"><span>    Q.front = Q.rear = (LinkNode*)malloc(sizeof(LinkNode));</span></span>
<span class="line"><span>    Q.front -&gt; next = NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//判断队列是否为空</span></span>
<span class="line"><span>bool IsEmpty(LinkQueue Q){</span></span>
<span class="line"><span>    if(Q.front == Q.rear)     //也可用 Q.front -&gt; next == NULL</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void testLinkQueue(){</span></span>
<span class="line"><span>    LinkQueue Q;        //声明一个队列</span></span>
<span class="line"><span>    InitQueue (Q)；      //初始化队列</span></span>
<span class="line"><span>  //...后续操作  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>入队操作</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//新元素入队 (表尾进行)</span></span>
<span class="line"><span>void EnQueue(LinkQueue &amp;Q, ElemType x){</span></span>
<span class="line"><span>    LinkNode *s = (LinkNode *)malloc(sizeof(LinkNode)); //申请一个新结点</span></span>
<span class="line"><span>    s-&gt;data = x;</span></span>
<span class="line"><span>    s-&gt;next = NULL;     //s作为最后一个结点，指针域指向NULL</span></span>
<span class="line"><span>    Q.rear-&gt;next = s;   //新结点插入到当前的rear之后</span></span>
<span class="line"><span>    Q.rear = s;         //表尾指针指向新的表尾</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>出队操作</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//队头元素出队</span></span>
<span class="line"><span>bool DeQueue(LinkQueue &amp;Q, ElemType &amp;x){</span></span>
<span class="line"><span>    if(Q.front == Q.rear)</span></span>
<span class="line"><span>        return false;                    //空队</span></span>
<span class="line"><span>    LinkNode *p = Q.front-&gt;next;      //p指针指向即将删除的结点</span></span>
<span class="line"><span>    x = p-&gt;data;</span></span>
<span class="line"><span>    Q.front-&gt;next = p-&gt;next;             //修改头结点的next指针</span></span>
<span class="line"><span>    if(Q.rear == p)                      //此次是最后一个结点出队</span></span>
<span class="line"><span>        Q.rear = Q.front;                //修改rear指针</span></span>
<span class="line"><span>    free(p);                             //释放结点空间</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>队列满的条件</li></ul><p>顺序存储：预分配存储空间</p><p>链式存储：一般不会队满，除非内存不足</p><ul><li>计算链队长度 (遍历链队)</li></ul><p>设置一个<code>int length</code> 记录链式队列长度</p><ol><li>链式队列的基本操作——<strong>不带头结点</strong></li></ol><ul><li>初始化 &amp; 判空</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//初始化队列（不带头结点）</span></span>
<span class="line"><span>void InitQueue(LinkQueue &amp;Q){</span></span>
<span class="line"><span>      //初始化时，front、rear都指向NULL</span></span>
<span class="line"><span>    Q.front = NULL;</span></span>
<span class="line"><span>    Q.rear = NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//判断队列是否为空</span></span>
<span class="line"><span>bool IsEmpty(LinkQueue Q){</span></span>
<span class="line"><span>    if(Q.front == NULL)         //也可以用 Q.rear == NULL</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>入队操作</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//新元素入队 不带头结点 (表尾进行)</span></span>
<span class="line"><span>void EnQueue(LinkQueue &amp;Q, ElemType x){</span></span>
<span class="line"><span>    LinkNode *s = (LinkNode *)malloc(sizeof(LinkNode)); //申请一个新结点</span></span>
<span class="line"><span>    s-&gt;data = x;</span></span>
<span class="line"><span>    s-&gt;next = NULL;</span></span>
<span class="line"><span>    //不带头结点的队列，第一个元素入队时需要特别处理</span></span>
<span class="line"><span>    if(Q.front = NULL){            //在空队列中插入第一个元素</span></span>
<span class="line"><span>        Q.front = s;               //修改队头队尾指针</span></span>
<span class="line"><span>        Q.rear = s;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        Q.rear-&gt;next = s;           //新结点插入到rear结点之后</span></span>
<span class="line"><span>        Q.rear = s;                 //修改rear指针指向新的表尾结点</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出队（不带头结点）</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//队头元素出队（不带头结点)</span></span>
<span class="line"><span>bool DeQueue(LinkQueue &amp;Q,ElemType &amp;x){</span></span>
<span class="line"><span>    if(Q.front==NULL)</span></span>
<span class="line"><span>        return false;          //空队</span></span>
<span class="line"><span>    LinkNode *p=Q.front;      //p指向此次出队的结点</span></span>
<span class="line"><span>    x=p-&gt;data;                //用变量x返回队头元素</span></span>
<span class="line"><span>    Q.front=p-&gt;next;          //修改front指针</span></span>
<span class="line"><span>    if(Q.rear==p){            //此次是最后一个结点出</span></span>
<span class="line"><span>        Q.front = NULL;       //front指向NULL</span></span>
<span class="line"><span>        Q.rear =NULL;         //rear指向NULL</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     free(p);                 //释放结点空间</span></span>
<span class="line"><span>     return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-4-双端队列" tabindex="-1"><a class="header-anchor" href="#_3-2-4-双端队列"><span><strong>3.2.4 双端队列</strong></span></a></h3><ol><li>定义</li></ol><ul><li><p>双端队列允许从<strong>两端插入</strong>、<strong>两端删除</strong>的线性表；</p></li><li><p>如果只使用其中一端的插入、删除操作，则等同于栈；</p></li><li><p>输入受限的双端队列：允许<strong>一端插入</strong>，<strong>两端删除</strong>的线性表；</p></li><li><p>输出受限的双端队列：允许<strong>两端插入</strong>，<strong>一端删除</strong>的线性表；</p></li></ul><ol><li><strong>考点：</strong> 判断输出序列的合法化（视频07）</li></ol><p><strong>例</strong>: 数据元素输入序列为 <code>1,2,3,4</code>，判断 4!=24 个输出序列的合法性</p><p><em>PS: 栈中合法的序列，双端队列中一定也合法</em></p><table><thead><tr><th style="text-align:left;"><strong>栈</strong></th><th style="text-align:left;"><strong>输入受限的双端队列</strong></th><th style="text-align:left;"><strong>输出受限的双端队列</strong></th></tr></thead><tbody><tr><td style="text-align:left;">14个合法(卡特兰数)</td><td style="text-align:left;">验证在栈中不合法的序列</td><td style="text-align:left;">验证在栈中不合法的序列</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">只有 4213 和 4231 不合法</td><td style="text-align:left;">只有 4132 和 4231 不合法</td></tr></tbody></table><h2 id="_3-3-栈的应用" tabindex="-1"><a class="header-anchor" href="#_3-3-栈的应用"><span><strong>3.3 栈的应用</strong></span></a></h2><h3 id="_3-3-1-栈在括号匹配中的应用" tabindex="-1"><a class="header-anchor" href="#_3-3-1-栈在括号匹配中的应用"><span><strong>3.3.1 栈在括号匹配中的应用</strong></span></a></h3><p>用栈实现括号匹配</p><ul><li><p><code>((()))</code> 最后出现的左括号最先被匹配 (栈的特性—LIFO);</p></li><li><p>遇到左括号就入栈;</p></li><li><p>遇到右括号，就“消耗”一个左括号 (出栈);</p></li></ul><p>匹配失败情况：</p><ul><li><p>扫描到右括号且栈空，则该右括号单身;</p></li><li><p>扫描完所有括号后，栈非空，则该左括号单身;</p></li><li><p>左右括号不匹配;</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#define MaxSize 10             //定义栈中元素的最大个数</span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>    char data[MaxSize];        //静态数组存放栈中元素</span></span>
<span class="line"><span>    int top;                   //栈顶指针</span></span>
<span class="line"><span>} SqStack;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//初始化栈</span></span>
<span class="line"><span>void InitStack(SqStack &amp;S)          //考试中直接使用基本操作，简要说明接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//判断栈是否为空</span></span>
<span class="line"><span>bool StackEmpty(SqStack &amp;S)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//新元素入栈</span></span>
<span class="line"><span>bool Push(SqStack &amp;S, char x)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//栈顶元素出栈，用x返回</span></span>
<span class="line"><span>bool Pop(SqStack &amp;S, char &amp;x)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool bracketCheck(char str[], int length){</span></span>
<span class="line"><span>    SqStack S;      //声明</span></span>
<span class="line"><span>    InitStack(S);   //初始化栈</span></span>
<span class="line"><span>    for(int i=0; i&lt;length; i++){</span></span>
<span class="line"><span>        if(str[i] == &#39;(&#39; || str[i] == &#39;[&#39; || str[i] == &#39;{&#39;){</span></span>
<span class="line"><span>            Push(S, str[i]);       //扫描到左括号，入栈</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            if(StackEmpty(S))      //扫描到右括号，且当前栈空</span></span>
<span class="line"><span>                return false;      //匹配失败</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            char topElem;          //存储栈顶元素</span></span>
<span class="line"><span>            Pop(S, topElem);       //栈顶元素出栈</span></span>
<span class="line"><span>            if(str[i] == &#39;)&#39; &amp;&amp; topElem != &#39;(&#39; )</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            if(str[i] == &#39;]&#39; &amp;&amp; topElem != &#39;[&#39; )</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            if(str[i] == &#39;}&#39; &amp;&amp; topElem != &#39;{&#39; )</span></span>
<span class="line"><span>                return false;       </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return StackEmpty(S);        //检查完全部括号，栈空说明匹配成功</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-2-栈在表达式求值中的应用" tabindex="-1"><a class="header-anchor" href="#_3-3-2-栈在表达式求值中的应用"><span><strong>3.3.2 栈在表达式求值中的应用</strong></span></a></h3><h3 id="_1-中缀表达式-需要界限符" tabindex="-1"><a class="header-anchor" href="#_1-中缀表达式-需要界限符"><span><strong>1. 中缀表达式 (需要界限符)</strong></span></a></h3><p>运算符在两个操作数中间:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>① a + b</span></span>
<span class="line"><span>② a + b - c</span></span>
<span class="line"><span>③ a + b - c*d</span></span>
<span class="line"><span>④ ((15 ÷ (7-(1+1)))×3)-(2+(1+1))</span></span>
<span class="line"><span>⑤ A + B × (C - D) - E ÷ F</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-后缀表达式-逆波兰表达式" tabindex="-1"><a class="header-anchor" href="#_2-后缀表达式-逆波兰表达式"><span><strong>2. 后缀表达式 (逆波兰表达式)</strong></span></a></h3><p>运算符在两个操作数后面:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>① a b +</span></span>
<span class="line"><span>② ab+ c - / a bc- +</span></span>
<span class="line"><span>③ ab+ cd* -</span></span>
<span class="line"><span>④ 15 7 1 1 + - ÷ 3 × 2 1 1 + + -</span></span>
<span class="line"><span>⑤ A B C D - × + E F ÷ - (机算结果)</span></span>
<span class="line"><span>  A B C D - × E F ÷ - + (不选择)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>中缀表达式转后缀表达式-手算</strong></li></ul><p><strong>步骤1：</strong> 确定中缀表达式中各个运算符的运算顺序</p><p><strong>步骤2：</strong> 选择下一个运算符，按照<code>[左操作数 右操作数 运算符]</code>的方式组合成一个新的操作数</p><p><strong>步骤3：</strong> 如果还有运算符没被处理，继续步骤2</p><p><strong>“左优先”原则:</strong> 只要左边的运算符能先计算，就优先算左边的 (保证运算顺序唯一)；</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>中缀：A + B - C * D / E + F</span></span>
<span class="line"><span>       ①   ④   ②   ③   ⑤     </span></span>
<span class="line"><span>后缀：A B + C D * E / - F +</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重点-中缀表达式转后缀表达式-机算" tabindex="-1"><a class="header-anchor" href="#重点-中缀表达式转后缀表达式-机算"><span><strong>重点：中缀表达式转后缀表达式-机算</strong></span></a></h3><p>初始化一个栈，用于保存暂时还不能确定运算顺序的运算符。<strong>从左到右</strong>处理各个元素，直到末尾。可能遇到三种情况:</p><ul><li><p>遇到<strong>操作数</strong>: 直接加入后缀表达式。</p></li><li><p>遇到<strong>界限符</strong>: 遇到 <code>&#39;(&#39;</code> 直接入栈; 遇到 <code>&#39;)&#39;</code> 则依次弹出栈内运算符并加入后缀表达式，直到弹出 <code>&#39;(&#39;</code> 为止。注意: <code>&#39;(&#39;</code> 不加入后缀表达式。</p></li><li><p>遇到<strong>运算符</strong>: 依次弹出栈中优先级<strong>高于或等于</strong>当前运算符的所有运算符，并加入后缀表达式，若碰到 <code>&#39;(&#39;</code> 或栈空则停止。之后再把当前运算符入栈。</p></li></ul><p>按上述方法处理完所有字符后，将栈中剩余运算符依次弹出，并加入后缀表达式。</p><ul><li><strong>后缀表达式的计算—手算:</strong></li></ul><p>从左往右扫描，每遇到一个运算符，就让运算符前面最近的两个操作数执行对应的运算，合体为一个操作数；</p><p><strong>注意：</strong> 两个操作数的左右顺序</p><h3 id="重点-后缀表达式的计算—机算" tabindex="-1"><a class="header-anchor" href="#重点-后缀表达式的计算—机算"><span><strong>重点：后缀表达式的计算—机算</strong></span></a></h3><p>用栈实现后缀表达式的计算（栈用来存放当前暂时不能确定运算次序的操作数）</p><p><strong>步骤1:</strong> 从左往后扫描下一个元素，直到处理完所有元素;</p><p><strong>步骤2:</strong> 若扫描到操作数，则压入栈，并回到<code>步骤1</code>;否则执行<code>步骤3</code>;</p><p><strong>步骤3:</strong> 若扫描到运算符，则弹出两个栈顶元素，执行相应的运算，运算结果压回栈顶，回到<code>步骤1</code>;</p><p><strong>注意:</strong> 先出栈的是“右操作数”</p><h3 id="_3-前缀表达式-波兰表达式" tabindex="-1"><a class="header-anchor" href="#_3-前缀表达式-波兰表达式"><span><strong>3.前缀表达式 (波兰表达式)</strong></span></a></h3><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>运算符在两个操作数前面:</span></span>
<span class="line"><span>① + a b</span></span>
<span class="line"><span>② - +ab  c</span></span>
<span class="line"><span>③ - +ab *cd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>中缀表达式转前缀表达式—手算</strong></li></ul><p><strong>步骤1：</strong> 确定中缀表达式中各个运算符的运算顺序</p><p><strong>步骤2：</strong> 选择下一个运算符，按照<code>[运算符 左操作数 右操作数]</code>的方式组合成一个新的操作数</p><p><strong>步骤3：</strong> 如果还有运算符没被处理，就继续执行<code>步骤2</code></p><p><strong>“右优先”原则:</strong> 只要右边的运算符能先计算，就优先算<strong>右边</strong>的;</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>中缀：A + B * (C - D) - E / F</span></span>
<span class="line"><span>       ⑤   ③    ②    ④   ①</span></span>
<span class="line"><span>前缀：+ A - * B - C D / E F</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>前缀表达式的计算—机算</strong></li></ul><p>用栈实现前缀表达式的计算</p><p><strong>步骤1:</strong> 从右往左扫描下一个元素，直到处理完所有元素；</p><p><strong>步骤2:</strong> 若扫描到操作数则压入栈，并回到<code>步骤1</code>，否则执行<code>步骤3</code></p><p><strong>步骤3:</strong> 若扫描到运算符，则弹出两个栈顶元素，执行相应运算，运算结果压回栈顶，回到<code>步骤1</code>；</p><p><strong>注意:</strong> 先出栈的是“左操作数”</p><h3 id="_4-中缀表达式的计算-用栈实现" tabindex="-1"><a class="header-anchor" href="#_4-中缀表达式的计算-用栈实现"><span><strong>4.中缀表达式的计算(用栈实现)</strong></span></a></h3><p>两个算法的结合： <a href="https://blog.csdn.net/iosapp#%E9%87%8D%E7%82%B9%E4%B8%AD%E7%BC%80%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%BD%AC%E5%90%8E%E7%BC%80%E8%A1%A8%E8%BE%BE%E5%BC%8F-%E6%9C%BA%E7%AE%97" target="_blank" rel="noopener noreferrer">中缀转后缀</a> + <a href="https://blog.csdn.net/iosapp#%E9%87%8D%E7%82%B9%E5%90%8E%E7%BC%80%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%AE%97" target="_blank" rel="noopener noreferrer">后缀表达式的求值</a></p><ul><li><p>初始化两个栈，<strong>操作数栈</strong> 和<strong>运算符栈</strong></p></li><li><p>若扫描到操作数，压人操作数栈</p></li><li><p>若扫描到运算符或界限符，则按照“中缀转后缀”相同的逻辑压入运算符栈 (期间也会弹出运算符，每当弹出一个运算符时，就需要再弹出两个操作数栈的栈项元素并执行相应运算，运算结果再压回操作数栈)</p></li></ul><h3 id="_3-3-3-栈在递归中的应用" tabindex="-1"><a class="header-anchor" href="#_3-3-3-栈在递归中的应用"><span><strong>3.3.3 栈在递归中的应用</strong></span></a></h3><p>函数调用的特点：最后被调用的函数最先执行结束(LIFO)</p><p>函数调用时，需要用一个栈存储：</p><ul><li><p>调用返回地址</p></li><li><p>实参</p></li><li><p>局部变量</p></li></ul><p>递归调用时，函数调用栈称为 “递归工作栈”:</p><ul><li><p>每进入一层递归，就将递归调用所需信息压入栈顶；</p></li><li><p>每退出一层递归，就从栈顶弹出相应信息；</p></li></ul><p><strong>缺点</strong>：太多层递归可能回导致栈溢出；</p><p>适合用“递归”算法解决：可以把原始问题转换为属性相同，但规模较小的问题；</p><h2 id="_3-3-队列的应用" tabindex="-1"><a class="header-anchor" href="#_3-3-队列的应用"><span><strong>3.3 队列的应用</strong></span></a></h2><h3 id="_3-3-1-树的层次遍历" tabindex="-1"><a class="header-anchor" href="#_3-3-1-树的层次遍历"><span><strong>3.3.1 树的层次遍历</strong></span></a></h3><p><em>（详见“树”章节）</em></p><h3 id="_3-3-2-图的广度优先遍历" tabindex="-1"><a class="header-anchor" href="#_3-3-2-图的广度优先遍历"><span><strong>3.3.2 图的广度优先遍历</strong></span></a></h3><p><em>（详见“图”章节）</em></p><h3 id="_3-3-3-队列在操作系统中的应用" tabindex="-1"><a class="header-anchor" href="#_3-3-3-队列在操作系统中的应用"><span><strong>3.3.3 队列在操作系统中的应用</strong></span></a></h3><p>多个进程争抢着使用优先的系统资源时，FCFS（先来先服务）是一种常用策略</p><p>Eg: CPU资源分配、打印数据缓冲区</p><h2 id="_3-4-特殊矩阵的压缩存储" tabindex="-1"><a class="header-anchor" href="#_3-4-特殊矩阵的压缩存储"><span><strong>3.4 特殊矩阵的压缩存储</strong></span></a></h2><h3 id="_3-4-1-数组的存储结构" tabindex="-1"><a class="header-anchor" href="#_3-4-1-数组的存储结构"><span><strong>3.4.1 数组的存储结构</strong></span></a></h3><ol><li>一维数组</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Elemtype a[10];</span></span>
<span class="line"><span>1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>各数组元素大小相同，物理上连续存放；<br> 起始地址：<code>LOC</code></p><p>数组下标：默认从0开始！</p><p>数组元素 <code>a[i]</code> 的存放地址 = <code>LOC + i × sizeof(ElemType)</code></p><ol><li>二维数组</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Elemtype b[2][4]; //2行4列的二维数组</span></span>
<span class="line"><span>1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>行优先/列优先存储优点：实现随机存储<br> 起始地址：<code>LOC</code></p><p>M行N列的二维数组 <code>b[M][N]</code> 中，<code>b[i][j]</code>的存储地址：</p><ul><li><p>行优先存储: <code>LOC + (i×N + j) × sizeof(ElemType)</code></p></li><li><p>列优先存储：<code>LOC + (j×M + i) × sizeof(ElemType)</code></p></li></ul><h3 id="_3-4-2-普通矩阵的存储" tabindex="-1"><a class="header-anchor" href="#_3-4-2-普通矩阵的存储"><span><strong>3.4.2 普通矩阵的存储</strong></span></a></h3><p>二维数组存储</p><ul><li><p>描述矩阵元素时，行、列号通常从<code>1</code>开始；</p></li><li><p>描述数组时，通常下标从 <code>0</code> 开始；</p></li></ul><h3 id="_3-4-3-特殊矩阵的存储" tabindex="-1"><a class="header-anchor" href="#_3-4-3-特殊矩阵的存储"><span><strong>3.4.3 特殊矩阵的存储</strong></span></a></h3><p><em>特殊矩阵——压缩存储空间</em></p><ol><li><p>对称矩阵(方阵)</p></li><li><p>三角矩阵(方阵)</p></li><li><p>三对角矩阵(方阵)</p></li><li><p>稀疏矩阵</p></li></ol><ul><li><p>顺序存储——三元组</p></li><li><p>链式存储——十字链表法</p></li></ul>`,195)]))}const c=n(l,[["render",p]]),t=JSON.parse(`{"path":"/cs/data-structure/stack-queue.html","title":"栈与队列","lang":"zh-CN","frontmatter":{"description":"栈与队列 3.1 栈 (stack) 3.1.1 栈的基本概念 栈的定义 栈是特殊的线性表：只允许在一端进行插入或删除操作， 其逻辑结构与普通线性表相同； 栈顶：允许进行插入和删除的一端 （最上面的为栈顶元素）； 栈底：不允许进行插入和删除的一端 （最下面的为栈底元素）； 空栈：不含任何元素的空表； 特点：后进先出（后进栈的元素先出栈）； 缺点：栈的大...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"栈与队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-04T11:21:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HuPei\\",\\"url\\":\\"https://ishupei.github.io\\"}]}"],["meta",{"property":"og:url","content":"https://ishupei.github.io/cs/data-structure/stack-queue.html"}],["meta",{"property":"og:site_name","content":"hupei's page"}],["meta",{"property":"og:title","content":"栈与队列"}],["meta",{"property":"og:description","content":"栈与队列 3.1 栈 (stack) 3.1.1 栈的基本概念 栈的定义 栈是特殊的线性表：只允许在一端进行插入或删除操作， 其逻辑结构与普通线性表相同； 栈顶：允许进行插入和删除的一端 （最上面的为栈顶元素）； 栈底：不允许进行插入和删除的一端 （最下面的为栈底元素）； 空栈：不含任何元素的空表； 特点：后进先出（后进栈的元素先出栈）； 缺点：栈的大..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-04T11:21:57.000Z"}],["meta",{"property":"article:modified_time","content":"2025-09-04T11:21:57.000Z"}]]},"git":{"createdTime":1756984917000,"updatedTime":1756984917000,"contributors":[{"name":"hupei","username":"hupei","email":"ishupei@qq.com","commits":1,"url":"https://github.com/hupei"}]},"readingTime":{"minutes":18.43,"words":5529},"filePathRelative":"cs/data-structure/stack-queue.md","autoDesc":true}`);export{c as comp,t as data};
