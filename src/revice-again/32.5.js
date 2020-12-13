import logo from './logo.svg';
import './App.css';

function App() {
    const me={
      name:'Md Sohidul Islam',
      email:'mddsohidulislam@gmail.com',
      github:'https://github.com/Mdsohidulislam',
      phone: `01999999999999`
    }
    const style={
      color:'red',
      backgroundColor:'green',
      padding:'10px'
    }
  return (
    <div className="App">
      <header className="App-header">
        {/* 32.5 */}
      <h1 style={style}>{me.name}</h1>
      <h1 style={{color:'red',backgroundColor:'green',padding:'10px'}}>Hi, I am Md Sohidul Islam</h1>
      
      {/* 32.5 */}
 
      </header>
    </div>
  );
}
 
export default App;