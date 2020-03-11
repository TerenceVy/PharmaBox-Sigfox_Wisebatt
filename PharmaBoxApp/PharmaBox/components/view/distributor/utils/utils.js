'use strict';

import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity, Image, Text
} from 'react-native';
import { styles } from "./styles";
import { Header } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';

export const HeaderDistributorArrow = (props) => (
    <TouchableOpacity onPress={() => props.onClickArrow()}>
        <AntDesign name="arrowleft" size={25}/>
    </TouchableOpacity>
);

export const HeaderDistributor = (props) => (
    <Header
        leftComponent={HeaderDistributorArrow(props)}
        centerComponent={{ text: 'Distributeur', style: { fontWeight: 'bold' } }}
        containerStyle={styles.headerStyle}
    />
);

export const ListItem = (props) => (
    <View style={{ width: '100%', alignItems: 'center', paddingTop: '10%' }}>
        <View style={{ width: '90%', backgroundColor: '#e1e1e1', height: 100, borderRadius: 4, flexDirection: 'row' }}>
            <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: 'https://www.pharmacie-de-merville.fr/uploads/pharmacy/23917/product/f84e3ddd-dc02-49dd-9dd5-e8709f80f622.png' }} style={{ height: 60, width: 75 }} />
            </View>
            <View style={{ width: '45%', justifyContent: 'center' }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', opacity: 0.8 }}>
                    Doliprane
                </Text>
            </View>
            <View style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Quantité
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                    {props.quantity}
                </Text>
            </View>
        </View>
    </View>
);