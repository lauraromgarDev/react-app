import { MouseEvent } from "react";

//type es lo mismo que interface
type Props = {
  //le pasamos un array de strings
  data: string[];
};

function List({ data }: Props) {
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
