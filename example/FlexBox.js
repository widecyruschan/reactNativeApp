/**
 * FlexBox ReactNative實現
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FlexBox extends React.Component {
  render() {
    return (
       <View style={styles.flexContainer}  >
          <Text style={styles.text} >
             1
          </Text>
          <Text style={[styles.text,{flex:2}]} >
             2
          </Text>
          <Text style={[styles.text,{flex:1}]} >
             3
          </Text>          
        </View>
    );
  }
}

const styles = StyleSheet.create({

      height50: {
        height: 50,
      },
      height400: {
        height: 400,
      },
      height300: {
        height: 300,
      },
      height200: {
        height: 200,
      },
      height100: {
        height: 100,
      },
      width400: {
        width: 400,
      },
      bgred: {
        backgroundColor: '#6AC5AC',
      },
      bggreen: {
        backgroundColor:  '#414142',
      },
      bgyellow: {
        background-color: '#D64078',
      },
      box: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        position: 'relative',
        color: '#FDC72F',
        // lineHeight: 1em
      },
      label: {
        top: 0;
        left: 0;
        paddingTop:0,
        paddingLeft:3,
        paddingBottom:3,
        paddingRight:0,
        position: 'absolute',
        backgroundColor: '#FDC72F',
        color: '#fff',
      },
      top: {
        width: 100%;
        justifyContent: 'center';
        display: 'flex';
        alignItems: 'center';
      },
      bottom: {
        width: 100%;
        display: 'flex';
        justifyContent: 'center';
        alignItems: 'center';
      },
      right: {
        width: 50;
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      left: {
        width: 50;
        display: 'flex';
        justifyContent: 'space-around';
        alignItems: 'center';
      },
      heightdashed: {
        position: 'absolute',
        right: 20,
        height: 100%,
        borderTopWidth: 1,
        borderTopColor: '#FDC72F',
        borderStyle: 'solid'
      },
      widthdashed: {
        position: 'absolute';
        left: 0;
        width: 100%,
        bottom: 24,
        borderTopWidth: 1,
        borderTopColor: '#FDC72F',
        borderStyle: 'solid'
      },
      margginBox: {
        position:'absolute',
        top: 100,
        paddingLeft:7,
        paddingRight:7,
      },
      borderBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
      },
      paddingBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
      },
      elementBox:{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
      },
      measureBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }
/**
 * borderColor string
  borderTopColor string
  borderRightColor string
  borderBottomColor string
  borderLeftColor string
  borderRadius number
  borderTopLeftRadius number
  borderTopRightRadius number
  borderBottomLeftRadius number
  borderBottomRightRadius number
  borderStyle enum('solid', 'dotted', 'dashed')
  borderWidth number
  borderTopWidth number
  borderRightWidth number
  borderBottomWidth number
  borderLeftWidth number
 */
});

