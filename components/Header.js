import React from "react";
import { View } from "react-native";
import { Icon } from 'react-native-elements';

export const headerConfiguration = {
    title: 'NY TIMES MOST POPULAR',
    headerStyle: {
      backgroundColor: '#00dbb7',
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
      alingContent: 'center',
      padding: 5
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginLeft: 5,
      marginRight: 20,
      padding: 5,
      minWidth: 230,
      justifyContent: 'flex-start'
    },
    headerLeft: (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 5, maxWidth: 50}}>
        <Icon
          name='bars' 
          size={20} 
          type='font-awesome'
          color='#fff' />
      </View>
    ),
    headerRight: (
      <View style={{ marginLeft: 5, flexDirection: 'row', justifyContent: 'space-between', padding: 5, minWidth: 50}}>
        <Icon
          name='search' 
          size={20} 
          type='font-awesome'
          color='#fff' />
        <Icon 
          name='ellipsis-v' 
          size={20} 
          type='font-awesome'
          color='#fff' />
      </View>
    ),
  };