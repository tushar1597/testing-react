import React, { Component } from 'react';
import '../App.css';

class Body extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.setState({
            div_num : [21,32,43,55]
        })        
    }
  render() {
      if(this.state && this.state.div_num){
        return (
            <div>
                <h1>this is state from parent component ie App.js {this.props.parentState2}</h1>
              <ul>
                {
                 this.state.div_num.map(function(item, i){
                     return(
                        <div>DIV INDEX: {i} DIV VALUE: {item}</div>
                     )
                     })
               }
              </ul>
            </div>
          )
    }
    else{
        return(
            <h1>Loading..</h1>
        )
    }
      }
      

}

export default Body;
