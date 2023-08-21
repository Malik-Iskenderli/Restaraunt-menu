import React, { useRef, useState } from 'react'
import "../Css/style.css"
import Logo from "../Assets2/LogoGif.gif"
import EnFlag from "../Assets2/EnFlag.png"
import AzFlag from "../Assets2/AzFlag.PNG"
import RusFlag from "../Assets2/RusFlag.png"
import { useNavigate } from 'react-router'


const Navbar = () => {
    const searchRef = useRef(); //axtaris ucun acilan icon
    const navbarRef = useRef(); // navbarda linklerin acilma penceresi
    const basketRef = useRef(); // sebetimizin acilma 
    const langRef = useRef(); // dil deisimi 


    const searcHandler = () => {
        searchRef.current.classList.toggle("active")
        navbarRef.current.classList.remove("active")
        langRef.current.classList.remove("active")
    };
    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")
        langRef.current.classList.remove("active")


    };
    const basketHandler = () => {
        basketRef.current.classList.toggle("active")
        langRef.current.classList.remove("active")
        searchRef.current.classList.remove("active")

    };
    const languageHandler = () => {
        langRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")


    }
    return (
        <header className='header'>
            <a href="#" className='logo'>
                <img src={Logo} alt="logo" />
            </a>
            <nav className='navbar' ref={navbarRef}>
                <a href="#home">Əsas</a>
                <a href="#about">Haqqımızda</a>
                <a href="#menu">Menu</a>
                <a href="#contact">Əlaqə</a>
            </nav>
            <div className="icons">
                <div className='fas fa-search' onClick={searcHandler}></div>
                <div className='fa-solid fa-cart-shopping basket-icon' onClick={basketHandler}>
                        <div className='basket-length'>
                            <span>0</span>
                        </div>
                    {/* <div className="basket" ref={basketRef}>
                        <div className="exit">
                            <i className="fa-solid fa-xmark"/>
                        </div>
                        salam
                    </div> */}
                </div>


                <div className="lang" onClick={languageHandler} style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
                    <img src={AzFlag} alt="img" className='langiconflag' />
                    <div className="language" ref={langRef}>


                        <button>
                            <img src={EnFlag} alt="" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
                            <span>En</span>
                        </button>
                        <button>
                            <img src={RusFlag} alt="" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
                            <span>Ru</span>
                        </button>

                    </div>
                </div>



                <div className='fa-solid fa-bars' id='menu-btn' onClick={navbarHandler}></div>
                <div className="basket" ref={basketRef}>
                        <div className="exit" onClick={basketHandler}>
                            <i className="fa-solid fa-xmark"/>
                        </div>
                        
                        <div className='basket-footer'>
                            <div className='basket-footer-price'>
                                <span>Cəmi: </span>
                            </div>
                            <div className='basket-footer-send'>
                                <button><p>Təsdiqlə</p></button>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='search-form' ref={searchRef}>
                <input type="search" placeholder='Search here.....' id='search-box' />
                <label htmlFor="search-box" className='fas fa-search'></label>
            </div>
        </header>
    )
}

export default Navbar