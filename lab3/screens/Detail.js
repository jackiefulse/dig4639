import React from 'react';
import { Text } from 'react-native';
import { View} from 'react-native';
export default class Detail extends React.Component {
    static navigationOptions = {
      header: null,
    }
    render(){
    return <View><Text>Hello World</Text></View>
    this.props.navigation.navigate('Home', { Detail }) 
    this.props.navigation.getParam(Detail, defaultValue)
}
}
