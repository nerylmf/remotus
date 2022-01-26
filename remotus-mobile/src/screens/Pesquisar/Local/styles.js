
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1
        // alignItems:'center'
    },
    buttonsCab: {
        flexDirection: 'row',
        position: 'absolute',
        // // top:100
        zIndex: 1,
        // marginHorizontal: 16,
        paddingHorizontal: 16,
        marginVertical: 16,
        width: '100%',
        justifyContent: 'space-between',
        // flex:1,
    },
    btnCab: {
        backgroundColor: '#F5F5F5',
        width: 36,
        height: 36,
        borderRadius: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
        // // position:'absolute'
    },
    btnRight: {
        // position: 'absolute',
        flexDirection: 'row',


    },

    imgLocal: {
        // flex:1,
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
        // paddingTop: 20,
        // paddingBottom:21,
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
        // marginBottom: 24.5
    },
    infor: {
        // flexDirection: 'row',
    },
    detalhe: {
        flexDirection: "row",
        // justifyContent:'center'
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
        // marginRight: 20
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
        // marginTop: 50

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
        // marginTop:2
    },
    conteinerInfor: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ponto: {
        color: '#FFEDDF',
        // width: 5,
        // height: 5,
        // borderRadius: 50,
        // backgroundColor: '#60646E',
        marginHorizontal: 8,
        // marginTop: 8
    },
    footer: {
        // flex:1,
        // height: 70,
        backgroundColor: '#A96B3C',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width:'100%'
        // zIndex: 1,
        // alignItems: 'center',
        // position: 'absolute',
        // bottom: 0,
        // right: 60

        // position:'absolute',
        // bottom:0,


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
    linha:{
        height:1,
        backgroundColor:'#00000052',
        flex:1, 
        marginVertical:24
},
    overlay: {
        backgroundColor: '#B0CB32',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        paddingHorizontal: 17,
        paddingVertical:13,
        // height: 139,//opcional






        // height: 139,
        // position:'absolute',
        // zIndex:1
        // width: 60,
        // height: 60,
        // shadowRadius: 10,
        // shadowColor: '#002138',
        // shadowOpacity: 0.3,
        // shadowOffset: {
        //     height: 10
        // },

    },
    // button: {
    //     // position:'absolute',
    //     width: 60,
    //     height: 60,
    //     borderRadius: 60 / 2,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     shadowRadius: 10,
    //     shadowColor: '#002138',
    //     shadowOpacity: 0.3,
    //     shadowOffset: {
    //         height: 10
    //     }
    // },
    // submenu: {
    //     width: 48,
    //     height: 48,
    //     borderRadius: 48 / 2,
    //     backgroundColor: '#00213b'
    // }

})

