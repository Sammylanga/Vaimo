import React from 'react';
import './App.css';
import Header from './components/Header';
import Ship from './components/Ship';
import Details from './components/Details';

export default class FetchData extends React.Component{

  
//store the state and values from product
  state = {
    loading : true,
    items : null,

}

//fetch data from the API and store it data variable
async componentDidMount(){
    const url ="https://fe-assignment.vaimo.net/";
    const response= await fetch(url);
    const data = await response.json();
    this.setState({items : data, loading:false});

}

  render(){
    return <div className="App">
    {!this.state.items ?(
      /* */
    <h3>Loading...</h3>
    ):(
    <div>  
     <Header>
     </Header>

    <Details>
    </Details>

     <Ship ship={this.state.items.product}/>
    </div>
    )}
    </div>}
}

