import React from 'react'
import styled from "styled-components"
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { StyledContainer } from "./GlobalStyles"


const Navbar = () => {
    return (
        <>
            <StyledNav>
                <StyledNavBar>
                    <StyledLogo to='/'>
                        <StyledIcon>
                            ULTRA
                        </StyledIcon>
                    </StyledLogo>
                </StyledNavBar>
            </StyledNav>
        </>
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

const StyledLogo = styled.a`
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

export default Navbar
