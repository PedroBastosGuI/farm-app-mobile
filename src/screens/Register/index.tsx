import { FontAwesome } from '@expo/vector-icons';


import { ButtonForm } from "../../components/button-form";
import { InputTextForm } from "../../components/text-input-form";

import { Container, Message, ContainerForm } from './styles';

export function Register(){
  return(
    <Container>
      <FontAwesome 
        name="user-o"
        color="#FCCC1C"
        size={120}
      />
      <Message>Cadastro</Message>
      <ContainerForm>
        
        <InputTextForm title="E-mail" />

        <InputTextForm title="Telefone" />

        <InputTextForm title="Senha" />

        <ButtonForm title="Cadastrar" />

      </ContainerForm>

    </Container>
  );
}