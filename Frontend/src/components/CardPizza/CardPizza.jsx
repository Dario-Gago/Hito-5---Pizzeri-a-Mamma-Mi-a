import { Link } from 'react-router'
const CardPizza = ({ nombre, precio, ingredientes, imagen }) => {
  return (
    <div className='card ' style={{ width: '18rem' }}>
      <img src={imagen} className='card-img-top' alt={nombre} />
      <div className='card-body'>
        <h5 className='card-title'>{nombre}</h5>
        <p className='card-text'>Precio: ${precio.toLocaleString('es-ES')}</p>
        <p className='card-text'>🍕 Ingredientes 🍕</p>
        <div>
          {ingredientes.map((ingrediente, index) => (
            <ul key={index}>
              <li>{ingrediente}</li>
            </ul>
          ))}
        </div>
        <div className='d-flex justify-content-around'>
          <Link to='/pizza/p001' className='btn btn-outline-dark'>
            Ver más 👀
          </Link>
          <a href='#' className='btn btn-dark ms-2'>
            Añadir 🛒
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
