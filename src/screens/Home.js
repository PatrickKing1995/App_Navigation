import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text_content}>HOME</Text>
          <TouchableOpacity style={styles.button}
            onPress={()=>{this.props.navigation.navigate('ManHinh_Detail', {name: 'Hello Patrick'})}}
          >
            <Text style={styles.text_button}>Go to Detail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}
          >
            <Text style={styles.text_button}>Go to Menu</Text>
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
        width: 150,
        height: 50,
        backgroundColor: '#008B45',
        marginBottom: 10,
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