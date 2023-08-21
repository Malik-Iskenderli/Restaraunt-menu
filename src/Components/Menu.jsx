import React from 'react'
import "../Css/style.css";
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <section className='menu' id='menu'>
    <h1 className='heading'>Menu<span>lar</span></h1>
   
  <div className='menu-parents'>
    <div className="sorba">
      <Link to="/sorba"> Şorbalar </Link>
    </div>

    <div className="salat">
      <Link to="/salat"> Salatlar </Link>
    </div>

    <div className="lahmacun">
      <Link to="/lahmacun"> Lahmacunlar </Link>
    </div>

    <div className="pide">
      <Link to="/pide"> Pideler </Link>
    </div>

    <div className="isti-yemekler">
      <Link to="/isti-yemekler"> İsti Yeməklər </Link>
    </div>

    <div className="qarnir">
      <Link to="/qarnir"> Qarnirlər </Link>
    </div>

    <div className="icki">
      <Link to="/icki"> İçkilər </Link>
    </div>
    </div>

    </section>
  )
}

export default Menu