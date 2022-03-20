import logo from './logo.svg';
import './App.css';
import header from "./components/Header"
import Header from './components/Header';
function App() {
  return (
    <div style={{background:'red' ,padding:20}}>
      <Header name="omkar hajare" title="1 header"/>
      <hr/>
      <h1>Hi i am omkar </h1>
      <p> you can call me akshay </p>
      <hr/>
      <Header name="Akshay hajare" title="2 header"/>
    </div>
  );
}

export default App;
