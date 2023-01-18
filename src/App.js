
import './App.css';
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Index from './pages/Index';

// ROUTER
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { CartContextProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import ThankYou from './pages/OrderDetail';

// import { exportItemsFirestore } from './components/services/firebase';
//  <button onClick={exportItemsFirestore} className=' z-50 mt-40'>Exportar</button> */}

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/products' element={<ItemListContainer />}></Route>
          <Route path='/item/:idProducto' element={<ItemDetailContainer />}></Route>
          <Route path='/category/:idCategory' element={<ItemListContainer />}></Route>
          <Route path='/orderdetail/:orderID' element={<ThankYou />}></Route>
          <Route path="/cart" element={<CartContainer />}></Route>
          <Route path='*' element={<Link to={"/"}><h1 className=' bg-red-500 text-center text-white flex justify-center p-24 mt-20 text-7xl'>404: Recurso no encontrado</h1></Link>}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
