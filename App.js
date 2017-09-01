import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//組件的生命週期(Component Lifecycle)
import FlexBox from './example/FlexBox';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    
  render() {
    return (
        <View style={styles.container}>
                <FlexBox/>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
