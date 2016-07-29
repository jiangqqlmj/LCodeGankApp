package com.lcodegankapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.theweflex.react.WeChatPackage;

import java.util.Arrays;
import java.util.List;

/**
 * 当前类注释:
 * 项目名：android
 * 包名：com.lcodegankapp
 * 作者：江清清 on 16/7/29 19:26
 * 邮箱：jiangqqlmj@163.com
 * QQ： 781931404
 * 公司：江苏中天科技软件技术有限公司
 * 站点:<a href="http://www.lcode.org">www.lcode.org</a>
 */
public class MainApplication extends Application implements ReactApplication{
    @Override
    public void onCreate() {
        super.onCreate();
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),new WeChatPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
