
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native'
 

export const styles = StyleSheet.create({ 
        buttonsFiltros: {
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 15
        },
        btnFiltro: {
            backgroundColor: '#494C54',
            borderRadius: 5,
            paddingHorizontal: 8,
            paddingTop: 4,
            paddingBottom: 5,
            marginRight: 10,
    
        },
        txtFiltro: {
            fontFamily: 'Inter-Regular.ttf',
            fontWeight: '400',
            letterSpacing: 1.5,
            fontSize: 13,
            color: '#FFFFFF'
        },
        btnFiltroAtivado: {
            backgroundColor: '#A96B3C',
        },
    
    
    
    
    
        container: {
            flex: 1,
            paddingHorizontal: 10,
            justifyContent: 'center'
        },
        listTab: {
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: 20
    
        },
        btnTab: {
            width: Dimensions.get('window').width / 3.5,
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: 'green',
            padding: 10,
            justifyContent: 'center'
        },
        textTab: {
            fontSize: 16
        },
        btnTabActive: {
            backgroundColor: 'pink'
        },
        textTabActive: {
            color: 'blue'
        },
        itemContainer: {
            flexDirection: 'row',
            paddingVertical: 15
        },
        background: {
           
            backgroundColor: 'white',
            flexDirection:'column',
            flex: 1,
    
            
        },
        buttonsFiltros: {
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 15
        },
        btnFiltro: {
            backgroundColor: '#A96B3C',
            borderRadius: 5,
            paddingHorizontal: 9,
            paddingVertical:5,
            marginRight: 10,
          
     
        },
        btnFavoritar: {
            width: 21.6,//16.35,
            height: 19//15,
     
     
     
        },
        container: {
            flex: 1,
            paddingHorizontal: 16,
            flexDirection: 'column',
            backgroundColor: 'white',
    
        },
        containerInfor: {
            marginLeft: 20,
        },
        iconPesquisar: {
            color: '#0D1321',
            paddingRight: 8,
        },
        inputPesquisar: {
            fontSize: 20,
            flex: 1,
            borderWidth:0,
        },
        inforFavo: {
            flexDirection: 'row',
            alignItems: 'center',//
            justifyContent: 'space-between'
     
     
        },
        imgInfor: {
            flexDirection: 'row',
            alignItems: 'center',//     
        },
        item: {
            paddingHorizontal: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#0D132132',
            paddingTop: 15,
            paddingBottom: 15,     
        },
        iconBranco: {
            color: 'white',
            marginVertical: 25,
        },
        infor: {
            flexDirection: 'row',
            marginTop: 7,
        },
        img: {
            width: 79,
            height: 79,
            borderRadius: 50
            // backgroundColor: 'blue',
        },
     
       
       
        linha: {
            borderBottomWidth: 1,
            borderBottomColor: '#0D132132',
     
        },
        marrom: {
            color: '#A96B3C'
        },
        ponto: {
            width: 5,
            height: 5,
            borderRadius: 50,
            backgroundColor: '#60646E',
            marginHorizontal: 8,
            marginTop: 8
        },
        sombra: {
            backgroundColor: 'red',
            flex: 1,
        },
        txtFiltro: {
            fontWeight: '400',
            letterSpacing: 1.5,
            fontSize: 13,
            color: '#FFFFFF'
     
        },
       
     
        titulo: {
            fontWeight: '700',
            // fontFamily: 'Inter-Regular.ttf',
            fontSize: 16,
            lineHeight: 19,
            letterSpacing: 0.15,
            color: '#0D1321',
            marginTop: 6.5
        },
     
        txtRegular: {
            fontWeight: '400',
            fontSize: 13,//14
            lineHeight: 14.52,
            letterSpacing: 0.4,
            color: '#60646E',
     
     
        },
    
    
        // novos
    
       
        txtBranco: {
            // fontFamily: 'Inter-Regular.ttf',
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 19,
            letterSpacing: 0.15,
            marginBottom: 11,
            color: '#FFEDDF'
        },
        conteinerPesquisar: {
            backgroundColor: 'white',
            height: 50,
            padding: 8,
            borderRadius: 25,
            borderBottomWidth: 4,
            borderTopWidth: 1,//0.1
            borderLeftWidth: 0.9,
            borderRightWidth: 0.9,
            borderColor: '#E5E5E5',
            flexDirection: 'row',
            marginTop:20         
        },
    
    
    
    
      
    
    

    
})