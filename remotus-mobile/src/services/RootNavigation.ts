import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name }],
  });

  navigationRef.current?.navigate(name);
}
