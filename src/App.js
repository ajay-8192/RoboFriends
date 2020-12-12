import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
        .catch(error => this.setState({ robots: robots}))
        console.log('componentDidMount')
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        console.log('render')
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        return !this.state.robots.length ?
            <h1>Loading!!!</h1> :
            <center>
                <h1 className="f1 bg-white" style={{ color: 'blue' }}>ROBOFRIENDS</h1>
                <SearchBox onSearch={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={ filteredRobots }/>
                </Scroll>
            </center>
    }
}

export default App;
