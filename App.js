import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import { Routes } from './src/routes'

import { Loading } from "./src/components/Loading";


export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold });

  return (
    <NavigationContainer>
      { fontsLoaded ? <Routes /> : <Loading /> }
    </NavigationContainer>
  );
}

