import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import {
  Container,
  ContainerData,
  ContentData,
  ContainerInfo,
  ContentInfo,
  ContentColInfo,
  ContentRowInfo,
  Title,
  Respost,
  TitleButton,
  ButtonEdit,
  ButtonViewRoute,
  ButtonResults,
  ContainerButton
} from './styles';



export function Card() {
  return (
    <Container>

      <ContainerInfo>
        <ContainerData>
          <ContentData>28</ContentData>
          <ContentData>Jun</ContentData>
        </ContainerData>

        <ContentInfo>
          <ContentColInfo>
            <ContentRowInfo>
              <View>
                <Title>Tempo Total:</Title>
                <Respost>3:40Hrs</Respost>
              </View>
              <View>
                <Title>Nº Caminhões:</Title>
                <Respost>2</Respost>
              </View>
            </ContentRowInfo>
            <View>
              <Title>Nº Caminhões necessários:</Title>
              <Respost>2</Respost>
            </View>
          </ContentColInfo>

        </ContentInfo>
      </ContainerInfo>

      <ContainerButton>
        <ButtonEdit>
          <View>
            <Feather
              name="edit-2"
              color="#FCCC1C"
              size={30}
            />
          </View>
        </ButtonEdit>

        <ButtonViewRoute>
          <TitleButton>
            Ver Rota
          </TitleButton>
        </ButtonViewRoute>

        <ButtonResults>
          <TitleButton>
            Resultados
          </TitleButton>
        </ButtonResults>
      </ContainerButton>
    </Container>
  );
}