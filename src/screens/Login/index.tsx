import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, Text, View } from "react-native";

import { InputTextForm } from '../../components/text-input-form'
import { ButtonForm } from "../../components/button-form";

const splash = '../../assets/splash.png';

import { Container, ContainerLogin, ContainerForm, Message, ContetLink, ImgBg } from './styles';


export function Login() {

  return (
    <Container>
      <ImgBg source={require(splash)} resizeMode="cover"  blurRadius={10}>
        <ContainerLogin>
          <FontAwesome
            name="user-o"
            color="#FCCC1C"
            size={80}
          />

          <Message>Login</Message>

          <ContainerForm>

            <InputTextForm title="E-mail" />

            <InputTextForm title="Senha" />

            <ButtonForm title="Entrar" />

          </ContainerForm>

          <ContetLink to='/register' >
            <Text>Cadastre-se</Text>
          </ContetLink>
          </ContainerLogin>
      </ImgBg>
    </Container>
  );
}