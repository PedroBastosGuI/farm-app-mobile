import { ActivityIndicator, Text } from 'react-native'

import { Container } from "./styles";

export function Loading(){
  return (
    <Container>
      <ActivityIndicator  color="#FCCC1C"/>
      <Text>Carregando</Text>
    </Container>
  );
}