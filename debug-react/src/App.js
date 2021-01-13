import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div onClick={()=>{
      console.log('444');
    }}>
      <div onClick={(e)=>{
        console.log(e.persist);
        debugger;
        console.log('999');
      }} className="App">
        onclick
      </div>
    </div>
  );
}

export default App;
