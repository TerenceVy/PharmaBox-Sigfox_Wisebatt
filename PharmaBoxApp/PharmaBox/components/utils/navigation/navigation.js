'use strict';

import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';

/***********/
/*  Views  */
/***********/

import Home from "../../view/home/home";
import distributor from "../../view/distributor/distributor";

const Application = createStackNavigator({
        Home: { screen: Home },
        Distributor: { screen: distributor }
    },
    {
        headerMode: 'none',
    });

export const Navigation = createAppContainer(Application);