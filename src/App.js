import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
