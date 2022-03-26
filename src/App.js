
import './App.css';
import Header from './components/Header/Header';
import Question from './components/Questions/Question';
import Store from './components/store/Store';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Store></Store>
      <Question></Question>
    </div>
  );
}

export default App;
