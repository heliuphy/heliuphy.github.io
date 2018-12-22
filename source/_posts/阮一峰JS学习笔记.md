---
title: 阮一峰JS学习笔记
date: 2018-10-14 18:30:03
tags:
  - javascript
categories: web
---

# 阮一峰JS学习笔记

## 什么是JS
它是脚本语言，即不具备开发操作系统的能力，而是只用来编写**控制**其他大型应用程序的”脚本“（比如浏览器）。它是嵌入式语言，即没有IO，只能嵌入更大型得应用程序中，去调用宿主环境的IO。（浏览器、node）


## JS都包括什么
其核心语法相当精简，只包括两部分：
* 基本的语法构造
    * 操作符
    * 控制结构
    * 语句
* 标准库

除此之外，因为它要有宿主环境，所以就是一系列宿主环境的API。

## JS难在哪
* 它涉及大量的外部API
* JS有不少设计缺陷，某些地方相当不合理。


## JS基础

### 语句and表达式

#### 语句

```javascript
var a = 1 + 3;
```
#### 表达式

```js
1 + 3
```
指为了**得到返回值的**计算式。

两者的区别在于，语句一般是为了进行某种操作，改编程序运行状态，一般不需要返回值；而表达式是为了得到返回值，其一定会返回一个值。凡是JS中**预期为一个值的**地方，都可以放置表达式。

### 变量

变量是对值旳**具名引用**。

#### 变量提升

JS引擎的工作方式是：**先**解析代码，**获取所有的被声明的变量**，然后再一行一行的运行。这样也就是，所有变量声明的语句，都会被提升到代码头部。


```js
console.log(a);
var a = 1;

```

真正运行的是如下代码

```js
var a;
console.log(a);
a = 1;
```

### 标识符
也就是用来识别各种值的合法名称。最常见的标识符就是**变量名**，以及**函数名**。

### 区块
对于`var`命令来说，`{ }`构成的区块不构成单独的作用域。

### 控制结构

#### switch结构
多个`if--else`结构连在一起的时候，可使用更简单的`switch`结构。


```js
switch(fruit) {
    case "banana":
        //...
        break;
    case "apple":
        //...
        break;
    default:
        //...
}
```

### 标签
JS语言允许语句的前面有标签。相当于定位符。
通常与`break`和`continue`配合使用，跳出特定循环。

```js
top:
    for(var i = 0; i < 3; i ++){
        for(...){
            if(...){
                break top;
            }
            console.log(...);
        }
    }
```

这样就可以直接跳出外层循环，如果加标签，只默认跳出当前循环。

## 数据类型

### 概述
* 数值：整数和小数
* 字符串
* 布尔值
* undefined 未定义
* null 空值
* 对象

注：前三个成为”原始类型的值”，也就是不能再细分了。对象则是“合成类型”的值。至于那两个英文的，就是特殊值。

而至于**对象**，又可以分为三类：
* 狭义的对象 object
* 数组 array
* 函数 function

#### typeof 运算符
这是**运算符**！

预告一下，JS共有三种方式可以确定一个值是什么类型的：
* typeof 运算符
* instanceof 运算符
* Object.prototype.toString 方法


### null, undefined, 布尔
null表示值为空值，比如一个参数表示抛出的错误参数，如果此处无错，就会抛出`null`。

undefined表示未定义

关于布尔值，注意类型转换，空字符串转换为`false`而空数组和空对象则都是`true`。
### 数值
注意，JS里的所有数字都是64位浮动点数存储。所以

```js
1 === 1.0 //true
```

#### 与数值相关的全局方法

##### parseInt()
将字符串转为整数

```js
parseInt('123') //123
```
##### parseFloat()
将字符串转换为浮点数。
##### isNaN()
判断一个值是不是`NaN`。
##### isFinite()
判断一个数值是不是一个正常的数值。
### 字符串
字符串可以像数组一样访问，但是不可以修改单个字符，比如

```JS
var s = 'hello';
s[0] = 'a';
//这样是改变不了的
```
### 对象
#### 键名
* 对象的所有键名都是字符串，所以是否加引号都可以。如果键名是数值，也会被自动转换成字符串。但是如果键名不符合明明规范，则必须加上引号，否则会报错。
* 键名又称为属性。它的值可以是任意类型，如果是函数，则这个属性又称为方法。
* 值如果是对象，则形成了链式引用。

#### 对象的引用
如果不同变量名指向同一个变量，那么他们都是这个对象的引用，也就是指向相同的内存地址。改一个，其他的都会变。

**注意：**这种引用仅限于对象，如果是**原始类型的值**的话，那么变量就是值的**拷贝**。
#### 属性
* 有两种运算符，一个是点运算符，另一个就是方括号运算符。
* 需要查看一个对象的所有属性，可以使用`Object.keys(yourObj)'方法。
* 属性的删除，使用`delete`命令。
    ```JS
    delete obj.p
    ```
* 要查看属性是否存在，可使用`in`运算符。即使是继承的属性，也会返回`true`。如果不需要继承，看下一条
* 判断自身属性，可使用`hasOwnProperty()`方法来判断。
* 怎么遍历对象的全部属性，可以使用`for...in...`循环。
    ```JS
    for (var i in onj) {
        f(i);
    }
    ```
    注意，会遍历继承的属性。但是必须是**可遍历的对象**。
    
    如果想遍历自身的属性，那么可以结合`hasOwnProperty()`方法判断一下。
    
    #### with 语句
    ```JS
    with(对象){
        语句...
    }
    ```
    
这样提供的一种便利就是，在操作一个对象的多个属性时，会方便许多。
    
注意，`with`区块不会改变作用域，所以如果要给一个新属性赋值，需要先有这个属性才行。
    
**建议：**不要使用`with`，可以使用一个临时变量来代替这种功能。
```JS
    with(obj1.obj2.obj3) {
        console.log(p1 + p2);
    }
    
    //可以写成
    var temp = obj1.obj2.obj3;
    console.log(temp.p1 + temp.p2);
```
    
    
    
    

### 函数

#### 函数的声明
三种方法
1. function命令---函数的声明
2. 函数表达式---变量赋值的写法，将匿名函数赋值给一个变量，这个匿名函数又叫**函数表达式**。
3. Function构造函数---几乎无人使用，不管了

#### 第一等公民
函数在js中只是一种可以执行的值而已，与其他值无特殊之处。凡是可以使用值得地方，都可以使用函数。
#### 函数名得提升
因为函数名就是变量名，所以使用`function`命里声明函数的时候，整个函数就会像变量声明一样，被提升到顶部。
#### 函数的属性
* name属性
    主要作用：获取作为参数得函数的名字。
    ```js
    var myFunc  = function() {};
    function test(f) {
        console.log(f.name);
    }
    
    test(myFunc) //得到myFunc
    ```
* length属性
    返回函数预期传入的**参数的个数**，即函数定义中的参数个数。
    其作用可实现方法的**重载**。
* toString()
    返回一个字符串，内容是函数的源码。
    其作用可以实现多行字符串。
    
#### 作用域
在js中只有两种作用域，一个是**全局作用域**，另一个就是**函数作用域**。
    
#### 参数
* 关于函数值得传递方式
    * 函数参数如果是原始类型得值，那么就**按值传递**。也就是说在函数体内修改参数值，不会影响到函数外部。    
    * 如果函数参数是复合类型-（数组、对象、函数）的值，那么传递方式就是传址传递。
    * 这里有一个小点需要注意一下就是，如果在函数体内部修改了整个参数的值，而不是某个属性。那么原对象的值是不会被修改的。

    ```js
    var obj = [1. 2. 3];
    
    function f(o) {
        o = [2, 3, 4];
    }
    f(obj);
    ```
    
这里，直接让参数o指向了另外一个对象，保存在原地址上的值当然不会受影响。
    
#### arguments对象
只在函数体内部可以使用，这个对象包含了函数运行时的所有参数。`arguments[0]`是第一个参数。
    `arguments`对象含有一个`callee`属性返回它所对应的函数。
    
#### 函数的其他知识点
* 闭包：也就是能够读取其他函数内部变量的函数。
    * 小引例：因为js内层的函数可以读取外层函数的变量，而外层函数却能读取内部函数的变量，所以要想实现读取某个内部函数的变量可以通过下面这个函数实现
          ```js
          function f1() {
            var n = 99;
            function f2(){
                console.log(n);
            }
            return f2;
          }
          
          var result = f1();
          result(); //99
          ```
          
这样就可以拐弯抹角的实现这个功能了。
          
* 闭包在这里就是这个函数`f2` , 他也就是将内部变量和外部变量相互链接的桥梁。
* 闭包有两个作用
    * 一个是可以让外部函数访问内部函数的变量
    * 第二就是可以让运行环境保存住函数内部的变量
* 闭包还可以封装对象的私有属性和私有方法
* 闭包会保留外层函数的内部变量，造成内存消耗，不能滥用。
* 立即调用的函数表达式
这里有一个很有意思的点，就是`function(){}`既可以当语句又可以当表达式。
```js
    //语句
    function f() {}
    //表达式
    var f = function f() {}
```
所以为了能够区分，js引擎就认为`function`出现在行首就是一个语句。
但是加个括号阔起来就可以让引擎认为是一个表达式了。
```js
    (function(...){...})();//这样就可以直接调用函数了。
```
为了避免污染全局变量，经常会直接调用匿名函数。
    
#### eval命令
eval接受一个字符串作为参数，并将这个字符串当做语句执行。
```js
    eval('var a = q');
    a //1
```
会影响当前作用域的变量，不推荐使用。一般用来解析JSON但是JSON最好还是用`JSON.parse`方法。
**注意：**只有`eval()`这一种形式属于直接调用，剩下的全属于别名调用，别名调用的`eval()`通通影响的事**全局**作用域。
    
    
### 数组

#### 引言
```js
tyoeof [1,2,3] //"object"
```
可见数组的类型就是对象，那么数组有什么不同呢，数组的特殊性就体现在它的键名是按次序排列的一组整数`(0,1,2...)`。

但是读取的时候，对于数组的键名，不能使用点号读取。（因为数字开头不是合法的标识符）。

#### 基础
* length属性
* in 运算符
* for ... in ... 循环和数组遍历
    * 注意，这个不仅会遍历数组的数字键，还会遍历非数字键。
    * 所以不推荐使用
* 那么想简历数组最好使用`for`OR`while`循环。
* 数组的`forEach()`方法也能**遍历数组**。
#### 空位
空位不同于`undefined`，遍历数组是，空位不会被遍历。
#### 类似数组的对象
只要有`length`属性，就可以认为是类似数组对象，但是它不是数组。要想将其转换为数组可以使用数组的`slice()`方法。

```js
var arr = Array.prototype.slice.call(arrayLike);
```

使用`call()`方法可以对类似数组的对象使用数组的方法。

```js
Array.prototype.forEach.call(arrayLike, print);
```

这样就可以让`arrayLike`使用`forEach`方法。

实际使用中最好还是先转成数组再使用。

### 类型转换
* 注意强制类型转换Number()和parseInt的区别
    * Number()函数比parseInt()函数要严格很多。基本上，只要有一个字符无法转成述职，整个字符串就是`NaN`。而，`parseInt()`却可以将前几个是数字的字符提取出来。
* 自动转换的规则
    * 预期是什么类型的值，就调用该类型得转换函数。
### 错误处理机制
#### Error构造函数
```js
var err = new Error('出错信息');
err.message // "出错信息"
```
此外还有几个派生的错误类
* SyntaxError
* ReferenceError
* RangeError
* TypeError
* URIError
* EvalError
* 自定义错误类型（继承自Error）

#### throw语句
作用是手动**中断程序**执行，抛出一个错误
```js
if(x <= 0){
    throw new Error('x必须为正数'); //这里抛出一个错误对象
}
```
#### try...catch结构
发生错误后可以对错误进行处理，捕捉错误，并决定是否执行下去。
```JS
try {
    throw new Error('error occured');
} catch(e){ // 这里的参数e就是捕获上面那个try返回的错误对象（这里为了产生错误，强行用了throw语句）
    console.log(e.name + ": " + e.message);
    console.log(e.stack);
}
```

#### finally代码块
`try...catch`后面还可以跟一个`finally`代码块，**无论是否出现错误**，都会执行。
```JS
function cleanUp(){
    try{
        throw new Error('error occured');
        console.log('此行不会执行');
    } finally {
        console.log('完成清理工作');
    }
}

cleanUp()

// 完成清理工作
// Error: error occured
```

## 标准库
### Object对象
JS其他所有对象都是**继承**自`Object`对象，即都是`Object`的**实例**。
#### 原生方法
* 一类是`Object`本身的方法，
    * 即直接定义在Object对象上
    * 
```js
Object.print = function (o) { console.log(o)};
```
* 还有一类就是`Object`的实例方法。
    * 即定义在Object原型对象`Object.prototype`上的方法。可以被Object实例直接使用。

    
```js
Object.prototype.print = function () {
    console.log(this);
};

var obj = new Object();
obj.print()
```

* obj会直接继承 `Object.prototype` 上的方法.

    
    
#### 将Object()看为一个普通函数（工具函数）

功能1：将任意值转换为对象

```JS
var obj  = Object();

var obj2 = Object('foo');

var obj3 = Object(100);
```

功能2：判断某个变量是不是对象。因为Object有一个特点，就是当他的参数本身就是个对象的话，那么返回的还是原变量。

```JS
var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr //true
```

#### 当Object()是构造函数时

即前面可以使用`new`命令。使用方法几乎等同于工具函数Object()，但是语义不一样。工具函数是指**转换**成对象。

#### Object静态方法（即将Object看成一个普通的对象）
即部署在Object对象自身的方法。
##### 遍历对象的属性
* Object.keys()
* Object.getOwnPropertyNames()

这两个的参数都是一个对象。区别在于，keys只返回可枚举的属性，而getOwnPropertyNames方法还可以返回补课枚举的属性。

#### 其他方法
* 对象属性模型的相关方法
* 控制对象状态的方法
* 原型链相关方法


#### Object的实例方法
也就是定义在Object.prototype对象上的方法。所有Object的实例对象都继承了这些方法。
##### Object.prototype.valueOf()
返回一个对象的值，默认返回对象本身。其主要作用在于，自动类型转换时会**调用**。
##### Obbject.prototype.toString()
返回一个对象的字符串形式。默认返回**类型**字符串。也用于自动类型转换。可以得到想要的字符串形式。
**注意，**这些函数有可能被用户重写，如果依然想调用，最好使用`Object.prototype.toString.call()`方法。
可以用于判断类型以及构造函数。这样会比`typeof`运算符更精确。
##### Object.prototype.toLocalString()
与`toString`基本相同，也是返回字符串，但是可以加上一些用户的信息。比如返回日期的实例类型对象时，就和地域相关。
##### Object.prototype.hasOwnProperty()
返回一个布尔值，表示该实例对象自身是否具有该属性。

### 属性描述对象
是一种数据结构，用来描述某个属性是否可写、可遍历等。每个属性都有自己的属性描述对象。

#### Object.getOwnPropertyDescription()
获取属性描述对象

```JS
Object.getOwnPropertyDescription()
```

#### 其他方法
* Object.getOwnPropertyNames()
* Object.defineProkperty()
* Object.defineProperties()
* Object.prototype.propertyIsEnumerable()


#### 元属性
也就是属性描述对象的属性
* value
* writable
* enumerable --- 可以用来设置私密属性，只是不可以遍历到，但是还是可以访问的。如果要获取自身的所有属性（不管是否可遍历，都可以使用getOwnPropertyNames）
* configurable -- 是否可以修改属性描述对象
* getter/setter -- 存取器

    存取器有两种写法，一个是在键`get`和`set`的后面直接给出值。另一种是`get p() {}`和`set p(value) {}`

#### 对象的拷贝
这里要注意的是，怎么拷贝过来get()属性等。
#### 控制对象状态
* Object.preventExtentions()
* Object.isExtensible()
* Object.seal()
* Object.isSealed()
* Object.freeze()
* Object.isFrozen()


### Array对象
`Array`是JS的原生**对象**，同时也是**构造函数**。

因为当Array构造函数的参数不同时，他的行为很不一致，所以最好直接使用数组字面量来创建新数组。


```JS
//bad 
var arr = new Array(1, 2);

//good 
var arr = [1, 2];
```

#### 静态方法
##### Array.isArray()
可以弥补`typeof`运算符的不足。

#### 实例方法
* valueOf()
* toString()
* push(), pop()
* shift(), unshift()
* join()---连接数组成员为字符串（可以自定义分隔符）
* concat() —— 用于多个数组的合并
* reverse()
* slice() - arr.slice(start, end) --提取
* splice() - arr.splice(start, end, addElem1, addElem2 ,....)删除，并且可以在删除的位置添加。返回值是被删除的元素。
* sort()
* map()
* forEach()
* filter()
* some(), every()
* reduce(), reduceRight()
* indexOf(), lastIndexOf


### 包装对象
就是将三种原始数据类型的值（数值、字符串、布尔值）包装为对象。

## 面向对象程序设计
### 对象是什么
可以从两个方面来理解：
* 对象时**单个实物**的抽象。
* 对象是一个**容器**，封装了属性和方法。

### 构造函数
JS与C++不同，没有类的概念，也就是他不是基于类的，而是基于**构造函数（constructor）**和**原型链（prototype）**。JS使用构造函数作为对象的**模板**。一个构造函数，可以生成多个实例对象。

构造函数就是一个普通的函数，但是有自己的特征和用法。


```JS
var Vehicle = function () {
    this.price = 100;
};
```

为了与普通函数区别，构造函数名字的第一个字母通常大写。

new命令：因为new命令本身就可以执行函数，不再需要函数的调用，所以可以不加括号执行，但是还是推荐加括号。


```JS
var v = new Vehicle();

var v = new Vehicle;
```

如果不使用`new`命令，而直接调用构造函数，会发生：构造函数变为普通函数，不会再生成实例对象，这里的`this`也将会代表全局对象。


#### new命令执行过程



```JS
function _new(constructor, plarams) {
    //将arguments对象转为数组
    var args = [].slice.call(arguments);
    //取出构造函数
    var constructor = args.shift();
    //创建一个空对象，继承构造函数的prototype属性
    var context = Object.create(constructor.prototype);
    //执行构造函数
    var result = constructor.apply(context, args);
    //如果返回结果是对象，就直接返回，否则返回context对象。
    return (typeof result === 'object' && result != null) ? result:context;
}

//实例
var actor = _new(Person, '张三', 28);
```

### 实例化对象的另一个方法Object.create()
在拿不到构造函数，而只能拿到一个现有的对象的时候，我们可以以这个对象为模板，来生成新的实例对象。



