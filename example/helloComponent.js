/**
    创建组件的三种方式：
       1.   es6的方式创建组件
       2.   es5的方式创建组件
       3.   函数式的方式创建组件
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


/*
* 方式1 ES6
* */

export default class HelloComponent extends React.Component{
    render(){
        return (
          <View>
            <Text style={styles.container}>方式1: ES6</Text>
          </View>
        );
    }
}



/*
 * 方式2 ES5  需要module.exports
 * */

// var HelloComponent = React.createClass({
//     render(){
//         return <Text style={styles.container}>方式2 ES5</Text> ;
//     }
// })
// module.exports = HelloComponent;

                
                
                
/*
 * 方式3 函数式  需要module.exports
 * 无状态，不能使用this，但是可以传入属性
 * */

// function HelloComponent(props) {
//     return <Text style={styles.container}>方式3 函数式 {props.name}</Text> ;
// }
// module.exports = HelloComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});