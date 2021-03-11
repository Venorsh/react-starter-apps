import './App.css';
import Carsl from './Carsl'
import locationList from './locationList';


function App() {
  return (
    <div className="App">
       <Carsl locations={locationList}/>
    </div>
  );
}

export default App;
