import React from 'react';
import './App.css';
import Person from './components/Person.js'

class App extends React.Component {
  constructor(){
  super()
  this.state= {
    people: [
      {
        id: 1,
        name: 'Laura',
        number: '1234',
        dob: '07012001'
      },
      {
        id: 2,
        name: 'luna',
        number: '12345',
        dob: '06012001'
      },
      {
        id: 3,
        name: 'nala',
        number: '1254',
        dob: '05012001'
      }
    ]
  }
}
  render(){

  return (
    <div className="App">
    {this.state.people.map(personInfo => {
      return <Person info={personInfo} key={personInfo.id}/>
    })}

    </div>
  )
  }
}



export default App;
