# Demystifying React Native


- Task
  - 了解全貌 
  - bang 和 bs 、味精的解读




## 问题

1. React Native 如何实现 Live Reload 和 Hot Reloading 的（也就是说不需要 Xcode 中 run 一下，就能自动重新编译和运行）？     

2. React Native 所生成的 view 是如何在 APP 中进行绘制、渲染的，与 webView 和 UIKit 的 view 有什么不同？         

3. 为什么一行 Objective-C 代码都不用写，只需要写写 JS 代码就能跑起来？React Native 代码是如何跑起来的？         

4. React Native 能处理复杂逻辑吗？能写一个完整的 APP 吗？原生能做的事，React Native 都能干嘛？         

5. React Native 中的代码都有哪些内容？是纯 JavaScript 代码吗？         

6. 为什么要学习和使用 React Native？其优缺点在哪里？         

7. React Native 中如何使用第三方库？               

8. 如何打包发布 APP？    

9. 执行 react-native run-ios 或者 npm start 时发生了什么

10. 如何修改默认端口？

在 Xcode 中搜索 8081，然后将所有的 8081 替换成 8088，然后选中项目中依赖的 React 源码中的 React.xcodeproj，在 build phases 中找到 start packager 部分的脚本内容，将其中的 8081 也改成 8088。最后直接 CMD+R 运行 Xcode 中的工程。


11. RN 的通信机制

启动时，OC 端注册所有模块。

自定义模块是如何注册的呢？
所有的模块都遵循 RCTBridgeModule 协议。调用 RCT_EXPORT_MODULE 和 RCT_EXPORT_METHOD 宏。


## 一、CLI(react-native-cli)

CLI 是一个 React Native 命令行工具。
根据官方文档，我们需要通过执行 `npm install -g react-native-cli` 来安装 CLI，npm packages 的安装目录是在 `/usr/local/lib/node_modules` 下，当 CLI 安装成功后，会在 `/usr/local/bin/` 下创建一个 `react-native-cli/index.js` 的快捷方式。


### React Native 项目是怎么创建的
`react-native init AwesomeProject` 的执行过程

`npm install` 的执行过程

### React Native 项目是怎么跑起来的

`react-native run-ios` 以及 `react-native run-ios --port=8088`  的执行过程

`npm start` + 在 Xcode 运行 iOS 项目



### 参考
- [Getting Started - React Native](https://facebook.github.io/react-native/docs/getting-started)
- [Understanding the CLI - React Native](https://facebook.github.io/react-native/docs/understanding-cli)
- [Where does npm install packages?](https://stackoverflow.com/questions/5926672/where-does-npm-install-packages)
- [npm 相关](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/46)
- [Node.js 相关](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/47)
- [What is /usr/local/bin?](https://unix.stackexchange.com/questions/4186/what-is-usr-local-bin)


