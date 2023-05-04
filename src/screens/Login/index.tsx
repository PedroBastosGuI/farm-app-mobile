import { FontAwesome } from '@expo/vector-icons';
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { InputTextForm } from '../../components/text-input-form'
import { ButtonForm } from "../../components/button-form";

const splash = '../../assets/splash.png';

import { Container, ContainerLogin, ContainerForm, Message, ContetLink, ImgBg } from './styles';
import { Home } from "../home";

export function Login() {
  const { navigate } = useNavigation();

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

            <ButtonForm 
              title="Entrar" 
              onPress={ () => navigate('home')}
            />

          </ContainerForm>

          <ContetLink to='/register' >
            <Text>Cadastre-se</Text>
          </ContetLink>
          </ContainerLogin>
      </ImgBg>
    </Container>
  );
}