# JavaScript 学习笔记

## 相关资源
- [W3CSchool](http://www.w3school.com.cn/js/index.asp)
- [完整的 JavaScript 对象参考手册（包含实例）](http://www.w3school.com.cn/jsref/index.asp)
- [完整的 HTML DOM 对象参考手册（包含实例）](http://www.w3school.com.cn/jsref/index.asp)
- [https://jsfiddle.net](https://jsfiddle.net)
- [Chrome DevTools](https://developers.google.com/web/tools/)

## 问题汇总
- [什么是脚本语言？](https://zh.wikipedia.org/wiki/脚本语言)
- [网站为什么 JS 调用尽量放到网页底部？](https://www.zhihu.com/question/34147508)
- [JavaScript 中字符串变量使用单引号和双引号的利弊？](https://www.zhihu.com/question/21168673)
- [在JS\JQ中，究竟何时用单引号''、双引号“”、和不用引号呢？](https://segmentfault.com/q/1010000004519527)

## 学习大纲
### 什么是 JavaScript

JavaScript 是一种 [脚本语言](https://zh.wikipedia.org/wiki/脚本语言)。
<br>
JavaScript 是一种轻量级的编程语言。
<br>
JavaScript 是可插入 HTML 页面的编程代码。
<br>
JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。
<br>
JavaScript 可以用来写前端、后端，甚至移动端应用。
<br>

### JavaScript 语法
#### 1. JavaScript 基础
#### 1.1 简介
[本节完整示例代码](./JavaScriptExamples/html/01_intro.html)

JavaScript 可以做什么？
- 写入 HTML 输出
- 对事件作出反应
- 改变 HTML 内容
- 改变 HTML 图像：JavaScript 能够改变任意 HTML 元素的大多数属性，而不仅仅是图片。
- 改变 HTML 样式：改变 HTML 元素的样式，属于改变 HTML 属性的变种。
- 验证输入    


#### 1.2 JavaScript 的使用

[本节完整示例代码](./JavaScriptExamples/html/02_usage.html)

- HTML 中的脚本必须位于 `<script>` 与 `</script>` 标签之间。
- 脚本可被放置在 HTML 页面的 `<body>` 和 `<head>` 部分中。
- 那些老旧的实例可能会在 `<script>` 标签中使用 `type="text/javascript"`。现在已经不必这样做了。JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言。
- 您可以在 HTML 文档中放入不限数量的脚本。
- 脚本可位于 HTML 的 `<body>` 或 `<head>` 部分中，或者同时存在于两个部分中。
- 通常的做法是把函数放入 `<head>` 部分中，或者放在页面底部。这样就可以把它们安置到同一处位置，不会干扰页面的内容。
- [网站为什么 JS 调用尽量放到网页底部？](https://www.zhihu.com/question/34147508)（推荐阅读）
- 外部的 JavaScript：
  - 可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码
  - 外部 JavaScript 文件的文件扩展名是 .js
  - 在 `<head>` 或 `<body>` 中引用脚本文件都是可以的。实际运行效果与在 <script> 标签中编写脚本完全一致
  - 如需使用外部文件，请在 `<script>` 标签的 "src" 属性中设置该 .js 文件。


#### 1.3 JavaScript 输出
[本节完整示例代码](./JavaScriptExamples/html/03_write.html)

JavaScript 通常用于操作 HTML 元素。
- 操作 HTML 元素：如需从 JavaScript 访问某个 HTML 元素，您可以使用 `document.getElementById(id)` 方法
- 写到文档输出：如需通过 JavaScript 添加某个 HTML 元素，您可以使用 `document.write()` 方法
- ⚠️注意：请使用 `document.write()` 仅仅向文档输出写内容，如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖

#### 1.4 JavaScript 语句
> JavaScript 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么。
- 分号 `;`
  - 分号用于分隔 JavaScript 语句，通常我们在每条可执行的语句结尾添加分号
  - 在 JavaScript 中，分号是可以省略的，但是当一行中有多条语句时，分号不能省略
- JavaScript 代码
  - JavaScript 代码（或者只有 JavaScript）是 JavaScript 语句的序列
  - JavaScript 是脚本语言。浏览器会在读取代码时，会按照编写顺序逐行地执行脚本代码。而对于传统编程来说，会在执行前对所有代码进行编译
- JavaScript 代码块
  - JavaScript 语句通过代码块的形式进行组合
  - 块由左花括号开始，由右花括号结束
  - 块的作用是使语句序列一起执行
  - JavaScript 函数是将语句组合在块中的典型例子
- JavaScript 对大小写敏感
- 空格：JavaScript 会忽略多余的空格，我们可以通过适当添加空格，来提高其可读性
  ``` JavaScript
  var name="Hello";
  var name = "Hello";
  ```
- 对代码行进行折行：可以在文本字符串中使用反斜杠对代码行进行换行。
  ``` JavaScript
  document.write("Hello \
  World!");
  ```
  
#### 1.5 JavaScript 注释
单行注释：
``` JavaScript
// 输出标题：
document.getElementById("myH1").innerHTML="Welcome to my Homepage";
//document.getElementById("myH1").innerHTML="Welcome to my Homepage";
```

行末注释：
``` JavaScript
var x=5;    // 声明 x 并把 5 赋值给它
var y=x+2;  // 声明 y 并把 x+2 赋值给它
```

多行注释：
``` JavaScript
/*
document.getElementById("myH1").innerHTML="Welcome to my Homepage";
document.getElementById("myP").innerHTML="This is my first paragraph.";
*/
```

#### 1.6 JavaScript 变量
> 变量是存储信息的容器。

- 变量的命名：变量可以使用短名称（比如 x 和 y），也可以使用描述性更好的名称（比如 age）
  - 变量必须以字母开头
  - 变量也能以 `$` 和 `_` 符号开头（不推荐）
  - 变量名称对大小写敏感（y 和 Y 是不同的变量）
- JavaScript 变量能保存多种数据类型
- 声明（创建） JavaScript 变量
  - 在 JavaScript 中创建变量通常称为“声明”变量
  - 我们使用 `var` 关键词来声明变量
    ``` JavaScript
    var personName;
    var carBrandName = "Volvo";
    ```
  - 可以在一条语句中声明很多变量
	 ``` JavaScript
	 var name="Gates", age=56, job="CEO";
	 ```
  - 如果在声明变量时没有赋值，这个变量的值实际上是 `undefined`
    ``` JavaScript
    var carname;  //  undefined
    ```
  - 如果重新声明 JavaScript 变量，该变量的值不会丢失
	 ``` JavaScript
	 // 在以下两条语句执行后，变量 carname 的值依然是 "Volvo"：
	 var carname="Volvo";
	 var carname;
	 ```

#### 1.7 JavaScript 数据类型（字符串、数字、布尔、数组、对象、Null、Undefined）
