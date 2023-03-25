import styled, { css } from 'styled-components/native';
import { Link } from '@react-navigation/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`
export const Message = styled.Text`
  width: 68px;
  height: 28px;
  margin-top: 15px;
  margin-bottom: 28px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XX}px;
`

export const ContainerForm = styled.View`
  align-items: center;
`

export const ContainerInput = styled.View`
  margin: 15px 0;
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

export const ContainerButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  width: 180px;
  height: 45px;
  margin-top: 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const ContetLink = styled(Link)`
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-decoration: underline;
  margin-top: 46px;
`