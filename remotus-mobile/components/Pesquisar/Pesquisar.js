
import React, { useEffect, useState } from "react"
import { Image, ScrollView, Text, View, TextInput, StyleSheet, Button } from "react-native"
import { Icon } from 'react-native-elements'
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { Estilos } from "./Estilos"
import Lugares from "./Lugares/Lugares"
import Cafeterias from "./Lugares/Cafeterias"
import Restaurantes from "./Lugares/Restaurantes"
import Bares from "./Lugares/Bares"

const Pesquisar = ({ navigation }) => {

    const [cafeterias, setCafeterias] = useState(Cafeterias)
    const [restaurantes, setRestaurantes] = useState(Restaurantes)
    const [bar, setBar] = useState(Bares)

    return (
        <ScrollView
            style={Estilos.container}
            showsVerticalScrollIndicator={false}
        >

            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('ListaPesquisar')}
            >
                <View style={[style.conteinerPesquisar, Estilos.conteinerPesquisar]}>
                    <Icon name='search' type='material' size={30} iconStyle={Estilos.iconPesquisar} />
                </View>
            </TouchableWithoutFeedback>


            <View style={style.containerLocais}>
                <Text style={style.titulo}> Cafeterias</Text>

                <ScrollView
                    style={style.containerCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        cafeterias.map(
                            (cafe) => {
                                return (
                                    <TouchableOpacity style={style.card}
                                        onPress={() => { navigation.navigate('Local', { lugarId: cafe }) }}
                                    >
                                        <Image source={{ uri: cafe.uri }} style={style.img} />

                                        <View style={style.alinhar}>
                                            <View style={style.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{cafe.nome}</Text>
                                                <View style={style.conteinerInfor}>
                                                    <Icon name='star' type='material' size={17} iconStyle={style.iconVerde} />
                                                    <Text style={[Estilos.txtRegular, style.txtRegular]}> 4,8 (8)</Text>
                                                    {/* <View style={style.ponto}> </View> */}
                                                    <Text style={style.ponto}>.</Text>
                                                    <Icon name='place' type='material' size={17} iconStyle={style.iconVerde} />
                                                    <Text style={[Estilos.txtRegular, style.txtRegular]}> {cafe.localizacao} </Text>
                                                </View>
                                                {/* <Icon name='favorite' type='material' size={20}  iconStyle={style.iconBranco}  /> */}
                                            </View>
                                            <Icon name='favorite' type='material' size={20} iconStyle={Estilos.iconBranco} />

                                        </View>
                                    </TouchableOpacity>
                                )

                            }
                        )
                    }
                </ScrollView>



            </View>




            {/* teste com outros lugares */}


            <View style={style.containerLocais}>
                <Text style={style.titulo}> Restaurantes</Text>

                <ScrollView
                    style={style.containerCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        restaurantes.map(
                            (restaurante) => {
                                return (
                                    // <View style={style.card}>
                                    <TouchableOpacity style={style.card}
                                        onPress={() => { navigation.navigate('Local', { lugarId: restaurante }) }}
                                    >
                                        <Image source={{ uri: restaurante.uri }} style={style.img} />

                                        <View style={style.alinhar}>
                                            <View style={style.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{restaurante.nome}</Text>
                                                <View style={style.conteinerInfor}>
                                                    <Icon name='star' type='material' size={17} iconStyle={style.iconVerde} />
                                                    <Text style={[Estilos.txtRegular, style.txtRegular]}> 4,8 (8)</Text>
                                                    {/* <View style={style.ponto}> </View> */}
                                                    <Text style={style.ponto}>.</Text>
                                                    <Icon name='place' type='material' size={17} iconStyle={style.iconVerde} />
                                                    <Text style={[Estilos.txtRegular, style.txtRegular]}> {restaurante.localizacao} </Text>
                                                </View>
                                                {/* <Icon name='favorite' type='material' size={20}  iconStyle={style.iconBranco}  /> */}
                                            </View>
                                            <Icon name='favorite' type='material' size={20} iconStyle={Estilos.iconBranco} />

                                        </View>
                                    </TouchableOpacity>
                                )

                            }
                        )
                    }
                </ScrollView>



            </View>

            {/* teste com outros lugares */}


            <View style={style.containerLocais}>
                <Text style={style.titulo}> Bares</Text>

                <ScrollView
                    style={style.containerCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        bar.map(
                            (bar) => {
                                return (
                                    <TouchableOpacity style={style.card}
                                        onPress={() => { navigation.navigate('Local', { lugarId: bar}) }}
                                    >
                                        <Image source={{ uri: bar.uri }} style={style.img} />

                                        <View style={style.alinhar}>
                                            <View style={style.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{bar.nome}</Text>
                                                <View style={style.conteinerInfor}>
                                                    <Icon name='star' type='material' size={17} iconStyle={style.iconVerde} />
                                                    <Text style={[Estilos.txtRegular, style.txtRegular]}> 4,8 (8)</Text>
                                                    {/* <View style={style.ponto}> </View> */}
                                                    <Text style={style.ponto}>.</Text>
                                                    <Icon name='place' type='material' size={17} iconStyle={style.iconVerde} />
                                                    <Text style={[Estilos.txtRegular, style.txtRegular]}> {bar.localizacao} </Text>
                                                </View>
                                            </View>
                                            <Icon name='favorite' type='material' size={20} iconStyle={Estilos.iconBranco} />

                                        </View>
                                    </TouchableOpacity>
                                )

                            }
                        )
                    }
                </ScrollView>



            </View>




        </ScrollView >
    )
}
const style = StyleSheet.create({
    conteinerPesquisar: {
        flex: 1,
        marginBottom: 30,
    },

    titulo: {
        // fontFamily: 'Inter-Regular.ttf',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 19,
        letterSpacing: 0.15,
        marginBottom: 11,
        color: '#0D1321'
    },

    containerLocais: {
        // alterações Android
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
        fontSize: 14,
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
export default Pesquisar












