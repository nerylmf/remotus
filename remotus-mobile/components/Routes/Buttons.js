import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { Image, StyleSheet, Text, View } from 'react-native'



export function ButtonHome({ focused, color }) {
    const home = `
                <svg  viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.04102 17V11H12.041V17H17.041V9H20.041L10.041 0L0.0410156 9H3.04102V17H8.04102Z" fill="#FFEDDF"/>
                </svg>
    `;

    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' }, //
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 7 : 0 },
            { paddingVertical: focused ? 5 : 0 },
            { width:focused ? 70 :60 }
        ]}>
            {/* <Image source={require('../img/home.svg')} style={styles.button} /> */}
            <SvgXml xml={home} style={styles.button}  />
            <Text style={styles.txtBtn}>Home</Text>


        </View>
    )
}


export function ButtonPesquisar({ focused, color }) {
    const pesquisar = `
                    <svg  viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.541 12H12.751L12.471 11.73C13.451 10.59 14.041 9.11 14.041 7.5C14.041 3.91 11.131 1 7.54102 1C3.95102 1 1.04102 3.91 1.04102 7.5C1.04102 11.09 3.95102 14 7.54102 14C9.15102 14 10.631 13.41 11.771 12.43L12.041 12.71V13.5L17.041 18.49L18.531 17L13.541 12ZM7.54102 12C5.05102 12 3.04102 9.99 3.04102 7.5C3.04102 5.01 5.05102 3 7.54102 3C10.031 3 12.041 5.01 12.041 7.5C12.041 9.99 10.031 12 7.54102 12Z" fill="#FFEDDF"/>
                    </svg>
    
    `;

    
    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 7 : 0 },
            { paddingVertical: focused ? 5 : 0 },
            {width:focused ? 80 :60 }
        ]}>
            {/* <Image source={require('../img/search.svg')} style={styles.button} /> */}
            <SvgXml xml={pesquisar} style={styles.button}  />
            <Text style={styles.txtBtn}>Pesquisar</Text>


        </View>
    )
}

export function ButtonVisitados({ focused, color }) {

    const visitados = `
    <svg  viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27329 0.00884007C3.90921 0.134494 2.30857 1.11003 1.33236 2.55493C0.374933 3.97204 0.113066 5.70148 0.0841919 7.13318H0.0841996C0.0819894 7.2796 0.0820291 10.9564 0.0820316 11.1824V11.1843V11.1924H2.32061V11.1922C2.32061 11.1479 2.32061 10.1616 2.32085 9.17503C2.32098 8.68121 2.32116 8.18751 2.32143 7.81191L2.32191 7.35241L2.32223 7.20755V7.20753C2.32229 7.18725 2.32231 7.17881 2.32227 7.18072L2.32232 7.17832C2.34758 5.92586 2.58161 4.7046 3.18727 3.80815C3.55083 3.27004 4.08641 2.79124 4.92486 2.50672C4.62253 3.4287 4.52482 4.30491 4.56929 5.15689C4.63719 6.45777 5.04068 7.65809 5.40003 8.72705L5.466 8.92356C5.85431 10.0833 6.18792 11.1469 6.23293 12.3427C6.27284 13.4031 6.08524 14.6188 5.40469 16.0974C4.23094 15.8443 3.55162 15.2672 3.12574 14.6115C2.52715 13.6899 2.32061 12.4423 2.32061 11.1924H0.0820316C0.0820316 12.6142 0.303721 14.3764 1.24841 15.8309C2.21504 17.3191 3.83752 18.3316 6.27265 18.4585L6.27292 18.4672C6.30799 18.4661 6.34291 18.4649 6.37767 18.4634C6.41286 18.4649 6.44822 18.4662 6.48375 18.4672L6.48402 18.4584C8.91906 18.3306 10.5414 17.3179 11.5079 15.8299C12.4526 14.3756 12.6742 12.6139 12.6742 11.1924H10.4356C10.4356 12.4418 10.2291 13.689 9.63061 14.6105C9.27308 15.1609 8.73687 15.6561 7.87941 15.9509C8.35372 14.6109 8.51268 13.3942 8.46992 12.2585C8.41151 10.7066 7.9755 9.36788 7.58876 8.21282L7.55389 8.10874C7.16891 6.95967 6.85631 6.02665 6.80482 5.04021C6.76365 4.25126 6.89177 3.39397 7.38985 2.38256C8.49146 2.6362 9.14956 3.18581 9.57316 3.81619C10.1786 4.71713 10.4102 5.94337 10.4337 7.19777L10.4338 7.20419C10.4354 7.26738 10.4354 7.33103 10.4354 7.41026V11.1923H12.674V7.40516V7.40508C12.674 7.33184 12.674 7.24433 12.6718 7.15274C12.6447 5.72133 12.3862 3.98873 11.4312 2.56762C10.4564 1.11697 8.8542 0.135708 6.48314 0.00890884L6.48286 0C6.44768 0.0011037 6.41266 0.00239104 6.37781 0.00386084C6.34322 0.00239396 6.30848 0.00110663 6.27357 0L6.27329 0.00884007Z" fill="#FFEDDF"/>
    </svg>

    `;
    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 7 : 0 },
            { paddingVertical: focused ? 5 : 0 },
            { width:focused ? 70 :60 }
        ]}>
            {/* <Image source={require('../img/logo.svg')} style={styles.buttonLogo} /> */}
            <SvgXml xml={visitados} style={styles.buttonLogo}  />
            <Text style={styles.txtBtn}>Visitados</Text>


        </View>
    )
}


export function ButtonFavoritos({ focused, color }) {
    
    const favorito = `
    <svg  viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.25642 15L7.07113 13.921C2.86132 10.1035 0.0820312 7.58583 0.0820312 4.49591C0.0820312 1.9782 2.06023 0 4.57794 0C6.00029 0 7.36541 0.662125 8.25642 1.70845C9.14743 0.662125 10.5125 0 11.9349 0C14.4526 0 16.4308 1.9782 16.4308 4.49591C16.4308 7.58583 13.6515 10.1035 9.4417 13.9292L8.25642 15Z" fill="#FFEDDF"/>
    </svg>

    `;

    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 7 : 0 },
            { paddingVertical: focused ? 5 : 0 },
            {width:focused ? 70 :60 }
        ]}>
            {/* <Image source={require('../img/Favorito.svg')} style={styles.button} /> */}
            <SvgXml xml={favorito} style={styles.button}  />
            <Text style={styles.txtBtn}>Favoritos</Text>


        </View>
    )
}



export function ButtonPerfil({ focused, color }) {

    const perfil = `
    <svg  viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.08203 8C10.292 8 12.082 6.21 12.082 4C12.082 1.79 10.292 0 8.08203 0C5.87203 0 4.08203 1.79 4.08203 4C4.08203 6.21 5.87203 8 8.08203 8ZM8.08203 10C5.41203 10 0.0820312 11.34 0.0820312 14V16H16.082V14C16.082 11.34 10.752 10 8.08203 10Z" fill="#FFEDDF"/>
    </svg>
    
    `;

    return (
        <View style={[
            styles.container,
            { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
            { borderRadius: focused ? 10 : 0 },
            { paddingHorizontal: focused ? 7 : 0 },
            { paddingVertical: focused ? 5 : 0 },
            {width:focused ? 70 :60 }
        ]}>
            {/* <Image source={require('../img/Perfil.svg')} style={styles.button} /> */}
            <SvgXml xml={perfil} style={styles.button}  />
            <Text style={styles.txtBtn}>Perfil</Text>


        </View>
    )
}

export function ButtonFavoritar() {
    const favoritarLinha = `
    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.32569 13.5512L7.32497 13.5506C5.21001 11.6327 3.49509 10.0766 2.3029 8.61907C1.11645 7.16852 0.5 5.87663 0.5 4.49591C0.5 2.25434 2.25434 0.5 4.49591 0.5C5.76686 0.5 6.9945 1.09409 7.79371 2.03262L8.17439 2.47965L8.55506 2.03262C9.35427 1.09409 10.5819 0.5 11.8529 0.5C14.0944 0.5 15.8488 2.25434 15.8488 4.49591C15.8488 5.87664 15.2323 7.16854 14.0458 8.62022C12.8545 10.0777 11.1414 11.6344 9.02881 13.5542L9.02448 13.5581L9.02341 13.5591L8.17566 14.325L7.32569 13.5512Z" stroke="#0D1321"/>
    </svg>
    
    `;
    return (
        <View style={
            styles.container
        }>
            {/* <Image source={require('../img/FavoritoLinha.svg')} style={styles.button} /> */}
            <SvgXml xml={favoritarLinha} style={styles.button}  />
            <Text style={styles.txtBtn}>Favoritos</Text>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    buttonLogo: {
        height: 24.2,
        width: 17,
        marginBottom: 3,
        marginTop: 4

    },
    button: {
        height: 24.2,
        width: 26,
        marginBottom: 3,
        marginTop: 4

    },
    txtBtn: {
        fontSize: 10,
        lineHeight: 14.5,
        letterSpacing: 0.5,
        fontWeight: '400',
        color: '#FFEDDF'
    }
})


