
import React, { useEffect, useState } from "react"
import { Image, ScrollView, Text, View, TextInput, StyleSheet, Button } from "react-native"
import { Icon } from 'react-native-elements'
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { Estilos } from "../Estilos"
import Lugares from "../Lugares/Lugares"
import Cafeterias from "../Lugares/Cafeterias"
import Restaurantes from "../Lugares/Restaurantes"
import Bares from "../Lugares/Bares"

import { styles } from "./styles"

const Pesquisar = ({ navigation }) => {

    const [cafeterias, setCafeterias] = useState(Cafeterias)
    const [restaurantes, setRestaurantes] = useState(Restaurantes)
    const [bar, setBar] = useState(Bares)




    // useEffect(()=>{

    // })

    // ****************************************************
       
     // ****************************************************


    return (
        <ScrollView
            style={Estilos.container}
            showsVerticalScrollIndicator={false}
        >

            <TouchableWithoutFeedback
                // style={[style.conteinerPesquisar,]}
                onPress={() => navigation.navigate('ListaLugares')}
                // onPress={() => navigation.navigate('Local')}


            >
                <View style={styles.conteinerPesquisar}>
                    {/*{ marginHorizontal: 16 }*/}
                    <Icon name='search' type='material' size={30} iconStyle={Estilos.iconPesquisar} />
                    {/* <Image source={require('../img/search.svg')} style={style.iconPesquisar} /> */}
                    {/* <Text
                        style={Estilos.inputPesquisar}
                        // value={searchText}
                        // onChangeText={(t) => setSearchText(t)}

                    /> */}
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
                                        onPress={()=>{navigation.navigate('Local',{lugarId:cafe})}}
                                    >
                                        <Image source={{ uri: cafe.uri }} style={styles.img} />

                                        <View style={styles.alinhar}>
                                            <View style={styles.containerTxt}>
                                                <Text style={Estilos.txtBranco }>{cafe.nome}</Text>
                                                <View style={styles.conteinerInfor}>
                                                    <Icon name='star' type='material' size={17} iconStyle={styles.iconVerde} />
                                                    <Text style={styles.txtRegular}> 4,8 (8)</Text>
                                                    {/* <View style={styles.ponto}> </View> */}
                                                    <Text style={styles.ponto}>.</Text>
                                                    <Icon name='place' type='material' size={17} iconStyle={styles.iconVerde} />
                                                    <Text style={styles.txtRegular}> {cafe.localizacao} </Text>
                                                </View>
                                                {/* <Icon name='favorite' type='material' size={20}  iconStyle={styles.iconBranco}  /> */}
                                            </View>
                                            <Icon name='favorite-outline' type='material' size={25} iconStyle={Estilos.iconBranco} />

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
                                    // <View style={styles.card}>
                                    <TouchableOpacity style={styles.card}
                                    onPress={()=>{navigation.navigate('Local',{lugarId:restaurante})}}
                                >
                                        <Image source={{ uri: restaurante.uri }} style={styles.img} />

                                        <View style={styles.alinhar}>
                                            <View style={styles.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{restaurante.nome}</Text>
                                                <View style={styles.conteinerInfor}>
                                                    <Icon name='star' type='material' size={17} iconStyle={styles.iconVerde} />
                                                    <Text style={styles.txtRegular}> 4,8 (8)</Text>
                                                    {/* <View style={styles.ponto}> </View> */}
                                                    <Text style={styles.ponto}>.</Text>
                                                    <Icon name='place' type='material' size={17} iconStyle={styles.iconVerde} />
                                                    <Text style={styles.txtRegular}> {restaurante.localizacao} </Text>
                                                </View>
                                                {/* <Icon name='favorite' type='material' size={20}  iconStyle={styles.iconBranco}  /> */}
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
                                        onPress={() => { navigation.navigate('Local', { lugarId: bar}) }}
                                    >
                                        <Image source={{ uri: bar.uri }} style={styles.img} />

                                        <View style={styles.alinhar}>
                                            <View style={styles.containerTxt}>
                                                <Text style={Estilos.txtBranco}>{bar.nome}</Text>
                                                <View style={styles.conteinerInfor}>
                                                    <Icon name='star' type='material' size={17} iconStyle={styles.iconVerde} />
                                                    <Text style={[Estilos.txtRegular, styles.txtRegular]}> 4,8 (8)</Text>
                                                    {/* <View style={style.ponto}> </View> */}
                                                    <Text style={styles.ponto}>.</Text>
                                                    <Icon name='place' type='material' size={17} iconStyle={styles.iconVerde} />
                                                    <Text style={[Estilos.txtRegular, styles.txtRegular]}> {bar.localizacao} </Text>
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

export default Pesquisar























