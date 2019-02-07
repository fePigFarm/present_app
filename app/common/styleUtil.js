'use strict'

import {
	PixelRatio,
	Dimensions,
	Platform
} from 'react-native';
import { Theme } from "teaset";

// 获取屏幕的像素密度 1到3.5
const scale = PixelRatio.get();
// 获取设备屏幕的信息
const {
	width: winWidth,
	height: winHeight
} = Dimensions.get('window');

// 背景色和主题色
const BACKGROUND_COLOR = '#F9F9F9';
const THEME_COLOR = '#5bc0de'; // 393E42, 3988BD,4F94CD

export default {
	ratio: scale,
	pixel: 1 / scale,
	window: {
		width: winWidth,
		height: winHeight
	},
	avatar: {
		width: 40 * scale,
		height: 40 * scale,
		borderRadius: 40 * scale / 2
	},
	headerRight: {
		fontSize: 17,
		color: '#FFF',
		paddingRight: 15
	},
	navBackgroundColor: 'white',
	disabledColor: '#BBB',//A0A6AA
	detailTextColor: '#989898',
	successColor: '#32CD32',
	borderColor: '#CCC',
	primaryColor: '#337ab7',
	themeColor: THEME_COLOR,
	fontSize: 14,
	backgroundColor: BACKGROUND_COLOR,
	listSpace: { marginTop: 20 },
	container: {
		flex: 1,
		backgroundColor: BACKGROUND_COLOR
	},
	underlayColor: 'rgba(0,0,0,.3)',
	navBarHeight: Platform.OS === 'ios' ? 64 : 44,
	navBarStatusHeight: Platform.OS === 'ios' ? 20 : 0,
	navBarStyle: {
		backgroundColor: THEME_COLOR,
		position: 'relative'
	},
	borderSeparator: Theme.tvBarSeparatorWidth,
	linkTextColor: '#337ab7',
	activeTextColor: '#000',
	inactiveTextColor: '#666',
	activeColor: THEME_COLOR,
	navIconColor: '#000',
	underlineStyle: {
		backgroundColor: THEME_COLOR,
		bottom: 5,
		height: 3,
		// width: 40,
	},
	shadowText: {
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
		textShadowColor: '#000'
	}
};
