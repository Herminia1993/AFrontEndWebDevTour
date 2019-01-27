# Demystifying React Native



## 目录
1. 动态化能力对比：JSON vs. JavaScript
2. React Native 实际上做了什么？简单解释一下 React Native 是什么？
3. 运行一个 React Native 项目时，发生了什么？
4. Objective-C 和 JavaScript 之间的通信



### 1. 动态化能力对比：JSON vs. JavaScript

两者的共同点：动态、跨平台。

JSON 只是一种数据格式，不是语言，所以只能用来描述信息，不能像 RN 那样描述逻辑和具体步骤。

```
程序 = 数据结构 + 算法
```

### 2. React Native 实际上做了什么？简单解释一下 React Native 是什么？


从开发角度上看，React Native 就是用 JavaScript 编写 app，但是实际上跟用原生语言 Objective-C 和 Java 开发不一样的，多了一层转换——通过 JS 引擎将 JS 代码转成原生代码。



React Native 的开发
```
JavaScript  ----> JavaScriptCore ---> Objective-C/Java -> Cocoa Touch / Android 系统框架
```


原生开发

```

Objective-C/Java -> Cocoa Touch / Android 系统框架

```

### 3. 从运行一个 React Native 项目到第一屏的显示，发生了什么？

所有的 JSCore 函数都被封装在 systemJSCWrapper 中。

iOS 端主要类：
- View 相关
  - RCTRootView：React Native 应用的容器 view，相当于 iOS 里面的根控制器的 view
  - RCTView：View 组件
  - RCTRootContentView：RCTRootView 的 content view，继承于 RCTView
  - RCTUIManager：专门负责更新和管理 view 层级的 module
  - UIView+React：单个 view 操作的辅助分类，比如添加 subviews
  - RCTShadowView：相当于所有 view 的影子，可以看成是一个 node
- JSCore/Executor/Bridge 相关
  - RCTBridge：
  - RCTCxxBridge：
  - JSCExecutor：
  - systemJSCWrapper：
  - RCTObjcExecutor：
- 事件处理相关
  - RCTTouchHandler
  - RCTEventDispatcher
- Debug 相关
  - RCTPerformanceLogger
  - RCTDevLoadingView
- 其他
  - RCTDisplayLink：根屏幕刷新频率保持一致的定时器，有些模块需要跟着屏幕一起刷新，就需要注册以定时回调


iOS 端目录结构：
- React 核心库：
  - React
    - Base
    - CxxBridge
    - CxxModule
    - CxxUtils
    - DevSupport 
    - Inspector
    - Modules
    - Profiler
    - UIUtils
    - Views
  - ReactCommon
    - yoga
    - cxxreact
    - jshelpers
    - jsinspector
  - 其他的 C++ 库：
    - boost：C++ 语言标准库的扩展库
    - folly：Facebook 开源的 C++ 基础库
    - glog：Google 开源的 logging 库
    - double-conversion：Google 开源的一个 C++ 库，用于处理二进制和十进制之间的相互转换，folly 依赖于这个库
- RCTImage
- RCTText
- RCTNetwork
- RCTAnimation
- RCTWebSocket

JavaScript 端主要类/模块：
- AppRegistry：JS 端 React Native 应用代码的入口
- BatchedBridge：
- MessageQueue：
- UIManager：


1. 程序启动时，各个模块会自动注册；
2. 程序启动时，通过 `RCTBundleURLProvider` 获取 JS bundle 的地址；
2. 创建 `RCTRootView`（`RCTRootView` 是一个容器 view）；
  2.1 创建 `RCTBridge` 对象；
    2.1.1 开发模式下，监听 cmd+r 动作进行刷新；
    2.1.2 创建一个 batchedBridge （默认情况下就是 `RCTCxxBridge`）；
    2.1.3 调用 batchedBridge 的 start 方法（执行 executor 并且开始加载 JS 资源）；
      2.1.3.1 创建并启动专门执行 JS 的线程，同时创建并运行对应的 runloop；
      2.1.3.2 注册非自动导出的 module；
      2.1.3.3 初始化所有模块；
      2.1.3.4 创建 JSCExecutorFactory 对象；
      2.1.3.5 初始化 bridge；
        2.1.3.5.1 创建 NativeToJsBridge 对象，同时创建 JSCExecutor 对象，并在 Native 中给 JS 添加方法`nativeFlushQueueImmediate`、`nativeCallSyncHook`（详见 详见 JSCExecutor.cpp）；

      ```
        -[RCTCxxBridge start]
        -[RCTCxxBridge _initializeBridge]
        facebook::react::Instance::initializeBridge            
        facebook::react::NativeToJsBridge::NativeToJsBridge    // 创建 NativeToJsBridge 对象
        facebook::react::JSCExecutorFactory::createJSExecutor  // 创建 JSCExecutor 对象
        facebook::react::JSCExecutor::JSCExecutor
        facebook::react::JSCExecutor::initOnJSVMThread()
        facebook::react::JSCExecutor::installNativeHook        // 将 JS 方法跟 native 的实现绑定起来
      ```
      2.1.3.6 异步从本地或者服务器加载 JS 资源，加载时更新 loading view；
      2.1.3.7 原生模块初始化完成和 JS 代码都加载完成后再异步执行 JS app 代码（执行完后再执行队列中待执行的调用 `_flushPendingCalls`）；
        2.1.3.7.1 JS 代码中，最先调用的方法是 `AppRegistry.registerComponent`，这个方法就是在 React Native 应用的入口注册根组件；
      2.1.3.8 绑定 bridge，获取 JS 中全局对象的 `__fbBatchedBridge` 属性，这样就可以拿到 JS 里面的 BatchedBridge 对象（见 RN JS源码的 BatchedBridge.js），这个 BatchedBridge 对象实际上就是 MessageQueue 类。拿到这个对象后就可以调用 MessageQueue 的 `callFunctionReturnFlushedQueue`、 `invokeCallbackAndReturnFlushedQueue`、`flushedQueue` 和 `callFunctionReturnResultAndFlushedQueue` 这几个方法了（详见 JSCExecutor.cpp）；
        ```
        ```
  2.2 创建 RCTRootContentView 对象；
  2.3 调用 js 中的 `AppRegistry.runApplication` 方法，但此时 JS 代码还未加载完成，所以会暂时将消息加到消息队列 _pendingCalls 中；
  2.4 JS 资源加载完成后，会回调 `_flushPendingCalls`，执行消息队列中的 `AppRegistry.runApplication` 方法，开始运行 app；
3. 将 rootView 设置为根控制器的 view；




4. JS 调用 Native 的 RCTUIManager 模块，添加子 view，进行布局


如果没有开启 Debug JS Remotely 在 Chrome 里面调试的话，可以打开 Safari 里面的调试工具来调试。
在 Chrome 里调试时，JS 调用原生不会调用 nativeFlushQueueImmediate 方法，需要关掉 Debug JS Remotely 才会（在 Safari 里面调试才可以看到）。

延伸阅读：
http://facebook.github.io/react-native/docs/appregistry.html
- [Deep Diving React Native Debugging](https://medium.com/@shaheenghiassy/deep-diving-react-native-debugging-ea406ed3a691)


### 4. Objective-C 和 JavaScript 之间的通信



（1）Native 调用 JS：

iOS 端
```
-[RCTCxxBridge enqueueJSCall:method:args:completion:]
-[RCTCxxBridge _runAfterLoad:]
facebook::react::Instance::callJSFunction()
facebook::react::NativeToJsBridge::callFunction()
facebook::react::JSCExecutor::callFunction()
facebook::react::Object::callAsFunction()  // JS 端提供了几个方法给 native 调用，一般是调用的是 callFunctionReturnFlushedQueue 方法

```

JS 端
```

```

（2）JS 调用 Native：

JS 一般都是通过调用 `nativeFlushQueueImmediate` 方法来发起对 native 的调用。

JS 端
```
BatchedBridge.enqueueNativeCall()
global.nativeFlushQueueImmediate()
```

iOS 端
```
facebook::react::(anonymous namespace)::exceptionWrapMethod()::funcWrapper::call()   // JSCExecutor.cpp
facebook::react::JSCExecutor::nativeFlushQueueImmediate
facebook::react::JSCExecutor::flushQueueImmediate
facebook::react::JsToNativeBridge::callNativeModules
facebook::react::ModuleRegistry::callNativeMethod
facebook::react::RCTNativeModule::invoke(unsigned int, folly::dynamic&&, int)
facebook::react::invokeInner(RCTBridge*, RCTModuleData*, unsigned int, folly::dynamic const&) 
-[RCTModuleMethod invokeWithBridge:module:arguments:]


```


### 5. RN 是如何创建、渲染和布局 view 的？

（1）创建 View 的过程：

JS 端
```
UIManager.createView()
BatchedBridge.enqueueNativeCall()
global.nativeFlushQueueImmediate()

```

iOS 端
```
// 前面几步跟上面 JS 调用 OC 的过程一样

```


### 6. React Native 源码核心逻辑


（1）自动加载模块

RCT_EXPORT_MODULE 的实现：
在 `+[<#module class#> load]` 方法中调用 `RCTRegisterModule` 函数，然后再将这个模块加到一个全局的数组中 `-[RCTModuleClasses addObject:]`。另外还会自动实现 `+[<#module class#> moduleName]` 这个方法

RCT_EXPORT_METHOD 的实现：



每个 ModuleData 对应一个模块，每个模块都有一个 bridge 属性（都是同一个 bridge 对象）


（2）初始化 Bridge
```
-[APPDelegate application:didFinishLaunchingWithOptions:]
  -[RCTBridge initWithBundleURL:moduleProvider:launchOptions:]
    -[RCTBridge initWithDelegate:bundleURL:moduleProvider:launchOptions:]
      -[RCTBridge setUp]
      -[RCTCxxBridge initWithParentBridge:]
      -[RCTCxxBridge start]
        -[NSThread initWithTarget:selector:object:]
        -[RCTCxxBridge registerExtraModules]
        -[RCTCxxBridge _initializeModules:withDispatchGroup:lazilyDiscovered:]
          -[RCTCxxBridge registerModulesForClasses]      // 注册模块
            -[RCTModuleData initWithModuleClass:bridge:] // 初始化 RCTModuleData
        -[RCTCxxBridge loadSource:onProgress:]     // 加载 JavaScript 资源 
        -[RCTCxxBridge executeSourceCode:sync:]    // 执行 JavaScript 源码
          -[RCTCxxBridge enqueueApplicationScript:url:onComplete:]
            -[RCTCxxBridge executeApplicationScript:url:async:]
              facebook::react::Instance::loadScriptFromString
                facebook::react::Instance::loadApplication
                  facebook::react::NativeToJsBridge::loadApplication
```

### 7. React Native 中的线程




- 初始化
  - OC 端
    - 先创建 RCTRootView
      - 初始化 bridge
- JavaScript 和 Objective-C 之间的通信


### 8. CLI(react-native-cli)

CLI 是一个 React Native 命令行工具。
根据官方文档，我们需要通过执行 `npm install -g react-native-cli` 来安装 CLI，npm packages 的安装目录是在 `/usr/local/lib/node_modules` 下，当 CLI 安装成功后，会在 `/usr/local/bin/` 下创建一个 `react-native-cli/index.js` 的快捷方式。


#### React Native 项目是怎么创建的
`react-native init AwesomeProject` 的执行过程

`npm install` 的执行过程

#### React Native 项目是怎么跑起来的

`react-native run-ios` 以及 `react-native run-ios --port=8088`  的执行过程

`npm start` + 在 Xcode 运行 iOS 项目



### 参考
- [Getting Started - React Native](https://facebook.github.io/react-native/docs/getting-started)
- [Understanding the CLI - React Native](https://facebook.github.io/react-native/docs/understanding-cli)
- [Where does npm install packages?](https://stackoverflow.com/questions/5926672/where-does-npm-install-packages)
- [npm 相关](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/46)
- [Node.js 相关](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/47)
- [What is /usr/local/bin?](https://unix.stackexchange.com/questions/4186/what-is-usr-local-bin)


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