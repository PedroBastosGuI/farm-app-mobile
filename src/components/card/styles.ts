import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 345px;
  height: 168px;
  margin-bottom: 16px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 15px;
`

export const ContainerData = styled.View`
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  border-radius: 10px;
`
export const ContentData = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  line-height: 20px;
`

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ContentInfo = styled.View`
  width: 250px;
  height: 100px;
  justify-content: center;
`
export const ContentColInfo = styled.View`
  margin-left: 10px;
  justify-content: space-between;
`
export const ContentRowInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  opacity: 0.7;
  line-height: 14px;

`

export const Respost = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`

export const TitleButton = styled.Text`
  line-height: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
export const ContainerButton = styled.View`
  width: 345px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const ButtonEdit = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_500};
  border-radius: 10px;
`

export const ButtonViewRoute = styled(TouchableOpacity)`
  width: 96px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_500};
  border-radius: 13px;

`

export const ButtonResults = styled(TouchableOpacity)`
  width: 128px;
  height: 26px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  border-radius: 13px;
  align-items: center;
  justify-content: center;
`