# React Native 学习[笔记](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues)

## 相关作品
- [AwesomeProject](./AwesomeProject)：一个 Tutorial Project，用来记录 [从 0 开始学习 React Native](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/blob/master/React-Native/README.md) 的过程的小项目。
- [DoubanApp](./DoubanApp)：一个精简版的豆瓣 APP（iOS）。
- [Douban](https://github.com/ShannonChenCHN/Douban)：一个由 Objective-C 和 React Native 实现的豆瓣 iOS 客户端（非官方）。


## 大纲

### 一、入门基础             

### 1.简介        

1.1 移动开发技术的过去、现在和未来      

1.2 什么是 React Native      

1.3 React Native 的前世今生   

1.4 React Native 与其他移动开发技术的对比      

1.5 为什么要使用 React Native？业内有哪些实际应用案例？      

1.6 如何客观看待 React Native 技术？           

### 2.[环境搭建](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/27)            

- [开发工具及插件](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/14)
  - Homebrew
  - Node
  - React Native CLI
  - Watchman
  - Atom 及配套插件
  - Nuclide
  - Xcode
  - Yarn

- 创建项目

### 3. 储备知识            

- [JavaScript](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/50) ***
  - [理解 JavaScript 中的 this ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/12)
  - [理解 JavaScript 中的方法绑定和 bind 方法，以及箭头函数 `()=>` ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/11)
  - [JavaScript 中的严格模式（Strict mode） ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/7)
- CSS ***
- [ES2015(ES6)](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/34) ***
- [React](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/36)
  - [JSX 语法](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/48)
    - 简介
    - 运行环境
    - JSX 标签
    - 注释
    - 属性
    - 样式
    - 事件绑定 ****
  - [React.JS](https://reactjs.org/)
  - React 的模块化组件概念
     - [什么是组件](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/25)
     - [组件的生命周期](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/8)
     - [组件间的通信](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/13) ****
        - 子组件调用父组件
        - 父组件调用子组件
     - 虚拟 DOM 的概念
- 开发准备 ***
  - 配置文件
  - 运行（模拟器、真机）
  - 调试
  - 内部发布（打 ipa 包在真机上运行）

### 4. 基础概念            

4.1 [属性（props）](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/25)   
> 属性是不可以在组件内部修改的

4.2 [状态（state）](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/24)
> 状态是可以在组件内部修改的

4.3 样式（style）
 
- FlexBox 布局
- 高度与宽度   
  - width
  - height

4.4 [FlexBox](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/49)  ****

- flex  
- flexDirection
- alignItems
- justifyContent

### 二、API 和组件            

### 1. [常用组件](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/28)            

1.1 View     

1.2 Text    

1.3 Image 
 
- 加载本地图片
- 加载网络图片

1.4 TextInput    

1.5 Touchable 
       
- TouchableHighlight
- TouchableOpacity
- TouchableWithoutFeedback

1.6 ScrollView       

1.7 ListView, FlatList, SectionList     

1.8 WebView      

1.9 NavigatorIOS     

1.10 TabBarIOS  

1.11 StatusBar  

1.12 Modal
                   

### 2. [常用 API](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/28)            

2.1 应用入口 AppRegistry   

2.2 数据存储 AsyncStorage

2.3 屏幕参数 PixelRatio    

2.4 应用状态 AppStateIOS    
      
2.5 AlertIOS      
         
2.6 ActionSheetIOS       

2.7 网络状态 NetInfo          
        
2.8 相机访问 CameraRoll         
         
2.9 震动 VibrationIOS          
        
2.10 地理位置信息 Geolocation        
          
2.11 网络请求   
         
  - Fetch
  - XMLHttpRequest（Ajax）
  - WebSocket      

2.12 定时器            
      
2.13 动画             

### 三、进阶指南            

### 1. 实战指南            

1.1 [使用第三方库](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/1)            

1.2 [嵌入到现有原生应用](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/4) ***                 

1.3 [封装 iOS 原生模块](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/19)               
   
1.4 [封装 iOS 原生 UI 组件](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/20)          
        
1.5 [链接原生库](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/21)         
          
1.6 [原生和 React Native 之间的通信](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/22)        

1.7 Flux 数据流简介，Redux 框架简介

### 2.工程实践            

2.1 平台适配

2.2 打包发布     

2.3 [热更新](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/5) **              
    
2.4 自动化测试        

2.5 性能调优、内存警告的处理

### 3.实现原理                  

3.1 React Native 源码分析和 React Native 的实现              
    
3.2 React Native 与 weex 的对比           
       
3.3 相比原生的优点和缺点 


### 四、参考手册      

1. [React Native 常用命令 ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/3)       

2. [React Native 编码规范](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/6)       

3. [颜色](http://reactnative.cn/docs/0.45/colors.html#content)       

4. [Layout 相关属性](https://facebook.github.io/react-native/docs/layout-props)

5. [JavaScript 参考手册](http://www.w3school.com.cn/js/index.asp)
 

## [刨根问底](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/52)      
     



## 相关资源
- [React 官网](https://facebook.github.io/react/)
- [React 入门实例教程-阮一峰](http://www.ruanyifeng.com/blog/2015/03/react.html)（教程）
- [React Native 官网](https://facebook.github.io/react-native/)（教程）
- [React Native 中文网](http://reactnative.cn)（教程）
- [React 中文社区](http://react-china.org)
- [React Native中文社区](http://bbs.reactnative.cn)
- [facebook/react-native](https://github.com/facebook/react-native/)
- [jondot/awesome-react-native](https://github.com/jondot/awesome-react-native)
- [reactnativecn/react-native-guide](https://github.com/reactnativecn/react-native-guide)
- [crazycodeboy/RNStudyNotes](https://github.com/crazycodeboy/RNStudyNotes)
- [写给移动开发者的 React Native 指南](http://www.jianshu.com/p/b88944250b25)
- [构建 F8 2016 App](https://f8-app.liaohuqiu.net/#content)（教程）
- Facebook 官方开源的 [fbsamples/f8app](https://github.com/fbsamples/f8app)
- [react-native-training/react-native-elements](https://github.com/react-native-training/react-native-elements)
- [fangwei716/30-days-of-react-native](https://github.com/fangwei716/30-days-of-react-native)
- [huanxsd/MeiTuan](https://github.com/huanxsd/MeiTuan)
- [attentiveness/reading](https://github.com/attentiveness/reading)
- [有哪些 React Native 开发的作品推荐吗？](https://www.zhihu.com/question/37275973)
- [REACT NATIVE模块桥接详解](http://www.dobest.me/blog/2015/10/16/React%20Native模块桥接详解/)
- [从一个实战项目来看一下React Native开发的几个关键技术点](https://juejin.im/post/59a65113f265da247b4e98c1)


## 业界讨论

### 原理
- [bang：React Native通信机制详解](http://blog.cnbang.net/tech/2698/)
- [bang: React Native 源码导读(零) – 创建/运行/调试](http://blog.cnbang.net/tech/3461/)
- [iOS 动态更新方案对比:JSPatch vs React Native](https://blog.cnbang.net/tech/3237/)
- [bestswifter：React Native 从入门到原理](https://bestswifter.com/react-native/)
- [ReactNative iOS源码解析 - 折腾范儿の味精](https://awhisper.github.io/2016/06/24/ReactNative%E6%B5%81%E7%A8%8B%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/)
- [从 iOS 视角解密 React Native 中的线程](https://mp.weixin.qq.com/s/nKAGWx94Zl7XEHgV34XATw)
- [深入理解react-native](http://blog.ilibrary.me/2016/12/25/react-native-internal#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
- [Dive into React Native performance](https://code.fb.com/android/dive-into-react-native-performance/)

### 实践优化
- [携程：React Native 业务实践和性能优化](http://www.infoq.com/cn/presentations/react-native-business-practice-and-performance-optimization?utm_campaign=rightbar_v2&utm_source=infoq&utm_medium=presentations_link&utm_content=link_text)
- [React Native 在 Glow 的实践](http://tech.glowing.com/cn/react-native-at-glow/)
- [看Facebook是如何优化React Native性能](https://github.com/gaohailang/blog/issues/4)

### 其他

- [An iOS Developer on React Native – iOS App Development – Medium](https://medium.com/ios-os-x-development/an-ios-developer-on-react-native-1f24786c29f0)
- [Using React Native: One Year Later](https://medium.com/m/global-identity?redirectUrl=https://blog.discordapp.com/using-react-native-one-year-later-91fd5e949933)
- [What is the best way to start learning React Native?](https://www.quora.com/What-is-the-best-way-to-start-learning-React-Native)
- [Comparing the Performance between Native iOS (Swift) and React-Native](https://github.com/xitu/gold-miner/blob/master/TODO/comparing-the-performance-between-native-ios-swift-and-react-native.md)[reddit](https://www.reddit.com/r/javascript/comments/5xsf6j/comparing_the_performance_between_native_ios/)
- [唐巧：谈谈 React Native](http://blog.devtang.com/2015/02/01/talk-about-react-native/)
- [喵神：跨平台开发时代的 (再次) 到来？](https://onevcat.com/2015/03/cross-platform/)
- [原生开发才是王道](http://stormzhang.com/2016/09/05/native-app-is-king/)
- [React Native概述：背景、规划和风险](http://div.io/topic/938)
- [鬼道：Native与Web的融合 - Qcon中React-Native演讲](http://www.infoq.com/cn/presentations/the-fusion-of-native-and-web)
- [在 Android 中集成 React Native 的经验分享](http://tech.glowing.com/cn/react_native_practice_on_android/)
- [vczero: H5、React Native、Native应用对比分析](https://github.com/vczero/vczero.github.io/blob/master/react_native/H5、React%20Native、Native应用对比分析.md)
- [Weex & ReactNative & JSPatch大对比](http://awhisper.github.io/2016/07/22/Weex-ReactNative-JSPatch/)
- [hi大头鬼hi：weex&ReactNative对比](https://zhuanlan.zhihu.com/p/21677103)
- [React Native 开源一年的总结](https://github.com/gaohailang/blog/issues/23)
- [如何评价 React Native？](https://www.zhihu.com/question/27852694)
- [React Native和React有啥区别？](https://www.zhihu.com/question/30466658)
- [React Native有什么优势？能跟原生比么？](https://www.zhihu.com/question/36722811)
- [React Native是否会是下一个技术浪潮？](https://www.zhihu.com/question/43693705)
- [如何看待苹果禁止 JSPatch 等 iOS APP 热更新方案？](https://www.zhihu.com/question/56794578)




