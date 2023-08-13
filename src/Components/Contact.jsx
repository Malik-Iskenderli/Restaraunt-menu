import React from 'react'
import "../Css/style.css";


const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h1 className='heading'>
                <span>Contacct</span> Us
            </h1>
            <div className="row">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
        </section>
    )
}

export default Contact