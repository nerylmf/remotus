
import React, { useEffect, useState } from "react"
import { Image, ScrollView, Text, View, TextInput, StyleSheet, Button, SafeAreaView } from "react-native"
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { Estilos } from "../Estilos"
import Lugares from "../Lugares/Lugares"
import Cafeterias from "../Lugares/Cafeterias"
import Restaurantes from "../Lugares/Restaurantes"
import Bares from "../Lugares/Bares"

import { styles } from "./styles"
import { Icon } from "react-native-elements"
import { ButtonFavoritar, Favorito, IconFavoritar, IconFavorito, IconLocalizaçãoVerde, IconPersquisar, IconStarVerde } from "../../../Routes/Buttons"

const Pesquisar = ({ navigation }) => {

    const [cafeterias, setCafeterias] = useState(Cafeterias)
    const [restaurantes, setRestaurantes] = useState(Restaurantes)
    const [bar, setBar] = useState(Bares)

    return (

        <ScrollView
            style={[Estilos.container, {paddingTop:20}]}
            showsVerticalScrollIndicator={false}
        >

            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('ListaLugares')}

            >
                <View style={[styles.conteinerPesquisar]}>
                    {/* <Icon name='search' size={24} iconStyle={Estilos.iconPesquisar}  /> */}
                    <IconPersquisar />

                </View>
            </TouchableWithoutFeedback>


            <View style={styles.containerLocais}>
                <Text style={styles.titulo}> Cafeterias</Text>

                <ScrollView
                    style={styles.containerCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        cafeterias.map(
                            (cafe) => {
                                return (
                                    <TouchableOpacity style={styles.card}
                                        onPress={() => { navigation.navigate('Local', { lugarId: cafe }) }}
                                    >
                                        <Image source={{ uri: cafe.uri }} style={styles.img} />

                                        <View style={styles.alinhar}>
                                            <View style={styles.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{cafe.nome}</Text>
                                                <View style={styles.conteinerInfor}>
                                                    {/* <Icon name='star' type='material' size={17} iconStyle={styles.iconVerde} /> */}
                                                    <IconStarVerde />
                                                    <Text style={styles.txtRegular}> 4,8 (8)</Text>
                                                    {/* <View style={styles.ponto}> </View> */}
                                                    <Text style={styles.ponto}>.</Text>
                                                    {/* <Icon name='place' type='material' size={17} iconStyle={styles.iconVerde} /> */}
                                                    <IconLocalizaçãoVerde />
                                                    <Text style={styles.txtRegular}> {cafe.localizacao} </Text>
                                                </View>
                                                {/* <Icon name='favorite' type='material' size={20}  iconStyle={styles.iconBranco}  /> */}
                                            </View>
                                            <IconFavoritar />
                                            {/* <Icon name='favorite-outline' type='material' size={25} iconStyle={Estilos.iconBranco} /> */}

                                        </View>
                                    </TouchableOpacity>
                                )

                            }
                        )
                    }
                </ScrollView>



            </View>




            {/* teste com outros lugares */}


            <View style={styles.containerLocais}>
                <Text style={styles.titulo}> Restaurantes</Text>

                <ScrollView
                    style={styles.containerCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        restaurantes.map(
                            (restaurante) => {
                                return (
                                    <TouchableOpacity style={styles.card}
                                        onPress={() => { navigation.navigate('Local', { lugarId: restaurante }) }}
                                    >
                                        <Image source={{ uri: restaurante.uri }} style={styles.img} />

                                        <View style={styles.alinhar}>
                                            <View style={styles.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{restaurante.nome}</Text>
                                                <View style={styles.conteinerInfor}>
                                                    <IconStarVerde />
                                                    {/* <Icon name='star' type='material' size={17} iconStyle={styles.iconVerde} /> */}
                                                    <Text style={styles.txtRegular}> 4,8 (8)</Text>
                                                    <Text style={styles.ponto}>.</Text>
                                                    <IconLocalizaçãoVerde />

                                                    {/* <Icon name='place' type='material' size={17} iconStyle={styles.iconVerde} /> */}
                                                    <Text style={styles.txtRegular}> {restaurante.localizacao} </Text>
                                                </View>
                                                {/* <Icon name='favorite' type='material' size={20}  iconStyle={styles.iconBranco}  /> */}
                                            </View>
                                            <IconFavoritar />

                                            {/* <Icon name='favorite' type='material' size={20} iconStyle={Estilos.iconBranco} /> */}

                                        </View>
                                    </TouchableOpacity>
                                )

                            }
                        )
                    }
                </ScrollView>



            </View>




            {/* teste com outros lugares */}




            <View style={styles.containerLocais}>
                <Text style={styles.titulo}> Bares</Text>

                <ScrollView
                    style={styles.containerCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        bar.map(
                            (bar) => {
                                return (
                                    <TouchableOpacity style={styles.card}
                                        onPress={() => { navigation.navigate('Local', { lugarId: bar }) }}
                                    >
                                        <Image source={{ uri: bar.uri }} style={styles.img} />

                                        <View style={styles.alinhar}>
                                            <View style={styles.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{bar.nome}</Text>
                                                <View style={styles.conteinerInfor}>
                                                    <IconStarVerde />
                                                    {/* <Icon name='star' type='material' size={17} iconStyle={styles.iconVerde} /> */}
                                                    <Text style={[Estilos.txtRegular, styles.txtRegular]}> 4,8 (8)</Text>
                                                    {/* <View style={style.ponto}> </View> */}
                                                    <Text style={styles.ponto}>.</Text>
                                                    <IconLocalizaçãoVerde />

                                                    {/* <Icon name='place' type='material' size={17} iconStyle={styles.iconVerde} /> */}
                                                    <Text style={[Estilos.txtRegular, styles.txtRegular]}> {bar.localizacao} </Text>
                                                </View>
                                            </View>
                                            <Favorito />
                                            {/* <Icon name='favorite' type='material' size={20} iconStyle={Estilos.iconBranco} /> */}

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

export default Pesquisar























