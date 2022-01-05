import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'



export function ButtonHome({ focused, color }) {
    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 12 : 0 },
            { paddingVertical: focused ? 5 : 0 }
        ]}>
            <Image source={require('../img/home.svg')} style={styles.button} />
            <Text style={styles.txtBtn}>Home</Text>


        </View>
    )
}


export function ButtonPesquisar({ focused, color }) {
    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 12 : 0 },
            { paddingVertical: focused ? 5 : 0 }
        ]}>
            <Image source={require('../img/search.svg')} style={styles.button} />
            <Text style={styles.txtBtn}>Pesquisar</Text>


        </View>
    )
}

export function ButtonVisitados({ focused, color }) {
    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 12 : 0 },
            { paddingVertical: focused ? 5 : 0 }
        ]}>
            <Image source={require('../img/logo.svg')} style={styles.buttonLogo} />
            <Text style={styles.txtBtn}>Visitados</Text>


        </View>
    )
}


export function ButtonFavoritos({ focused, color }) {
    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 12 : 0 },
            { paddingVertical: focused ? 5 : 0 }
        ]}>
            <Image source={require('../img/Favorito.svg')} style={styles.button} />
            <Text style={styles.txtBtn}>Favoritos</Text>


        </View>
    )
}



export function ButtonPerfil({ focused, color }) {
    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 12 : 0 },
            { paddingVertical: focused ? 5 : 0 }
        ]}>
            <Image source={require('../img/Perfil.svg')} style={styles.button} />
            <Text style={styles.txtBtn}>Perfil</Text>


        </View>
    )
}

export function ButtonFavoritar() {
    return (
        <View style={
            styles.container
        }>
            <Image source={require('../img/FavoritoLinha.svg')} style={styles.button} />
            <Text style={styles.txtBtn}>Favoritos</Text>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    buttonLogo: {
        height: 22,
        width: 15,
        marginBottom: 3,
        marginTop: 4

    },
    button: {
        height: 22.2,
        width: 24,
        marginBottom: 3,
        marginTop: 4

    },
    txtBtn: {
        fontSize: 12,
        lineHeight: 14.5,
        letterSpacing: 0.5,
        fontWeight: 400,
        color: '#FFEDDF'
    }
})



