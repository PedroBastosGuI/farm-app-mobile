import { View } from "react-native";

import { ContainerInput, ContetText, ContetInput } from "./styles";

interface Props {
  title: string;
}

export function InputTextForm( { title }: Props){
  return (
    <ContainerInput>
      <ContetText>{title}</ContetText>
      <ContetInput />
    </ContainerInput>
  );
}