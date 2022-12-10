import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './pages/Contact';

// ROUTER
import { BrowserRouter, Routes, Route} from 'react-router-dom';

let nombre  = prompt("Bienvenido! ¿Cual es su nombre?")


// if(nombre === null || nombre === ""){
//   window.location.reload();
// }
function App() {
  return (
    <BrowserRouter>

      <Header></Header>
      <Routes>
        <Route path='/' element={<ItemListContainer textH1={`Bienvenido ${nombre}, gracias por visitarnos`}></ItemListContainer>}></Route>
        <Route path='/item/:idProducto' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path='/category/:idCategory' element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/Contact/' element={<Contact></Contact>}></Route>
        {/* <Route path='*' element={<h1 className=' bg-red-500 text-center text-white flex justify-center p-24 mt-20 text-7xl'>404: Recurso no encontrado</h1>}></Route> */}
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
