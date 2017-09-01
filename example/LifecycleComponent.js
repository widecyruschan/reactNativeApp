/**
  組件的生命週期(Component Lifecycle)
  
  组件的生命周期分成三个状态：

    Mounting：已插入真实 DOM
    Updating：正在被重新渲染
    Unmounting：已移出真实 DOM
*/
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class LifecycleCompnent extends Component{
    //組件初始化
    constructor(props){
        super(props);
        console.log('--constructor--')
        this.state={
            count:0,
        }
    }
    
  
    
    /**
     # Mounting(裝載)
         getInitialState(): 在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。
         componentWillMount()：服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。
         componentDidMount()：在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
    */
    
    
    //在組件掛載之前調用一次。返回值將會作為 this.state 的初始值。
    //    getInitialState(){
    //         console.log('--getInitialState--');
    //    }
    
    //服務器端和客戶端都只調用一次，在初始化渲染執行之前立刻調用。
    componentWillMount(){
         console.log('--componentWillMount--');
    }
    //在初始化渲染執行之後立刻調用一次，僅客戶端有效（服務器端不會調用）。
    componentDidMount(){
         console.log('--componentDidMount--');
    }
    
    
    
    /**
    Updating (更新)
        componentWillReceiveProps(object nextProps) 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
        用此函数可以作为 react 在 prop 传入之后， render() 渲染之前更新 state 的机会。老的 props 可以通过 this.props 获取到。在该函数中调用 this.setState() 将不会引起第二次渲染。

        shouldComponentUpdate(object nextProps, object nextState): 在接收到新的 props 或者 state，将要渲染之前调用。
        该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。如果确定新的 props 和 state 不会导致组件更新，则此处应该 返回 false。
            心得：重写次方你可以根据实际情况，来灵活的控制组件当 props 和 state 发生变化时是否要重新渲染组件。
            
        componentWillUpdate(object nextProps, object nextState)：在接收到新的 props 或者 state 之前立刻调用。
        在初始化渲染的时候该方法不会被调用。使用该方法做一些更新之前的准备工作。
            注意：你不能在该方法中使用 this.setState()。如果需要更新 state 来响应某个 prop 的改变，请使用 componentWillReceiveProps。
       
        componentDidUpdate(object prevProps, object prevState): 在组件的更新已经同步到 DOM 中之后立刻被调用。
        该方法不会在初始化渲染的时候调用。使用该方法可以在组件更新之后操作 DOM 元素。
    */
    
    //在組件接收到新的 props 的時候調用。在初始化渲染的時候，該方法不會調用。
    componentWillReceiveProps(props){
         console.log('--componentWillReceiveProps--')
    }
    //在接收到新的 props 或者 state，將要渲染之前調用。
    shouldComponentUpdate(nextProps,nextState){
         console.log('--shouldComponentUpdate--')
        return true;
    }
    //在接收到新的 props 或者 state 之前立刻调用
    componentWillUpdate(nextProps,nextState){
         console.log('--componentWillUpdate--')
    }
    //在组件的更新已经同步到 DOM 中之后立刻被调用
    componentDidUpdate(prevProps,prevState){
         console.log('--componentDidUpdate--')
    }
    
    /**
    Unmounting(移除)
        componentWillUnmount：在组件从 DOM 中移除的时候立刻被调用。
        在该方法中执行任何必要的清理，比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素

    */
    //在组件从 DOM 中移除的时候立刻被调用
    componentWillUnmount(){
         console.log('--componentWillUnmount--')
    }
     render(){
          console.log('--render--')
        return <View style={styles.container}>
                <Text style={styles.fonts} onPress={()=> {
                       this.setState({
                          count:this.state.count+1,                        
                          })
                    }}>&nbsp;點   我&nbsp;</Text>
                 <Text style={{marginTop:30,fontSize:25}}>點擊了{this.state.count}次!</Text>   
               </View>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center', 
  },
    fonts:{
        backgroundColor: '#f0f',
        padding:20,
        fontSize:25,
    }
});