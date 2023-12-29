import { View, Text } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './stack';

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default NavigationComponent