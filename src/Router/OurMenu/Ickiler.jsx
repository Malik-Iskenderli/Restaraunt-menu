import React, { useEffect, useState } from 'react'
import {Icki} from "../../Data"
import "./Css/Menus.css"
import Manat from "../../Assets2/WhiteManat.png"
import Btnback from '../../Components/Component/Btnback'


const Ickiler = () => {
  const [sorbaData, setsorbaData] = useState([])
useEffect(()=>{
    setsorbaData(Icki);
},[]);

  return (
    <div className='sorbalar' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Btnback/>
      {
         sorbaData && sorbaData.map((item,key)=>(
          <div className="sorba-header">
            <img src={item.img} alt="image"/>
            <div className="sorba-body">
                <p>{item.name}</p>
                <span>{item.terkibi}</span>
            </div>
            <div className="sorba-footer">
              <div className='sorba-footer-price'>
              <p>{item.price}</p>
              <img src={Manat} alt="image" style={{width:"2rem", height:"2rem"}} />
              </div>
              <div className='sorba-btn'>
                  <button>Əlavə et   < i className="fa-solid fa-cart-shopping" /></button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )

}

export default Ickiler