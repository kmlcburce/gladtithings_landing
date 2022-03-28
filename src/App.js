import logo from './logo.svg';
import './App.css';
import Header from './modules/header/index.js'
import Content from './modules/content/index.js'
import RoutesList from './modules/routes/index.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <RoutesList></RoutesList>
    </div>
  );
}

export default App;
