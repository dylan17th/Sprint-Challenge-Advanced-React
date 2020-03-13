import React from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation'
import PlayersCard from './components/PlayerCard';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
      .then(res => this.setState({
          players: res.data
      }))
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <Navigation/>
        <PlayersCard players={this.state.players}/>
      </div>
    );
  }
}

export default App;
