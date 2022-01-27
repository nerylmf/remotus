import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
 

export const styles = StyleSheet.create({

    
    conteinerPesquisar: {
        backgroundColor: 'white',
        flex: 1,
        height: 50,
        padding: 8,
        borderRadius: 25,
        borderBottomWidth: 4,
        borderTopWidth: 1,//0.1
        borderLeftWidth: 0.9,
        borderRightWidth: 0.9,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 20

    },

    titulo: {
        // fontFamily: 'Inter_400Regular',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 19,
        letterSpacing: 0.15,
        marginBottom: 11,
        color: '#0D1321'
    },

    containerLocais: {
        marginBottom: 35
    },
    containerCards: {
        flexDirection: 'row'
    },
    card: {
        width: 280,
        height: 225,
        backgroundColor: '#A96b3c',
        borderRadius: 10,
        flexDirection: 'column',
        marginRight: 20,

    },
    img: {
        width: 280,
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    containerTxt: {
        justifyContent: 'center',
        marginVertical: 13


    },
    alinhar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15

    },
    conteinerInfor: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    txtRegular: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 14.52,
        letterSpacing: 0.4,
        color: '#FFEDDF',


    },

    ponto: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: '#FFEDDF',
        marginHorizontal: 8,



    },
    iconVerde: {
        color: '#B0CB32'
    },

    posicionarMenu: {
        width: '100%',
        height: 70,
        bottom: 0,
    }


})