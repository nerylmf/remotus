
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1
    },
    buttonsCab: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        paddingHorizontal: 16,
        marginVertical: 16,
        width: '100%',
        justifyContent: 'space-between',
    },
    btnCab: {
        backgroundColor: '#F5F5F5',
        width: 36,
        height: 36,
        borderRadius: 50,
    },
    btnRight: {
        flexDirection: 'row',
    },

    imgLocal: {
        backgroundColor: 'pink',
        height: 160
    },
    containerLocal: {
        backgroundColor: 'white',
        height: 180,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 20,
        position: 'absolute',
        marginHorizontal: 16,
        top: 72,
        justifyContent: 'space-between',


        borderTopWidth: 1,
        borderLeftWidth: 1.2,
        borderRightWidth: 1.2,
        borderBottomWidth: 2.5,
        borderColor: '#E5E5E5'

    },
    local: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tituloG: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#0D1321',
        lineHeight: 28
    },
    txtP: {
        fontSize: 13,
        lineHeight: 15,
        color: '#494C54',
        letterSpacing: 0.4,
    },
    detalhe: {
        flexDirection: "row",
    },
    alinhamento: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgRedonda: {
        backgroundColor: 'gray',
        borderRadius: 50,
        height: 60,
        width: 60,
    },
    inforLocal: {
        marginTop: 140,
        paddingHorizontal: 20
    },
    subtitulo: {
        fontSize: 16,
        color: '#0D1321',
        fontWeight: '700',
    },
    atributo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18
    },
    icon: {
        marginRight: 20,
    },
    txtNormal: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19.36
    },
    containerDescricao: {
        paddingHorizontal: 20,
        paddingBottom: 25,
    },
    containerButtonDesc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18,


    },
    buttonDesc: {
        backgroundColor: '#FFEDDF',
        height: 50,
        width: 150,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: 17.5,
        paddingVertical: 16.5
    },
    txtDesc: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 19,
        letterSpacing: 0.5,
        color: '#A96B3C'
    },
    iconMarrom: {
        color: '#A96B3C',
        marginTop: 2
    },
    iconVerde: {
        color: '#B0CB32',
    },
    conteinerInfor: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ponto: {
        color: '#FFEDDF',
        marginHorizontal: 8,
    },
    footer: {
        backgroundColor: '#A96B3C',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    btnAgendar: {
        backgroundColor: '#B0CB32',
        borderRadius: 5,
        width: 92,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',

        shadowRadius: 10,
        shadowColor: '#002138',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        }
    },
    txtButton: {

        fontWeight: '500',
        fontSize: 14,
        color: 'white',

    },
    linha: {
        height: 1,
        backgroundColor: '#00000052',
        flex: 1,
        marginVertical: 24
    },
    overlay: {
        backgroundColor: '#B0CB32',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        paddingHorizontal: 17,
        paddingVertical: 13,
    },
    data: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19.36,
        alignItems: 'center',
        color: '#FFFFFF',
        marginTop: 4.96
    },
    card: {
        width: 240,
        height: 150,
        borderRadius: 15,
        flexDirection: 'column',
        marginRight: 20,
        borderColor: '#E5E5E5',
        borderWidth: 2

    },
    imgPessoa: {
        backgroundColor: 'gray',
        borderRadius: 50,
        height: 40,
        width: 40,
    },

    inforComent: {
        marginLeft: 10,
        justifyContent: 'center'

    },
    mapa: {
        height: 180,
        width: 324,
        borderRadius: 10,
        alignSelf:'center',
  
    }

})

