import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons,FontAwesome5 } from '@expo/vector-icons'; 
import { SvgXml } from 'react-native-svg';

export const Container = styled.SafeAreaView`
   flex:1;  
   
`;
export const Content = styled.View`
   
`;
export const Usuario = styled.View`
   flex-direction: row;
   align-items: center;
`;
export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${RFValue(25)}px;
  margin: 25px 25px 20px 85%;
  opacity:0.5;
  
  
`;
export const IconExit = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
  color: #000;
  margin-left: 100px;

`;
export const IconUser = styled(SvgXml).attrs({
   width: RFPercentage(10),
   height: RFPercentage(15),
 
 })`
   
  margin-left: 15px;
  
 `;

export const IconInfo = styled(FontAwesome5)`
   font-size: ${RFValue(25)}px;
   margin: 20px 20px -15%;
   color: #000;
`;
export const IconLogin = styled(MaterialIcons)`
   font-size: ${RFValue(25)}px;
   margin: 20px 20px -15%;
   color: #000;
`;
export const IconNotifi = styled(MaterialIcons)`
  font-size: ${RFValue(25)}px;
   margin: 20px 20px -15%;
   color: #000;
`;

export const Text = styled.Text`
   font-size: ${RFValue(20)}px;
   font-family: ${({ theme }) => theme.fonts.bold}; 
   margin-left: 15px; 
`;

export const TitleInfo = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   text-align:center;
   margin-top:-10%;
   margin-left: -25%;
   

     
`;
export const SubtitleInfo = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:center;
   margin-left: -14%;
   

`;
export const CardInfo = styled.View`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0 rgba(0, 0, 0, 0.6)   
`;
export const CardLog = styled.View`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.6)  
    
`;
export const TitleLog = styled.Text`
   font-size: ${RFValue(17)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   text-align:center;
   margin-top:-10%;
   margin-left: -30%;     
`;
export const SubtitleLog = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:center;
   margin-left: -37%;
   
`;
export const CardNot = styled.View`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.6)   
`;

export const TitleNot = styled.Text`
   font-size: ${RFValue(17)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   text-align:center;
   margin-top:-10%;
   margin-left: -40%;
     
`;
export const SubtitleNot = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:center;
   margin-left: -35%;

`;
export const Cards = styled.View`

   height: 70%;
   margin-top:3%;
   
`;
export const CardAjuda = styled.View`
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8)   
`;

export const CardSobre = styled.View`
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8)   
`;


export const TextSobre = styled.Text`
  margin:20px;
  margin-top:-10%;
  font-size:15px;
  opacity:0.5;
    
`;
export const TextAjuda = styled.Text`
   margin:20px;
   margin-top:-10%;
   font-size:15px;
   opacity:0.5;
    
`;
export const TextSair= styled.Text`
   margin:25px;
   font-size:15px;
   opacity:0.5;
`; 
export const WrapperFooter= styled.View`
   margin-top: 55px;
   
`; 

  
    





