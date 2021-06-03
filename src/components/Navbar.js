import React from 'react'
import styled from "styled-components"


const Navbar = () => {
    return (
        <>
            <StyledNav>
                NavBar 
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
    z-index: 1;
`

export default Navbar
