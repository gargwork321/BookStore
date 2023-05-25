import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../constants/Screens';
import HomeScreen from '../screens/HomeScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import ListingScreen from '../screens/ListingScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.BOOK_DETAILS}
          component={BookDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.LISTING}
          component={ListingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.SEARCHING}
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
