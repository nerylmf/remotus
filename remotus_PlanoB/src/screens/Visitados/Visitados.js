import React, { Component, useEffect, useState } from "react"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import { Icon } from "react-native-elements"
import { Estilos } from "../Pesquisar/Estilos"
import Lugares from "../Pesquisar/Lugares/Lugares"
import Cafeterias from "../Pesquisar/Lugares/Cafeterias"
import Restaurantes from "../Pesquisar/Lugares/Restaurantes"
import Bares from "../Pesquisar/Lugares/Bares"
import { LinearGradient } from 'expo-linear-gradient';
import { estilos } from "./estilos"
import { styles } from "../Pesquisar/pagePesquisar/styles"
import { IconFavoritar, IconFavoritarB, IconLocalizaçãoVerde, IconStarVerde } from "../../Routes/Buttons"

const Visitados = (props) => {

    const [cafeterias, setCafeterias] = useState(Cafeterias)
    const [restaurantes, setRestaurantes] = useState(Restaurantes)
    const [bar, setBar] = useState(Bares)

    return (
        <ScrollView
            style={[Estilos.container, { paddingTop: 46 }]}
            showsVerticalScrollIndicator={false}
        >



            <View style={styles.containerLocais}>
                <Text style={styles.titulo}>Mais Visitados</Text>

                <ScrollView
                    style={styles.containerCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        cafeterias.map(
                            (cafe) => {
                                return (
                                    <View style={estilos.card}
                                    // onPress={() => { navigation.navigate('Local', { lugarId: cafe }) }}
                                    >
                                        <Image source={{ uri: cafe.uri }} style={estilos.img} />

                                        <View style={styles.alinhar}>
                                            <View style={styles.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{cafe.nome}</Text>
                                                <View style={styles.conteinerInfor}>
                                                    <IconStarVerde />
                                                    <Text style={estilos.txtRegular}> 4,8 (8)</Text>
                                                    <Text style={styles.ponto}>.</Text>
                                                    <IconLocalizaçãoVerde />
                                                    <Text style={estilos.txtRegular}> {cafe.localizacao} </Text>
                                                </View>
                                                {/* <Icon name='favorite' type='material' size={20} iconStyle={styles.iconBranco} /> */}
                                            </View>
                                            <IconFavoritar />
                                        </View>
                                        <TouchableOpacity style={estilos.btnAgendar}
                                            // onPress={()=>props.navigation.navigate('Local')}
                                        >
                                            <Text style={Estilos.txtBranco}>Agendar</Text>

                                        </TouchableOpacity >
                                    </View>
                                )

                            }
                        )
                    }
                </ScrollView>



            </View>

            <View style={{ marginBottom: 35 }}>
                <Text style={[styles.titulo, { color: '#0D1321' }]}> Agendados</Text>

                <ScrollView
                    style={estilos.cardAgendado}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {/* {
                        cafeterias.map(
                            (cafe) => {
                                return ( */}
                    <View style={styles.cardAgendado}
                    // onPress={() => { navigation.navigate('Local', { lugarId: cafe }) }}
                    >
                        <View style={estilos.imgText}>
                            <Image source={{ uri: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/06/13/513496382-shutterstock1728806332easy-resizecom.jpg' }} style={estilos.imgAgendado} />
                            <LinearGradient
                                colors={['transparent', '#A96b3c25', '#A96b3c',]}
                                style={estilos.gradiente}
                            >
                                <Text style={[estilos.bold, { position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: 2 }]}>Café Patriota</Text>


                            </LinearGradient>
                        </View>


                        <View style={estilos.cardInfoAgenda}>
                            <Text style={estilos.bold}>Quarta-feira,</Text>
                            <Text style={estilos.bold}> 09/03/22, às 14h </Text>
                        </View>
                    </View>
                    {/* ) */}

                    {/* } */}
                    {/* ) */}
                    {/* } */}
                </ScrollView>





            </View>



            <View>
                <Text style={[styles.titulo, { color: '#0D1321' }]}>Histórico</Text>
                <Text style={[estilos.txtRegular, { color: '#0D1321', marginTop: 10 }]}>Essa semana</Text>
                <TouchableOpacity style={estilos.item}

                >
                    <View style={Estilos.inforFavo}>
                        <View style={Estilos.imgInfor}>
                            <Image source={{ uri: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/06/13/513496382-shutterstock1728806332easy-resizecom.jpg' }} style={Estilos.img} />
                            <View style={Estilos.containerInfor}>
                                <Text style={Estilos.titulo} ></Text>
                                <Text style={[Estilos.txtRegular, { marginTop: 3 }]} ></Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

export default Visitados
