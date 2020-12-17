import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './CardSection';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressCircle from 'react-native-progress-circle'


const ADetail = ({data}) => {
    const { title, userId, id, completed } = data;
    const {
        thumbnailContainerstyle,
        thumbnailstyle,
        headerstyles,
        headertextstyle,
        imagestyle
    } = styles;
    return (
        <Card>
            <CardSection>

                <View style={headerstyles}>

                    <View >
                    

                        <Text>{title}</Text>
                        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{id}</Text>
        </ProgressCircle>
                        <View style={headerstyles}>
                            <Icon3 name='circle-outline' />
                            <Text>{id}</Text>
                            <Text>bar</Text>

                        </View>
                        <View style={headerstyles}>
                            <Icon1 name='menuunfold' />
                            <Text>{id}</Text>
                            <Text>ml/min</Text>

                        </View>


                    </View>

                    <View><Text>{title}

                    </Text>
                    <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{id}</Text>
        </ProgressCircle>
                        <View style={headerstyles}>
                            <Icon2 name='grid' />
                            <Text>{id}{id}</Text>
                            <Text>C</Text>

                        </View>

                        <View style={headerstyles}>
                            <Icon3 name='circle-slice-8' />
                            <Text>{id}</Text>
                            <Text>C</Text>

                        </View>

                    </View>



                    <View>
                        <Text>{title}</Text>
                        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{id}</Text>
        </ProgressCircle>
                        <Text>{title}</Text>
                        <View style={headerstyles}>
                            <Icon name='eyeglass' />

                            <Text>Detector</Text>

                        </View>









                    </View>

                </View>
            </CardSection>





        </Card>
    );

};

const styles = {
    headerstyles: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-around'
    },
    headertextstyle: {
        fontSize: 18

    },
    thumbnailstyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerstyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imagestyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default ADetail;