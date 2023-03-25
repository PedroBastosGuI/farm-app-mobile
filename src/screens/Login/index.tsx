import { FontAwesome } from '@expo/vector-icons';
import { Text } from "react-native";

import { InputTextForm } from '../../components/text-input-form'
import { ButtonForm } from "../../components/button-form";

import { Container, ContainerForm, Message, ContetLink } from './styles';


export function Login(){

  return(
    <Container>
      <FontAwesome 
        name="user-o"
        color="#FCCC1C"
        size={120}
      />
      <Message>Login</Message>

      <ContainerForm>

        <InputTextForm  title="E-mail"/>

        <InputTextForm  title="Senha"/>

        <ButtonForm  title="Entrar"/>

      </ContainerForm>

      <ContetLink to='/register' >
        <Text>Cadastre-se</Text>
      </ContetLink>
      
    </Container>
  );
}