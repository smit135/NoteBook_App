import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = ({navigation}) => {
    const notes = [
        {
            key: 1,
            name: 'smit',
            year: 2010,

        },
        {
            key: 2,
            name: 'parth',
            year: 2010,

        },
        {
            key: 3,
            name: 'jenish',
            year: 2010,

        },
        {
            key: 4,
            name: 'rushal',
            year: 2010,

        },
        {
            key: 5,
            name: 'Kenil',
            year: 2010,

        },
        {
            key: 6,
            name: 'jenish',
            year: 2010,

        },
        {
            key: 7,
            name: 'rushal',
            year: 2010,

        },
        {
            key: 8,
            name: 'Kenil',
            year: 2010,

        },
    ]
    return (
        <View style={styles.viewmianStyle}>

            <FlatList style={styles.listStyle}
                data={notes}
                keyExtractor={(key) => {
                    return key.key;
                }}
                

                numColumns='2'
                renderItem={({ item }) => {
                    return (<View style={styles.viewStyle}>
                        <TouchableOpacity style={{height:'100%',width:'100%'}}
                        onPress={() => { navigation.navigate('Add') }}>
                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                        <Text >{item.year}</Text>
                        </TouchableOpacity>

                    </View>);
                }}
            />
            <TouchableOpacity style={styles.txtStyle} 
            onPress={() => { navigation.navigate('Add') }}>
            <Text>Hello</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    viewmainStyle: {

    },
    viewStyle: {
        width: 160,
        height: 160,
        marginTop: 90,
        //marginBottom:30,
        marginLeft: 30,
        marginBottom:5,
        padding: 7,
        //backgroundColor: '#FFF',
        backgroundColor: '#EEEEEE',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 6,
        borderRadius:10,


    },
    listStyle: {
        //position:'absolute',
        //marginTop:50,
        marginBottom:40,


    },
    txtStyle:{
        position:'absolute',
        top:10,

    }
})