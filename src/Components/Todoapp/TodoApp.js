import React, { Component } from 'react'
import "./TodoApp.css";

class Todoapp extends Component {
    state ={
        input:" ",
        items:[]
    }
    handleChnage = (event) => {
        this.setState({
            input : event.target.value  // if there is multiple input line , replace "input:" by "[event.target.name]"
        });
        

    };
    // storeItems =(event) =>{
    //     event.preventDefault();
    //     const {input} = this.state;
    //     const allItems = this.state.items;
    //     allItems.push(input);
    //      this.setState({             // This Store item  can be written in two ways as shown below
    //      items:allItems
    //      });
    // };

    storeItems =(event) =>{
        event.preventDefault();
        const {input} = this.state;
        
         this.setState({             // This storeItems can be written in two ways as shown above
         items: [...this.state.items, input],
         input:""
         });
    };

    // deleteItem = (key) => {                 // this can be written by filter though.
    //     const allItems = this.state.items;
    //     allItems.splice(key,1);
    //     this.setState({
    //         items:allItems
    //     });
    // };
    deleteItem = (key) => {
        
        this.setState({
            items: this.state.items.filter((data,index) => index !== key)
        });
    };

    render () {
        const {input, items } = this.state ; // Destructuring , hence u can write as "input" instead of this.state.input 
        console.log(items);
        return (
            <div className='todo-container'>
                
                <form className='input-section' onSubmit={ this.storeItems }>
                <h1>TO DO APP</h1> 
                    <input type="text" onChange ={this.handleChnage} value={ input } placeholder='Enter Items...'/>
                    
                </form>
                <ul>
                   {items.map((data, index) => (
                    <li key={index}>{data} <i className ="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)} ></i></li>
                   ))}
                                      
                </ul>
            </div>
        )
    }
}

export default Todoapp;