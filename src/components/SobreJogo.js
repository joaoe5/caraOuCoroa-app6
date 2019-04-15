import React, { Component } from 'react';
import { Text } from 'react-native';

export default class SobreJogo extends Component {
    render() {
        return (
            <Text style={{ flex: 1, backgroundColor: '#61BD8C', fontSize: 24 }}>
                Aqui podem ser apresentadas informações sobre o jogo.
            </Text>
        );
    }
}
