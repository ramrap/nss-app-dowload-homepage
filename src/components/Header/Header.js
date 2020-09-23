import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PRIMARY, PRIMARY_DARK } from '../../utils/Colors'
import { FaChevronDown } from 'react-icons/fa'
import { RiMenu3Line } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'
import { Collapse } from 'react-bootstrap'
import SingleArrowButton from '../Buttons/SingleArrowButton'

import { motion } from 'framer-motion'
import { useScrollPosition } from '../../utils/scrollDirection'


const logoWhite = '/static/NSSlogoPng.png'
const logoBlack = '/static/logoBlack.png'
const HEADER_ITEMS = [
    
    {
        title: "Download NSS-APP",
        button: true
    }
]

const Container = styled.div`
    ${props => props.white ?
        `
            background: black;
        `
        :
        `
            background: white;
        `
    }
    ${props => props.transparent && `background: transparent;`}
    transition: 0.3s !important;
    position: fixed;
    z-index: 3;
    width: 100%;
    font-size: 0.9rem;
    font-family: helvetica-regular;
    img {
        max-height: 70px;
    }
    .menu-item {
        cursor: pointer;
        text-decoration: none;
        padding: 34px 20px;
        color: ${props => props.white ? "white" : "grey"};
        transition: 0.2s;
    }
    .menu-item-underline {
        position: absolute;
        bottom: 24px;
        left: 20px;
        height: 3px;
        width: 0px;
        background: ${PRIMARY};
        transition: 0.2s;
    }
    .menu-item:hover {
        color: ${props => props.white ? "white" : "black"};
    }
    .menu-item:hover > .menu-item-underline {
        width: 36px;
    }
    .active {
        font-weight: bold;
        color: ${PRIMARY}
    }
    .full {
        width: 90vw;
        margin: 0px auto;
        justify-content: space-between;
    }
    .heading-bold {
        color: black;
    }
    .content {
        color: rgba(0,0,0,0.8);
    }
    .dropdown-container {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: -160px;
        transition: 0.3s opacity;
    }
    .dropdown {
        background: white;
        box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.2);
        border-radius: 6px;
        overflow: hidden;
    }
    .dropdown-item {
        padding: 30px 20px;
        width: 220px;
        white-space: normal;
        transition: 0.2s;
    }
    .dropdown-item-mobile {
        padding: 10px 35px;
    }
    .menu-item:hover + .dropdown-container {
        opacity: 1;
        top: 88px;
    }
    .dropdown-item:hover {
        background: ${PRIMARY};
    }
    .dropdown-item:hover .heading-bold {
        color: white;
    }
    .dropdown-item:hover .content {
        color: white;
    }
    .dropdown-container:hover {
        opacity: 1;
        top: 88px;
    }
    svg {
        transition: 0.5s;
    }
    .menu-item:hover > svg {
        transform: rotate(180deg);
    }
    .mobile-nav-container {
        position: fixed;
        background: black;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding-left: 50px;
        transition: 0.4s;
    }
    .show-nav {
        top: 0vh;
    }
    .hide-nav {
        top -100vh;
    }
    .turned {
        transform: rotate(180deg);
    }
`

const variants = {
    hidden: {
        top: "-100%",
        opacity: 0,
        transition: {duration: 0.3}
    },
    visible: {
        top: "0px",
        opacity: 1,
        transition: {duration: 0.3}
    }
}

export default function Header(props){
    const [ mobileNav, setMobileNav ] = React.useState(false)
    const [ mobileDropdown, setMobileDropdown ] = React.useState("")
    const [ navHidden, setNavHidden ] = React.useState(false)
    useScrollPosition(({ prevPos, currPos }) => {
        const isShow = currPos.y > prevPos.y
        if (isShow === navHidden) setNavHidden(!isShow)
    }, [navHidden])
    const handleDropdown = (item) => {
        if(mobileDropdown == item.title){
            setMobileDropdown("")
        }else {
            setMobileDropdown(item.title)
        }
    }
    return (
        <Container white={props.white} transparent={navHidden}>
            <motion.div variants={variants} initial="visible" animate={navHidden ? "visible" : "visible"} className={`position-relative d-flex align-items-center ${props.full ? "full" : "container justify-content-between"}`}>
                <div className="p-3">
                    <a href="/">
                        <img src={logoWhite} alt="NSS IITD" />
                    </a>
                </div>
                <div className="d-block d-lg-none">
                    <div className="p-3 cursor-pointer" onClick={() => setMobileNav(true)}>
                        <RiMenu3Line size="26" color={props.white ? "white" : "black"} />
                    </div>
                    <div className={`mobile-nav-container font-12 ${mobileNav ? "show-nav" : "hide-nav"}`}>
                        <div className="mobile-nav">
                            <div className="mobile-nav-close text-right py-3 px-4 mr-2 cursor-pointer" onClick={() => setMobileNav(false)}>
                                <MdClose size="30" color="white" />
                            </div>
                            { HEADER_ITEMS.map((item, index1) => 
                                <React.Fragment key={index1}>
                                    
                                    {item.button &&
                                        <div className="text-center py-4 position-relative" style={{left: "-20px"}}>
                                            <SingleArrowButton>
                                                {item.title}
                                            </SingleArrowButton>
                                        </div>
                                    }
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-flex align-items-center">
                    { HEADER_ITEMS.map((item, index1) => 
                        <React.Fragment key={index1}>
                        
                            {item.button &&
                                <div>
                                    <div className="btn btn-arrow ml-3" >
                                        <SingleArrowButton>
                                            {item.title}
                                        </SingleArrowButton>
                                    </div>
                                </div>
                            }
                        </React.Fragment>
                    )}
                    <div>

                    </div>
                </div>
            </motion.div>
        </Container>
    )
}
