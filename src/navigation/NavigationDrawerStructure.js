import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, Text } from 'react-native';

import Modal from '../components/Modal';

export default class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    //Props para abrir/cerrar drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('../assets/images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 20 }}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 280 }}>
          <Modal/>
        </View> 
      </View> 
    );
  }
}