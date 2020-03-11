'use strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from "./styles";
import { MapView } from 'expo';
const { Marker } = MapView;

export const Map = (props) => (
    <View style={styles.container}>
        <MapView
            style={styles.container}
            initialRegion={{
                latitude: props.coords.latitude,
                longitude: props.coords.longitude,
                latitudeDelta: 0.0020,
                longitudeDelta: 0,
            }}
        >
            <Marker
                coordinate={props.coords}
                onPress={() => props.onClickMarker()}
            />
        </MapView>
    </View>
);