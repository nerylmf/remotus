import React, { Component, useEffect, useState } from "react"

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import { Icon } from "react-native-elements"
import { IconAr, IconCadeira, IconCardapio, IconChat, IconFavorito, IconReservado, IconShare, IconSol, IconTomada, IconVoltar, IconWifi } from "../../../Routes/Buttons"
import { styles } from "./styles"
import { Dimensions } from 'react-native';
import { Estilos } from "../Estilos"
import { Overlay } from "react-native-elements"
import { AntDesign, Entypo } from "@expo/vector-icons"
import { Mapa } from "../../../assets/Icon/Mapa/Mapa"


const Local = (props) => {
    const initialState = { id: '', uri: '', nome: '', tipo: '', localizacao: '' }
    const [lugar, setLugar] = useState(initialState)

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;







    const animation = new Animated.Value(0)
    let open
    const toggleOverlay = () => {

        const toValue = open ? 0 : 1
        Animated.spring(animation, {
            toValue,
            friction: 6,
            useNativeDriver: true,
        }).start();

        open = !open;

    }
    const overlayStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0]

                })
            }
        ]
    }


    useEffect(
        () => {
            const id = props.route.params.lugarId
            setLugar(id)
        }, []
    )

    return (
        <View style={styles.container}>

            <ScrollView
                style={{ marginBottom: 70 }} //70
                showsVerticalScrollIndicator={false}
            >
                {/* <View style={styles.imgLocal}></View> */}
                <View style={styles.buttonsCab}>
                    <TouchableOpacity style={styles.btnCab}
                        onPress={() => props.navigation.navigate('Pesquisar')}>
                        <IconVoltar />
                    </TouchableOpacity>

                    <View style={styles.btnRight}>
                        <TouchableOpacity style={styles.btnCab}>
                            <IconFavorito />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btnCab, { marginLeft: 11 }]}>
                            <IconShare />
                        </TouchableOpacity>
                    </View>

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
                            <Icon name='place' type='material' size={15} iconStyle={styles.marrom} />
                            <Text style={[styles.txtP, { marginLeft: 5, marginBottom: 7.5 }]}> {lugar.localizacao} </Text>
                            <Text style={styles.txtP}>.</Text>
                            <Text style={styles.txtP}> 5,0 km</Text>
                        </View>
                        <View style={styles.alinhamento}>
                            <View style={styles.detalhe}>
                                <Text style={[styles.txtP, { marginRight: 5, marginTop: 1, marginLeft: 3 }]}>4,8</Text>
                                <Icon name='star' type='material' size={15} iconStyle={styles.iconMarrom} />
                                <Icon name='star' type='material' size={15} iconStyle={styles.iconMarrom} />
                                <Icon name='star' type='material' size={15} iconStyle={styles.iconMarrom} />
                                <Icon name='star' type='material' size={15} iconStyle={styles.iconMarrom} />
                                <Icon name='star' type='material' size={15} iconStyle={styles.iconMarrom} />
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


                <View style={styles.linha}></View>


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

                <View style={styles.linha}></View>
                {/* Mapa */}
                <View style={styles.containerDescricao}>
                    <Text style={styles.subtitulo} >Mapa</Text>
                    <Mapa />
                    {/* <View style={{ height: 180, width: 324, backgroundColor: 'green', borderRadius: 10 }}></View> */}
                </View>

                <View style={styles.linha}></View>

                {/* Avaliações */}
                <View style={styles.containerDescricao}>
                    <Text style={styles.subtitulo} >8 Avaliações</Text>
                   
                </View>



            </ScrollView>



            <View style={estilos.container}>

                <Animated.View style={[styles.overlay, overlayStyle]}>
                    <ScrollView style={styles.datas}>
                        <Text>01</Text>
                        <Text>01</Text>
                    </ScrollView>

                </Animated.View>



                <View style={[styles.footer, { width: windowWidth }]}>
                    <View>
                        <Text style={[styles.txtDesc, { color: 'white', marginBottom: 7.5 }]}>{lugar.nome}</Text>

                        <View style={styles.conteinerInfor}>
                            <Icon name='star' type='material' size={17} iconStyle={styles.iconVerde} />
                            <Text style={[Estilos.txtRegular, { color: '#FFEDDF' }]}> 4,8 (8)</Text>
                            {/* <Text style={styles.ponto}>.</Text> */}
                            <Icon name='place' type='material' size={17} iconStyle={styles.iconVerde} />
                            <Text style={[Estilos.txtRegular, { color: '#FFEDDF' }]}> testedoRemotus </Text>
                        </View>
                    </View>




                    <TouchableOpacity
                        style={[styles.btnAgendar, styles.verde]}
                        onPress={() => toggleOverlay()
                        }>
                        <Text style={styles.txtButton}>Agendar</Text>

                    </TouchableOpacity>


                </View>


            </View>
        </View>

    )

}

const estilos = StyleSheet.create({
    container: { //footer
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,

    },

})

export default Local


















