import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ContainerButton = styled(TouchableOpacity)`
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme}) => theme.COLORS.YELLOW_500};
  border-radius: 5px;
`

export const TitleContent = styled.Text`
  font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
  font-size: 28px;
  color: ${({ theme }) => theme.COLORS.GREEN_500};
  line-height: 35px;
`