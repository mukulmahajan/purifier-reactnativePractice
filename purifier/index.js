/*import a library to help create a componenet*/

import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AList from './src/components/list';
import Status from './src/components/status';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';

// create a component

const App = () => {
    return (
<View>
    <Status></Status>



        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
            
            <Header headerText={'Pump'}
            headericon={<Icon name='arrowright'/>}
            />
            
        </View>
        <View style={{ flex: 1 }}>
            <Header headerText={'Sampler'} 
            headericon={<Icon2 name='square'/>}
            />
        </View>
        <View style={{ flex: 1 }}>
            <Header headerText={'Column'}
            headericon={<Icon1 name='circle-slice-8'/>} />
            
        </View>
        
        </View>
        
            <AList >

            </AList>
        
        
        </View>
        
    );
};


// Render it to the device
AppRegistry.registerComponent('purifier', () => App);
