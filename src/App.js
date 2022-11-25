import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
let nombre = prompt("Cual es su nombre?")

function App() {
  return (
    <div>
      <Header></Header>
      
      <ItemListContainer textH1={`Bienvenido ${nombre}, gracias por visitarnos`}></ItemListContainer>
    </div>
  );
}

export default App;
