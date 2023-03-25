import { ContainerButton, ButtonText } from "./styles";

interface Props{
  title: string
}
export function ButtonForm({ title }: Props){
  return(
    <ContainerButton>
      <ButtonText>{title}</ButtonText>
    </ContainerButton>
  );
}