import React from 'react';
import HeaderRightElement from '../HeaderRightElement/HeaderRightElement';
import HeaderLeftElement from '../HeaderLeftElement/HeaderLeftElement';

const boxWithShadow = {
  borderWidth: 1,
  borderRadius: 2,
  shadowColor: '#000',
  shadowOffset: { width: 5, height: 5 },
  shadowOpacity: 0.8,
  shadowRadius: 4,
  elevation: 1,
};

export const headerConfiguration = (navigation) => ({
    title: 'NY TIMES MOST POPULAR',
    headerStyle: {
      backgroundColor: '#00dbb7',
      justifyContent: 'center',
      alingContent: 'center',
      padding: 5,
      boxWithShadow
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
      <HeaderLeftElement />
    ),
    headerRight: (
      <HeaderRightElement navigation={navigation} />
    ),
  });