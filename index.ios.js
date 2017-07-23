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
  TouchableOpacity,
  FlatList,
} from 'react-native';

import OrderLine from './OrderLine';

let index = 0;
export default class Native3 extends Component {
  constructor(props) {
    super(props);

    console.log("XXXXX-1");
    this.state = {
      text: '',
      list: [],
    }
  }

  _onChangeText = (text) => {
    this.setState({ text });
    console.log("TEXT CHANGED");
        console.log(text);
  }

  _onPress = () => {
    const {
      list,
      text,
    } = this.state;
    const _list = list.concat();
    _list.push({ key:index, value:text });

    index = index + 1;
    console.log("TEXT pressed");
    console.log( index, " inde: ");
    this.setState({
      text: '',
      list: _list,
    });
  }
  _onPressItem = () => {
//     this.style = {styles.lineThrough};
  }


  render() {
    const {
      list,
      text,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            onChangeText={this._onChangeText}
            underlineColorAndroid="transparent"
            value={text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
          >
            <Text style={styles.buttonText} >Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={list}
          renderItem={
            ({item}) =>
              <OrderLine text={item.value}/>
          }
          style={styles.list}
        />
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
  inputArea: {
    flexDirection: 'row',
    marginTop: 64,
  },
  input: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#008080',
    marginRight: 20,
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: '#006060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  list: {
    width: 300,
  },
  itemText: {
    fontSize: 22,
    margin: 10,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  }
});

AppRegistry.registerComponent('Native3', () => Native3);
