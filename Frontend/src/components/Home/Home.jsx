import './HomeS.css'
import CardPizza from '../CardPizza/CardPizza'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
const Home = () => {
  const [info, setInfo] = useState([])
  const consumoApi = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    return setInfo(data)
  }
  useEffect(() => {
    consumoApi()
  }, [])
  return (
    <>
      <Header />
      <div className='d-flex flex-wrap justify-content-center gap-3'>
        {info.map((pizza) => (<CardPizza key={pizza.id} nombre={pizza.name} precio={pizza.price} ingredientes={pizza.ingredients} imagen={pizza.img} />))}
      </div>

    </>
  )
}

export default Home
