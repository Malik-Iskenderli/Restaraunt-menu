import React from 'react'
import "../Css/style.css";
import AboutImg from "../Images/aboutImg.jpg"


const About = () => {
    return (
        <>
            <section className='about' id='about'>
                <h1 className='heading'>
                    <span>Haqqımız</span>da
                </h1>
                <div className='row'>
                    <div className='image'>
                        <img src={AboutImg} alt="img" />
                    </div>
                    <div className='content'>
                        <h3>
                            What makes Our Food Special?
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo commodi quos non illo quod laboriosam eos saepe iste, pariatur voluptatum unde totam, natus quae aperiam molestias deleniti eveniet consectetur!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe enim natus sit maiores. Cupiditate, at exercitationem. Quibusdam obcaecati voluptates quisquam voluptatibus dolore totam sequi!
                        </p>
                        <a href="#" className='btn'> Learn more</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About