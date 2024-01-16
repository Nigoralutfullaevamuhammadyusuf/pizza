import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'
const Home = () => {
  return (
    <div>
        <div className='home'style={{backgroundImage:`url(${BannerImage})`}}>
            <div className='headerContainer'  >
<h1>Nigora's pizzas</h1>
<p>Unrepeatable taste for anyone</p>
<Link to='/menu'>
<button>Order now</button></Link>
            </div>

        </div>
    </div>
  )
}

export default Home