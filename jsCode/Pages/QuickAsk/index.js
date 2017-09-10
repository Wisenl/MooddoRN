import React, {PureComponent} from 'react';
import { Button, View, Text, StatusBar} from 'react-native';
// import { StackNavigator } from 'react-native';

export default class QuickAsk extends PureComponent {
    static navigationOptions = {
        title: 'QuickAsk'
    };
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <StatusBar
                    backgroundColor= 'blue'
                    barStyle= 'dark-content'
                />
                <Text>Home</Text>
                <Button title="back" onPress={() => navigate('App')}/>
            </View>
        );
    }
}