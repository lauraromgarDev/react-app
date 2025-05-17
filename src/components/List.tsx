//type es lo mismo que interface
type Props = {
  //le pasamos un array de strings
  data: string[];
};

function List({ data }: Props) {
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li key={elemento} className="list-group-item">{elemento}</li>
      ))}
    </ul>
  );
}

export default List;
