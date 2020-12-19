import './App.css';
import { Bestsellers } from './components/Bestsellers/Bestsellers.jsx';
import { Promo } from './components/promo/Promo.jsx';
import { Categories } from './components/Categories/Categories.jsx';
import { Header } from './components/Header/Header.jsx';
//import { HeaderBrg } from './components/Header-brg/Header-brg';
// import { Catalog } from './components/Catalog/Catalog';



function App() {
  return (
    <div className="App">
      <Header />
      <Bestsellers />
      <Promo />
      <Categories />
      {
        // <Catalog /> - для данной страницы необходимо делать роутинг
      }
    </div>
  );
}

export default App;
