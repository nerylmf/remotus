import React from 'react';
import ImgInicial from '../../assets/ImgInicial/ImgInicial';
import Logo from '../../assets/Icon/Logo/Logo';
import Google from '../../assets/Icon/Google/google';
import Facebook from '../../assets/Icon/Facebook/facebook';
import Phone from '../../assets/Icon/Phone/phone';
import Mail from '../../assets/Icon/Mail/mail';

import {
  Container,
  Content,
  Wrapper,
  Card,
  CardButtons,
  CardIcon,
  CardFooter,
  CardLogo,
  Text,
  TextIcon,
  TextFooter,
  Img,
  LogoRemotus,
  WrapperText,
  WrapperBlock,
  IconGoogle,
  IconFacebook,
  IconPhone,
  IconMail,

} from './styles';

export function Inicial(props) {

  return (
    <Container>
      <Content>
        <Card>
          <Img xml={ImgInicial} />
          <CardLogo>
          <LogoRemotus xml={Logo}
          />
          </CardLogo>
        </Card>
        
       
        <Wrapper>
         
          <WrapperText>
            <Text>Falta pouco para você encontrar um lugar para trabalhar!</Text>
          </WrapperText>

          <CardButtons>
            <IconGoogle xml={Google} />
            <TextIcon>Continuar com o Google</TextIcon>
          </CardButtons>

          < CardButtons>
            <IconFacebook xml={Facebook} />
            <TextIcon>Continuar com o Facebook</TextIcon>
          </CardButtons>

          <WrapperBlock>
            <CardIcon>
              <IconPhone xml={Phone} />
              <TextIcon>Celular</TextIcon>
            </CardIcon>
            <CardIcon>
              <IconMail xml={Mail} />
              <TextIcon>Email</TextIcon>
            </CardIcon>
          </WrapperBlock>

          <CardFooter>
            <TextFooter
              onPress={() => props.navigation.navigate('home')}

            >Continuar como convidado</TextFooter>
          </CardFooter>
        </Wrapper>
      </Content>
    </Container>
  )
};

// import React from 'react';
// import ImgInicial from '../../assets/ImgInicial/ImgInicial';
// import Logo from '../../assets/Icon/Logo/Logo';
// import Google from '../../assets/Icon/Google/google';
// import Facebook from '../../assets/Icon/Facebook/facebook';
// import Phone from '../../assets/Icon/Phone/phone';
// import Mail from '../../assets/Icon/Mail/mail';

// import {
//   Container,
//   Content,
//   Wrapper,
//   Card,
//   CardButtons,
//   CardIcon,
//   CardFooter,
//   Text,
//   TextIcon,
//   TextFooter,
//   Img,
//   LogoRemotus,
//   WrapperText,
//   WrapperBlock,
//   IconGoogle,
//   IconFacebook,
//   IconPhone,
//   IconMail,

// } from './styles';

// export function Inicial(props) {

//   return (
//     <Container>
//       <Content>
//         <Img xml={ImgInicial} />
//         <Wrapper>
//           <LogoRemotus xml={Logo}
//             opacity={150}
//           />
//           <WrapperText>
//             <Text>Falta pouco para você encontrar um lugar para trabalhar!</Text>
//           </WrapperText>

//           <CardButtons>
//             <IconGoogle xml={Google} />
//             <TextIcon>Continuar com o Google</TextIcon>
//           </CardButtons>

//           < CardButtons>
//             <IconFacebook xml={Facebook} />
//             <TextIcon>Continuar com o Facebook</TextIcon>
//           </CardButtons>

//           <WrapperBlock>
//             <CardIcon>
//               <IconPhone xml={Phone} />
//               <TextIcon>Celular</TextIcon>
//             </CardIcon>
//             <CardIcon>
//               <IconMail xml={Mail} />
//               <TextIcon>Email</TextIcon>
//             </CardIcon>
//           </WrapperBlock>

//           <CardFooter>
//             <TextFooter
//               onPress={() => props.navigation.navigate('home')}

//             >Continuar como convidado</TextFooter>
//           </CardFooter>
//         </Wrapper>
//       </Content>
//     </Container>
//   )
// };

