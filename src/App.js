import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/header';
import Login from './Pages/login';
import Content from './Components/content';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Login />
      {/* <Content /> */}
    </div>
  );
}

export default App;
