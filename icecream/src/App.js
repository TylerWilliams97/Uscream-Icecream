import './App.css';
import Search from './search';
import Searchbar from './searchbar';
import icelogo from './logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='icecream.png' alt='icecream' />
       <Search />
       <Searchbar />
       
      </header>
    </div>
  );
}

export default App;
