import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';


class MySpinner extends Component {
  render() {
    const { visible } = this.props.spinner;
    return (<View>
      <ActivityIndicator overlayColor="rgba(255, 255, 255,0)" color="#666" />
    </View>)
  }
}
export default connect((store) => {
  return { spinner: store.spinner }
})(MySpinner)
