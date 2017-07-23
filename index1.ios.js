/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class Native3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  _onChangeText = (text) => {
    this.setState({ text });
  }

  render() {
    const {
      text,
    } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this._onChangeText}
          underlineColorAndroid="transparent"
        />
        <Text>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#008080',
  }
});

AppRegistry.registerComponent('Native3', () => Native3);
