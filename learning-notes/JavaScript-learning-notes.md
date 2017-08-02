# JavaScript 学习笔记

- [W3CSchool](http://www.w3school.com.cn/js/index.asp)
- [完整的 JavaScript 对象参考手册（包含实例）](http://www.w3school.com.cn/jsref/index.asp)
- [完整的 HTML DOM 对象参考手册（包含实例）](http://www.w3school.com.cn/jsref/index.asp)

### 什么是 JavaScript

JavaScript 是一种[脚本语言](https://zh.wikipedia.org/wiki/脚本语言)。
JavaScript 是一种轻量级的编程语言。
JavaScript 是可插入 HTML 页面的编程代码。
JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。
JavaScript 可以用来写前端、后端，甚至移动端应用。

### JavaScript 语法
#### 1. JavaScript 基础
#### 1.1 简介
[本节完整示例代码](./JavaScriptExamples/html/01_intro.html)

写入 HTML 输出
``` JavaScript
document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph</p>");
```

对事件作出反应
``` JavaScript
<button type="button" onclick="alert('Welcome!')">点击这里</button>
```

改变 HTML 内容
注：`document.getElementByID("some id")` 这个方法是 HTML DOM 中定义的。
    DOM（文档对象模型）是用以访问 HTML 元素的正式 W3C 标准。
``` JavaScript
x = document.getElementById("demo");  //查找元素
x.innerHTML = "Hello JavaScript";    //改变内容
```

改变 HTML 图像：JavaScript 能够改变任意 HTML 元素的大多数属性，而不仅仅是图片。
``` JavaScript
element = document.getElementById('myimage');
if (element.src.match("bulbon")) {

  element.src = "http://www.w3school.com.cn/i/eg_bulboff.gif";
  
} else {

  element.src = "http://www.w3school.com.cn/i/eg_bulbon.gif";
}
```

改变 HTML 样式：改变 HTML 元素的样式，属于改变 HTML 属性的变种。
``` JavaScript
x = document.getElementById("demo");  //找到元素
x.style.color = "#ff0000";           //改变样式
```

验证输入
``` JavaScript
var x = document.getElementById("myinput").value;
if(x == "" || isNaN(x)) {
	alert("Not Numeric");
}

```

#### 1.2 JavaScript 的使用