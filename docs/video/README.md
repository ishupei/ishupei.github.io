---
title: 视频合集
---

[[toc]]

---
本章节旨在帮助0基础的客户掌握必备的基础知识，以便在后期的代码讲解服务中获得更好的体验。</br>
作者：isHuPei



## 一、前置知识

### 1.1 请求与响应

::: tip HTTP 百度百科  
超文本传输协议（Hyper Text Transfer Protocol，HTTP）是一个简单的请求-响应协议，它通常运行在 TCP 之上。它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应。请求和响应消息的头以 ASCII 形式给出；
:::
可以得出：客户端发起的请求叫 HTTP 请求，服务器返回的响应叫 HTTP 响应。
<img src="https://img0.baidu.com/it/u=597612819,1413887364&fm=253&fmt=auto&app=138&f=JPEG?w=1332&h=492" alt="" />

举个浅浅的例子
当你在浏览器地址栏输入<span style="color:red">www.baidu.com</span>这个地址按下回车，这就属于一次请求的过程。
随后百度的某台服务器返回了百度的搜索页面展现在你的浏览器上，这便是返回的响应。</br>

具体的请看视频：


### 1.2 URL 与资源

### 1.3 MVC 架构

### 1.4 RBAC 权限模型

## 二、技术栈介绍
### 2.1 介绍vue
Vue是目前最主流的前端三大框架(Vue、React和Angular)之一。采用MVVM设计模式，帮助开发者更加快速的构建起前端应用。
特点是：上手快、数据视图双向绑定、便于组件化开发（可不答特点）

提一嘴：我这边的前端用的是vue2写的。
老师追问：vue2与vue3有什么区别？Vue2使⽤的是选项类型API，Vue3使⽤的是合成型API，数据绑定跟数据监视实现上有所区别。

### 2.2 介绍ElementUI
官方网站：https://element.eleme.cn/#/zh-CN/component/installation

ElementUI是饿了么前端出品的一套基于Vue封装的UI组件库。开发者引入element的依赖后，需要什么组件复制粘贴到自己的项目里面，改改就可以用了。

个人建议：保存到书签、老师问道的话边解释边打开网址。

### 2.3 介绍Axios
Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 nodejs。用于前端向后端发送异步网络请求。
### 2.4 介绍Spring
如果把java（企业级）解决方案分为两个阶段的话，前半段是 JavaEE，后半程最为瞩目的就是 spring，已流行了15年之久，他目前可以说整合了所有企业级开发需要的技术组件（SpringSecurity、SpringCloud、SpringBoot），可以说是生命力最旺盛的一个产品。
### 2.5 介绍Spring Boot
Spring Boot是 Spring全家桶中的一套快速配置脚手架，基于spring Boot我们可以快速开发单个微服务应用。采用约定大于配置的设计理念，无需进行繁琐的xml整合配置,并且内嵌了web服务器(Tomcat、Jetty等)，做到了开箱即用。大大降低了spring的学习门槛，提高了开发效率。

### 2.6 介绍Spring Security
Spring Security是Spring家族中的安全框架，可以用来做用户验证和权限管理等。Spring Security是一款重型框架，不过功能十分强大。 SpringSecurity 采用的是责任链的设计模式，是一堆过滤器链的组合，它有一条很长的过滤器链。 一般来说，如果项目中需要进行权限管理，具有多个角色和多种权限，我们可以使用Spring Security。
### 2.7 介绍Mybatis
mybatis是apache基金会的一个开源项目，是一个基于java的持久层框架。它封装了传统的JDBC的连接数据库代码，在数据映射、结果集的检索方面做了充足的优化，让开发者能够更轻松地操作关系型数据库。并且spring框架能够无缝整合mybatis，这也使得springboot+mybatis的解决方案成为快速搭建java单体项目的主流。
### 2.8 介绍Redis
Redis是一种NoSQL(not-only sql,非关系型数据库)的缓存数据库，相比MYSQL等关系型数据库，它拥有十分优秀的性能，数据是存储在内存中，读写速度非常快。在本系统中，验证码、数据字典等数据的存储使用到了redis数据库。
### 2.9 介绍MYSQL
略
### 2.10 介绍maven
Maven不仅是一个快速构建工具，还是一个优秀的依赖管理工具和项目管理工具。
使用maven管理项目其优点如下：
1、其内置了许多模板可以帮助我们快速构建项目。
2、提供中央仓库，在pom.xml文件中引入代码即可自动下载导入相应的依赖jar包。
3、项目的子模块之间可以相互通讯，便于项目的解耦合。
4、可以直接通过Maven打包war或者jar项目。

### 2.11 介绍JWT
JWT(全称：Json Web Token)是一个传输信息的标准。用于协议JSON对象在前后端之间是否能够安全可靠地传输信息。因为JWT本身是一串数字签名的缘故，所以该签名信息可以被认证和信任。简单点说就是一种认证机制，让后台知道该请求是来自于受信的客户端。比如：在登陆页面点击登录按钮时，会向后端发送一个axios请求。后端页面在校验用户名密码等登陆信息通过后，除了返回响应数据，还通过JWT会给前端返回一个生成的token令牌，客户端可以把该token存储起来，在随后每次向后端发送请求过程中，同时携带token令牌，后端会对带过来的这个token进行验证，验证通过才能进行后续操作。
### 2.12 介绍Token
 token的意思是“令牌”，是服务端生成的一串加密字符串（服务器端并不进行保存），作为客户端进行请求的一个标识。当用户第一次登录后，服务器生成一个token并将此token返回给客户端浏览器，以后客户端只需带上这个token前来请求数据即可，无需再次带上用户名和密码。

### 2.13 介绍shiro
Shiro是Apache旗下一款安全权限框架。它功能强大易于上手，实现了对于权限的控制，是由java语言实现的。通过将与安全认证有关的功能封装管理，对外暴露一个简单易用的API提供身份验证、授权、加密会话管理等功能。其认证授权过程如图2-2-1所示。
 Shiro核心组件
1. UsernamePasswordToken，Shiro用来封装用户登录信息，使用用户的登录信息来创建令牌 Token。
2. SecurityManager，Shiro 的核心部分，管理所有Subject，负责安全认证和授权。
3. Suject，Shiro 的一个抽象概念，包含了当前用户信息。
4. Realm，开发者自定义的模块，根据需求，在 Realm 中完成验证授权的逻辑。
5. AuthenticationInfo，用户的角色信息集合，认证时使用。
6. AuthorzationInfo，角色的权限信息集合，授权时使用。
7. DefaultWebSecurityManager，安全管理器，开发者自定义的 Realm 需要注入到 DefaultWebSecurityManager 进行管理才能生效。
8. ShiroFilterFactoryBean，过滤器工厂，Shiro 的基本运行机制是开发者定制规则，Shiro 去执行，具体的执行操作就是由 ShiroFilterFactoryBean 创建的一个个 Filter 对象来完成。