import {
  StyleSheet, Text, View, TextInput, Alert,
  ScrollView, Image, TouchableOpacity, FlatList, DrawerLayoutAndroidComponent
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomeScreen = ({ route, navigation }) => {
  //console.log(route);

  const [Titles, setTitles] = useState([])
  const [Notes, setNotes] = useState([])
  //const [ETitle, setETitle] = useState('')
  //const [ENote, setENote] = useState('')
  const [userData, setUserData] = useState([])
  const [key, setKey] = useState(0)
  


  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredNotes, setFilteredNotes] = useState([]);

  // // Your notes data array
  // const allNotes = userData;

  // // Update filteredNotes when searchQuery changes
  // useEffect(() => {
  //   console.log(searchQuery);
  //   const filtered = allNotes.filter(note =>
  //     note.title && note.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredNotes(filtered);
  //   console.log(filteredNotes);
  // }, [searchQuery]);

  



  const deleteObjectAtIndex = (index) => {
    // Remove the object at the given index from the array

    const newArray = userData.filter((_, i) => i !== index);
    const updatedArray = newArray.map((obj, i) => ({ ...obj, key: i }));


    // Update the key values of subsequent objects
    // for (let i = index; i < newArray.length; i++) {
    //   newArray[i].key = i-1;
    // }

    // Update the array in state
    console.log(userData);
    setUserData(updatedArray);
    setKey(key - 1)
    console.log(userData);
  };
  //console.log(userData);
  function button(key) {
    Alert.alert(
      'Confirm',
      'Do you want to delete it!',
      [
        { text: 'NO', onPress: () => { console.warn('NO Pressed'); return false } },
        {
          text: 'YES', onPress: () => {
            console.warn('YES Pressed');
            deleteObjectAtIndex(key)
            console.log('after delete' + JSON.stringify(userData));
          }
        },
      ]
    );
  }



  // useEffect(() => {
  //   // Save userData to local storage
  //   AsyncStorage.setItem('userData', JSON.stringify(userData))
  //     .then(() => {
  //       console.log('userData saved successfully.');
  //     })
  //     .catch((error) => {
  //       console.error('Error saving userData:', error);
  //     });
  // }, [userData]);
  // useEffect(() => {
  //   // Load userData from local storage when the component mounts
  //   AsyncStorage.getItem('userData')
  //     .then((data) => {
  //       if (data) {
  //         setUserData(JSON.parse(data));
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error loading userData from local storage:', error);
  //     });
  // }, []);



  
    

  useEffect(() => {


    if (route.params === undefined) {
      console.log("Home page")
    } else {
      if (route.params.cardKey === undefined) {
        setKey(key + 1);
        route.params === undefined ? undefined : setTitles([...Titles, route.params.Title])
        route.params === undefined ? undefined : setNotes([...Notes, route.params.Note])
        route.params === undefined ? undefined : setUserData([...userData,
        {
          key: key,
          title: route.params.Title,
          notes: route.params.Note,

        },
        ]);
      } else {

        const newUserData = [...userData];
        newUserData[route.params.cardKey].key = route.params.cardKey;

        newUserData[route.params.cardKey].title = route.params.ETitle;
        newUserData[route.params.cardKey].notes = route.params.ENote;
        setUserData(newUserData)
        console.log(newUserData);
      }
    }
  }, [route])

  console.log(userData);








  return (
    <View style={styles.viewStyle}>
      <View style={styles.searchStyle}>
      <TouchableOpacity
      onPress={()=>{navigation.navigate('Screen',{userData})}}>

        <Text
          style={styles.inputStyle}
        >Searching...</Text>
        </TouchableOpacity>
        

      </View>
      <View style={styles.addStyale}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Add') }}>
          <Image
            source={require('../image/add.png')}
            style={{ width: 70, height: 70 }}

          />

        </TouchableOpacity>
      </View>
      <View style={styles.listviewStyle}>

        <FlatList style={styles.listStyle}
          data={userData}
          //keyExtractor={(item, index) => index}

          numColumns='2'
          renderItem={({ item }) => {
            return (<View style={styles.flatviewStyle}>
              <TouchableOpacity style={{ height: '100%', width: '100%' }}
                onLongPress={() => {
                  button(item.key)
                }}
                onPress={() => { navigation.navigate('Edit', { Key: item.key, name: item.title, note: item.notes }) }}>
                <Text numberOfLines={1} style={{ fontSize: 27 }}>{item.title}</Text>
                <Text numberOfLines={3} style={{ fontSize: 17 }}>{item.notes}</Text>
                
              </TouchableOpacity>

            </View>);
          }}
        />
      </View>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    height: '100%',
    position: 'relative',

    //justifyContent: 'center',

    backgroundColor: '#FAFEFF',

  },
  inputStyle: {
    fontSize: 23,
    padding: 10,
  },
  searchStyle: {
    //justifyContent:'center',
    //alignItems:'center',
    padding: 0,
    position: 'absolute',
    marginTop: 12,
    marginHorizontal: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    elevation: 6,
    borderColor: '#999',
    borderWidth: 0,
    borderRadius: 25,
    backgroundColor: '#FFF',
    opacity: 0.9,
    width: 320,
    top: 0,
    zIndex: 1,

  },
  addStyale: {
    backgroundColor: '#FFF',
    position: 'absolute',
    zIndex: 1,
    width: 65,
    height: 65,
    bottom: 50,
    borderRadius: 50,
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
    right: 30,
  },
  cardStyle: {
    //backgroundColor:"grey",


  },
  flatviewStyle: {
    //position:'absolute',
    width: 160,
    height: 160,
    //top:20,
    marginTop: 30,
    marginBottom: 0,
    marginLeft: 30,
    //marginBottom: 5,
    padding: 9,
    //backgroundColor: '#FFF',
    backgroundColor: '#EEEEEE',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    elevation: 6,
    borderRadius: 15,
    //marginVertical:50,
    zIndex: 2,




  },
  listStyle: {
    //position:'absolute',
    //marginTop:50,
    //marginTop: 3,

    height: '90%',
    top: 70,
    //marginBottom: 40,
    //marginVertical:50,
    //zIndex:0,


  },
  listviewStyle: {
    //marginTop: 10,

  }

})











// const notes = [
//   {
//     key: 1,
//     name: 'smit',
//     year: 'By drawing on a fundamental description of cause and effect found in Einstein’s theory of special relativity, researchers from Imperial College London have come up with a way to help AIs make better guesses too',

//   },
//   {
//     key: 2,
//     name: 'parth',
//     year: 'By drawing on a fundamental description of cause and effect found in Einsteins theory of special relativity, researchers from Imperial College London have come up with a way to help AIs make better guesses too',

//   },
//   {
//     key: 3,
//     name: 'jenish',
//     year: 'By drawing on a fundamental description of cause and effect found in Einsteins theory of special relativity, researchers from Imperial College London have come up with a way to help AIs make better guesses too',

//   },
//   {
//     key: 4,
//     name: 'rushal',
//     year: 'By drawing on a fundamental description of cause and effect found in Einsteis theory of special relativity, researchers from Imperial College London have come up with a way to help AIs make better guesses too',

//   },
//   {
//     key: 5,
//     name: 'Kenil',
//     year: 'By drawing on a fundamental description of cause and effect found in Einsteis theory of special relativity, researchers from Imperial College London have come up with a way to help AIs make better guesses too',

//   },
//   {
//     key: 6,
//     name: 'jenish',
//     year: 'By drawing on a fundamental description of cause and effect found in Einsteins theory of special relativity, researchers from Imperial College London have come up with a way to help AIs make better guesses too',

//   },
//   {
//     key: 7,
//     name: 'rushal',
//     year: 'By drawing on a fundamental description of cause and effect found in Einsteins theory of special relativity, researchers from Imperial College London have come up with a way to help AIs make better guesses too',

//   },
//   {
//     key: 8,
//     name: 'Kenil' + ETitle,
//     year: 'By drawing on a fundamental description of cause and effect found in Einsteins theory of special relativity, researchers from Imperial College London have come up with a way to help AIs make better guesses too' + ENote,

//   },
//   {
//     key: 9,
//     name: ' ' + Titles,
//     year: ' ' + Notes,
//   },
//   {
//     key: 10,
//     name: ' ' + Titles,
//     year: ' ' + Notes,
//   },
//   {
//     key: 11,
//     name: ' ' + Titles,
//     year: ' ' + Notes,
//   },


// ]

// <FlatList
//         data={filteredNotes}
//         renderItem={({ item }) => {
//             return (<View style={styles.flatviewStyle}>
              
//                 <Text numberOfLines={1} style={{ fontSize: 27 }}>{item.title}</Text>
//                 <Text numberOfLines={3} style={{ fontSize: 17 }}>{item.notes}</Text>
//                 <Text>{item.key}</Text>
              

//             </View>);
//           }}
//       />