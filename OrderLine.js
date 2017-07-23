import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';


class OrderLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
    this.changeDisabled = this.changeDisabled.bind(this);
  }
  changeDisabled() {
    console.log( " disabled : " , this.state.disabled );
    this.setState({
      disabled: !this.state.disabled
    });
  }

    render() {
        if( this.state.disabled ){
          return (
          <Text style={[styles.itemText , styles.disabled]} onPress={this.changeDisabled}>{this.props.text}</Text>
          );
        }else{
          return (
          <Text style={styles.itemText} onPress={this.changeDisabled}>{this.props.text}</Text>
          );
        }
    }
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 22,
    margin: 10,
  },
  itemTextDisabled: {
    fontSize: 22,
    margin: 10,
    textDecorationLine: 'line-through',
  },
  disabled: {
    textDecorationLine: 'line-through',
  }
});

export default OrderLine;
