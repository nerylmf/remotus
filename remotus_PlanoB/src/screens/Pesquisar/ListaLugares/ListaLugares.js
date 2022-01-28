import React, { Component, useState, useEffect, useRef } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, ScrollView, Image, TextInput } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { Estilos } from "../Estilos"
import Lugares from "../Lugares/Lugares"
import { Icon } from 'react-native-elements'
import { IconFavoritar, IconFavoritarB, IconLocalizacaoMarrom, IconPersquisar, IconStarMarrom } from "../../../Routes/Buttons"
const botoes = [
    {
        btnFilter: 'TODOS'
    },
    {
        btnFilter: 'CAFETERIA'
    },
    {
        btnFilter: 'RESTAURANTE'
    },
    {
        btnFilter: 'BAR'
    }


]
const ListaLugares = ({ navigation }) => {

    const [botao, setBotao] = useState('TODOS')
    const [list, setList] = useState(Lugares)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (searchText === '') {
            setList(Lugares);
        } else {
            setList(
                Lugares.filter((lugar) => {
                    if (lugar.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false
                    }
                })
            )
        }

    }, [searchText])



    const focusInput = useRef(null)
    useEffect(() => {
        focusInput.current.focus()

    }, [focusInput])



    const setBotaoFilter = btn => {
        if (btn !== 'TODOS') {

            setList([...Lugares.filter(local => local.tipo.toLowerCase() === btn.toLowerCase())])
        } else {
            setList(Lugares)
        }
        setBotao(btn)
    }



    return (
        <View style={[Estilos.background,{paddingTop:20}]}>

            <View style={[Estilos.conteinerPesquisar, { marginHorizontal: 16 },]}>
                <IconPersquisar />
                <TextInput
                    style={Estilos.inputPesquisar}
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                    ref={focusInput}
                />
            </View>

            <View style={styles.buttonsFiltros}>


                {
                    botoes.map(btn => (
                        <TouchableOpacity
                            style={[styles.btnFiltro, botao === btn.btnFilter && styles.btnFiltroAtivado]}
                            onPress={() => setBotaoFilter(btn.btnFilter)}

                        >
                            <Text style={styles.txtFiltro} >{btn.btnFilter}</Text>
                        </TouchableOpacity>
                    ))
                }


            </View>

            <ScrollView style={Estilos.containerLista}>
                <View style={Estilos.linha} />
                {
                    list.map(
                        (local) => {
                            return (
                                <TouchableOpacity style={Estilos.item}
                                    onPress={() => { navigation.navigate('Local', { lugarId: local }) }}

                                >
                                    <View style={Estilos.inforFavo}>
                                        <View style={Estilos.imgInfor}>
                                            <Image source={{ uri: local.uri }} style={Estilos.img} />
                                            <View style={Estilos.containerInfor}>
                                                <Text style={Estilos.titulo} >{local.nome}</Text>

                                                <Text style={[Estilos.txtRegular, { marginTop: 3 }]} >{local.tipo}</Text>
                                                <View style={Estilos.infor}>
                                                    <View style={Estilos.alinhar}>
                                                        <IconStarMarrom />
                                                        <Text style={Estilos.txtRegular}> 4,8 (8)</Text>
                                                    </View>

                                                    <Text style={Estilos.ponto}>.</Text>
                                                    <View style={Estilos.alinhar}>
                                                        <IconLocalizacaoMarrom />
                                                        <Text style={Estilos.txtRegular}> {local.localizacao} </Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                        <View style={Estilos.containerFavoritar} >
                                            <IconFavoritarB />
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            )

                        }
                    )
                }
            </ScrollView >


        </View>
    )

}
export default ListaLugares

const styles = StyleSheet.create({
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
        // fontFamily: 'Inter-Regular.ttf',
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


})







