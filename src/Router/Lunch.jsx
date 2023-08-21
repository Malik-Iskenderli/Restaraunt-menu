import React from 'react'
import LunchComponent from '../pages/homre/LunchComponent'
import Navbar from "../Components/Navbar"
import Btnback from '../Components/Component/Btnback'

const Lunch = () => {
  return (
    <div
    style={{
      marginTop:"9rem",
    }}
    >
        <Btnback/>
        <LunchComponent/>

    </div>
  )
}

export default Lunch