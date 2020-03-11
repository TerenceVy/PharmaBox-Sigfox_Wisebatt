'use strict';

import React from 'react';
import { Map } from './utils/utils';
import SocketIOClient from 'socket.io-client/dist/socket.io.js'
import Request from '../../utils/request/request';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coords: {
                latitude: 48.8139691,
                longitude: 2.3924524
            }
        };
    };

    render() {
        return (
            <Map coords={this.state.coords}
                 onClickMarker={() => this.props.navigation.navigate('Distributor')}
            />
        )
    }
}

export default (Home);