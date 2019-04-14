import React, { Component } from 'react';

class Sidebar extends Component {

    formSubmit = (e) => {
        e.preventDefault();
    }

    loadModal = () => {
        document.getElementById("modal").classList.remove("hide");
    }

    closeModal = () => {
        document.getElementById("modal").classList.add("hide");
    }


  	render() {

		return (
			<div id="sidebar" className="flex column">
                <img src={require("../img/logo.png")} alt="logo" id="logo" />
                <form className="flex column" onSubmit={this.formSubmit}>
                    <input type="text" name="name" placeholder=" EMAIL"/>
                    <br></br>                   
                    <input type="text" name="name" placeholder=" PASSWORD"/>
                    <br></br>
                    <button>LOG IN</button>
                    <br></br>
                    <button>SIGN UP</button>
                </form>

                <div>
                    <p>Want to submit an area to clean up? Log in or sign up to get started. Click <b onClick={this.loadModal}>here</b> for more info!</p>
                </div>

                <div id="filter">
                    <h3>Proximity</h3>
                    <select>
                        <option value="default">Select</option>
                        <option value="10">10 miles</option>
                        <option value="25">25 miles</option>
                        <option value="50+">50+ miles</option>
                    </select>
                </div>
                
                <div id="modal" className="flex column hide">
                    <div id="close" onClick={this.closeModal}>X</div>
                    <h3>About Us</h3>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <h3>Getting Started</h3>
                    <p>
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque 
                        nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint 
                        et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias 
                        consequatur aut perferendis doloribus asperiores repellat
                    </p>
                    <h3>FAQ</h3>
                </div>
			</div>
		)
  	}
}

export default Sidebar;