import React, { Component } from 'react';
import './App.css'
import ProductItem from './ProductItem';
import AddItem from './AddItem';

const products = [
  {
    name: 'Ipad',
    price: 200
  }, {
    name: 'Iphone',
    price: 100
  }
 
];

//sparar produkter i localstorage
localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    }
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);

  }

  //hämtar produkter getProducts() efter komponenten körs och lägger de i state
  componentDidMount(){
    const products = this.getProducts();
    this.setState({products});
  }
//GET
  getProducts(){
    return this.state.products;

  }

//POST
  onAdd(name, price){
    //hämtar produkter
    const products = this.getProducts();
    //pushar nya produkter från props till produkter
    products.push({
      name,
      price
    });
    //sätter nya state
    this.setState({products})
    console.log(this.getProducts());
  }
//DELETE
  onDelete(name){
    //hämtar produkter
    const products = this.getProducts();
    // loopar igenom alla produkter och skickar tillbaka alla produkter förutom den man klickade på(name)
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    //sätter nya state med produkter den skickar tillbaka från loopen
    this.setState({products: filteredProducts});
    
  }
//EDIT
  onEditSubmit(name,price, originalName){
    //hämtar state och sprar i variabel som kommer ändras
    let products = this.getProducts();
    // loopar igenom produkter och lägger in ny informaton om input.value.name(name) är inte lika som default.value.name(orginalName)
    products = products.map(product => {
      //om produkt.name i state är lika som orginalName(som hämtas av prop, det värdet som ä i inputen) 
      if(product.name === originalName){
        // sätter ny state med name som är värdet som skrivs i inputet 
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({products});
   
  }

  render(){
    return(
      <div className='App'>
        <h1>Products Mananger</h1>
        <AddItem onAdd={this.onAdd}/>


        {
          this.state.products.map(product => {
            return (
              <ProductItem 
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            )
          })
        }
      </div>
    )
  }



}

export default App;
