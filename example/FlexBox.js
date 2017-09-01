/**
 * FlexBox ReactNative實現
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FlexBox extends React.Component {
  render() {
    return (
       <View style={[styles.margginBox]}>
      <View style={[styles.box,styles.height400,styles.width400]}>
        <View style={styles.label}>
          <Text>margin</Text>
        </View>
        <View style={[styles.top,styles.height50,styles.bgred]}>
          <Text style={styles.whites}>top</Text>
        </View>
        <View style={styles.borderBox}>
          <View style={[styles.left,styles.bgred]}>
            <Text style={styles.whites}>left</Text>
          </View>
          <View style={[styles.box,styles.height300]}>
            <View style={styles.label}>
              <Text style={styles.whites}>border</Text>
            </View>
            <View style={[styles.top, styles.height50,styles.bggreen]}>
              <Text style={styles.whites}>top</Text>
            </View>
            <View style={styles.paddingBox}>
              <View style={[styles.left,styles.bggreen]}>
                <Text style={styles.whites}>left</Text>
              </View>
              <View style={[styles.box,styles.height200]}>
                <View style={styles.label}>
                 <Text style={styles.whites}>padding</Text>
                </View>
                <View style={[styles.top,styles.height50,styles.bgyellow]}>
                  <Text style={styles.whites}>top</Text>
                </View>
                <View style={styles.elementBox}>
                  <View style={[styles.left,styles.bgyellow]}>
                    <Text style={styles.whites}>left</Text>
                  </View>
                  <View style={[styles.box,styles.height100]}>
                    <View style={styles.label}>
                      <Text style={styles.whites}>element</Text>
                    </View>
                    <View style={styles.widthdashed}>
                    </View>
                    <View style={styles.heightdashed}>
                    </View>
                    <View style={styles.measureBox}>
                      <View style={styles.right}>
                        <Text>height</Text>
                      </View>
                    </View>
                    <View style={[styles.bottom,styles.height50]}>
                      <Text>width</Text>
                    </View>
                  </View>
                  <View style={[styles.right,styles.bgyellow]}>
                    <Text style={styles.whites}>right</Text>
                  </View>
                </View>
                <View style={[styles.bottom,styles.height50,styles.bgyellow]}>
                  <Text>bottom</Text>
                </View>
              </View>
              <View style={[styles.right,styles.bggreen]}>
                <Text>right</Text>
              </View>
            </View>
            <View style={[styles.bottom,styles.height50,styles.bggreen]}>
              <Text>bottom</Text>
            </View>
          </View>
          <View style={[styles.right,styles.bgred]}>
            <Text>right</Text>
          </View>
        </View>
        <View style={[styles.bottom,styles.height50,styles.bgred]}>
          <Text style={styles.colorWhite}>bottom</Text>
        </View>
      </View>
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
        backgroundColor: '#D64078',
      },
      box: {
        flexDirection: 'column',
        flex: 1,
        position: 'relative',
        
      },
      boxColor:{
        color: '#FDC72F',
      },
      label: {
        paddingTop:0,
        paddingLeft:3,
        paddingBottom:3,
        paddingRight:0,
        position: 'absolute',
        backgroundColor: '#FDC72F',
      },
      yellow:{
        color: 'yellow',
        fontWeight:'900',
      },
      whites:{
        color: 'white',
        fontWeight:'900',
      },
      top: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottom: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      right: {
        width: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      left: {
        width: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      heightdashed: {
        position: 'absolute',
        right: 20,
        borderLeftWidth: 1,
        position :'absolute',
        top:0,
        bottom:0,
        borderLeftColor: '#FDC72F',
      },
      widthdashed: {
        position: 'absolute',
        left: 0,
        right:0,
        bottom: 25,
        borderTopWidth: 1,
        borderTopColor: '#FDC72F',
      },
       margginBox:{
        position: 'absolute',
        top: 100,
        paddingLeft:7,
        paddingRight:7,
      },
      borderBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      paddingBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      elementBox:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      measureBox: {
        flex: 1,
        flexDirection: 'row',
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

