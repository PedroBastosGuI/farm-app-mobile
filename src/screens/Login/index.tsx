import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

import { 
          Container, 
          ContainerForm, 
          ContainerButton, 
          ButtonText, 
          Message, 
          ContainerInput, 
          ContetInput,
          ContetText, 
          ContetLink 
        } from './styles';

export function Login(){

  const  navigation = useNavigation();
  return(
    <Container>
      <FontAwesome 
        name="user-o"
        color="#FCCC1C"
        size={120}
      />
      <Message>Login</Message>

      <ContainerForm>
        <ContainerInput>
          <ContetText>E-mail</ContetText>
          <ContetInput />
        </ContainerInput>

        <ContainerInput>
          <ContetText>Senha</ContetText>
          <ContetInput />
        </ContainerInput>

        <ContainerButton>
          <ButtonText>Entrar</ButtonText>
        </ContainerButton>        
      </ContainerForm>

      <ContetLink to='/register' >
        <Text>Cadastre-se</Text>
      </ContetLink>
      
    </Container>
  );
}