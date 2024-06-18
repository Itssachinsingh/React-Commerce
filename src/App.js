import './App.css';
import { Home } from './components/Home';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <>
    <CartContextProvider>
      <Home />
      </CartContextProvider>
    </>
  );
}

export default App;
