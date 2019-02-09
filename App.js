/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// 导航器 主题
import {TeaNavigator, Theme} from 'teaset';
// 引入全局样式
import styleUtil from "./app/common/styleUtil";

// 主题设置
Theme.set({
	fitIPhoneX: true, // 适配iPhoneX
	tvBarBtnIconActiveTintColor: styleUtil.themeColor, // TabView
	tvBarBtnActiveTitleColor: styleUtil.themeColor, // TabView
	navColor: 'white',
	backgroundColor: 'white',
	navTintColor: 'black',
	navTitleColor: 'black',
	navSeparatorLineWidth: styleUtil.borderSeparator,
	navSeparatorColor: styleUtil.borderColor,
	navType: 'auto', //'auto', 'ios', 'android'
	navStatusBarStyle: 'dark-content', //'default', 'light-content', 'dark-content'
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    '双击R刷新',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
