import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks=['Salman shah','Jasim','Bapparaz','Sakil','Aliraz','Nayok raj Rajjak']
  const products=[
    {name:'Camera',model:'cannon 4k d34f',price:'$33.33'},
    {name:'Symphony', model:'d54i',price:'$10'},
    {name:'Laptop',model:'hp elite book',price:'$3000'},
    {name:'Desktop',model:'hp pro book',price:'$3200'}
  ]

  return (
    <div className="App">
      <div className="App-header"> 
      {/* App header start */}
      <h1>I am React learner</h1>
      <Counter></Counter>
      <ul>
        {
          nayoks.map(nayok=> <li>{nayok}</li>)
        }
        {
          products.map(product=><li>{product.name}</li>)
        }
        {
          products.map(product=><Card product={product}></Card>)
        }
      </ul>
        <Card product={products[0]}></Card>
        {/* App header end */}
      </div>
    </div>
  );
}

function Counter(props){
  // useState f amader return hisebe duita dinish pabo 1 state name and 2 function ja dhara amra state set korbo
  const [num,setCount]=useState(0)
  // const handleIncrease=()=>{
  //   setCount(num+1)
  // }
  return(
    <div>
      <h1>Count : {num}</h1>
      <button onMouseMove={()=>{setCount(num-1)}} >Decrease</button>
      <button onMouseEnter={()=>{setCount(num+1)}}>Increase</button>
    </div>
  )
}


function Card(props){
  const {name,model,price}=props.product;
  const cardStyle={
    border:'1px solid yellow',
    padding:'10px',
    width:'300px', 
    borderRadius:'5px',
    marginTop:'10px'
  }
 
  return(
    <div style={cardStyle}>
      <h2>{name}</h2>
      <h3>{model}</h3>
      <h5>{price}</h5>
      <button onClick="alert('alert('md)')">Buy now</button>

    </div>
  )
}

 
export default App;
