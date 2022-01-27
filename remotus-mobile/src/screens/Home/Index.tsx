import * as React from 'react';
import { Categorias } from './Categorias';
import { Lugares } from './Lugares'
import { Sugestao } from './Sugestao';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { Footer } from './Footer';
export function Home() {
  return (
        <SafeAreaProvider>
            <Lugares></Lugares>
            <Sugestao></Sugestao>
            <Categorias></Categorias>
            {/* <Footer></Footer> */}
        </SafeAreaProvider>

  )}