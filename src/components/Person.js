import React from 'react';

class Person extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info: props.info,
        }
    } 
    render(){
    return (
        <div>
        <h1>{`${this.state.info.name}`}</h1>
        <h2>{`${this.state.info.number}`}</h2>
        <h3>{`${this.state.info.dob}`}</h3>
        </div> 
    )
    }
  }

export default Person;