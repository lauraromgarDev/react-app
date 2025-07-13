import Card, { CardBody } from "./components/Card";
import Titulo from "./Titulo";
import List, { List_consoleLog } from "./components/List";


function App() {
  const list = [
    "rosa",
    "rojo",
    "azul",
    "amarillo",
  ];

  return   (
  <>
  <Titulo /> 
  <Card>
    <CardBody title="hola mundo soy la select" text="Este es el texto" />
    <List data={list}/>
  </Card>
    <Card>
    <CardBody title="hola mundo soy la console.log" text="Este es el texto" />
    <List_consoleLog data={list}/>
  </Card>
  </>
  );
}

export default App;
