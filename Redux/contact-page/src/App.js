import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Phone Book</h1>
      <div>
        <form action="">
          <h3>Name</h3>
          <input type="text" />
          <h3>Phone Number</h3>
          <input type="number" />
          <button>Create</button>
        </form>
      </div>
      <div>
        <form action="">
          <input type="text" />
          <button>Search</button>
        </form>
        <div>
          <h4>num:0</h4>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
