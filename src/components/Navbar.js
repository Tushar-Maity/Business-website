import React, { useState } from 'react'
import styled from "styled-components"
import { FaBars, FaMagento, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import { StyledContainer } from "./GlobalStyles"


const Navbar = () => {

    const [click, setClick] = useState(false)

    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <StyledNav>
                <StyledNavBar>
                    <StyledLogo to='/'>
                        <StyledIcon />
                            ULTRA
                    </StyledLogo>
                    <StyledMobIcon onClick={() => setClick(!click)}>
                        {click ? <FaTimes /> : <FaBars />}
                    </StyledMobIcon>
                </StyledNavBar>
            </StyledNav>
        </IconContext.Provider>
    )
}

const StyledNav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    font-size: 1.2rem;
    top: 0;
    z-index: 100;
`
const StyledNavBar = styled(StyledContainer)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${StyledContainer}
`

const StyledLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`

const StyledIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`
const StyledMobIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export default Navbar
