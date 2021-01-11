import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div onClick={()=>{
      debugger;
      console.log('999');
    }} className="App">
      onclick
    </div>
  );
}

export default App;
