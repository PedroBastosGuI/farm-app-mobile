import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  margin: 10px 0;
`

export const ContetText =  styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  top: 15px;
  left: 15px;
  transform: translateY(-23px) translateX(-5px);
  z-index: 501;
  background: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 8px;
  position: absolute;
`

export const ContetInput = styled.TextInput`
  width: 256px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.COLORS.ZINC_100};
  border-radius: 14px;
  padding: 12px 3px 12px 15px;
`