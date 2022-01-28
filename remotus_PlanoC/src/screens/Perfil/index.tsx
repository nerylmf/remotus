import React from 'react';
// import {Footer} from '../Home/Footer/';
import ImgUserPerfil from '../../assets/ImgUserPerfil/ImgUserPerfil';
import { TouchableOpacity } from 'react-native-gesture-handler';


import {
    Container,
    Content,
    Usuario,
    Text,
    TextSobre,
    TextAjuda,
    TextSair,
    TitleInfo,
    TitleLog,   
    TitleNot,
    SubtitleInfo,
    SubtitleLog, 
    SubtitleNot,
    Cards,
    WrapperFooter,
    CardNot,   
    CardInfo,
    CardSobre,
    CardAjuda, 
    CardLog,
    Icon,
    IconExit,
    IconUser,
    IconInfo,
    IconLogin,
    IconNotifi,

} from './styles';

export function Perfil(){

    return(
        <Container>
            <Content>
                <Usuario>
                    <IconUser xml={ImgUserPerfil}/>
                    <Text>Samuel Vieira</Text>
                    <TouchableOpacity>
                        <IconExit name='exit-to-app' color="black"/>
                    </TouchableOpacity>
                </Usuario>
                <Cards>
                    <CardInfo>
                        <IconInfo name='user-alt'/>
                        <Icon name='keyboard-arrow-right'/>
                        <TitleInfo>Informações Pessoais</TitleInfo>
                        <SubtitleInfo>foto do perfil,nome,data de nasc...</SubtitleInfo>
                    </CardInfo>
                    <CardLog>
                        <IconLogin name='security'/>
                        <Icon name='keyboard-arrow-right'/>
                        <TitleLog>Login e segurança</TitleLog>
                        <SubtitleLog>email,alterar senha,</SubtitleLog>
                    </CardLog>
                    <CardNot>
                        <IconNotifi name='notifications'/>
                        <Icon name='keyboard-arrow-right'/> 
                        <TitleNot>Notificações</TitleNot>
                        <SubtitleNot>email,alterar senha,</SubtitleNot>
                    </CardNot>
                    <CardSobre>
                        <Icon name='keyboard-arrow-right'/>
                        <TextSobre>Sobre</TextSobre>
                    </CardSobre>
                    <CardAjuda>
                        <Icon name='keyboard-arrow-right'/>
                        <TextAjuda>Ajuda</TextAjuda>
                    </CardAjuda>
                    <TouchableOpacity>
                        <TextSair>Sair</TextSair>
                    </TouchableOpacity>
                    {/* <WrapperFooter>
                        <Footer></Footer>
                    </WrapperFooter> */}
                   
                </Cards>
                
               
            </Content>
            
        </Container>
        
        

    
    )

}