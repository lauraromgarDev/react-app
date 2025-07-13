// Importamos el tipo ReactNode desde React, que se usa para describir 
// cualquier contenido válido de React (elementos, texto, fragmentos, etc.)
import { ReactNode } from "react";

// Definimos una interfaz para las props del componente Card
// Espera recibir un solo prop llamado 'children', que puede ser cualquier nodo React
interface CardProps {
  children: ReactNode;
}

// Componente principal Card, que renderiza un contenedor con estilo de tarjeta
function Card(props: CardProps) {
  // Desestructuramos las props para obtener el contenido hijo (children)
  const { children } = props;

  return (
    <div
      className="card" // Usamos una clase de Bootstrap para dar estilo de tarjeta
      style={{
        width: "350px", // Definimos un ancho fijo para la tarjeta
      }}
    >
      {/* Renderizamos el contenido dentro del cuerpo de la tarjeta */}
      <div className="card-body">{children}</div>
    </div>
  );
}

// Definimos una interfaz para las props del componente CardBody
// Recibe un título obligatorio y un texto opcional
interface CardBodyProps {
  title: string;
  text?: string;
}

// Componente CardBody, que se encarga de mostrar el contenido textual de la tarjeta
export function CardBody(props: CardBodyProps) {
  // Desestructuramos las props
  const { title, text } = props;

  return (
    <>
      {/* Título de la tarjeta */}
      <h5 className="card-title">{title}</h5>

      {/* Texto opcional de la tarjeta */}
      <p className="card-text">{text}</p>
    </>
  );
}

// Exportamos por defecto el componente Card
export default Card;
