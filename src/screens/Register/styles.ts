import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Message = styled.Text`
  margin-top: 15px;
  margin-bottom: 28px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XX}px;
`

export const ContainerForm = styled.View`
  align-items: center;
`
