import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Container, ContainerButton, TitleContent } from './styles';

interface Props {
  title: string;
}
export function Header( { title }: Props){
  return (
    <Container>
      <ContainerButton
        activeOpacity={0.7}
      >
        
        <Feather 
            name="menu"
            color="#FCCC1C"
            size={32}
        />
      </ContainerButton>


      <TitleContent>{title}</TitleContent>
    </Container>
  );
}