import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Grid from './components/Grid';

class App extends Component {

	state = {
		places: [
			{
				title: "Stewart Beach",
				city: "Galveston",
				image: "galveston.jpeg",
				volunteers: 5,
				date: "May 18th, 2019",
				likes: 25	
			},
			{
				title: "Buffalo Bayou",
				city: "Texas",
				image: "houston.jpeg",
				volunteers: 3,
				date: "June 8th, 2019",
				likes: 15				
			},
			{
				title: "Conroe Street & Morris Street",
				city: "Dallas",
				image: "dallas.jpeg",
				volunteers: 2,
				date: "Minimum volunteers not met!",
				likes: 1				
			}
		]
	}
		

  	render() {
    	return (
      		<div className="App flex">
      			<Sidebar />
				<Grid {...this.state} />
      		</div>
    	);
  	}
}

export default App;
