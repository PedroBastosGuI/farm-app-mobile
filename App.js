import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "styled-components/native";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { StatusBar } from "react-native";

import { Routes } from './src/routes'

import themes from "./src/themes";
import { Loading } from "./src/components/loading";


export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold });

  return (
    <ThemeProvider theme={themes}>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"}/>
        { fontsLoaded ? <Routes /> : <Loading /> }
      </NavigationContainer>
    </ThemeProvider>
  );
}

