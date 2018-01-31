import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    AsyncStorage,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
    TextInput,
} from 'react-native';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
        };
    }
    login = () => {
        let {user, password} = this.state;
    };
    render() {
        return (
            <View style={styles.viewport}>
                <StatusBar backgroundColor="#2e367e" barStyle="light-content" />
                <View style={styles.input}>
                    <TextInput
                        ref="user"
                        value={this.state.user}
                        placeholder="user"
                        onChangeText={e => {
                            this.changeUser(e);
                        }}
                        style={{color: '#ffffff', marginRight: 30}}
                        placeholderTextColor="#B1B9FF"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        ref="password"
                        value={this.state.password}
                        placeholder="password"
                        onChangeText={e => {
                            this.changePassword(e);
                        }}
                        style={{color: '#ffffff', marginRight: 30}}
                        placeholderTextColor="#B1B9FF"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({});
export default connect(store => {
    return {
        spinner: store.spinner,
        user: store.user,
    };
})(Login);
