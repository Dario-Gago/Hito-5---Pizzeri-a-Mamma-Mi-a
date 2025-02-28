import { useState } from 'react'
import { pizzaCart as initialPizzaCart } from '../../data/pizzas'

const Cart = () => {
  const [cart, setCart] = useState(initialPizzaCart)

  const increaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    )
  }

  const decreaseCount = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    )
  }

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0)
  return (
    <div className='container mt-5'>
      <h4>Detalles del pedido:</h4>
      <div className='list-group'>
        {cart.map((pizza) => (
          <div
            key={pizza.id}
            className='list-group-item d-flex align-items-center justify-content-between'
          >
            <img
              src={pizza.img}
              className='rounded'
              style={{ width: '10%' }}
              alt={pizza.name}
            />
            <span>{pizza.name}</span>
            <span>${pizza.price}</span>
            <button
              className='btn btn-outline-danger btn-sm'
              onClick={() => decreaseCount(pizza.id)}
            >
              -
            </button>
            <span>{pizza.count}</span>
            <button
              className='btn btn-outline-primary btn-sm'
              onClick={() => increaseCount(pizza.id)}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <h4 className='mt-3'>
        Total: <span className='fw-bold'>${total.toFixed(2)}</span>
      </h4>
      <button className='btn btn-dark mt-2'>Pagar</button>
    </div>
  )
}

export default Cart
