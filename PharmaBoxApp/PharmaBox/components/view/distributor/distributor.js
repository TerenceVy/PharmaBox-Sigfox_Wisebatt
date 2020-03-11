'use strict';

import React from 'react';
import { View } from 'react-native';
import { HeaderDistributor, ListItem } from "./utils/utils";
import { styles } from "./utils/styles";
import SocketIOClient from 'socket.io-client/dist/socket.io.js'
import Request from '../../utils/request/request';

class Distributor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: null
        };
        this._init();
    };

    _init = () => {
        let header = {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json"
        };
        this.socket = SocketIOClient('http://172.16.239.31:4000');
        this.socket.on('product', this._socket);
        Request.get('http://172.16.239.31:4000/distributors', header)
            .then( (response) => {
                this.setState({
                    quantity: response.result[0].products[0].quantity
                });
            })
            .catch( (err) => {
                console.log('err ', err);
            })
    };

    _socket = (products) => {
        this.setState({
            quantity: products.result[0].products[0].quantity
        });
    };

    viewConstructor = () => (
        <View style={styles.container}>
            <HeaderDistributor onClickArrow={() => this.props.navigation.navigate('Home')} />
            <View style={styles.background}>
                <ListItem quantity={this.state.quantity !== null ? this.state.quantity : '...'} />
            </View>
        </View>
    );

    render() {
        return (
            this.viewConstructor()
        )
    }
}

export default (Distributor);