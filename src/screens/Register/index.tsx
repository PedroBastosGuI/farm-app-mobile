import { FontAwesome } from '@expo/vector-icons';

import { ButtonForm } from "../../components/button-form";
import { InputTextForm } from "../../components/text-input-form";

const splash = '../../assets/splash.png';

import { Container, ContainerLogin, ImgBg, Message, ContainerForm } from './styles';

export function Register() {
  return (
    <Container>
      <ImgBg source={require(splash)} resizeMode="cover" blurRadius={10}>

        <ContainerLogin>
          <FontAwesome
            name="user-o"
            color="#FCCC1C"
            size={80}
          />
          <Message>Cadastro</Message>
          <ContainerForm>

            <InputTextForm title="E-mail" />

            <InputTextForm title="Telefone" />

            <InputTextForm title="Senha" />

            <ButtonForm title="Cadastrar" />

          </ContainerForm>
        </ContainerLogin>
      </ImgBg>
    </Container>
  );
}