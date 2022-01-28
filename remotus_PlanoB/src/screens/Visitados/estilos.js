import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
 

export const estilos = StyleSheet.create({

// ************************MODIFICAÇÕES O RESTANTE PODE USAR O ESTILO DO pESQUISAR
card: {
    width: 280,
    height: 186,
    backgroundColor: '#A96b3c',
    borderRadius: 10,
    flexDirection: 'column',
    marginRight: 20,

},
img: {
    width: 280,
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // backgroundColor: 'blue',
},
btnAgendar:{
    borderRadius:10,
    height:39,
    width:280,
    backgroundColor:'#FFEDDF25',
    justifyContent:'center',
    alignItems:'center'
},
txtRegular: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.52,
    letterSpacing: 0.4,
    color: '#FFEDDF',


},
bold:{
    fontWeight:'bold',
    fontSize:12,
    letterSpacing:0.4,
    lineHeight:15,
    color:'#FFFFFF'
},

cardAgendado: {
    width: 150,
    height: 116,
    borderRadius: 10,
    flexDirection: 'column',
    marginRight: 20,
    backgroundColor:'#A96B3C'

},
imgText:{
    height: 75,//75
    // backgroundColor:'pink'
},
imgAgendado: {
    width: 150,
    height:75,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // justifyContent:'center'
    // // backgroundColor: 'blue',
},
cardInfoAgenda:{
    width:150,
    height:41,
    borderRadius:10,
    backgroundColor:'#B0CB32',
    justifyContent:'center',
    alignItems:'center'
},
InfoAgendado:{
    // textAlign:'center',
    // justifyContent:'center',
  
    // borderRadius:10,
    // width:150,
    // height:41
},
gradiente:{
    position: 'absolute',
    // left: 0,
    // right: 0,
    width:150,
    bottom: 0,
    height: 41,

},
item:{
    // paddingHorizontal: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#0D132132',
    paddingTop: 15,
    paddingBottom: 15,

}

})