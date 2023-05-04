import {  TouchableOpacityProps } from "react-native"

import { ContainerButton, ButtonText } from "./styles";

type  Props = TouchableOpacityProps & {
  title: string
}
export function ButtonForm({ title, ...rest }: Props){
  return(
    <ContainerButton {...rest} >
      <ButtonText>{title}</ButtonText>
    </ContainerButton>
  );
}