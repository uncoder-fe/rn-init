import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Animated, Easing, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
// 页面引入
import LoginScreen from '../page/login'; //登陆
import Ad from '../page/ad'; //加载页
import Spinner from '../components/spinner'; // loading

// 页面路由
const AppRouteConfigs = {
    login: { screen: LoginScreen }
};

const createStackNavigator = user => {
    let initialRouteName = 'login';
    return StackNavigator(
        AppRouteConfigs,
        {
            initialRouteName,
            headerMode: 'none',
            mode: 'card',
            transitionConfig: () => {
                return {
                    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
                    transitionSpec: {
                        duration: 500,
                        easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
                        timing: Animated.timing,
                    }
                };
            }
        }
    )
};

class Router extends Component {
    constructor(props) {
        super(props);
        this.navigator = {};
    }
    componentDidMount = async () => {
        // 本地用户数据持久化缓存
        const localUserString = await AsyncStorage.getItem('user');
        // console.log('localUserString', localUserString);
        let user = {};
        if (localUserString) {
            user = JSON.parse(localUserString);
        }
        // 二次触发，消除先进入登陆页面，在跳主页面的闪屏现象
        dispatch({ type: 'USER', payload: user });
        // 设置启动页加载时长
        setTimeout(() => {
            dispatch({ type: 'INIT', payload: { already: true } });
        }, 1500);
    }
    componentWillReceiveProps(nextProps) {
        const props = this.props;
        //只在user发生变化的时候，对StackNavigator进行更新
        if (nextProps.user !== props.user) {
            this.navigator = createStackNavigator(nextProps.user);
        }
    }
    render() {
        const { init, user } = this.props;
        const LoadPage = init.already && Object.keys(this.navigator).length > 0 ? this.navigator : Ad;
        return (
            <View style={{ "height": "100%", "width": "100%" }}>
                <LoadPage />
                {/* 全局loadding */}
                <Spinner />
            </View>
        );
    }
}
export default connect(store => ({
    init: store.init,
    user: store.user
}))(Router);
