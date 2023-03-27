import styled from 'styled-components/native'

export const ContainerButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  width: 180px;
  height: 45px;
  margin-top: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`