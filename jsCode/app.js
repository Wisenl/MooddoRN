import React, { PureComponent } from 'react';
// import { StackNavigator } from 'react-navigation';

// import Home from './Pages/home';
import { StatusBar, Image }  from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Productions from './Pages/Productions';
import Customer    from './Pages/Customer';
import Email       from './Pages/Email';
import QuickAsk    from './Pages/QuickAsk';
import Mine        from './Pages/Mine';

import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const lightContentScenes = ['Home', 'Mine'];
function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

// create a component
class TabBarItem extends PureComponent {
    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image
                source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
                style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
        );
    }
}
const Tab = TabNavigator(
    {
        Productions: {
            screen: Productions,
            navigationOptions: ({ navigation}) => ({
                tabBarLabel: '产品',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = {focused}
                        tintColor = {tintColor}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}
                    />
                )
            })
        },
        Customer: {
            screen: Customer,
            navigationOptions: ({ navigation}) => ({
                tabBarLabel: '客户',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = {focused}
                        tintColor = {tintColor}
                        normalImage={require('./img/tabbar/pfb_tabbar_merchant@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected@2x.png')}
                    />
                )
            })
        },
        Email: {
            screen: Email,
            navigationOptions: ({ navigation}) => ({
                tabBarLabel: '邮件',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = {focused}
                        tintColor = {tintColor}
                        normalImage={require('./img/tabbar/pfb_tabbar_order@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}
                    />
                )
            })
        },
        QuickAsk: {
            screen: QuickAsk,
            navigationOptions: ({ navigation}) => ({
                tabBarLabel: '快问',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = {focused}
                        tintColor = {tintColor}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
            })
        },
        Mine: {
            screen: Mine,
            navigationOptions: ({ navigation}) => ({
                tabBarLabel: '我',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = {focused}
                        tintColor = {tintColor}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}
                    />
                )
            })
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#06C1AE',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        }
    }
);

const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        // Web: { screen: }
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333',
            showIcon: true
        }
    }
);

// component of App
class MooddoApp extends PureComponent {
    constructor() {
        super();
        StatusBar.setBarStyle('light-content');
    }

    render () {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const previousScene = getCurrentRouteName(prevState);
                        const currentScene = getCurrentRouteName(currentState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
    }
}







// class App extends PureComponent {
//     static navigationOptions = {
//         title: 'Home',
//         header: null
//     };
//   render() {
//       const {navigate} = this.props.navigation;
//     return (
//       <View style={styles.container}>
//           <View style={styles.header}>
//               <Text>Anna</Text>
//               <Text>Add</Text>
//           </View>
//           <Button title="next" onPress={() => navigate('Home')}/>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//     header: {
//       backgroundColor: '#eee',
//         // width: screen.width,
//         height: 20,
//         flex: 0,
//         alignItems: 'center',
//         flexDirection: 'row',
//         flexWrap: 'nowrap',
//         justifyContent: 'space-between'
//     },
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// const SimpleApp = StackNavigator({
//     App: {screen: App},
//     Home: {screen: Home}
// })

export default MooddoApp;