import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

let nombre  = prompt("Bienvenido! ¿Cual es su nombre?")


if(nombre === null || nombre === ""){
  window.location.reload();
}
function App() {
  return (
    <div>
      <Header></Header>
      
      <ItemListContainer textH1={`Bienvenido ${nombre}, gracias por visitarnos`}></ItemListContainer>
    </div>
  );
}

export default App;
