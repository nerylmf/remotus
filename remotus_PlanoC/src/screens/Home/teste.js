// // import React, { Component } from 'react';
// // import { View } from 'react-native';
// // import Svg, { Circle, Path } from 'react-native-svg';

// // // const SvgComponent = props => (
// // //   <Svg viewBox="0 0 48 1" >
// // //     <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
// // //   </Svg>
// // // );

// // // class MySVGIcon extends Component {
// // //   render() {
// // //     const { style } = this.props;
// // //     const component = SvgComponent(style);

// // //     return <View style={style}>{component}</View>;
// // //   }
// // // }
// // // import * as React from "react"

// // const MySVGIcon = (props) => (
 
// //   <Svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// //   <Path d="M8.04102 17V11H12.041V17H17.041V9H20.041L10.041 0L0.0410156 9H3.04102V17H8.04102Z" fill="#FFEDDF"/>
// //   </Svg>
// // )

// // t

// // export default MySVGIcon;


// // import * as React from 'react';
// // import { SvgUri } from 'react-native-svg';

// // export default MySVGIcon=() => (
// //   <SvgUri
// //     width="100%"
// //     height="100%"
// //     uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
// //   />
// // );





// import * as React from 'react';
// import { SvgXml } from 'react-native-svg';

// const xml = `
// <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8.04102 17V11H12.041V17H17.041V9H20.041L10.041 0L0.0410156 9H3.04102V17H8.04102Z" fill="#FFEDDF"/>
// </svg>
// `;

// export default  MySVGIcon=() => <SvgXml xml={xml} width="100%" height="100%" />;