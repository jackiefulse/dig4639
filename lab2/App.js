import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {value: '', nameAvailable:false, isValid:true};
    this.myFunc();
    console.log(4);
  }
  myFunc() {
    console.log(0);
    console.log(0);
  }

  onChange(event) {
    this.setState({value:event})
    console.log(event);

  }

  onPress() {
    // "abcdef)"
    if(!(/[^a-zA-Z]+/.test(this.state.value))) {
      this.setState({nameAvailable:true});
      this.setState({isValid:true});
    } else {
    //alert('A name was submitted: ' + this.state.value);
      this.setState({isValid:false});
  }

    console.log("this.setState");
  }
  render() {
    return (
      <View  style={styles.container} flexDirection="column" alignItems='stretch'>
      {
        (this.state.nameAvailable) ?
        <Text>Hello {this.state.value}</Text>
        :
        <View>
          <View>
            <TextInput value={this.state.value} style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput>
            </View>
            {(this.state.isValid)? null:<Text style={styles.error}// XXX: > Error</Text> }
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
    }
    </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error:{
    color:'red'
  }
});
