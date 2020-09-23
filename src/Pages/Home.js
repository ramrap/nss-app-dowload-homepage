import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'

import AOS from 'aos';
// import TextLoop from "react-text-loop";
import { motion, useAnimation } from "framer-motion"
// import Typing from 'react-typing-animation';
import { AnimatedBg, Transition } from 'scroll-background';
import { PRIMARY, PRIMARY_DARK } from '../utils/Colors'


const widths = {
    zero: { width: "0px", transition: {duration: 0.7, type: "tween" } },
    full: { width: "auto", transition: {duration: 0.9, type: "tween" } }
}

const Container = styled.div`
    @keyframes backgroundMove {
        0% { background-position: 20px 30vh; }
        25% { background-position: 0px 32vh; }
        50% { background-position: -20px 30vh }
        75% { background-position: 0px 28vh; }
    }
    .top-container {
        background: url('/static/hometop.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20px 30vh;
        animation: backgroundMove ease 9s infinite;
    }
    .img-container {
        text-align: center;
    }
    .background-fade{
        background-color: black;
    }
    .img-container img {
        max-width: 90%;
    }
    .grey-dash {
        display: inline-block;
        height: 4px;
        width: 50px;
        margin-bottom: 3px;
        border-radius: 3px;
        background: grey;
    }
    .home-span {
        overflow: auto;
        display: inline-block;
        font-family: "madetommy-regular";
        color: ${PRIMARY_DARK};
    }
    .home-heading {
        font-size: 4.2rem;
        font-family: "madetommy-light";
    }
    .home-heading-mobile {
        font-size: 2.7rem;
        font-family: "madetommy-light";
    }
    @media(max-width: 991px){
        .home-heading {
            font-size: 1.9rem;
        }
        .top-container {
            background-size: cover;
        }
    }
    .culture-section {
        background: url('/static/worldmap.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;    
    }
`

export default function Outsource(){
    const [ white, setWhite ] = React.useState(true)
    const web = useAnimation()
    const product = useAnimation()
    const creative = useAnimation()
    const advertising = useAnimation()
   
    return (
        <Container>
            <div>
                <Header white={white} full />
            </div>
            <div className="background-fade">
                
                    <div className="hero-container top-container">
                        {/* <div className="container">
                            
                            <div className="p-3 heading d-none d-md-block">
                                <h1 data-aos="fade-up" className="text-white home-heading">
                                    We are<br />
                                    your on Demand NSS<br />
                                    <motion.div animate={web} variants={widths} initial={"zero"} className="home-span">Tech</motion.div>
                                    <motion.div animate={product} variants={widths} initial={"zero"} className="home-span">Product</motion.div>
                                    <motion.div animate={creative} variants={widths} initial={"zero"} className="home-span">Creative</motion.div>
                                    <motion.div animate={advertising} variants={widths} initial={"zero"} className="home-span">Advertising</motion.div>
                                    <div className="home-span text-white">{" "}<Cursor />Team</div>
                                </h1>
                                <h3 className="text-white ">Soon Available on Play Store**</h3>
                            </div>
                        </div> */}
                        <div className="container">
                            <div className="col-12">
                            <h1 className="text-white home-heading">We are NSS IITD Tech Team</h1>
                            <br/>
                            <h3 className="text-white home-heading">presents NSS APP</h3>
                            </div>
                            <div className="col"> 
                            
                                <a href="https://owncloud.iitd.ac.in/nextcloud/index.php/s/dTNCAEmYWqkTyWA">
                                    
                                <button type="button" class="btn btn-primary" > Download</button>
                                </a>
                                
                            </div>
                            <div className="col"><p>android users only**</p></div>
                        

                        </div>
                        

                    </div>
                   
                    
                
            </div>
            
           
        </Container>
    )
}

function Cursor() {
    return (
        <span style={{width: "5px", height: "40px", background: "white", padding: "2px"}} className="mr-3 ml-1">
            
        </span>
    )
}