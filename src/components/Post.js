import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { FaArrowUp, FaShare, FaMoneyBill} from 'react-icons/fa';

class Post extends Component {

  	render() {

		return (
			<div className="flex post">
                <div className="trash-site-img">
                    <h3>Volunteers: {this.props.volunteers}</h3>
                    <h3>Date: {this.props.date}</h3>
                    <img src={require(`../img/${this.props.image}`)} alt="post" className="trash-sites" />
                    <IconContext.Provider value={{ size: "2em", color: "#BEBEBE"}}>
                        <div className="flex community-info"><FaArrowUp /><h3>{this.props.likes}</h3><FaShare /><h3>Share</h3><FaMoneyBill /><h3>Donate</h3></div>
                        
                    </IconContext.Provider>

                </div>
                <div className="flex column trash-site-info">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.city}, Texas</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button>Volunteer</button>
                    <button>MORE INFO</button>
                </div>
			</div>
		)
  	}
}

export default Post;