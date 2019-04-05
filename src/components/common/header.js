import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
 return ( 
        // style={styles.container}
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
    );
  };

  const styles = {
    viewStyle: {
      
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset:{ width: 0, height: 2 },
      shadowOpacity: 0.5,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 20
    }
  };
export {Header};
