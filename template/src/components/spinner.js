import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

@connect((state) => {
  return { spinner: state.spinner }
})
class MySpinner extends Component {
  render() {
    const { visible } = this.props.spinner;
    return
    <View style={{ display: visible ? "none" : "block" }}>
      <ActivityIndicator overlayColor="rgba(255, 255, 255,0)" color="#666" />
    </View>
  }
}
export default MySpinner
