import './app.css';
import Table from './components/Table';
import Users from './components/Users';
function App() {
  return (
    <div className="App">
      <Users />
      <div>
        <Table />
      </div>
    </div>
  );
}

export default App;
