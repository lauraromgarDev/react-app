import { MouseEvent, useState } from "react";

//type es lo mismo que interface
type Props = {
  //le pasamos un array de strings
  data: string[];
};



function List({ data }: Props) {
  const [index, setIndex] = useState(1); // se le conoce como hook, es una forma de manejar el estado en componentes funcionales
  const handleClick = (i: number) => {
    //ahora i es un numero
    // console.log(e);
    setIndex(i);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          key={elemento}
          onClick={() => handleClick(i)}
          className={`list-group-item ${index === i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}


function List_consoleLog({ data }: Props) {
  //creamos una variable para guardar el indice
  const handleClick = (e: string) => { //e es un string, no un MouseEvent
    console.log(e); 
  };

  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li
          key={elemento}
          onClick={() => handleClick(elemento)}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

function List_console({ data }: Props) {
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li
          key={elemento}
          onClick={
            () => console.log(elemento) //si pasamos el raton por encima del elemento, nos dice que estamos usando MouseEvent
          }
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
export { List_console, List_consoleLog }; // Exportamos las funciones adicionales si es necesario
