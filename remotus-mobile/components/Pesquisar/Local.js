import React, { Component, useEffect, useState } from "react"

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon } from "react-native-elements/dist/icons/Icon"
import { IconAr, IconCadeira, IconCardapio, IconChat, IconReservado, IconSol, IconTomada, IconVoltar, IconWifi } from "../Routes/Buttons"
import { Estilos } from "./Estilos"
import Cafeterias from "./Lugares/Cafeterias"


const Local = (props) => {
    const initialState = { id: '', uri: '', nome: '', tipo: '', localizacao: '' }
    const [lugar, setLugar] = useState(initialState)

    useEffect(
        () => {
            const id = props.route.params.lugarId
            setLugar(id)
        }, []
    )

    return (
        <ScrollView style={styles.container}>
            <View style={styles.buttonsCab}>
                <TouchableOpacity style={styles.btnCab}
                    onPress={() => props.navigation.navigate('Pesquisar')}>
                    <IconVoltar />
                </TouchableOpacity>

            </View>
            <Image source={{ uri: lugar.uri }} style={styles.imgLocal} />

            <View style={styles.containerLocal}>

                <View style={styles.local}>
                    <View style={{ width: '75%' }}>
                        <Text style={[styles.tituloG]}>{lugar.nome}</Text>
                        <Text style={[styles.txtP, { paddingTop: 5 }]}>{lugar.tipo}</Text>
                    </View>
                    <Image source={{ uri: lugar.uri }} style={styles.imgRedonda} />

                </View>
                <View style={styles.infor}>
                    <View style={styles.detalhe}>
                        <Icon name='place' type='material' size={15} iconStyle={Estilos.marrom} />
                        <Text style={[styles.txtP, { marginLeft: 5, marginBottom: 7.5 }]}> {lugar.localizacao} </Text>
                        <Text style={styles.txtP}>.</Text>
                        <Text style={styles.txtP}> 5,0 km</Text>
                    </View>
                    <View style={styles.alinhamento}>
                        <View style={styles.detalhe}>
                            <Text style={[styles.txtP, { marginRight: 5, marginTop: 1, marginLeft: 3 }]}>4,8</Text>
                            <Icon name='star' type='material' size={15} iconStyle={Estilos.marrom} />
                            <Icon name='star' type='material' size={15} iconStyle={Estilos.marrom} />
                            <Icon name='star' type='material' size={15} iconStyle={Estilos.marrom} />
                            <Icon name='star' type='material' size={15} iconStyle={Estilos.marrom} />
                            <Icon name='star' type='material' size={15} iconStyle={Estilos.marrom} />
                        </View>
                        <Text style={[styles.txtP, { marginTop: 1 }]}> 8 avaliações</Text>

                    </View>
                </View>

            </View>



            <View style={styles.inforLocal}>
                <Text style={styles.subtitulo}>Sobre o local</Text>


                <View style={styles.atributo}>
                    <IconWifi />
                    <Text style={styles.txtNormal}>Wi-Fi grátis</Text>
                </View>

                <View style={styles.atributo}>
                    <IconAr />
                    <Text style={styles.txtNormal}>Ar condicionado</Text>
                </View>

                <View style={styles.atributo}>
                    <IconCadeira />
                    <Text style={styles.txtNormal}>Cadeira de escritório</Text>
                </View>

                <View style={styles.atributo}>
                    <IconTomada />
                    <Text style={styles.txtNormal}>Tomada gratuita</Text>
                </View>

                <View style={styles.atributo}>
                    <IconReservado />
                    <Text style={styles.txtNormal}>Local reservado</Text>
                </View>

                <View style={styles.atributo}>
                    <IconSol />
                    <Text style={styles.txtNormal}>Almoço</Text>
                </View>

            </View>


            <View style={styles.containerDescricao}>
                <Text style={styles.subtitulo} >Descrição</Text>
                <Text style={[styles.txtP, { marginTop: 11 }]}>Feugiat purus lorem suspendisse habitasse varius arcu, ornare. Tincidunt ac fermentum malesuada imperdiet nisi ut. Id at enim, pretium congue cras at tellus. In interdum volutpat cras turpis.</Text>
                <View style={styles.containerButtonDesc}>
                    <TouchableOpacity style={styles.buttonDesc}>
                        <IconCardapio />
                        <Text style={styles.txtDesc}>Cardápio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonDesc}>
                        <IconChat />
                        <Text style={styles.txtDesc}>Chat</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </ScrollView>
    )

}
export default Local

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // alignItems:'center'
    },
    buttonsCab: {
        // flexDirection:'row'
        position: 'absolute',
        // top:100
        zIndex: 1,
        marginHorizontal: 16,
        marginVertical: 16

    },
    btnCab: {
        backgroundColor: '#F5F5F5',
        width: 36,
        height: 36,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // position:'absolute'
    },
    imgLocal: {
        // flex:1,
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
        // marginBottom: 24.5
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
        marginTop: 50

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
    }

})