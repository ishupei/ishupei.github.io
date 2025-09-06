import{_ as n,c as a,b as i,o as e}from"./app-Bmvlbfib.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="树" tabindex="-1"><a class="header-anchor" href="#树"><span>树</span></a></h1><h2 id="_5-1-树的基本概念" tabindex="-1"><a class="header-anchor" href="#_5-1-树的基本概念"><span><strong>5.1 树的基本概念</strong></span></a></h2><h3 id="_5-1-1-树的定义" tabindex="-1"><a class="header-anchor" href="#_5-1-1-树的定义"><span><strong>5.1.1 树的定义</strong></span></a></h3><ul><li><p>空树</p></li><li><p>根结点、分支结点、叶子结点</p></li><li><p>非空树的特性</p></li><li><p>子树</p></li></ul><h3 id="_5-1-2-基本术语" tabindex="-1"><a class="header-anchor" href="#_5-1-2-基本术语"><span><strong>5.1.2 基本术语</strong></span></a></h3><ol><li><p>结点之间的关系描述</p><ol><li><p>祖先、子孙、双亲、兄弟…结点</p></li><li><p><strong>路径、路径长度</strong></p></li></ol></li><li><p>结点、树的属性描述</p><ol><li><p>结点的层次（深度）——从上往下</p></li><li><p>结点的高度——从下往上</p></li><li><p>树的高度——总共多少层</p></li><li><p><strong>结点的度</strong>——有几个孩子</p></li><li><p><strong>树的度</strong>——各结点的度的最大值</p></li></ol></li><li><p>有序树、无序树</p></li><li><p>森林</p></li></ol><h3 id="_5-1-3-树的性质" tabindex="-1"><a class="header-anchor" href="#_5-1-3-树的性质"><span><strong>5.1.3 树的性质</strong></span></a></h3><ol><li><p>结点数 = 总度数 + 1</p></li><li><p>度为<code>m</code>的数、<code>m</code>叉数的区别</p></li></ol><table><thead><tr><th style="text-align:left;"><strong>度为m的树</strong></th><th style="text-align:left;"><strong>m叉树</strong></th></tr></thead><tbody><tr><td style="text-align:left;">树的度：m为各结点的度的最大值</td><td style="text-align:left;">m叉树：每个结点最多只能有 m 个孩子的树</td></tr><tr><td style="text-align:left;">任意结点的度 ≦ m</td><td style="text-align:left;">任意结点的度 ≦ m</td></tr><tr><td style="text-align:left;">至少有一个结点度 = m</td><td style="text-align:left;">允许所有结点的度 &lt; m</td></tr><tr><td style="text-align:left;">一定是非空树，至少有m+1个结点</td><td style="text-align:left;">可以是空树</td></tr><tr><td style="text-align:left;">第i层至多有 m^(i-1)个结点</td><td style="text-align:left;">第i层至多有 m^(i-1)个结点</td></tr><tr><td style="text-align:left;">高度为h、度为 m 的树至少有h+m-1个结点</td><td style="text-align:left;">高度为h的m叉树至多有(m^h-1)/(m-1)个结点；至少有h个结点</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">具有n个结点的m叉树，最小高度为⌈ logm(n(m-2)+1)⌉</td></tr></tbody></table><h2 id="_5-2-二叉树的概念" tabindex="-1"><a class="header-anchor" href="#_5-2-二叉树的概念"><span><strong>5.2 二叉树的概念</strong></span></a></h2><h3 id="_5-2-1-二叉树的定义与特性" tabindex="-1"><a class="header-anchor" href="#_5-2-1-二叉树的定义与特性"><span><strong>5.2.1 二叉树的定义与特性</strong></span></a></h3><ol><li>二叉树有左右之分，次序不能颠倒</li></ol><h3 id="_5-2-2几种特殊的二叉树" tabindex="-1"><a class="header-anchor" href="#_5-2-2几种特殊的二叉树"><span><strong>5.2.2几种特殊的二叉树</strong></span></a></h3><ol><li><p>满二叉树</p></li><li><p>完全二叉树</p></li><li><p>二叉排序树</p></li><li><p>平衡二叉树</p></li></ol><h3 id="_5-2-3-二叉树的存储结构" tabindex="-1"><a class="header-anchor" href="#_5-2-3-二叉树的存储结构"><span><strong>5.2.3 二叉树的存储结构</strong></span></a></h3><ol><li>顺序存储</li></ol><p>二叉树的顺序存储中，一定要把二叉树的结点编号与完全二叉树对应起来；</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#define MaxSize 100</span></span>
<span class="line"><span>struct TreeNode{</span></span>
<span class="line"><span>   ElemType value; //结点中的数据元素</span></span>
<span class="line"><span>   bool isEmpty;   //结点是否为空</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>   TreeNode t[MaxSize];</span></span>
<span class="line"><span>   for (int i=0; i&lt;MaxSize; i++){</span></span>
<span class="line"><span>      t[i].isEmpty = true;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>考点：</strong></p><ul><li><p><code>i</code>的左孩子：<code>2i</code></p></li><li><p><code>i</code>的右孩子：<code>2i + 1</code></p></li><li><p><code>i</code>的父节点：<code>⌊i/2⌋</code></p></li><li><p><code>i</code>所在的层次：<code>⌊log2n + 1⌋</code> or <code>⌈ log2n+1)⌉</code></p></li></ul><p><strong>若完全二叉树中共有n个结点</strong>（非完全二叉树不能用）</p><ul><li><p>判断<code>i</code>是否有左孩子：<code>2i ≦ n</code></p></li><li><p>判断<code>i</code>是否有右孩子：<code>2i+1 ≦ n</code></p></li><li><p>判断<code>i</code>是否时叶子/分支结点：<code>i &gt; ⌊n/2⌋</code></p></li></ul><p><strong>最坏情况：</strong> 高度为h且只有h个结点的单支树（所有结点只有右孩子），也至少需要2^h-1个存储单元；</p><p><strong>结论：</strong> 二叉树的顺序存储结构，只适合存储完全二叉树和满二叉树</p><ol><li>链式存储</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//二叉树的结点</span></span>
<span class="line"><span>struct ElemType{</span></span>
<span class="line"><span>   int value;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct BiTNode{</span></span>
<span class="line"><span>   ElemType data;            //数据域</span></span>
<span class="line"><span>   struct BiTNode *lchild, *rchild;     //左、右孩子指针</span></span>
<span class="line"><span>}BiTNode, *BiTree;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//定义一棵空树</span></span>
<span class="line"><span>BiTree root = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//插入根节点</span></span>
<span class="line"><span>root = (BiTree) malloc (sizeof(BiTNode));</span></span>
<span class="line"><span>root -&gt; data = {1};</span></span>
<span class="line"><span>root -&gt; lchild = NULL;</span></span>
<span class="line"><span>root -&gt; rchild = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//插入新结点</span></span>
<span class="line"><span>BiTNode *p = (BiTree*) malloc (sizeof(BiTNode));</span></span>
<span class="line"><span>p -&gt; data = {2};</span></span>
<span class="line"><span>p -&gt; lchild = NULL;</span></span>
<span class="line"><span>p -&gt; rchild = NULL;</span></span>
<span class="line"><span>root -&gt; lchild = p;         //作为根节点的左孩子</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>找到指定结点p的左/右孩子；</p></li><li><p>找到指定节点p的父结点: 只能从根结点开始遍历，也可以使用<strong>三叉链表</strong></p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//二叉树的结点（链式存储）</span></span>
<span class="line"><span>typedef struct BiTNode{</span></span>
<span class="line"><span>   ElemType data;          //数据域</span></span>
<span class="line"><span>   struct BiTNode *lchild, *rchild;     //左、右孩子指针</span></span>
<span class="line"><span>   struct BiTNode *parent;              //父节点指针</span></span>
<span class="line"><span>}BiTNode, *BiTree;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>n个结点的二叉链表共有n+1个空链域</li></ul><h2 id="_5-3-二叉树的遍历和线索二叉树" tabindex="-1"><a class="header-anchor" href="#_5-3-二叉树的遍历和线索二叉树"><span><strong>5.3 二叉树的遍历和线索二叉树</strong></span></a></h2><h3 id="_5-3-1-二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#_5-3-1-二叉树的遍历"><span><strong>5.3.1 二叉树的遍历</strong></span></a></h3><ol><li>先序遍历（根左右）</li></ol><ul><li><p>若二叉树为空，不用操作</p></li><li><p>若二叉树非空：</p><ul><li><p>访问根节点</p></li><li><p>先序遍历左子树</p></li><li><p>先序遍历右子树</p></li></ul></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//先序遍历</span></span>
<span class="line"><span>typedef struct BiTNode{</span></span>
<span class="line"><span>   ElemType data;          </span></span>
<span class="line"><span>   struct BiTNode *lchild, *rchild; </span></span>
<span class="line"><span>}BiTNode, *BiTree;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void PreOrder(BiTree T){</span></span>
<span class="line"><span>   if(T!=NULL){</span></span>
<span class="line"><span>      visit(T);                   //访问根结点</span></span>
<span class="line"><span>      PreOrder(T-&gt;lchild);        //递归遍历左子树</span></span>
<span class="line"><span>      PreOrder(T-&gt;rchild);        //递归遍历右子树</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>空间复杂度：</strong> O(h)</p><ol><li>中序遍历（左根右）</li></ol><ul><li><p>若二叉树为空，不用操作</p></li><li><p>若二叉树非空：</p><ul><li><p>先序遍历左子树</p></li><li><p>访问根节点</p></li><li><p>先序遍历右子树</p></li></ul></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//中序遍历</span></span>
<span class="line"><span>typedef struct BiTNode{</span></span>
<span class="line"><span>   ElemType data;          </span></span>
<span class="line"><span>   struct BiTNode *lchild, *rchild; </span></span>
<span class="line"><span>}BiTNode, *BiTree;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void InOrder(BiTree T){</span></span>
<span class="line"><span>   if(T!=NULL){</span></span>
<span class="line"><span>      InOrder(T-&gt;lchild);         //递归遍历左子树</span></span>
<span class="line"><span>      visit(T);                   //访问根结点</span></span>
<span class="line"><span>      InOrder(T-&gt;rchild);         //递归遍历右子树</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>后续遍历（左右根）</li></ol><ul><li><p>若二叉树为空，不用操作</p></li><li><p>若二叉树非空：</p><ul><li><p>先序遍历左子树</p></li><li><p>先序遍历右子树</p></li><li><p>访问根节点</p></li></ul></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//后序遍历</span></span>
<span class="line"><span>typedef struct BiTNode{</span></span>
<span class="line"><span>   ElemType data;          </span></span>
<span class="line"><span>   struct BiTNode *lchild, *rchild; </span></span>
<span class="line"><span>}BiTNode, *BiTree;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void PostOrder(BiTree T){</span></span>
<span class="line"><span>   if(T!=NULL){</span></span>
<span class="line"><span>      PostOrder(T-&gt;lchild);       //递归遍历左子树    </span></span>
<span class="line"><span>      PostOrder(T-&gt;rchild);       //递归遍历右子树</span></span>
<span class="line"><span>      visit(T);                 //访问根结点</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>求数的深度</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>int treeDepth(BiTree T){</span></span>
<span class="line"><span>    if(T== NULL){</span></span>
<span class="line"><span>        return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>    int l = treeDepth(T-&gt;lchild);</span></span>
<span class="line"><span>    int r = treeDepth(T-&gt;rchild);</span></span>
<span class="line"><span>      //树的深度=Max(左子树深度，右子树深度)+1</span></span>
<span class="line"><span>    return l&gt;r ? l+1 : r+1;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>二叉树的层次遍历</li></ol><p>算法思想：</p><ul><li><p>初始化一个辅助队列</p></li><li><p>根节点入队</p></li><li><p>若队列非空，则队头结点出队，访问该结点，依次将其左、右孩子插入队尾（如果有的话）</p></li><li><p>重复以上操作直至队列为空</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//二叉树的结点(链式存储)</span></span>
<span class="line"><span>typedef struct BiTNode{</span></span>
<span class="line"><span>   char data;          </span></span>
<span class="line"><span>   struct BiTNode *lchild, *rchild; </span></span>
<span class="line"><span>}BiTNode, *BiTree;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//链式队列结点</span></span>
<span class="line"><span>typedef struct LinkNode{</span></span>
<span class="line"><span>   BiTNode * data;</span></span>
<span class="line"><span>   struct LinkNode *next;</span></span>
<span class="line"><span>}LinkNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>   LinkNode *front, *rear;  </span></span>
<span class="line"><span>}LinkQueue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//层序遍历</span></span>
<span class="line"><span>void LevelOrder(BiTree T){</span></span>
<span class="line"><span>   LinkQueue Q;</span></span>
<span class="line"><span>   InitQueue (Q);                //初始化辅助队列</span></span>
<span class="line"><span>   BiTree p;</span></span>
<span class="line"><span>   EnQueue(Q,T);                   //将根节点入队</span></span>
<span class="line"><span>   while(!isEmpty(Q)){              //队列不空则循环</span></span>
<span class="line"><span>      DeQueue(Q,p);                //队头结点出队</span></span>
<span class="line"><span>      visit(p);                    //访问出队结点</span></span>
<span class="line"><span>      if(p-&gt;lchild != NULL)</span></span>
<span class="line"><span>         EnQueue(Q,p-&gt;lchild);         //左孩子入队</span></span>
<span class="line"><span>      if(p-&gt;rchild != NULL)</span></span>
<span class="line"><span>         EnQueue(Q,p-&gt;rchild);         //右孩子入队</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>由遍历序列构造二叉树</li></ol><ul><li><p>先序序列 + 中序序列</p></li><li><p>后序序列 + 中序序列</p></li><li><p>层序序列 + 中序序列</p></li></ul><p><strong>key:</strong> 找到树的根节点，并根据中序序列划分左右子树，再找到左右子树根节点、</p><h3 id="_5-3-2-线索二叉树" tabindex="-1"><a class="header-anchor" href="#_5-3-2-线索二叉树"><span><strong>5.3.2 线索二叉树</strong></span></a></h3><ol><li><p>线索二叉树的概念与作用</p></li><li><p>线索二叉树的存储结构</p></li></ol><ul><li>中序线索二叉树——线索指向中序前驱、中序后继</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//线索二叉树结点</span></span>
<span class="line"><span>typedef struct ThreadNode{</span></span>
<span class="line"><span>   ElemType data;</span></span>
<span class="line"><span>   struct ThreadNode *lchild, *rchild;</span></span>
<span class="line"><span>   int ltag, rtag;                // 左、右线索标志</span></span>
<span class="line"><span>}ThreadNode, *ThreadTree;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tag == 0: 指针指向孩子<br> tag == 1: 指针是“线索”</p></blockquote><ul><li><p>先序线索二叉树——线索指向先序前驱、先序后继</p></li><li><p>后序线索二叉树——线索指向后序前驱、后序后继</p></li></ul><ol><li>二叉树的线索化</li></ol><ul><li>中序线索化</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//线索二叉树结点</span></span>
<span class="line"><span>typedef struct ThreadNode{</span></span>
<span class="line"><span>   int data;</span></span>
<span class="line"><span>   struct ThreadNode *lchild, *rchild;</span></span>
<span class="line"><span>   int ltag, rtag;                // 左、右线索标志</span></span>
<span class="line"><span>}ThreadNode, *ThreadTree;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//全局变量pre, 指向当前访问的结点的前驱</span></span>
<span class="line"><span>TreadNode *pre=NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//中序遍历二叉树，一边遍历一边线索化</span></span>
<span class="line"><span>void InThread(ThreadTree T){</span></span>
<span class="line"><span>    if(T!=NULL){</span></span>
<span class="line"><span>        InThread(T-&gt;lchild);        //中序遍历左子树</span></span>
<span class="line"><span>        visit(T);                   //访问根节点</span></span>
<span class="line"><span>        InThread(T-&gt;rchild);        //中序遍历右子树</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void visit(ThreadNode *q){</span></span>
<span class="line"><span>   if(q-&gt;lchild == NULL){               //左子树为空，建立前驱线索   </span></span>
<span class="line"><span>      q-&gt;lchild = pre;</span></span>
<span class="line"><span>      q-&gt;ltag = 1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   if(pre!=NULL &amp;&amp; pre-&gt;rchild == NULL){ </span></span>
<span class="line"><span>      pre-&gt;rchild = q;           //建立前驱结点的后继线索</span></span>
<span class="line"><span>      pre-&gt;rtag = 1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   pre = q;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//中序线索化二叉树T</span></span>
<span class="line"><span>void CreateInThread(ThreadTree T){</span></span>
<span class="line"><span>   pre = NULL;                  //pre初始为NULL</span></span>
<span class="line"><span>   if(T!=NULL){                  //非空二叉树才能进行线索化</span></span>
<span class="line"><span>      InThread(T);              //中序线索化二叉树</span></span>
<span class="line"><span>      if(pre-&gt;rchild == NULL)</span></span>
<span class="line"><span>         pre-&gt;rtag=1;           //处理遍历的最后一个结点</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>先序线索化 o555ooooooo</li></ul><p><em>注意【转圈】问题，当</em><code>ltag==0</code>时，才能对左子树先序线索化</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>typedef struct ThreadNode{</span></span>
<span class="line"><span>   int data;</span></span>
<span class="line"><span>   struct ThreadNode *lchild, *rchild;</span></span>
<span class="line"><span>   int ltag, rtag;                // 左、右线索标志</span></span>
<span class="line"><span>}ThreadNode, *ThreadTree;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//全局变量pre, 指向当前访问的结点的前驱</span></span>
<span class="line"><span>TreadNode *pre=NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//先序遍历二叉树，一边遍历一边线索化</span></span>
<span class="line"><span>void PreThread(ThreadTree T){</span></span>
<span class="line"><span>   if(T!=NULL){</span></span>
<span class="line"><span>      visit(T);</span></span>
<span class="line"><span>      if(T-&gt;ltag == 0)         //lchild不是前驱线索</span></span>
<span class="line"><span>         PreThread(T-&gt;lchild);</span></span>
<span class="line"><span>      PreThread(T-&gt;rchild);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void visit(ThreadNode *q){</span></span>
<span class="line"><span>   if(q-&gt;lchid = NULL){                 //左子树为空，建立前驱线索   </span></span>
<span class="line"><span>      q-&gt;lchild = pre;</span></span>
<span class="line"><span>      q-&gt;ltag = 1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if(pre!=NULL &amp;&amp; pre-&gt;rchild = NULL){ </span></span>
<span class="line"><span>      pre-&gt;rchild = q;           //建立前驱结点的后继线索</span></span>
<span class="line"><span>      pre-&gt;rtag = 1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   pre = q;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//先序线索化二叉树T</span></span>
<span class="line"><span>void CreateInThread(ThreadTree T){</span></span>
<span class="line"><span>   pre = NULL;                //pre初始为NULL</span></span>
<span class="line"><span>   if(T!=NULL);{              //非空二叉树才能进行线索化</span></span>
<span class="line"><span>      PreThread(T);            //先序线索化二叉树</span></span>
<span class="line"><span>      if(pre-&gt;rchild == NULL)</span></span>
<span class="line"><span>         pre-&gt;rtag=1;         //处理遍历的最后一个结点</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>后序线索化</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>typedef struct ThreadNode{</span></span>
<span class="line"><span>   int data;</span></span>
<span class="line"><span>   struct ThreadNode *lchild, *rchild;</span></span>
<span class="line"><span>   int ltag, rtag;                // 左、右线索标志</span></span>
<span class="line"><span>}ThreadNode, *ThreadTree;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//全局变量pre, 指向当前访问的结点的前驱</span></span>
<span class="line"><span>TreadNode *pre=NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//先序遍历二叉树，一边遍历一边线索化</span></span>
<span class="line"><span>void PostThread(ThreadTree T){</span></span>
<span class="line"><span>   if(T!=NULL){</span></span>
<span class="line"><span>      PostThread(T-&gt;lchild);</span></span>
<span class="line"><span>      PostThread(T-&gt;rchild);</span></span>
<span class="line"><span>      visit(T);                  //访问根节点</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void visit(ThreadNode *q){</span></span>
<span class="line"><span>   if(q-&gt;lchid = NULL){                 //左子树为空，建立前驱线索   </span></span>
<span class="line"><span>      q-&gt;lchild = pre;</span></span>
<span class="line"><span>      q-&gt;ltag = 1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if(pre!=NULL &amp;&amp; pre-&gt;rchild = NULL){ </span></span>
<span class="line"><span>      pre-&gt;rchild = q;           //建立前驱结点的后继线索</span></span>
<span class="line"><span>      pre-&gt;rtag = 1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   pre = q;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//先序线索化二叉树T</span></span>
<span class="line"><span>void CreateInThread(ThreadTree T){</span></span>
<span class="line"><span>   pre = NULL;                //pre初始为NULL</span></span>
<span class="line"><span>   if(T!=NULL);{              //非空二叉树才能进行线索化</span></span>
<span class="line"><span>      PostThread(T);            //后序线索化二叉树</span></span>
<span class="line"><span>      if(pre-&gt;rchild == NULL)</span></span>
<span class="line"><span>         pre-&gt;rtag=1;         //处理遍历的最后一个结点</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>线索二叉树中找前驱、后继</li></ol><p>中序线索二叉树找中序后继：在中序线索二叉树中找到指定节点 <code>*p</code> 的中序后继 <code>next</code></p><blockquote><p>若 <code>p-&gt;rtag == 1</code>, 则 <code>next = p-&gt;rchild</code>;<br> 若 <code>p-&gt;rtag == 0</code>, 则 p 必有右孩子, 则 next = p的右子树中最左下结点;</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//1. 找到以P为根的子树中，第一个被中序遍历的结点</span></span>
<span class="line"><span>ThreadNode *Firstnode(ThreadNode *p){</span></span>
<span class="line"><span>   //循环找到最左下的结点（不一定是叶结点）</span></span>
<span class="line"><span>   while(p-&gt;ltag == 0)</span></span>
<span class="line"><span>      p=p-&gt;lchild;</span></span>
<span class="line"><span>   return p;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2. 在中序线索二叉树中找到结点p的后继结点</span></span>
<span class="line"><span>ThreadNode *Nextnode(ThreadNode *p){</span></span>
<span class="line"><span>   //右子树最左下结点</span></span>
<span class="line"><span>   if(p-&gt;rtag==0)</span></span>
<span class="line"><span>      return Firstnode(p-&gt;rchild);</span></span>
<span class="line"><span>   else </span></span>
<span class="line"><span>      return p-&gt;rchild; //rtag==1，直接返回后继线索</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//3. 对中序线索二叉树进行中序遍历</span></span>
<span class="line"><span>void Inorder(ThreadNode *T){            //T为根节点指针</span></span>
<span class="line"><span>   for(ThreadNode *p = Firstnode(T); p!=NULL; p = Nextnode(p))</span></span>
<span class="line"><span>      visit(p);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度 = O(1)<br> 中序线索二叉树找中序前驱：在中序线索二叉树中找到指定节点 <code>*p</code> 的中序前驱 <code>pre</code></p><blockquote><p>若 <code>p-&gt;ltag == 1</code>, 则 <code>next = p-&gt;lchild</code>;<br> 若 <code>p-&gt;ltag == 0</code>, 则 p 必有左孩子, 则 next = p的左子树中最右下结点;</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//1. 找到以P为根的子树中，第一个被中序遍历的结点</span></span>
<span class="line"><span>ThreadNode *Lastnode(ThreadNode *p){</span></span>
<span class="line"><span>   //循环找到最右下的结点（不一定是叶结点）</span></span>
<span class="line"><span>   while(p-&gt;rtag == 0)</span></span>
<span class="line"><span>      p=p-&gt;rchild;</span></span>
<span class="line"><span>   return p;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2. 在中序线索二叉树中找到结点p的前驱结点</span></span>
<span class="line"><span>ThreadNode *Prenode(ThreadNode *p){</span></span>
<span class="line"><span>   //左子树最右下结点</span></span>
<span class="line"><span>   if(p-&gt;ltag==0)</span></span>
<span class="line"><span>      return Lastnode(p-&gt;lchild);</span></span>
<span class="line"><span>   else </span></span>
<span class="line"><span>      return p-&gt;lchild; //rtag==1，直接返回前驱线索</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//3. 对中序线索二叉树进行逆向中序遍历</span></span>
<span class="line"><span>void RevInorder(ThreadNode *T){            //T为根节点指针</span></span>
<span class="line"><span>   for(ThreadNode *p = Lastnode(T); p!=NULL; p = Prenode(p))</span></span>
<span class="line"><span>      visit(p);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先序线索二叉树找先序后继：在先序线索二叉树中找到指定节点 <code>*p</code> 的先序后继 <code>next</code></p><blockquote><p>若 <code>p-&gt;rtag == 1</code>, 则 <code>next = p-&gt;rchild</code>;<br> 若 <code>p-&gt;rtag == 0</code>, 则 p 必有右孩子（左孩子不知道）<br> case1: 若p有左孩子 ——— 根 <strong>左</strong> 右 / 根 (<strong>根</strong> 左 右) 右<br> case2: 若p没有左孩子 ——— 根 <strong>右</strong> / 根 (根* *左 右)<br> 先序线索二叉树找先序前驱：在先序线索二叉树中找到指定节点 <code>*p</code> 的先序前驱<code>pre</code></p></blockquote><blockquote><p>若 <code>p-&gt;ltag == 1</code>, 则 <code>next = p-&gt;lchild</code>;<br> 若 <code>p-&gt;ltag == 0</code>, 则 p 必有左孩子，但是先序遍历中，左右子树的结点只可能是根的后继，不可能是前驱，所以不能从左右孩子里寻找p的先序前驱，（除非从头开始遍历/三叉链表<br> case1: 如果能够找到p的父节点，且p是左孩子 —— p的父节点就是p的前驱；<br> case2: 如果能够找到p的父节点，且p是右孩子，且其左兄弟为空 —— p的父节点就是p的前驱；<br> case3: 如果能够找到p的父节点，且p是右孩子，且其左兄弟非空 —— p的前驱为左兄弟子树中最后一个被先序遍历到的结点（根节点出发，先往右，右没有往左，找到最下一层的结点）；<br> case4: p没有父节点，即p为根节点，则p没有先序前驱</p></blockquote><ul><li>[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-YjVVJjtQ-1623943811481)(先序线索二叉树找先序前驱.PNG)]</li></ul><p>后序线索二叉树找后序前驱：在后序线索二叉树中找到指定节点 <code>*p</code> 的后序前驱<code>pre</code></p><blockquote><p>若 <code>p-&gt;ltag == 1</code>, 则 <code>next = p-&gt;lchild</code>;<br> 若 <code>p-&gt;ltag == 0</code>, 则 p 必有左孩子（不知道有没有右孩子）<br> case1: 若p有右孩子 ——— 左 <strong>右</strong> 根 / 左 (左 右 <strong>根</strong>) 根<br> case2: 若p没有右孩子 ——— <strong>左</strong> 根 （左子树按后序遍历，最后一个结点，p的左孩子）<br> 后序线索二叉树找后序后继：在后序线索二叉树中找到指定节点 <code>*p</code> 的后序后继<code>next</code></p></blockquote><blockquote><p>若 <code>p-&gt;rtag == 1</code>, 则 <code>next = p-&gt;rchild</code>;<br> 若 <code>p-&gt;rtag == 0</code>, 则 p 必有右孩子, 左孩子不知道, 但是在后序遍历中，左右子树中的结点只有可能是根的前驱，而不可能是根的后继，所以找不到后继，（除非从头开始遍历/三叉链表<br> case1: 如果能找到p的父节点，且p是右孩子 —— p的父节点即为其后继<br> case2: 如果能找到p的父节点，且p是左孩子，其右兄弟为空 —— p的父节点即为其后继<br> case3: 如果能找到p的父节点，且p是左孩子，其右兄弟非空 —— p的后继为其右兄弟子树中第一个被后序遍历的结点；<br> case4: p没有父节点，即p为根节点，则p没有后序后继；<br><strong>总结</strong></p></blockquote><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;"><strong>中序线索二叉树</strong></th><th style="text-align:left;"><strong>先序线索二叉树</strong></th><th style="text-align:left;"><strong>后续线索二叉树</strong></th></tr></thead><tbody><tr><td style="text-align:left;">找前驱</td><td style="text-align:left;">T</td><td style="text-align:left;">F</td><td style="text-align:left;">T</td></tr><tr><td style="text-align:left;">找后继</td><td style="text-align:left;">T</td><td style="text-align:left;">T</td><td style="text-align:left;">F</td></tr></tbody></table><h2 id="_5-4-树、森林" tabindex="-1"><a class="header-anchor" href="#_5-4-树、森林"><span><strong>5.4 树、森林</strong></span></a></h2><h3 id="_5-4-1-树的存储结构" tabindex="-1"><a class="header-anchor" href="#_5-4-1-树的存储结构"><span><strong>5.4.1 树的存储结构</strong></span></a></h3><ol><li>双亲表示法(顺序存储)：每个结点中保存指向双亲的指针</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#define MAX_TREE_SIZE 100  //树中最多结点数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct{      //树的结点定义</span></span>
<span class="line"><span>   ElemType data; </span></span>
<span class="line"><span>   int parent;      //双亲位置域</span></span>
<span class="line"><span>}PTNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct{                   //树的类型定义</span></span>
<span class="line"><span>   PTNode nodes[MAX_TREE_SIZE];   //双亲表示</span></span>
<span class="line"><span>   int n;                         //结点数</span></span>
<span class="line"><span>}PTree;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>增：新增数据元素，无需按逻辑上的次序存储；（需要更改结点数<code>n</code>）</p></li><li><p>删（叶子结点）：① 将伪指针域设置为<code>-1</code>；②用后面的数据填补；（需要更改结点数<code>n</code>）</p></li><li><p>查询：①优点-查指定结点的双亲很方便；②缺点-查指定结点的孩子只能从头遍历，空数据导致遍历更慢；</p></li></ul><ol><li>孩子表示法(顺序+链式)</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>struct CTNode{</span></span>
<span class="line"><span>   int child;    //孩子结点在数组中的位置</span></span>
<span class="line"><span>   struct CTNode *next;    // 下一个孩子</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>   ElemType data;</span></span>
<span class="line"><span>   struct CTNode *firstChild;    // 第一个孩子</span></span>
<span class="line"><span>}CTBox;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct{</span></span>
<span class="line"><span>   CTBox nodes[MAX_TREE_SIZE];</span></span>
<span class="line"><span>   int n, r;   // 结点数和根的位置</span></span>
<span class="line"><span>}CTree;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>孩子兄弟表示法（链式）</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>typedef struct CSNode{</span></span>
<span class="line"><span>   ElemType data;                               //数据域</span></span>
<span class="line"><span>   struct CSNode *firstchild, *nextsibling;     //第一个孩子和右兄弟指针, *firstchild 看作左指针，*nextsibling看作右指针</span></span>
<span class="line"><span>}CSNode. *CSTree;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-2-树、森林与二叉树的转换" tabindex="-1"><a class="header-anchor" href="#_5-4-2-树、森林与二叉树的转换"><span><strong>5.4.2 树、森林与二叉树的转换</strong></span></a></h3><p>本质：森林中各个树的根节点之间视为兄弟关系</p><h3 id="_5-4-3-树、森林的遍历" tabindex="-1"><a class="header-anchor" href="#_5-4-3-树、森林的遍历"><span><strong>5.4.3 树、森林的遍历</strong></span></a></h3><ol><li>树的遍历</li></ol><ul><li>先根遍历：若树非空，先访问根节点，再依次对每棵子树进行先根遍历；（与对应二叉树的先序遍历序列相同）</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>void PreOrder(TreeNode *R){</span></span>
<span class="line"><span>   if(R!=NULL){</span></span>
<span class="line"><span>      visit(R);    //访问根节点</span></span>
<span class="line"><span>      while(R还有下一个子树T)</span></span>
<span class="line"><span>         PreOrder(T);      //先跟遍历下一个子树</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>后根遍历：若树非空，先依次对每棵子树进行后根遍历，最后再返回根节点；（与对应二叉树的中序遍历序列相同）</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>void PostOrder(TreeNode *R){</span></span>
<span class="line"><span>   if(R!=NULL){</span></span>
<span class="line"><span>      while(R还有下一个子树T)</span></span>
<span class="line"><span>         PostOrder(T);      //后跟遍历下一个子树</span></span>
<span class="line"><span>      visit(R);    //访问根节点</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>层序遍历（队列实现）：</p><ul><li><p>若树非空，则根结点入队；</p></li><li><p>若队列非空，队头元素出队并访问，同时将该元素的孩子依次入队；</p></li><li><p>重复以上操作直至队尾为空；</p></li></ul></li></ul><ol><li>森林的遍历</li></ol><ul><li><p>先序遍历：等同于依次对各个树进行<strong>先根遍历</strong>；也可以先转换成与之对应的二叉树，对二叉树进行<strong>先序遍历</strong>；</p></li><li><p>中序遍历：等同于依次对各个树进行<strong>后根遍历</strong>；也可以先转换成与之对应的二叉树，对二叉树进行<strong>中序遍历</strong>；</p></li></ul><h2 id="_5-5-树与二叉树的应用" tabindex="-1"><a class="header-anchor" href="#_5-5-树与二叉树的应用"><span><strong>5.5 树与二叉树的应用</strong></span></a></h2>`,100)]))}const c=n(l,[["render",p]]),t=JSON.parse(`{"path":"/cs/data-structure/tree.html","title":"树","lang":"zh-CN","frontmatter":{"description":"树 5.1 树的基本概念 5.1.1 树的定义 空树 根结点、分支结点、叶子结点 非空树的特性 子树 5.1.2 基本术语 结点之间的关系描述 祖先、子孙、双亲、兄弟…结点 路径、路径长度 结点、树的属性描述 结点的层次（深度）——从上往下 结点的高度——从下往上 树的高度——总共多少层 结点的度——有几个孩子 树的度——各结点的度的最大值 有序树、无...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-04T11:21:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HuPei\\",\\"url\\":\\"https://ishupei.github.io\\"}]}"],["meta",{"property":"og:url","content":"https://ishupei.github.io/cs/data-structure/tree.html"}],["meta",{"property":"og:site_name","content":"hupei's page"}],["meta",{"property":"og:title","content":"树"}],["meta",{"property":"og:description","content":"树 5.1 树的基本概念 5.1.1 树的定义 空树 根结点、分支结点、叶子结点 非空树的特性 子树 5.1.2 基本术语 结点之间的关系描述 祖先、子孙、双亲、兄弟…结点 路径、路径长度 结点、树的属性描述 结点的层次（深度）——从上往下 结点的高度——从下往上 树的高度——总共多少层 结点的度——有几个孩子 树的度——各结点的度的最大值 有序树、无..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-04T11:21:57.000Z"}],["meta",{"property":"article:modified_time","content":"2025-09-04T11:21:57.000Z"}]]},"git":{"createdTime":1756984917000,"updatedTime":1756984917000,"contributors":[{"name":"hupei","username":"hupei","email":"ishupei@qq.com","commits":1,"url":"https://github.com/hupei"}]},"readingTime":{"minutes":14.06,"words":4217},"filePathRelative":"cs/data-structure/tree.md","autoDesc":true}`);export{c as comp,t as data};
