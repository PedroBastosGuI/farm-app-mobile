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

export const ContetLink = styled(Link)`
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-decoration: underline;
  margin-top: 46px;
`