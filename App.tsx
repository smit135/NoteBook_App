import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/HomeScreen';
import AddItem from './src/Screen/addItem';
import Edit from './src/Screen/Edit';
import Screen from './src/Screen/Search';
import { Header } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerTitleAlign:'center',
        navigationBarColor:'grey',
        }}>
        <Stack.Screen name='Home' 
        component={HomeScreen}
        options={{title:'Note book'  }}
        />
        <Stack.Screen name='Add' 
        component={AddItem}
        options={{title:'Add New Note'}}
        />
        <Stack.Screen name='Edit' 
        component={Edit}
        options={{title:'Edit Note'}}
        />
        <Stack.Screen name='Screen'
        component={Screen}
        options={{title:'Searching Notes'}}
        />

        
        


      </Stack.Navigator>

    </NavigationContainer>
    
      
      
    
  )
}



export default App