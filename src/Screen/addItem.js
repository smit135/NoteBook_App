import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'

const AddItem = ({ navigation }) => {
    const [Title, setTitle] = useState([]);
    const [Note, setNote] = useState([]);
    
    const check = () => {
            if(Title==''&&Note==''){
                Alert.alert("You havn't enter any thing...");
                return false
            }
            else if(Title==''){
                Alert.alert("You havn't enter heading...");
                return false
            }
            else if(Note==''){
                Alert.alert("you havn't enter any thing in note");
                return false
            }
            
            else{
                navigation.navigate('Home', { Title, Note });
            }
    }
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.txtStyle}>Add Note here</Text>
            <View style={styles.txtInStyle}>
                <TextInput
                    placeholder='Heading...'
                    placeholderTextColor='#999'
                    style={styles.headNoteStyle}
                    onChangeText={
                        (text) => {
                            setTitle(text);
                            //console.log(text);
                        }}

                />
                <TextInput
                    placeholder='Note...'
                    placeholderTextColor='#999'
                    style={styles.NoteStyle}
                    multiline={true}
                    numberOfLines={13}
                    onChangeText={(text) => {
                        setNote(text)
                        //console.log(text);
                    }}
                />
            </View>
            <View style={styles.addbtnStyle}>
                <TouchableOpacity style={{width:'100%',height:'100%'}}
                    

                    onPress={()=>{check()}}>
                    <Text
                        style={{ fontSize: 23,marginLeft:23 }}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.canclebtnStyle}>
                <TouchableOpacity 
                style={{width:'100%',height:'100%'}}
                    onPress={() => {
                        setNote();
                        setTitle();
                        navigation.navigate('Home');
                    }}>
                    <Text
                        style={{ fontSize: 23 ,marginLeft:10}}>Cancel</Text>


                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    viewStyle: {
        height: '100%',
        width: '100%',
        //justifyContent:'center',
        alignItems: 'center',

    },
    txtStyle: {
        fontSize: 33,

    },
    headNoteStyle: {
        position: 'absolute',
        top: 50,
        left: 10,
        fontSize: 23,
        backgroundColor: '#D8D9DA',
        width: '90%',
        borderRadius: 15,
        paddingLeft: 7


    },
    NoteStyle: {
        position: 'absolute',
        top: 115,
        backgroundColor: '#D8D9DA',
        width: '90%',
        //height:500,
        left: 10,

        borderRadius: 15,
        fontSize: 18,
        textAlignVertical: 'top',
        paddingLeft: 10,


    },
    txtInStyle: {
        position: 'absolute',
        width: '100%',
        left: 10,

    },
    addbtnStyle: {
        position: 'absolute',
        bottom: 370,
        left: 21,
        width: 90,
        //top:0,
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
    },
    canclebtnStyle: {
        position: 'absolute',
        bottom: 370,
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