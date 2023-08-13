import React from 'react'
import "../Css/style.css";
import {menu} from "../Data"


const Menu = () => {
  return (
    <section className='menu' id='menu'>
    <h1 className='heading'>Our <span>menu</span></h1>
    <div className='box-container'>
    {
        menu.map((item,key)=>(
            <div className='box'>
                <img src={item.img} alt="image" />
                <h3>Lorem ipsum dolor sit.</h3>
                <div className='price'> $15.99 <span>20.99</span></div>
            </div> 
        ))
    }
    </div>
    </section>
  )
}

export default Menu