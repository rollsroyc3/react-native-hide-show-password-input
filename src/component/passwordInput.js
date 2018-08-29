import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, TextInput, StyleSheet } from 'react-native';

export default class PasswordInputText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            password: true,
        };
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false,
            };
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true,
            };
        }

        // set new state value
        this.setState(newState);
    };

    render() {
        return (
            <View style={{ width: '100%' }}>
                <TextInput {...this.props} secureTextEntry={this.state.password} />
                <Icon
                    style={styles.icon}
                    name={this.state.icEye}
                    size={this.props.iconSize}
                    color={this.props.iconColor}
                    onPress={this.changePwdType}
                />
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 27,
        right: 25,
    },
});

PasswordInputText.defaultProps = {
    iconSize: 25,
};
