import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class User extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text_content}>User</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: 150,
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
      color: '#000',
  }
})
