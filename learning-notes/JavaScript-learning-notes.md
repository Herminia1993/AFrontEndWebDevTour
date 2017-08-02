# JavaScript 学习笔记

## 相关资源
- [W3CSchool](http://www.w3school.com.cn/js/index.asp)
- [完整的 JavaScript 对象参考手册（包含实例）](http://www.w3school.com.cn/jsref/index.asp)
- [完整的 HTML DOM 对象参考手册（包含实例）](http://www.w3school.com.cn/jsref/index.asp)

## 问题汇总
- [网站为什么 JS 调用尽量放到网页底部？](https://www.zhihu.com/question/34147508)
- [JavaScript 中字符串变量使用单引号和双引号的利弊？](https://www.zhihu.com/question/21168673)
- [在JS\JQ中，究竟何时用单引号''、双引号“”、和不用引号呢？](https://segmentfault.com/q/1010000004519527)

## 学习大纲
### 什么是 JavaScript

JavaScript 是一种[脚本语言](https://zh.wikipedia.org/wiki/脚本语言)。
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

- 写入 HTML 输出
``` JavaScript
document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph</p>");
```

- 对事件作出反应
``` JavaScript
<button type="button" onclick="alert('Welcome!')">点击这里</button>
```

- 改变 HTML 内容
注：`document.getElementByID("some id")` 这个方法是 HTML DOM 中定义的。
    DOM（文档对象模型）是用以访问 HTML 元素的正式 W3C 标准。
``` JavaScript
x = document.getElementById("demo");  //查找元素
x.innerHTML = "Hello JavaScript";    //改变内容
```

- 改变 HTML 图像：JavaScript 能够改变任意 HTML 元素的大多数属性，而不仅仅是图片。
``` JavaScript
element = document.getElementById('myimage');
if (element.src.match("bulbon")) {

  element.src = "http://www.w3school.com.cn/i/eg_bulboff.gif";
  
} else {

  element.src = "http://www.w3school.com.cn/i/eg_bulbon.gif";
}
```

- 改变 HTML 样式：改变 HTML 元素的样式，属于改变 HTML 属性的变种。
``` JavaScript
x = document.getElementById("demo");  //找到元素
x.style.color = "#ff0000";           //改变样式
```

- 验证输入
``` JavaScript
var x = document.getElementById("myinput").value;
if(x == "" || isNaN(x)) {
	alert("Not Numeric");
}

```

#### 1.2 JavaScript 的使用

[本节完整示例代码](./JavaScriptExamples/html/02_usage.html)

- HTML 中的脚本必须位于 <script> 与 </script> 标签之间。
- 脚本可被放置在 HTML 页面的 <body> 和 <head> 部分中。
- 那些老旧的实例可能会在 <script> 标签中使用 type="text/javascript"。现在已经不必这样做了。JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言。
- 您可以在 HTML 文档中放入不限数量的脚本。
- 脚本可位于 HTML 的 <body> 或 <head> 部分中，或者同时存在于两个部分中。
- 通常的做法是把函数放入 <head> 部分中，或者放在页面底部。这样就可以把它们安置到同一处位置，不会干扰页面的内容。
- [网站为什么 JS 调用尽量放到网页底部？](https://www.zhihu.com/question/34147508)（推荐阅读）
- 外部的 JavaScript：
  - 可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码
  - 外部 JavaScript 文件的文件扩展名是 .js
  - 在 <head> 或 <body> 中引用脚本文件都是可以的。实际运行效果与在 <script> 标签中编写脚本完全一致
  - 如需使用外部文件，请在 <script> 标签的 "src" 属性中设置该 .js 文件。


引入外部的 js 文件：
```
<!DOCTYPE html>
<html>
<body>
<script src="myScript.js"></script>
</body>
</html>
```

#### 1.3 JavaScript 输出

