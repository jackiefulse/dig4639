import React from 'react';
import { Text } from 'react-native';
import { View} from 'react-native';
import {Image} from 'react-native';
export default class Detail extends React.Component {

    render(){
     let a = this.props.navigation.getParam("a", "");
     let b = this.props.navigation.getParam("image", "");

   // let { width, height } = resolveAssetSource(b)
    //let aspectRatio = width / height
     return  <View style={{ 
      alignItems: 'center',
    }}>
    <Text >{a}</Text>
      <View style={{ flexDirection: 'row',flex:1 }}>
      <Image resizeMode='contain' source ={b } style={{flex:1}}/>
      </View>
    </View>
}
}

