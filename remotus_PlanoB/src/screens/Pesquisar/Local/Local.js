import React, { Component, useEffect, useState } from "react"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import { Icon } from "react-native-elements"
import { IconAr, IconCadeira, IconCardapio, IconChat, IconFavorito, IconLocalizacaoMarrom, IconLocalizaçãoMarrom, IconLocalizaçãoVerde, IconReservado, IconShare, IconSol, IconStarMarrom, IconStarMarromG, IconStarVerde, IconTomada, IconVoltar, IconWifi } from "../../../Routes/Buttons"
import { Mapa } from "../../../assets/Icon/Mapa/Mapa";
import { styles } from "./styles"
import { Dimensions } from 'react-native';
import { Estilos } from "../Estilos"
import calendario from "../Lugares/Calendario";
import Comentarios from "../Lugares/Comentarios";

const Local = (props) => {
    const initialState = { id: '', uri: '', nome: '', tipo: '', localizacao: '', datas: '', dia: '', mes: '', ano: '', hora: '' }
    const [lugar, setLugar] = useState(initialState)
    const [calendar, setCalendar] = useState(calendario)
    const [comentario, setComentario] = useState(Comentarios)


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
        <View style={[styles.container,{paddingTop:20}]}>

            <ScrollView
                style={{ marginBottom: 70 }} //70
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.buttonsCab}>
                    <TouchableOpacity style={styles.btnCab}
                        onPress={() => props.navigation.navigate('Pesquisar')}>
                        <IconVoltar />
                    </TouchableOpacity>

                    <View style={styles.btnRight}>
                        <TouchableOpacity style={styles.btnCab}>
                            <IconFavorito />
                            {/* <MaterialIcons name="favorite" size={25} /> */}
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
                            <IconLocalizacaoMarrom />
                            <Text style={[styles.txtP, { marginLeft: 5, marginBottom: 7.5 }]}> {lugar.localizacao} </Text>
                            <Text style={styles.txtP}>.</Text>
                            <Text style={styles.txtP}> 5,0 km</Text>
                        </View>
                        <View style={styles.alinhamento}>
                            <View style={styles.detalhe}>
                                <Text style={[styles.txtP, { marginRight: 5, marginTop: 1, marginLeft: 3 }]}>4,8</Text>
                                <IconStarMarrom />
                                <IconStarMarrom />
                                <IconStarMarrom />
                                <IconStarMarrom />
                                <IconStarMarrom />
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
                    <View style={[styles.mapa,{marginTop:10}]}>
                        <Mapa />
                    </View>

                </View>

                <View style={styles.linha}></View>

                {/* Avaliações */}
                <View>
                    <View style={styles.containerDescricao}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.subtitulo} >8 Avaliações</Text>
                            <Text style={estilos.ponto}>.</Text>
                            <IconStarMarromG />
                            <Text style={styles.subtitulo} >4,8</Text>

                        </View>
                    </View>

                    <View style={{ marginHorizontal: 16, marginBottom: 100, zIndex: 100 }}>
                        <ScrollView
                            style={styles.containerCards}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {comentario.map(
                                (comment) => {
                                    return (
                                        <View style={[styles.card, { paddingHorizontal: 16, paddingTop: 25 }]}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={{ uri: comment.uri }} style={[styles.imgPessoa]} />
                                                <View style={[styles.inforComent, { marginBottom: 10 }]}>
                                                    <Text style={[styles.subtitulo, { color: 'black' }]}>{comment.pessoa} </Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <IconStarMarrom />
                                                        <IconStarMarrom />
                                                        <IconStarMarrom />
                                                        <IconStarMarrom />
                                                        {/* <Icon name='star-border' type='material' size={13} iconStyle={Estilos.marrom} /> */}
                                                    </View>
                                                </View>
                                            </View>
                                            <Text style={{ fontSize: 12 }}>{comment.descricao}</Text>

                                        </View>
                                    )
                                }
                            )}

                        </ScrollView>
                    </View>
                </View>


            </ScrollView>


            {/* OVERLAY */}
            <View style={estilos.container}>

                <Animated.View style={[styles.overlay, overlayStyle]}>
                    <ScrollView style={{ height: 109 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            calendar.map(
                                (calendar) => {

                                    return (
                                        <TouchableOpacity style={{ flexDirection: 'row' }}
                                            // onPress={() => { props.navigation.navigate('Visitados', { dataId: calendar }) }}
                                            onPress={() => { props.navigation.navigate('home_working') }}

                                        >
                                            <View style={{ width: windowWidth * 0.1 }}>
                                                <Text style={styles.data}> {calendar.dia}</Text>
                                            </View>
                                            <View style={{ width: windowWidth * 0.4, alignItems: 'center' }}>
                                                <Text style={[styles.data, { marginHorizontal: 20 }]}> {calendar.mes}</Text>

                                            </View>
                                            <View style={{ width: windowWidth * 0.19 }}>
                                                <Text style={styles.data}> {calendar.ano} </Text>
                                            </View>
                                            <View style={{ width: windowWidth * 0.2 }}>
                                                <Text style={[styles.data, { marginLeft: 10 }]}> {calendar.hora} </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                        }
                    </ScrollView>

                </Animated.View>



                <View style={[styles.footer, { width: windowWidth }]}>
                    <View>
                        <Text style={[styles.txtDesc, { color: 'white', marginBottom: 7.5 }]}>{lugar.nome}</Text>

                        <View style={styles.conteinerInfor}>
                            <IconStarVerde />

                            <Text style={[Estilos.txtRegular, { color: '#FFEDDF' }]}> 4,8 (8)</Text>
                            <Text style={styles.ponto}>.</Text>
                            <IconLocalizaçãoVerde />
                            <Text style={[Estilos.txtRegular, { color: '#FFEDDF' }]}> {lugar.localizacao} </Text>
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
    ponto: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: 'black',
        marginHorizontal: 8,
        marginTop: 12
    },
})

export default Local

