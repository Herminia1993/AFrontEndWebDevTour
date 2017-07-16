//
//  VersionManager.m
//  AwesomeProject
//
//  Created by ShannonChen on 2017/7/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "VersionManager.h"
#import <UIKit/UIKit.h>
#import <React/RCTBundleURLProvider.h>

#define kLocalLatestVersion   1.0

@implementation VersionManager

/**
 
 更新策略：静默更新，也就是每次程序启动的时候，获取最新版本的数据，并根据需要下载最新版本的 js bundle 文件，下次应用打开时直接读取最新的文件
 回滚策略：根据崩溃时上报的数据，看看 React Native 的 js bundle 文件版本号，崩溃原因。因为我们每次都保留了最近的两个版本的 js bundle 文件，所以可以直接回滚到上一个版本。
 */

+ (void)load {
  
  // 在应用启动时检测更新
  [self updateJSCodeIfNeeded];
  
}


#pragma mark - Update Logic

+ (void)updateJSCodeIfNeeded {
  
  // 检查远程版本配置，获取当前 APP 版本支持的最新的 js bundle 文件版本
  [self fetchJSCodeInfoWithCompletion:^(id result) {
    
    // 判断版本号
    if ([result[@"latestVersion"] doubleValue] > kLocalLatestVersion) {
      
      // 更新
      [self downloadLatestVersionWithURL:result[@"latestVerionURL"] completion:^(id result) {
        // 更新 kLocalLatestVersion
        // 缓存最新版本的 js bundle 文件，同时删除上上个版本的 js bundle 文件缓存，保留上个版本的 js bundle 文件缓存，用于回滚
        // 下次启动时直接读取 kLocalLatestVersion 版本的 js bundle 文件
        
      }];
      
    } else {
      //什么都不做
    }
    
  }];

}

/// 获取当前 APP 版本支持的最新的 js bundle 文件版本
+ (void)fetchJSCodeInfoWithCompletion:(void(^)(id result))completion {
  
}

/// 下载最新版本的 js bundle 文件
+ (void)downloadLatestVersionWithURL:(NSString *)url completion:(void(^)(id result))completion {
  
}


/// 回滚到上一个版本
+ (void)revertToLastVersion {
  
}


#pragma mark - Public Interface
/// 要加载 js bundle 文件路径
+ (NSURL *)jsCodeLocation {
  
  // 读取最新版本的 js bundle 文件
  NSURL *jsCodeLocation;
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  return jsCodeLocation;
}

@end
