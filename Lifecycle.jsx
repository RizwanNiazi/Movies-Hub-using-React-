import React, { Component } from 'react';



class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log("Constructor()")
        
        this.state={
            Counter:0,
        };
    }
    UNSAFE_componentWillMount(){
        console.log("componentWillMount()");
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate()');
        return true;
       }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
         console.log('componentWillUpdate()');
      }
      componentDidUpdate(prevProps, prevState) {
         console.log('componentDidUpdate()')
      }
      componentWillUnmount(){
        console.log('componentWillUnmount()')
      }
      handleClick=()=>{
          //console.log(this.state.Counter)
          const counter=this.state.Counter+1;
        this.setState({Counter:counter});
      }
    render() {
        console.log('render()')
        return ( 
            <React.Fragment>
                <div>Hello, Lifecycle</div>
                <p>Value of Counter is :  {this.state.Counter}</p>
                <button onClick={this.handleClick}>Counter ++</button>
            </React.Fragment>
         );
    }
}
 
export default Lifecycle;