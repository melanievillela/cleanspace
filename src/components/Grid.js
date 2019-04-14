import React, { Component } from 'react';
import Post from './Post';

class Grid extends Component {

  	render() {

		return (			
			<div id="grid" className="flex">
				{
					this.props.places.map((item, index) =>  
						<Post 
							key={index}
							title={item.title} 
							city={item.city} 
							image={item.image} 
							volunteers={item.volunteers}
							date={item.date}
							likes={item.likes}
						/>
					)
				}
			</div>
		)
  	}
}

export default Grid;