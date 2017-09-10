import React, {PureComponent} from 'react';
import { Button, View, Text, StatusBar, StyleSheet, Image} from 'react-native';
// import { StackNavigator } from 'react-native';

import Swiper from 'react-native-swiper';

import  NavigationItem   from '../../components/NavigationItem';
import  HomeNavSearchBar   from '../../components/HomeNavSearchBar';

const IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

class SwiperPages extends PureComponent {
    render () {
        return (
        <Swiper style={styles.wrapper} showsButtons={false} horizontal={true} loop={false} index={0}>
            <View style={styles.slide}>
                <Image
                    style={styles.image}
                    source={{uri: 'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024'}}
                />
            </View>
            <View style={styles.slide2}>
                <Text style={styles.text}>我是第二页</Text>
            </View>
            <View style={styles.slide3}>
                <Text style={styles.text}>我是第三页</Text>
            </View>
        </Swiper>
        )
    }
}



export default class Productions extends PureComponent {
    // static navigationOptions = {
    //     title: 'Productions'
    // };

    static navigationOptions = () => ({
        headerTitle: (
            <HomeNavSearchBar
                title="搜索"
            />
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/tabbar/pfb_tabbar_homepage@2x.png')}
            />
        ),
        headerLeft: (
            <NavigationItem
                icon={require('../../img/tabbar/pfb_tabbar_order@2x.png')}
            />
        )
    })

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <StatusBar
                    backgroundColor= 'blue'
                    barStyle= 'dark-content'
                />
                <View style={styles.swiperView}>
                    <SwiperPages/>
                </View>
                <View style={{height: 50, flexGrow: 0, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                    <Text>全部分类</Text>
                    <Text>我的产品</Text>
                </View>
                <Text>Home</Text>
                <Button title="back" onPress={() => navigate('App')}/>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    swiperView: {
        height: 200
    },
    wrapper: {
        height: 200
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        height: 200
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
        height: 200
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1
    }
})