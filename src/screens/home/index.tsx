import { Header } from "../../components/header";

import { Container, Title } from "./styles";
import { Card } from "../../components/card";

export function Home(){
  return (
    <Container>
      <Header title="FarmEase"/>
      <Title>Seus cálculos</Title>

      <Card/>
      <Card/>
      <Card/>
    </Container>
  )
}