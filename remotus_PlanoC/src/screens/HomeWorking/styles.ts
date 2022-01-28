import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.SafeAreaView`
   flex:1;  
   
`;
export const Content = styled.View`
   align-items:center;   
   justify-content:center;
`;
export const Text = styled.Text`
   font-size: ${RFValue(18)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.15px;
   margin: 10px; 
`;
export const Subtitle = styled.Text`

   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align: left;
   margin-left: 5%;
   margin-top: -3%;   
`;

export const WrapperText = styled.View`
   
   margin-right: 31%;
   margin-top: -15%;
      
`;

export const WrapperFooter = styled.View`

`
export const Card = styled.View`
   width: 90%;
   height: 60%;
   background: pink;
   margin: 10px;
   border-radius:10px;
   background: #FFFFFF;
   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2)   
`;
export const CardText = styled.Text`
   font-size: ${RFValue(17)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   padding:5%; 
   margin-top: -10%;
 
`;
export const CardSubtitle = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align: left;
   padding:3%;
   margin-top: 40%;   
`;
export const CardView = styled.View`
   width: 88px;
   height: 88px;
   background: ${({ theme }) => theme.colors.sucess_light};
   margin: 19px;
   border-radius:100px;
   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2)
   align-items: center;
`;
export const CardRow = styled.View`
   flex-direction:row;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(30)}px;
  margin-top: 30px;
`;
export const IconShare = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(30)}px;
  margin: 5% 0 0 85%;

`;