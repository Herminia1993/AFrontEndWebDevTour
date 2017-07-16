//
//  VersionManager.h
//  AwesomeProject
//
//  Created by ShannonChen on 2017/7/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>


/**
 JS bundle 文件管理器
 */
@interface VersionManager : NSObject

/// 当前版本路径
+ (NSURL *)jsCodeLocation;

@end
