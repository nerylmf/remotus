import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title, Icon } from './styles';

interface props extends RectButtonProps {
  loading?: boolean;
  nameIcon?: string;
  title: string;
  color:
  | 'primary'
  | 'secondary'
  | 'grey'
  | 'success'
  | 'warning'
  | 'shape';
}

export function Button({ loading, nameIcon, title, color, ...rest }: props) {
  return (
    <Container {...rest} color={color} loading={loading}>
      {loading ? (
        <ActivityIndicator color="#fff" size="small" />
      ) : (
        <>
          <Title>{title}</Title>
          <Icon name={nameIcon} />
        </>
      )}
    </Container>
  );
}
