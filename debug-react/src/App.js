import './App.css';
import {useState} from 'react'

function App() {
  debugger
  const [a,setA] = useState(['A','B','C','D']);
  return (
    <div onClick={()=>{
      console.log('444');
    }}>
      <div onClick={(e)=>{
        setA(['B','A','D','C'])
      }} className="App">
       click me
      </div>
      {
        a.map((i)=><span key={i} >{i+'oo'}</span>)
      }
    </div>
  );
}

export default App;
