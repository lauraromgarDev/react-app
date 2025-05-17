import Card, { CardBody } from "./components/Card";
import List from "./components/List";


function App() {
  const list = [
    "rosa",
    "rojo",
    "azul",
    "amarillo",
  ];
  return <Card>
    <CardBody title="hola mundo" text="Este es el texto" />
    <List data={list}/>
  </Card>;
}

export default App;
