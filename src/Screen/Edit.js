import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Edit = ({ route, navigation }) => {
    //const { name, note, key } = route.params;
    const [editTitle, setEditTitle] = useState("");
    const [editNote, setEditNote] = useState("");
    const [cardKey, setCardKey] = useState();
    //console.log(route.params);

    useEffect(() => {
        //console.log(route.params);
        route.params === undefined ? undefined : setEditTitle(route.params.name)
        route.params === undefined ? undefined : setEditNote(route.params.note)
        route.params === undefined ? undefined : setCardKey(route.params.Key)
        console.log(route.params.Key);



    }, [route])




    return (
        <View style={styles.viewStyle}>
            <Text style={styles.txtStyle}>Add Note here</Text>
            <View style={styles.txtInStyle}>
                <TextInput
                    placeholder='Heading...'
                    placeholderTextColor='#999'
                    value={editTitle}

                    keyboardType='default'
                    onChangeText={(text) => {
                        setEditTitle(text)
                    }
                    }

                    style={styles.headNoteStyle}

                />
                <TextInput

                    placeholderTextColor='#999'
                    style={styles.NoteStyle}
                    multiline={true}
                    numberOfLines={15}
                    value={editNote}
                    onChangeText={(text) => {
                        setEditNote(text)
                    }}




                />
            </View>
            <View style={styles.addbtnStyle}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home', { cardKey, ETitle:editTitle, ENote:editNote })
                    }}>
                    <Text
                        style={{ fontSize: 23 }}>
                        Add</Text>



                </TouchableOpacity>
                
            </View>

        </View>
    )
}

export default Edit

const styles = StyleSheet.create({
    viewStyle: {
        height: '100%',
        width: '100%',
        //justifyContent:'center',
        //alignItems: 'center',

    },
    txtStyle: {
        fontSize: 33,
        alignSelf:'center',

    },
    headNoteStyle: {
        //position: 'absolute',
        //top: 50,
        alignSelf:'center',
        // left: 10,
        fontSize: 23,
        backgroundColor: '#D8D9DA',
        width: '90%',
        borderRadius: 15,
        paddingLeft: 7


    },
    NoteStyle: {
        //position: 'absolute',
        //top: 115,
        alignSelf:'center',
        marginTop:15,
        backgroundColor: '#D8D9DA',
        width: '90%',
        //height:500,
        //left: 10,

        borderRadius: 15,
        fontSize: 18,
        textAlignVertical: 'top',
        paddingLeft: 10,


    },
    txtInStyle: {
        //position: 'absolute',
        width: '100%',
        //left: 10,

    },
    addbtnStyle: {
        //position: 'absolute',
        //bottom:20,
        //left: 21,
       marginTop:20,
       marginLeft:20,
        width: 90,
        //height:60,
        backgroundColor: '#FFF',
        //zIndex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 6,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    canclebtnStyle: {
        //position: 'absolute',
        bottom: 250,
        right: 21,
        width: 93,
        //height:60,
        backgroundColor: '#FFF',
        zIndex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 6,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    }

})






//<Image source={require('../image/addNote.png')} style={{width:40,height:40}}/>