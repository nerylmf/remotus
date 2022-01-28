import React, { Component, useEffect, useState } from "react"
import { SafeAreaView } from "react-native"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon } from "react-native-elements"
import { IconFavorito, IconLocalizacaoMarrom, IconStarMarrom } from "../../Routes/Buttons"
import { Estilos } from "../Pesquisar/Estilos"
import { styles } from "../Pesquisar/ListaLugares/styles"
import Lugares from "../Pesquisar/Lugares/Lugares"

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

const Favoritos = ({ navigation }) => {
    const [botao, setBotao] = useState('TODOS')
    const [list, setList] = useState(Lugares)
    // *******************FILTRO**********************************


    const setBotaoFilter = btn => {
        if (btn !== 'TODOS') {

            setList([...Lugares.filter(local => local.tipo.toLowerCase() === btn.toLowerCase())])
        } else {
            setList(Lugares)
        }
        setBotao(btn)
    }

    return (
        <SafeAreaView style={[Estilos.background, { paddingTop: 46 }]}>
            <Text style={[estilos.titulo, { paddingLeft: 16 }]}>Favoritos </Text>

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

            <ScrollView style={Estilos.containerLista} showsVerticalScrollIndicator={false}>
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
                                            <IconFavorito />
                                            {/* <Image source={require('../img/FavoritoLinha.svg')} style={Estilos.btnFavoritar} /> */}
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            )
                        }
                    )
                }
            </ScrollView >
        </SafeAreaView>
    )

}

export default Favoritos
const estilos = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 19,
        letterSpacing: 0.15,
        marginBottom: 11,
        color: '#0D1321'
    },


})
