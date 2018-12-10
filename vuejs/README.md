# Vue.js

https://cn.vuejs.org/v2/guide/index.html
http://www.runoob.com/vue2/vue-tutorial.html

1. 引入 Vue

```HTML
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

或者

```HTML
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

2. 声明式渲染


```HTML

<div id="app">
  {{ message }}
</div>
```

```JS
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

```

Vue 是一个响应式的框架，数据和 DOM 已经被建立了关联，所有东西都是**响应式**的。打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 app.message 的值，你将看到上例相应地更新。

3. 动态绑定

```HTML
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```

```JS
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```


指令（v-bind 特性）：指令带有前缀 `v-`，以表示它们是 Vue 提供的特殊特性。它们会在渲染的 DOM 上应用特殊的响应式行为。在这里，该指令的意思是：“将这个元素节点的 title 特性和 Vue 实例的 message 属性保持一致”。

当你修改了 app2.message 的值时，就会看到这个绑定了 title 特性的 HTML 已经进行了更新。


4. 条件与循环

下面的例子是通过 `v-if` 指令控制一个元素的显示和隐藏：

```HTML
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```

```JS
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

```

下面的例子是通过 `v-for` 指令绑定数组的数据来渲染一个项目列表：


```HTML
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```JS
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
```


5. 用户交互


**借助 Vue，我们可以在更新应用的状态的时候，但无需触碰 DOM——所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可。**


我们可以用 `v-on` 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法：

```HTML
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">逆转消息</button>
</div>
```

```JS

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```


Vue 还提供了 `v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定：

```HTML
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

```JS
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```




