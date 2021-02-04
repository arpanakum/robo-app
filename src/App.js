import React, { Component } from 'react';
import CardList from './components/CardList.js';
import SearchBox from './components/SearchBox';
//import {robots} from './robots';

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState({robots:users}));
  }

  

  render() {

    let fileteredRobots = [];
    const {searchField, robots} = this.state;
    if(searchField.length === 0){
      
      fileteredRobots = robots;
    }else{
      
      fileteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    }

    return ( 
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchfield={this.state.searchField} handleChange={this.handleChange}/>
      <CardList robots={fileteredRobots}/>

    </div>
    );
  }

  handleChange = (event) => {
    console.log("change------"+event.target.value);
    this.setState({searchField:event.target.value});
  }

}


export default App;
