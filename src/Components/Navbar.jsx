import React, {useRef} from 'react'
import "../Css/style.css"
import Logo from "../Assets/Logo.png"
const Navbar = () => {
    const searchRef =useRef();
    const navbarRef =useRef()
    const searcHandler = () => {
        searchRef.current.classList.toggle("active")
        navbarRef.current.classList.remove("active")
    };
    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")

    };
    return (
        <header className='header'>
            <a href="#" className='logo'>
                <img src={Logo} alt="logo" />
            </a>
            <nav className='navbar' ref={navbarRef}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#products">Products</a>
                {/* <a href="#review">Review</a> */}
                <a href="#contact">Contact</a>
                {/* <a href="#blog">Blog</a> */}
            </nav>
            <div className="icons">
                <div className='fas fa-search' onClick={searcHandler}></div>
                <div className='fa-solid fa-bars' id='menu-btn' onClick={navbarHandler}></div>
            </div>
            <div className='search-form' ref={searchRef}>
                <input type="search" placeholder='Search here.....' id='search-box'/>
                <label htmlFor="search-box" className='fas fa-search'></label>
            </div>
        </header>
    )
}

export default Navbar