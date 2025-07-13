import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Titulo from "./Titulo";


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
    <CardBody title="hola mundo" text="Este es el texto" />
    <List data={list}/>
  </Card>;
  </>
  );
}

export default App;
