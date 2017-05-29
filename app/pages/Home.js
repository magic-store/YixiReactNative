import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import {fetchHome} from '../api'
import SplashScreen from 'react-native-splash-screen';

export default class Home extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
     fetchHome();
  }
  render() {
     return (
        <View style={styles.container}>

            <Text onPress={ () => this.props.navigation.openDrawer()}>home</Text>
        </View>
     )
  }
}

const styles = StyleSheet.create({
  container : {
     flex: 1,
     paddingTop : 30
  }
})
