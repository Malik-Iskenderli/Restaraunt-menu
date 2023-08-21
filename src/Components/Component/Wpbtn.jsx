import React from 'react'
import "./Css/Wpbtn.css"
import WpImg from "./Assets/wp.png"

const Wpbtn = () => {
  return (
    <div className='wp-btn'>
        
        <div className="button-saved">
                        <button className='animation-btn'>
                            <img src={WpImg} alt="png" />
                        </button>
                      
                                <div className='addSave'>

                                </div>

                    </div>
    </div>
  )
}

export default Wpbtn