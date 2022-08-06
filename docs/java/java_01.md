<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [面向对象程序设计概述](#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E6%A6%82%E8%BF%B0)
  - [类](#%E7%B1%BB)
  - [对象](#%E5%AF%B9%E8%B1%A1)
  - [识别类](#%E8%AF%86%E5%88%AB%E7%B1%BB)
  - [类之间的关系](#%E7%B1%BB%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB)
- [设计预定义类](#%E8%AE%BE%E8%AE%A1%E9%A2%84%E5%AE%9A%E4%B9%89%E7%B1%BB)
  - [对象与对象变量](#%E5%AF%B9%E8%B1%A1%E4%B8%8E%E5%AF%B9%E8%B1%A1%E5%8F%98%E9%87%8F)
  - [Java类库中Gregorian-Calendar类](#java%E7%B1%BB%E5%BA%93%E4%B8%ADgregorian-calendar%E7%B1%BB)
  - [更改器方法与访问器方法](#%E6%9B%B4%E6%94%B9%E5%99%A8%E6%96%B9%E6%B3%95%E4%B8%8E%E8%AE%BF%E9%97%AE%E5%99%A8%E6%96%B9%E6%B3%95)
- [用户自定义类](#%E7%94%A8%E6%88%B7%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB)
  - [从构造器开始](#%E4%BB%8E%E6%9E%84%E9%80%A0%E5%99%A8%E5%BC%80%E5%A7%8B)
  - [隐式参数与显式参数](#%E9%9A%90%E5%BC%8F%E5%8F%82%E6%95%B0%E4%B8%8E%E6%98%BE%E5%BC%8F%E5%8F%82%E6%95%B0)
  - [final实例域](#final%E5%AE%9E%E4%BE%8B%E5%9F%9F)
- [静态域与静态方法](#%E9%9D%99%E6%80%81%E5%9F%9F%E4%B8%8E%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
  - [静态域](#%E9%9D%99%E6%80%81%E5%9F%9F)
  - [静态方法](#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
- [方法参数](#%E6%96%B9%E6%B3%95%E5%8F%82%E6%95%B0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 面向对象程序设计概述

面向对象的程序是由对象组成的，每个对象包含对用户公开的特定功能部分和隐藏的实现部分。

### 类

- class是构造对象的模版或者蓝图。


- 由class构造对象的过程称为创建类的实例。


- 用Java编写的所有代码都位于某个类的内部。


- 封装又称‘数据隐藏’，是与对象有关的一个重要概念。从形式上看，封装只是把一些数据和action放到一个包中，并对对象的使用者隐藏了数据的实现方式。对象中的数据称为实力域（instance field），操纵数据的过程称为方法。


### 对象

要想使用OOP，一定要清楚对象的三个主要特性：

- 对象的行为——可以对对象施加哪些操作，或者可以对对象施加哪些方法？
- 对象的状态——当施加那些方法时，对象如何响应？
- 对象标识——如何辨别具有相同行为与状态的不同对象？

### 识别类

- 首先从设计类开始，然后再往每个类添加方法。
- 识别类的简单规则是在分析问题的过程中寻找名词，而方法对应着动词。
- 所谓的“找名词或动词”原则上只是一种经验。

### 类之间的关系

常见的关系：

- 依赖——users-a
- 聚合——has_a
- 继承——is-a

我们应该尽可能的将相互依赖的类减至最少，也就是让类之间的耦合度最小。

所谓聚合，也就是关联，意味着类A的对象包含类B的对象。

## 设计预定义类

### 对象与对象变量

- 要想使用对象，就必须首先构造对象，并指定其初始状态，然后，对对象应用方法。
- 在Java中，使用构造器构造新实例。构造器是一种特殊的方法，用来构造并初始化对象。
- 一个对象变量并没有实际包含一个对象，而仅仅引用一个对象。
- 在Java中，任何对象变量的值都是对存储在另外一个地方的一个对象的引用。new操作符的返回值也是一个引用。

### Java类库中Gregorian-Calendar类

Date类——表示时间点

GregorianCalendar类——日历表示法，描述了日历的一般属性

将时间与日历分开是一种很好的面向对象设计。通常，最好使用不同的类表示不同的概念。

### 更改器方法与访问器方法

对实例域作出修改的方法称为更改器方法，仅访问实例域而不进行修改的方法称为访问器方法。

比如，访问器方法——getTime方法和更改器方法——setTime方法。

## 用户自定义类

### 从构造器开始

- 构造器与类同名
- 每个类可以有一个以上的构造器
- 构造器可以有0个，1个或多个参数
- 构造器没有返回值
- 构造器总是伴随着new操作一起调用

### 隐式参数与显式参数

隐式参数——出现在方法名前的类对象

显示参数——位于方法名后面括号中的数值

关键词this表示隐式参数，使用隐式参数，可以比较好的将实例域与局部变量明显的区分开来。

### final实例域

final修饰符基本都应用在基本类型域，或不可变类的域。

## 静态域与静态方法

### 静态域

将域定义于static，就叫做静态域

100个实例，或者说是对象，都有自己的实力域，也就是属性。但是只有一个静态域，即使没有一个实例，静态域也存在。它属于类，而不属于任何独立的对象。

### 静态方法

静态方法是一种不能对对象实施操作的方法。

可以认为静态方法是没有this参数的方法。

**一下两张情况下使用静态方法：**

- 一个方法不需要访问对象状态，其所需参数都是通过显式参数提供
- 一个方法只需要访问类的静态域

## 方法参数

Java对对象采用的不是引用调用，而是值传递

**方法参数的使用情况：**

- 一个方法不能修改一个基本数据类型的参数
- 一个方法可以改变一个对象参数的状态
- 一个方法不能让对象参数引用一个新的对象