import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default class Detail extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text_content}>{this.props.navigation.state.params.name}</Text>
          <TouchableOpacity style={styles.button}
            onPress={()=>{this.props.navigation.goBack()}}
          >
            <Text style={styles.text_button}>Go back Home</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: 200,
      height: 50,
      backgroundColor: '#008B45',
  },
  text_button: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
  },
  text_content: {
      marginBottom: 20,
      fontSize: 30,
      fontWeight: 'bold',
      color: 'green',
  }
})