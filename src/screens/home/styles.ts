import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme })=> theme.COLORS.ZINC_100};
  margin: 30px 32px 0;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  line-height: 25px;
  margin-top: 35px;
  margin-bottom: 8px;
`