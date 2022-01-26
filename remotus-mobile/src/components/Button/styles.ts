import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

interface ButtonProps {
  loading: boolean;
  color:
    | 'primary'
    | 'secondary'
    | 'grey'
    | 'success'
    | 'warning'
    | 'shape'
}

export const Container = styled(RectButton)<ButtonProps>`
  flex:1;
  align-items:center;
  justify-content: center;
  ;

  ${({ color, theme }) =>
    color === 'primary' &&
    css`
      background: ${theme.colors.primary};
    `}
  ${({ color, theme }) =>
    color === 'secondary' &&
    css`
      background: ${theme.colors.secondary};
    `}

  ${({ color, theme }) =>
    color === 'success' &&
    css`
      background: ${theme.colors.success};
    `}

  ${({ color, theme }) =>
    color === 'warning' &&
    css`
      background: ${theme.colors.warning};
    `}
    ${({ color, theme }) =>
    color === 'shape' &&
    css`
      background: ${theme.colors.shape};
    `}
    ${({ color, theme }) =>
    color === 'grey' &&
    css`
      background: ${theme.colors.grey};
    `}

  
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  align-items:center;
  margin-top: 30px;

`;

export const Icon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
`;
