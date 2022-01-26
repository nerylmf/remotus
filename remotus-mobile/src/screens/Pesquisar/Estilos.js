 
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
 

export const Estilos = StyleSheet.create({
    alinhar: {
        flexDirection: 'row',
        alignItems: 'center'
 
 
    },
    background: {
       
        backgroundColor: 'white',
        // paddingTop: 28,  ******android
        // paddingBottom: 70,
        // alterações:
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
        // paddingTop: 4,
        // paddingBottom: 5,
        paddingVertical:5,
        // height:20,
        marginRight: 10,
        // alignItems:'center',
        // justifyContent:'center'
 
    },
    btnFavoritar: {
        width: 21.6,//16.35,
        height: 19//15,
 
 
 
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        // paddingTop: 25,  ******ANDROID
        // paddingBottom: 78, //necessario para o mennu não ficar por cima do card
        flexDirection: 'column',
        backgroundColor: 'white',

    },
    
    containerFavoritar: {
        // marginLeft: 30,
        // marginRight:'auto'
        // alignItems: 'flex-end'
        // alignSelf: 'flex-end'
 
    },
    containerLista:{
        // marginBottom:80
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
        // borderColor:'red',
        borderWidth:0,
        // height:70
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
        // flexDirection: 'row',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#0D132132',
        paddingTop: 15,
        paddingBottom: 15,
 
 
 
    },
    iconBranco: {
        color: 'white',
        marginVertical: 25,
        // flexDirection:'row-reverse'
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
   
// ************************************************************
// Textos


txtFiltro: {
    // fontFamily: 'Inter-Regular.ttf',
    fontWeight: '400',
    // lineHeight: 13,
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

txtBranco: {
    // fontFamily: 'Inter-Regular.ttf',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.15,
    marginBottom: 11,
    color: '#FFEDDF'
},




// ************************************************************

    // novos

   
   
    // cabecalho:{
    //     flexDirection:'row'
    // },
    // voltar:{
    //     color: '#494C54',
    //     paddingRight: 8,

    // },
    conteinerPesquisar: {
        // width: 328,
        backgroundColor: 'white',
        // flex: 1,
        height: 50,
        padding: 8,
        borderRadius: 25,
        // marginBottom: 15,
        borderBottomWidth: 4,
        borderTopWidth: 1,//0.1
        borderLeftWidth: 0.9,
        borderRightWidth: 0.9,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        // alterações
        // marginHorizontal:16,
        // marginBottom:30,
        marginTop:20
          // elevation: 2,
     
    },




  
   
  
  
   
   
   
  
 
   
  
 
})
 
 
 




// import React, { Component } from 'react'
// import { StyleSheet, View, Text, Button } from 'react-native'
 

// export const Estilos = StyleSheet.create({
    
//     background: {
//         // flex: 1,
     
//         backgroundColor: 'white',
//         paddingTop: 28,
//         paddingBottom: 70,
//     },
      
   
//     linha: {
//         borderBottomWidth: 1,
//         borderBottomColor: '#0D132132',
 
//     },
//     item: {
//         // flexDirection: 'row',
//         paddingHorizontal: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#0D132132',
//         paddingTop: 15,
//         paddingBottom: 15,
 
 
 
//     },
//     img: {
//         width: 79,
//         height: 79,
//         borderRadius: 50
//         // backgroundColor: 'blue',
//     },
 
 
//     containerInfor: {
//         marginLeft: 20,
//     },
//     titulo: {
//         fontWeight: '700',
//         fontFamily: 'Inter-Regular.ttf',
//         fontSize: 16,
//         lineHeight: 19,
//         letterSpacing: 0.15,
//         color: '#0D1321',
//         marginTop: 6.5
//     },
//     infor: {
//         flexDirection: 'row',
//         marginTop: 7,
 
//     },
 
//     txtRegular: {
//         fontWeight: '400',
//         fontSize: 13,
//         lineHeight: 14.52,
//         letterSpacing: 0.4,
//         color: '#60646E',
 
 
//     },
//     alinhar: {
//         flexDirection: 'row',
//         alignItems: 'center'
 
 
//     },
 
 
//     ponto: {
//         width: 5,
//         height: 5,
//         borderRadius: 50,
//         backgroundColor: '#60646E',
//         marginHorizontal: 8,
//         marginTop: 8
//     },
//     marrom: {
//         color: '#A96B3C'
//     },
//     iconBranco: {
//         color: 'white',
//         marginVertical: 25,
//         // flexDirection:'row-reverse'
//     },
//     btnFavoritar: {
//         width: 21.6,//16.35,
//         height: 19//15,
 
 
 
//     },
//     containerFavoritar: {
//         // marginLeft: 30,
//         // marginRight:'auto'
//         // alignItems: 'flex-end'
//         // alignSelf: 'flex-end'
 
//     },
//     inforFavo: {
//         flexDirection: 'row',
//         alignItems: 'center',//
//         justifyContent: 'space-between'
 
 
//     },
//     imgInfor: {
//         flexDirection: 'row',
//         alignItems: 'center',//
 
 
 
//     },
//     btnFiltro: {
//         backgroundColor: '#A96B3C',
//         borderRadius: 5,
//         paddingHorizontal: 8,
//         paddingTop: 4,
//         paddingBottom: 5,
//         // height:20,
//         marginRight: 10,
//         // alignItems:'center',
//         // justifyContent:'center'
 
//     },
//     txtFiltro: {
//         fontFamily: 'Inter-Regular.ttf',
//         fontWeight: '400',
//         lineHeight: 12,
//         letterSpacing: 1.5,
//         fontSize: 12,
//         color: '#FFFFFF'
 
//     },
//     buttonsFiltros: {
//         flexDirection: 'row',
//         paddingHorizontal: 16,
//         paddingVertical: 15
//     },
//     conteinerPesquisar: {
//         // width: 328,
//         backgroundColor: 'white',
//         flex: 1,
//         height: 50,
//         padding: 8,
//         borderRadius: 25,
//         // marginBottom: 15,
//         borderBottomWidth: 4,
//         borderTopWidth: 0.1,
//         borderLeftWidth: 0.9,
//         borderRightWidth: 0.9,
//         borderColor: '#E5E5E5',
//         flexDirection: 'row',
//         // alterações
//         // marginHorizontal:16,
//         marginBottom:30,
//         marginTop:20
//           // elevation: 2,
     
//     },
   
//     inputPesquisar: {
//         fontSize: 20,
//         flex: 1,
//         borderColor:'red',
//         borderWidth:0,
//         height:70
//     },
//     container: {
//         flex: 1,
//         paddingHorizontal: 16,
//         paddingTop: 25,
//         // paddingBottom: 78, //necessario para o mennu não ficar por cima do card
//         flexDirection: 'column',
//         backgroundColor: 'white',

//     },
//     sombra: {
//         backgroundColor: 'red',
//         flex: 1,
//     },
//     iconPesquisar: {
//         color: '#0D1321',
//         paddingRight: 8,
//     },
 
// })
 
 
