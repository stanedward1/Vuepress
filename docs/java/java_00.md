<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [数据类型](#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
  - [整型](#%E6%95%B4%E5%9E%8B)
  - [浮点类型](#%E6%B5%AE%E7%82%B9%E7%B1%BB%E5%9E%8B)
  - [char类型](#char%E7%B1%BB%E5%9E%8B)
  - [boolean类型](#boolean%E7%B1%BB%E5%9E%8B)
- [变量](#%E5%8F%98%E9%87%8F)
  - [变量初始化](#%E5%8F%98%E9%87%8F%E5%88%9D%E5%A7%8B%E5%8C%96)
  - [常量](#%E5%B8%B8%E9%87%8F)
- [运算符](#%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [自增运算符与自减运算符](#%E8%87%AA%E5%A2%9E%E8%BF%90%E7%AE%97%E7%AC%A6%E4%B8%8E%E8%87%AA%E5%87%8F%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [关系运算符与boolean运算符](#%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6%E4%B8%8Eboolean%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [位运算符](#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [数学函数与常量](#%E6%95%B0%E5%AD%A6%E5%87%BD%E6%95%B0%E4%B8%8E%E5%B8%B8%E9%87%8F)
  - [数值类型之间的转换](#%E6%95%B0%E5%80%BC%E7%B1%BB%E5%9E%8B%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2)
  - [强制类型转换](#%E5%BC%BA%E5%88%B6%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)
  - [括号与运算符级别](#%E6%8B%AC%E5%8F%B7%E4%B8%8E%E8%BF%90%E7%AE%97%E7%AC%A6%E7%BA%A7%E5%88%AB)
  - [枚举类型](#%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%9E%8B)
- [字符串](#%E5%AD%97%E7%AC%A6%E4%B8%B2)
  - [子串](#%E5%AD%90%E4%B8%B2)
  - [拼接](#%E6%8B%BC%E6%8E%A5)
  - [不可变字符串](#%E4%B8%8D%E5%8F%AF%E5%8F%98%E5%AD%97%E7%AC%A6%E4%B8%B2)
  - [检测字符串是否相等](#%E6%A3%80%E6%B5%8B%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%98%AF%E5%90%A6%E7%9B%B8%E7%AD%89)
  - [空串与Null串](#%E7%A9%BA%E4%B8%B2%E4%B8%8Enull%E4%B8%B2)
  - [字符串API](#%E5%AD%97%E7%AC%A6%E4%B8%B2api)
  - [构建字符串](#%E6%9E%84%E5%BB%BA%E5%AD%97%E7%AC%A6%E4%B8%B2)
- [输入输出](#%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA)
  - [读取输入](#%E8%AF%BB%E5%8F%96%E8%BE%93%E5%85%A5)
  - [格式化输出](#%E6%A0%BC%E5%BC%8F%E5%8C%96%E8%BE%93%E5%87%BA)
- [控制流程](#%E6%8E%A7%E5%88%B6%E6%B5%81%E7%A8%8B)
  - [块作用域](#%E5%9D%97%E4%BD%9C%E7%94%A8%E5%9F%9F)
  - [条件语句](#%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5)
  - [循环](#%E5%BE%AA%E7%8E%AF)
  - [确定循环](#%E7%A1%AE%E5%AE%9A%E5%BE%AA%E7%8E%AF)
  - [多重选择：switch语句](#%E5%A4%9A%E9%87%8D%E9%80%89%E6%8B%A9switch%E8%AF%AD%E5%8F%A5)
  - [中断控制流程语句](#%E4%B8%AD%E6%96%AD%E6%8E%A7%E5%88%B6%E6%B5%81%E7%A8%8B%E8%AF%AD%E5%8F%A5)
- [大数值](#%E5%A4%A7%E6%95%B0%E5%80%BC)
- [数组](#%E6%95%B0%E7%BB%84)
  - [for each循环](#for-each%E5%BE%AA%E7%8E%AF)
  - [数组初始化以及匿名数组](#%E6%95%B0%E7%BB%84%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BB%A5%E5%8F%8A%E5%8C%BF%E5%90%8D%E6%95%B0%E7%BB%84)
  - [数组拷贝](#%E6%95%B0%E7%BB%84%E6%8B%B7%E8%B4%9D)
  - [命令行参数](#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0)
  - [数组排序](#%E6%95%B0%E7%BB%84%E6%8E%92%E5%BA%8F)
  - [多维数组](#%E5%A4%9A%E7%BB%B4%E6%95%B0%E7%BB%84)
  - [不规则数组](#%E4%B8%8D%E8%A7%84%E5%88%99%E6%95%B0%E7%BB%84)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- Java对大小写敏感，如果出现了大小拼写错误，那程序将无法运行。

- 运行编译程序时，Java虚拟机将从指定类中的main方法开始执行，根据[Java语言规范](https://docs.oracle.com/javase/specs/)，main方法必须声明为public

## 数据类型

- Java是一种强类型语言，这就意味着必须为每一个变量声明一种类型。在Java中，一共有八种基本类型，其中有4种整型，2种浮点类型，1种字符类型，1种表示真值的boolean类型。
- Java中有一个能够表示任意精度的算术包，通常称之为”大数值“。虽然称之为大数值，但它不是一种新的Java类型，而是一个Java对象。

### 整型

整型用于表示没有小数部分的数值，它允许是负数。Java提供了4种整型。

*1字节 = 8位*

| 类型  | 存储需求 |
| :---: | :------: |
|  int  |  4字节   |
| short |  2字节   |
| long  |  8字节   |
| byte  |  1字节   |

### 浮点类型

浮点类型用于表示有小数部分的数值，在Java种有2种

|  类型  | 存储需求 |
| :----: | :------: |
| float  |  4字节   |
| double |  8字节   |

double又称双精度数值，float又称单精度数值

float类型的数值有一个后缀F。没有后缀的浮点数值默认为double类型

**三个特殊的浮点数值：**

- 正无穷大
- 负无穷大
- NaN

使用Double.isNaN方法可以检测特定值是否等于Double.NaN

### char类型

char类型用来表示单个字符，通常用来表示字符常量。

**特殊字符的转义序列符**

| 转义序列 | 名称   |
| :------: | ------ |
|    \b    | 退格   |
|    \t    | 制表   |
|    \n    | 换行   |
|    \r    | 回车   |
|   /\"    | 双引号 |
|   /\'    | 单引号 |
|   \\\    | 反斜杠 |

### boolean类型

boolean类型有两个值：false和true，用来判定逻辑条件。整型值和boolean值不能相互转换

## 变量

在Java中，每一个变量属于一种类型。在声明变量时，变量所属的类型位于变量名之前。

### 变量初始化

声明一个变量之后，必须用赋值语句对变量进行显式初始化，也就是必须给一个变量一个值。

### 常量

在Java中，利用关键字final指示常量。关键词final表示这个变量只能被赋值一次，一旦被赋值之后，就不能在更改了。习惯上，常量名使用全大写。

在Java中，经常希望某个常量可以在一个类中的多个方法中使用，通常将这些常量称为类常量。可以使用关键字static final设置一个类常量。类常量的定义位于main方法的外部，因此，在同一个类的其他方法中也可以使用这个常量。而且，如果一个常量被声明为public，那么其他类的方法也可以使用这个常量。

## 运算符

整数被0除将会产生一个异常，而浮点数被0除将会得到无穷大或NaN结果。

### 自增运算符与自减运算符

前缀方式：++n，对变量值加1，先进行+1运算

后缀方式：n++，对变量值加1，使用变量原来的值

### 关系运算符与boolean运算符

| 符号 |   含义   |
| :--: | :------: |
|  ==  |   等于   |
|  !=  |  不等于  |
|  <   |   小于   |
|  >   |   大于   |
|  <=  | 小于等于 |
|  >=  | 大于等于 |
|  &&  |    与    |
| \|\| |    或    |
|  ?   |   三元   |

### 位运算符

| 符号 |       含义       |
| :--: | :--------------: |
|  &   |        与        |
|  \|  |        或        |
|  ^   |       异或       |
|  ~   |        非        |
|  >>  | 二进制位右移操作 |
|  <<  | 二进制位左移操作 |
| >>>  |   用0填充高位    |

### 数学函数与常量

[文档地址](https://docs.oracle.com/javase/8/docs/api/)

### 数值类型之间的转换

黑色箭头代表无信息丢失的转换，红色箭头代表可能有精度的损失。

![image-20220401225854471](asset/数值类型之间的转换.png)

### 强制类型转换

举个栗子

```java
double x = 9.99;
int nx = (int) x;
```

对于(int) Math.round(9.99)这种形式，round方法返回的结果为long类型，由于存在信息丢失的可能，使用强制类型转换，将long类型转换成int类型。

### 括号与运算符级别

http://c.biancheng.net/view/794.html

### 枚举类型

```java
enum Size
{
    SMALL, MEDIUM, LARGE, EXTRA_LARGE;
}

public class Test
{
    // 执行输出结果
    public static void main(String[] args)
    {
        Size s = Size.SMALL;
        System.out.println(s);
    }
}
```

## 字符串

Java没有内置的字符串类型，而是在标准的Java类库中提供了一个预定义类，叫做String。每个用双括号括起来的字符都是String类的一个实例。

### 子串

String的substring方法可以从一个较大的字符串中提取出一个子串。

### 拼接

使用+号拼接两个字符串，字符串与非字符串进行拼接时，会把非字符串自动转为字符串。

### 不可变字符串

String也叫不可变字符串，编译器可以让字符串共享。

### 检测字符串是否相等

可以使用equals方法检测两个字符串是否相等。

**不能使用==运算符检测两个字符串是否相等，因为==看的是两个字符串是不是在同一个位置。可能会存在内容相同的多个字符串放置在不同的位置。**

### 空串与Null串

空串指”“，是长度为0的字符串，调用以下代码检查

```java
str.length() == 0;
str.equals("");
```

Null串表示目前没有任何对象与该变量关联。可调用以下代码检查

```java
str == null;
```

### 字符串API

[查询地址](https://docs.oracle.com/javase/8/docs/api/)

### 构建字符串

构建字符串时，使用String会每次都构建一个String对象，这个时候，很耗时，也浪费空间。使用StringBuilder可以避免这个问题的发生。

```java
StringBuilder builder = new StringBuilder();
builder.append(ch);
builder.append(str);
String string = builder.toString();
```

## 输入输出

### 读取输入

```java
Scanner in = new Scanner(System.in);
String name = in.nextLine();
```

nextLine方法接收可能包含空格的字符串

next方法接收一个单词

nextInt接收整数

nextDouble接收浮点数

### 格式化输出

[相关文档](https://www.runoob.com/w3cnote/java-printf-formate-demo.html)

## 控制流程

### 块作用域

块，也叫复合语句，是指由一对花括号括起来的若干条简单的Java语句。

块确定了变量的作用域。

一个块可以嵌套在另一个块中。

不能在嵌套的两个块中声明同名的变量。

### 条件语句

if

### 循环

- 当条件为true时，while循环执行一条语句。
- 希望循环体至少执行一次，使用do/while循环语句可以实现。

### 确定循环

- for循环语句

### 多重选择：switch语句

处理多个选项使用

case标签可以是：**char,byte,short,int,枚举常量,字符串**

### 中断控制流程语句

break 退出循环

continue 跳过这一步，走循环的下一步

## 大数值

BigInteger类实现了任意精度的整数运算

BigDecimal类实现了任意精度的浮点数运算

使用静态的valueOf方法可以将普通的数值转换成大数值，+和*需要使用add和multiply方法。

```java
BigInteger a = BigInteger.valueOf(100);
BigInteger c = a.add(b);
BigInteger d = c.multiply(b);
```

[文档地址](https://docs.oracle.com/javase/8/docs/api/)

## 数组

在声明数组变量时，需要指出数组类型和数组变量的名字，如：

```java
// 创建了一个可以存储100个整数的数组
int[] a = new int[100];
```

一旦创建了数组，就不能再改变它的大小。如果经常需要在运行过程中扩展数组的大小，就应该使用另外一种数据结构——ArrayList。

### for each循环
利用Array类的toString方法，可以返回一个包含数组元素的字符串，这些元素被放置在括号内，并用逗号分割。
```java
"[1,2,3,4,5,6]"
```

### 数组初始化以及匿名数组
```java
// 使用这种语句，不需要调用new
int[] a = {1,2,3,4,5,6};
// 初始化匿名数组
new int[] {1,2,3,4,5,6};
```

### 数组拷贝

[相关文档](http://c.biancheng.net/view/924.html)

### 命令行参数

Java应用程序有带String args[]参数的main方法。这个参数表明main方法将接收一个字符串数组，也就是命令行参数。

```java
public static void main(String[] args){

}
```

### 数组排序

使用Array类中的sort方法

这个方法使用了优化的快速排序算法

### 多维数组

```java
int[][] magicSquare = {
	{1,2,3,4},
	{5,6,7,8},
	{9,10,11,12}
}
```

要想快速的打印一个二位数组的数据元素列表，可以调用`Array.deepToString(a)`

### 不规则数组

Java实际上没有多维数组，只有一维数组。多维数组被解释为“数组的数组”。