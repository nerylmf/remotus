import React from 'react';
// import {Footer} from '../Home/Footer/';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Container,
    Content,
    Text,
    WrapperText,    
    WrapperFooter,
    Subtitle,
    Card,  
    CardText,
    CardView,
    CardRow,
    CardSubtitle, 
    Icon,   
    IconShare,
} from './styles';
import { LikeTo } from './LikeTo';
 

export function HomeWorking() {
  
    return (
      <Container>
            <Content> 
                <WrapperText>
                    <Text>Bom trabalho, remoter :)</Text>
                </WrapperText>
                <Card>
                    <IconShare>share</IconShare>
                    <CardText>Café Patriota</CardText>
                    <Subtitle>Cafeteria</Subtitle> 
                    <CardRow>
                        <TouchableOpacity>
                            <CardView>
                                <Icon name='local-restaurant'/>
                                <CardSubtitle>Cardápio</CardSubtitle>
                            </CardView>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <CardView>
                                <Icon name='chat-bubble-outline'/>
                                <CardSubtitle>Chat</CardSubtitle>
                            </CardView>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <CardView>
                                <Icon name='radio-button-on'/>
                                <CardSubtitle>Pomodoro</CardSubtitle>
                            </CardView>
                        </TouchableOpacity>                        
                    </CardRow>                    
                </Card>
            </Content>
            <WrapperFooter>
                <LikeTo></LikeTo>
                {/* <Footer></Footer> */}
            </WrapperFooter>
        </Container>           
)};
  