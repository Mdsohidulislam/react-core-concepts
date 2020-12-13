import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <div className="App-header"> 
      {/* App header start */}
        <Posts></Posts>
        {/* App header end */}
      </div>
    </div>
  );
}

function Posts(){
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
      fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data=>setPosts(data))
  },[])
  const pStyle={
    border:'2px solid gray',
    padding:'10px',
    width:'300px'
  }
  return(
    <div>
      <h1>Post titles</h1>
      <ul>
        {posts.map(post=><p style={pStyle}>{post.title}</p>)}
      </ul>
    </div>
  )
}
 
export default App;
