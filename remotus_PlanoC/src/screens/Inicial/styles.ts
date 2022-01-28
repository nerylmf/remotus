import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';  
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.SafeAreaView`
   flex:1;
   background: ${({ theme }) => theme.colors.warning};
   
`;
export const Content = styled.View`
   align-items:center;
   justify-content:center;
`;

export const Wrapper = styled.View`
   align-items:center;
   justify-content:center;
   margin-Top: -85%;
   margin-bottom: 60px;
`;
export const WrapperBlock = styled.View`
   flex-direction: row;
   justify-content:center;
   margin: 10px;
   
`;

export const WrapperText = styled.View`
   width: 80%;
   height: 67px;
   border-radius: 10px;
   background:#b0cb32;
   align-items:center;
   justify-content:center;
   padding: 7px;
`;
export const Card = styled.View`
   align-items:center;
   justify-content:center;
   margin-Top: 10%;
   

`;
export const CardButtons = styled.TouchableOpacity`
   flex-direction: row;
   background: ${({ theme }) => theme.colors.shape};
   align-items:center;
   justify-content:center;
   margin:  20px 0 0 0 ;
   width: ${RFValue(300)}px;
   height:${RFValue(55)}px;
   border-radius: 10px;
  

`;
export const CardIcon = styled.TouchableOpacity`
   flexDirection: row ;
   background: ${({ theme }) => theme.colors.shape};
   width: ${RFValue(140)}px;
   height:${RFValue(55)}px;
   border-radius: 10px;
   margin:10px;
   padding:20px;
`;
export const CardFooter = styled.TouchableOpacity`
   flexDirection: row ;
   background: ${({ theme }) => theme.colors.success};
   width: ${RFValue(200)}px;
   height:${RFValue(40)}px;
   border-radius: 10px;
   margin:30px 0 0 0;
   justify-content: center; 
`;

export const Text = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.shape};
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.15px; 
    
`;
export const TextIcon = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.warning};
   width: ${RFValue(200)}px;
   height:${RFValue(40)}px;
   padding: 9px;
   border-radius: 10px;
   margin-top:-8px;
  
`;
export const TextFooter = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.shape};
   justify-content:center;
   margin-top:12px; 
`;

export const Img = styled(SvgXml).attrs({
   width: RFValue(360),
   height: RFValue(316),
})``;

export const LogoRemotus = styled(SvgXml).attrs({
   width: RFPercentage(20),
   height: RFPercentage(30),
   
})``;

export const IconGoogle = styled(SvgXml).attrs({
   width: RFPercentage(3),
   height: RFPercentage(3),
})``;

export const IconFacebook = styled(SvgXml).attrs({
   width: RFPercentage(3),
   height: RFPercentage(3),
})``;

export const IconPhone= styled(SvgXml).attrs({
   width: RFPercentage(3),
   height: RFPercentage(3),
})``;
export const IconMail= styled(SvgXml).attrs({
   width: RFPercentage(3),
   height: RFPercentage(3),
})``;
export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.warning};
  font-size: ${RFValue(20)}px;
`;