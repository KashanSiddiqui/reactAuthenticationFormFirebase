import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
 return ( 
        // style={styles.container}
      <View style={styles.containerStyle}>
      {props.children}
      </View>
    );
  };

  const styles = {
    containerStyle: {
  //  backgroundColor: '#ddd',
   borderBottomWidth: 1,
   padding: 5,
   justifyContent: 'flex-start',
   flexDirection: 'row',
   borderColor: '#ddd',
   position: 'relative'
       
    },
  };

export {CardSection};
