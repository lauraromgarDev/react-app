function Titulo() {
  //esto es un comentario en codigo jsx -> react.createElement
  const nombre = "chanchito feliz";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola mundo</h1>
}

export default Titulo;