import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { FaBars, FaMagento, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import { StyledContainer, StyledButton } from "./GlobalStyles"


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
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
                    <StyledNavMenu click={click}>
                        <StyledNavItem>
                            <StyledNavLink to="/">
                                Home
                            </StyledNavLink>
                        </StyledNavItem>

                        <StyledNavItem>
                            <StyledNavLink to="/services">
                                Services
                            </StyledNavLink>
                        </StyledNavItem>

                        <StyledNavItem>
                            <StyledNavLink to="/products">
                                Products
                            </StyledNavLink>
                        </StyledNavItem>

                        <StyledNavBtn>
                            { button ? (
                                <StyledNavBtnLink to="/signup">
                                    <StyledButton primary>
                                        Sign Up
                                    </StyledButton>
                                </StyledNavBtnLink>
                            ) : 
                                <StyledNavBtnLink to="/signup">
                                    <StyledButton primary fontBig>
                                        Sign Up
                                    </StyledButton>
                                </StyledNavBtnLink>
                                }
                        </StyledNavBtn>
                    </StyledNavMenu>
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

const StyledNavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        background: #101522;
        transition: all .5s ease;
    }
`
const StyledNavItem = styled.li`
    height: 80px;
    border-bottom: 4px solid transparent;

     &:hover {
         border-bottom: 4px solid #4b59f7;
     }

     @media screen and (max-width: 960px) {
        width: 100%;
        &:hover {
            border: none;
        }
    }
`
const StyledNavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: .5rem 1rem;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all .3s ease;
        }
    }
`

const StyledNavBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-center: center;
        height: 120px;
    }
`

const StyledNavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%
`

export default Navbar
