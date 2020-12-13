import logo from './logo.svg';
import './App.css';

function App() {
        const products=[
          {name:'Camera',model:'cannon 4k d34f',price:'$33.33'},
          {name:'Symphony', model:'d54i',price:'$10'},
          {name:'Laptop',model:'hp elite book',price:'$3000'},
          {name:'Desktop',model:'hp pro book',price:'$3200'}
        ]
  return (
    <div className="App">
      <div className="App-header">
      {/* <Product name={products[0].name} model={products[0].model} price={products[0].price}></Product> */}
      {/* <Product name={products[1].name} model={products[1].model} price={products[1].price}></Product> */}
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      <Product product={products[3]}></Product>
 
      </div>
    </div>
  );
}

export default App;
