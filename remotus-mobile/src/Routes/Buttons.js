// /funciona no  android

// import * as React from 'react';
import React from 'react'
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
            {/* <Image source={require('../assets/Icon/Buttons/home.svg')} style={styles.button} /> */}
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
            {/* <Image source={require('../assets/Icon/Buttons/search.svg')} style={styles.button} /> */}
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
            {/* <Image source={require('../assets/Icon/Buttons/logo.svg')} style={styles.buttonLogo} /> */}
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
            {/* <Image source={require('../assets/Icon/Buttons/Favorito.svg')} style={styles.button} /> */}
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
            {/* <Image source={require('../assets/Icon/Buttons/Perfil.svg')} style={styles.button} /> */}
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
            {/* <Image source={require('../assets/Icon/Buttons/FavoritoLinha.svg')} style={styles.button} /> */}
            <SvgXml xml={favoritarLinha} style={styles.button}  />
            <Text style={styles.txtBtn}>Favoritos</Text>


        </View>
    )
}

export function IconWifi() {

    const iconWifi = ` 
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11.6835L6 13.741C10.97 8.62803 19.03 8.62803 24 13.741L26 11.6835C19.93 5.43884 10.08 5.43884 4 11.6835ZM12 19.9137L15 23L18 19.9137C16.35 18.2059 13.66 18.2059 12 19.9137ZM8 15.7986L10 17.8561C12.76 15.0167 17.24 15.0167 20 17.8561L22 15.7986C18.14 11.8275 11.87 11.8275 8 15.7986Z" fill="black"/>
          </svg> `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/Wifi.svg')} style={styles.icon} /> */}
            <SvgXml xml={iconWifi} style={styles.icon} />
        </View>
    )
}


export function IconAr() {

    const iconAr = ` 
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6994 4.82899C15.6994 4.37115 15.3282 4 14.8704 4C14.4125 4 14.0414 4.37115 14.0414 4.82899V6.90837L13.0976 5.96455C12.7738 5.64081 12.2489 5.64081 11.9252 5.96455C11.6015 6.28829 11.6015 6.81318 11.9252 7.13692L14.0414 9.2531V13.2987L10.1368 11.1078L9.59109 8.43057C9.50095 7.98834 9.06937 7.7561 8.62713 7.91187C8.18489 8.06763 7.89947 8.5524 7.98961 8.99464L8.19869 10.0203L6.51228 9.07406C6.12006 8.85398 5.59183 9.04799 5.33244 9.50739C5.07305 9.96679 5.18073 10.5176 5.57294 10.7377L7.22276 11.6634L6.14349 12.0436C5.70125 12.1993 5.41583 12.6841 5.50598 13.1263C5.59612 13.5686 6.0277 13.8008 6.46994 13.645L9.1021 12.718L12.9974 14.9036L8.9188 17.1922L6.36525 16.2928C5.92302 16.137 5.49144 16.3693 5.40129 16.8115C5.31114 17.2537 5.59657 17.7385 6.0388 17.8943L7.03946 18.2467L5.38185 19.1768C4.98964 19.3969 4.88196 19.9477 5.14135 20.4071C5.40074 20.8665 5.92897 21.0605 6.32119 20.8404L8.00068 19.8981L7.77464 21.0069C7.68449 21.4492 7.96992 21.9339 8.41216 22.0897C8.85439 22.2455 9.28597 22.0132 9.37612 21.571L9.92789 18.8642C9.95875 18.8355 9.9871 18.8038 10.0125 18.7692L13.9781 16.544V20.7462L11.925 22.7993C11.6013 23.123 11.6013 23.6479 11.925 23.9717C12.2488 24.2954 12.7737 24.2954 13.0974 23.9717L13.9781 23.091V25.171C13.9781 25.6289 14.3493 26 14.8071 26C15.2649 26 15.6361 25.6289 15.6361 25.171V23.0916L16.5799 24.0354C16.9036 24.3592 17.4285 24.3592 17.7523 24.0354C18.076 23.7117 18.076 23.1868 17.7523 22.8631L15.6361 20.7469V16.6382L19.5431 18.8305L20.0887 21.5073C20.1789 21.9495 20.6105 22.1817 21.0527 22.026C21.4949 21.8702 21.7803 21.3854 21.6902 20.9432L21.4812 19.918L23.1668 20.8638C23.559 21.0839 24.0873 20.8899 24.3467 20.4305C24.606 19.9711 24.4984 19.4202 24.1062 19.2002L22.4566 18.2746L23.5363 17.8943C23.9786 17.7385 24.264 17.2537 24.1738 16.8115C24.0837 16.3693 23.6521 16.137 23.2099 16.2928L20.5773 17.2201L16.5672 14.9699L20.4029 12.7641L22.9716 13.636C23.4149 13.7865 23.8445 13.5491 23.9311 13.1057C24.0176 12.6623 23.7284 12.1809 23.285 12.0304L22.2749 11.6875L23.927 10.7374C24.317 10.5131 24.4203 9.96256 24.1577 9.50774C23.895 9.05291 23.3659 8.86603 22.9759 9.09033L21.3025 10.0527L21.5205 8.93601C21.607 8.49262 21.3177 8.01118 20.8744 7.86068C20.431 7.71017 20.0014 7.9476 19.9149 8.39098L19.3838 11.1118C19.3559 11.1388 19.3302 11.1683 19.307 11.2003L15.6994 13.275V9.25446L17.7531 7.20067C18.0769 6.87694 18.0769 6.35205 17.7531 6.02831C17.4294 5.70457 16.9045 5.70457 16.5808 6.02831L15.6994 6.90973V4.82899Z" fill="black"/>
    </svg>  
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/ar.svg')} style={styles.icon} /> */}
            <SvgXml xml={iconAr} style={styles.icon} />
        </View>
    )
}
export function IconCadeira() {

    const IconCadeira = ` <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0333 22V20.9C15.0333 20.8333 15.1 20.7667 15.1667 20.7667H15.7667C15.8333 20.7667 15.9 20.7 15.9 20.6333V19.8333C15.9 19.7667 15.9667 19.7 16.0333 19.7C17.4667 19.6333 18.8667 19.5 20.3 19.2667C20.9667 19.1667 21.5 18.5333 21.5 17.9C21.5 17.2667 20.9667 16.8667 20.3 16.9667C18.9 17.2 17.5 17.3333 16.0667 17.4C16 17.4 15.9333 17.3333 15.9333 17.2667V15.2667C15.9333 15.2 16 15.1333 16.0667 15.1333C18.4 14.9 19.7667 14.1333 20.3667 13.7C20.6 13.5333 20.7667 13.2333 20.7667 12.9333V9.23334C20.7 5.8 17.9 3 14.4667 3C11.0333 3 8.23333 5.8 8.23333 9.23334V12.9333C8.23333 13.2333 8.36667 13.5333 8.63333 13.7C9.23333 14.1333 10.5667 14.9 12.9333 15.1333C13 15.1333 13.0667 15.2 13.0667 15.2667V17.2667C13.0667 17.3333 13 17.4 12.9333 17.4C11.5333 17.3333 10.1 17.2 8.7 16.9667C8.03333 16.8667 7.5 17.2667 7.5 17.9C7.5 18.5333 8.03333 19.1667 8.7 19.2667C10.1 19.5 11.5333 19.6333 12.9667 19.7C13.0333 19.7 13.1 19.7667 13.1 19.8333V20.6333C13.1 20.7 13.1667 20.7667 13.2333 20.7667H13.8333C13.9 20.7667 13.9667 20.8333 13.9667 20.9V22C13.9667 22.0667 13.9 22.1333 13.8333 22.1333C10.8667 22.2667 7.93333 23.2333 7.76667 24.9C7.76667 24.9667 7.83333 25.0333 7.9 25.0333H8.7C8.76667 25.0333 8.8 25 8.83333 24.9333C9 24.2333 10.9 23.2667 13.8333 23.1667C13.9 23.1667 13.9667 23.2333 13.9667 23.3V24C13.9667 24.0667 14.0333 24.1333 14.1 24.1333H14.9333C15 24.1333 15.0667 24.0667 15.0667 24V23.3C15.0667 23.2333 15.1333 23.1667 15.2 23.1667C18.1667 23.3 20.0333 24.2333 20.2 24.9333C20.2 25 20.2667 25.0333 20.3333 25.0333H21.1333C21.2 25.0333 21.2667 24.9667 21.2667 24.9C21.1 23.2 18.1667 22.2333 15.2 22.1333C15.0667 22.1333 15.0333 22.0667 15.0333 22Z" fill="black"/>
    <path d="M8.26663 26.6666C8.61641 26.6666 8.89997 26.383 8.89997 26.0332C8.89997 25.6835 8.61641 25.3999 8.26663 25.3999C7.91685 25.3999 7.6333 25.6835 7.6333 26.0332C7.6333 26.383 7.91685 26.6666 8.26663 26.6666Z" fill="black"/>
    <path d="M20.7669 26.6666C21.1167 26.6666 21.4002 26.383 21.4002 26.0332C21.4002 25.6835 21.1167 25.3999 20.7669 25.3999C20.4171 25.3999 20.1335 25.6835 20.1335 26.0332C20.1335 26.383 20.4171 26.6666 20.7669 26.6666Z" fill="black"/>
    <path d="M14.4666 25.7C14.8164 25.7 15.0999 25.4165 15.0999 25.0667C15.0999 24.7169 14.8164 24.4333 14.4666 24.4333C14.1168 24.4333 13.8333 24.7169 13.8333 25.0667C13.8333 25.4165 14.1168 25.7 14.4666 25.7Z" fill="black"/>
    </svg>    
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/cadeira.svg')} style={styles.icon} /> */}
            <SvgXml xml={IconCadeira} style={styles.icon} />
        </View>
    )
}


export function IconTomada() {

    const IconTomada = ` <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.707 4.50938V10.207H17.467V4.44698C17.466 4.24535 17.5074 4.04576 17.5884 3.86113C17.6695 3.67651 17.7884 3.51096 17.9375 3.37522C18.0866 3.23947 18.2625 3.13655 18.4539 3.07312C18.6453 3.00968 18.8479 2.98715 19.0486 3.00698C19.4127 3.05208 19.747 3.23072 19.9869 3.5083C20.2268 3.78587 20.3551 4.14261 20.347 4.50938V10.207H23.1646C23.5314 10.1988 23.8881 10.3272 24.1657 10.567C24.4432 10.8069 24.6219 11.1413 24.667 11.5054C24.6868 11.706 24.6643 11.9086 24.6008 12.1C24.5374 12.2914 24.4345 12.4674 24.2987 12.6164C24.163 12.7655 23.9974 12.8845 23.8128 12.9655C23.6282 13.0466 23.4286 13.088 23.227 13.087H21.787V17.767C21.787 18.7218 21.4077 19.6374 20.7326 20.3126C20.0574 20.9877 19.1418 21.367 18.187 21.367H16.387V26.047H12.787V21.367H10.987C10.0322 21.367 9.11653 20.9877 8.4414 20.3126C7.76627 19.6374 7.38698 18.7218 7.38698 17.767V13.087H5.94698C5.74535 13.088 5.54576 13.0466 5.36113 12.9655C5.17651 12.8845 5.01096 12.7655 4.87522 12.6164C4.73947 12.4674 4.63655 12.2914 4.57312 12.1C4.50968 11.9086 4.48715 11.706 4.50698 11.5054C4.55208 11.1413 4.73072 10.8069 5.0083 10.567C5.28587 10.3272 5.64261 10.1988 6.00938 10.207H8.82698V4.44698C8.826 4.24535 8.86738 4.04576 8.94844 3.86113C9.02949 3.67651 9.14842 3.51096 9.29751 3.37522C9.44661 3.23947 9.62255 3.13655 9.81394 3.07312C10.0053 3.00968 10.2079 2.98715 10.4086 3.00698C10.7727 3.05208 11.107 3.23072 11.3469 3.5083C11.5868 3.78587 11.7151 4.14261 11.707 4.50938Z" fill="black"/>
    </svg>        
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/tomada.svg')} style={styles.icon} /> */}
            <SvgXml xml={IconTomada} style={styles.icon} />
        </View>
    )
}


export function IconReservado() {

    const IconReservado = ` <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.42 4.89L13.308 3.018C13.068 2.97 12.828 3.018 12.636 3.162C12.444 3.306 12.348 3.546 12.348 3.786V4.866H8.292C7.86 4.866 7.5 5.226 7.5 5.658V23.154C7.5 23.586 7.86 23.946 8.292 23.946H12.324V25.026C12.324 25.266 12.444 25.482 12.612 25.65C12.756 25.77 12.924 25.818 13.092 25.818C13.14 25.818 13.212 25.818 13.26 25.794L21.372 23.922C21.732 23.85 21.972 23.514 21.972 23.154V5.658C22.02 5.274 21.78 4.962 21.42 4.89ZM12.324 22.362H9.084V6.426H12.324V22.362ZM15.108 15.234C14.652 15.234 14.268 14.85 14.268 14.394C14.268 13.938 14.652 13.554 15.108 13.554C15.564 13.554 15.948 13.938 15.948 14.394C15.948 14.85 15.564 15.234 15.108 15.234Z" fill="black"/>
    </svg>
    
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/porta.svg')} style={styles.icon} /> */}
            <SvgXml xml={IconReservado} style={styles.icon} />
        </View>
    )
}




export function IconSol() {

    const IconSol = ` <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.91781 8.90753L7.06849 7.06849L5.61986 8.51712L7.4589 10.3562L8.91781 8.90753ZM6.08219 14.7226H3V16.7774H6.08219V14.7226ZM15.3288 4.5H13.274V7.53082H15.3288V4.5ZM22.9829 8.51712L21.5342 7.06849L19.6952 8.90753L21.1438 10.3562L22.9829 8.51712ZM19.6849 22.5925L21.524 24.4418L22.9726 22.9931L21.1233 21.1541L19.6849 22.5925ZM22.5205 14.7226V16.7774H25.6027V14.7226H22.5205ZM14.3014 9.58562C10.9007 9.58562 8.13699 12.3493 8.13699 15.75C8.13699 19.1507 10.9007 21.9144 14.3014 21.9144C17.7021 21.9144 20.4658 19.1507 20.4658 15.75C20.4658 12.3493 17.7021 9.58562 14.3014 9.58562ZM13.274 27H15.3288V23.9692H13.274V27ZM5.61986 22.9829L7.06849 24.4315L8.90753 22.5822L7.4589 21.1336L5.61986 22.9829Z" fill="black"/>
    </svg>    
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/sol.svg')} style={styles.icon} /> */}
            <SvgXml xml={IconSol} style={styles.icon} />
        </View>
    )
}


export function IconCardapio() {

    const IconCardapio = ` <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.42505 12.2284L10.0192 9.63425L3.58422 3.20842C2.15422 4.63842 2.15422 6.95758 3.58422 8.39675L7.42505 12.2284ZM13.6401 10.5692C15.0426 11.2201 17.0134 10.7617 18.4709 9.30425C20.2217 7.55342 20.5609 5.04175 19.2134 3.69425C17.875 2.35592 15.3634 2.68592 13.6034 4.43675C12.1459 5.89425 11.6876 7.86508 12.3384 9.26758L3.39172 18.2143L4.68422 19.5068L11.0001 13.2092L17.3067 19.5159L18.5992 18.2234L12.2926 11.9167L13.6401 10.5692Z" fill="#A96B3C"/>
    </svg>    
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/restaurante.svg')} style={styles.iconMedio} /> */}
            <SvgXml xml={IconCardapio} style={styles.iconMedio} />
        </View>
    )
}


export function IconChat() {

    const IconChat = ` <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.05 0.300049H1.84995C0.942451 0.300049 0.199951 1.04255 0.199951 1.95005V16.8L3.49995 13.5H15.05C15.9575 13.5 16.7 12.7575 16.7 11.85V1.95005C16.7 1.04255 15.9575 0.300049 15.05 0.300049ZM15.05 11.85H3.49995L1.84995 13.5V1.95005H15.05V11.85Z" fill="#A96B3C"/>
    </svg>        
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/chat.svg')} style={styles.iconMedio} /> */}
            <SvgXml xml={IconChat} style={styles.iconMedio} />
        </View>
    )
}


export function IconVoltar() {

    const IconVoltar = ` <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.2625 16.2375L8.5375 10.5L14.2625 4.7625L12.5 3L5 10.5L12.5 18L14.2625 16.2375Z" fill="black"/>
    </svg>    
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/voltar.svg')} style={[styles.iconMedio, { margin: 8 }]} /> */}
            <SvgXml xml={IconVoltar} style={styles.iconMedio,{margin:8}} />
        </View>
    )
}






export function IconFavorito() {

    const iconFavorito = `<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.25642 15L7.07113 13.921C2.86132 10.1035 0.0820312 7.58583 0.0820312 4.49591C0.0820312 1.9782 2.06023 0 4.57794 0C6.00029 0 7.36541 0.662125 8.25642 1.70845C9.14743 0.662125 10.5125 0 11.9349 0C14.4526 0 16.4308 1.9782 16.4308 4.49591C16.4308 7.58583 13.6515 10.1035 9.4417 13.9292L8.25642 15Z" fill="#FFEDDF"/>
    </svg>       
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/Favorito.svg')} style={styles.iconMedio} /> */}
            <SvgXml xml={iconFavorito} style={styles.iconMedio,{margin:8}} />
        </View>
    )
}


export function IconShare() {

    const iconShare = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="#0D1321"/>
    </svg>         
    `;
    return (
        <View >
            {/* <Image source={require('../assets/Icon/Buttons/share.svg')} style={styles.iconMedio} /> */}
            <SvgXml xml={iconShare} style={styles.iconMedio,{margin:8}} />
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
    },
icon: {
    width: 30,
    height: 30,
    marginRight: 20,
},
iconMedio: {
    marginRight: 11,
    width: 20,
    height: 20
}
})




// ***************************************************************************

// fucniona na web

// import React from 'react'
// import { Image, StyleSheet, Text, View } from 'react-native'



// export function ButtonHome({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/home.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Home</Text>


//         </View>
//     )
// }


// export function ButtonPesquisar({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/search.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Pesquisar</Text>


//         </View>
//     )
// }

// export function ButtonVisitados({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/logo.svg')} style={styles.buttonLogo} />
//             <Text style={styles.txtBtn}>Visitados</Text>


//         </View>
//     )
// }


// export function ButtonFavoritos({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/Favorito.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Favoritos</Text>


//         </View>
//     )
// }



// export function ButtonPerfil({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/Perfil.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Perfil</Text>


//         </View>
//     )
// }

// export function ButtonFavoritar() {
//     return (
//         <View style={
//             styles.container
//         }>
//             <Image source={require('../assets/Icon/Buttons/FavoritoLinha.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Favoritos</Text>


//         </View>
//     )
// }

// export function IconWifi() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/Wifi.svg')} style={styles.icon} />
//         </View>
//     )
// }

// export function IconAr() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/ar.svg')} style={styles.icon} />
//         </View>
//     )
// }
// export function IconCadeira() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/cadeira.svg')} style={styles.icon} />
//         </View>
//     )
// }

// export function IconTomada() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/tomada.svg')} style={styles.icon} />
//         </View>
//     )
// }
// export function IconReservado() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/porta.svg')} style={styles.icon} />
//         </View>
//     )
// }

// export function IconSol() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/sol.svg')} style={styles.icon} />
//         </View>
//     )
// }

// export function IconCardapio() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/restaurante.svg')} style={styles.iconMedio} />
//         </View>
//     )
// }

// export function IconChat() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/chat.svg')} style={styles.iconMedio} />
//         </View>
//     )
// }

// export function IconVoltar() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/voltar.svg')} style={[styles.iconMedio, { margin: 8 }]} />
//         </View>
//     )
// }
// export function IconFavorito() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/Favorito.svg')} style={[styles.iconMedio,{ margin: 8 }]} />
//         </View>
//     )
// }
// export function IconShare() {
//     return (
//         <View >
//             <Image source={require('../assets/Icon/Buttons/share.svg')} style={[styles.iconMedio,{ margin: 8 }]} />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',

//     },
//     buttonLogo: {
//         height: 22,
//         width: 15,
//         marginBottom: 3,
//         marginTop: 4

//     },
//     button: {
//         height: 22.2,
//         width: 24,
//         marginBottom: 3,
//         marginTop: 4

//     },
//     txtBtn: {
//         fontSize: 12,
//         lineHeight: 14.5,
//         letterSpacing: 0.5,
//         fontWeight: 400,
//         color: '#FFEDDF'
//     },
//     icon: {
//         width: 30,
//         height: 30,
//         marginRight: 20,
//     },
//     iconMedio: {
//         marginRight: 11,
//         width: 20,
//         height: 20
//     }
// })







// //Antigo are no navegador
// import React from 'react'
// import { Image, StyleSheet, Text, View } from 'react-native'



// export function ButtonHome({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/home.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Home</Text>


//         </View>
//     )
// }


// export function ButtonPesquisar({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/search.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Pesquisar</Text>


//         </View>
//     )
// }

// export function ButtonVisitados({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/logo.svg')} style={styles.buttonLogo} />
//             <Text style={styles.txtBtn}>Visitados</Text>


//         </View>
//     )
// }


// export function ButtonFavoritos({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/Favorito.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Favoritos</Text>


//         </View>
//     )
// }



// export function ButtonPerfil({ focused, color }) {
//     return (
//         <View style={[
//             styles.container,
//             { backgroundColor: focused ? '#ffeddf32' : '#0D1321' },
//             { borderRadius: focused ? 10 : 0 },
//             { paddingHorizontal: focused ? 12 : 0 },
//             { paddingVertical: focused ? 5 : 0 }
//         ]}>
//             <Image source={require('../assets/Icon/Buttons/Perfil.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Perfil</Text>


//         </View>
//     )
// }

// export function ButtonFavoritar() {
//     return (
//         <View style={
//             styles.container
//         }>
//             <Image source={require('../assets/Icon/Buttons/FavoritoLinha.svg')} style={styles.button} />
//             <Text style={styles.txtBtn}>Favoritos</Text>


//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',

//     },
//     buttonLogo: {
//         height: 22,
//         width: 15,
//         marginBottom: 3,
//         marginTop: 4

//     },
//     button: {
//         height: 22.2,
//         width: 24,
//         marginBottom: 3,
//         marginTop: 4

//     },
//     txtBtn: {
//         fontSize: 12,
//         lineHeight: 14.5,
//         letterSpacing: 0.5,
//         fontWeight: 400,
//         color: '#FFEDDF'
//     }
// })



