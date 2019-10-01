import React, { Component } from 'react';


class ProductItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false
        };
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this)
    }


onEdit(){
    this.setState({isEdit: true})
}


onDelete(){
    const {onDelete, name} = this.props;
    onDelete(name);
}

onEditSubmit(e){
    e.preventDefault()
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

    this.setState({isEdit: false})
}


    render(){
        const {name,  price} = this.props;
                return (
                  <div>
                      { // om isEdit är true vilket den blir om man klickar på edit
                          this.state.isEdit 
                          ? (
                            <form onSubmit={this.onEditSubmit}>
                                <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
                                <input placeholder="Price" ref={priceInput => this.priceInput =priceInput} defaultValue={price}/>
                                 <button onClick={this.onEditSubmit}>Save</button>
                                 </form>
                          ) :
                          (
                              <div>
                                <span>{name}</span> 
                                {' | '}
                                <span>{price}</span>
                                {' | '}
                                <button onClick={this.onDelete}>Delete</button>
                                <button onClick={this.onEdit}>Edit</button>
                             </div>
                          )
                      }
                   

                  </div>
                )        
      }
}



export default ProductItem;
