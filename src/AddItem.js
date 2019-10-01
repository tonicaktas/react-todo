import React, { Component } from 'react';


class AddItem extends Component {
   constructor(props){
       super(props);
       this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e){
       e.preventDefault()
       //hämtar value från formen och sparar som onAdd(name,price) som har propats från App.js
       this.props.onAdd(this.nameInput.value, this.priceInput.value)

       this.nameInput.value = '';
       this.priceInput.value = '';
   }

   

    render(){
                return (
                  <form onSubmit={this.onSubmit}>
                      <h3 >Att Item</h3>
                      <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
                      <input placeholder="Price" type="number" ref={priceInput => this.priceInput =priceInput}/>
                      <button>Add</button>

                      <hr />

                  </form>
                )        
      }
}



export default AddItem;
