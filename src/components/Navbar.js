import React, { useEffect, useState } from 'react'
import { Link as LinkR } from 'react-scroll';
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = () => {

    const [scrolNav, setScrolNav] = useState(false)
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrolNav(true)
        } else {
            setScrolNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <NavContainer>
            <Left> <Logo onClick={toggleHome} to="/">EXPLOR</Logo></Left>
            <Right>
                <Label to='home' smooth={true} duration={500} spy={true} exact='true' offset={-40}>HOME</Label>
                <Label to='about' smooth={true} duration={500} spy={true} exact='true' offset={-40}>ABOUT</Label>
                <Label to='agents' smooth={true} duration={500} spy={true} exact='true' offset={-40}>AGENTS</Label>
                <Label to='property' smooth={true} duration={500} spy={true} exact='true' offset={-40}>PROPERTY</Label>
            </Right>
            <HamburgerBtn onClick={() => handleClick()} clicked={click}>
                <span></span>
            </HamburgerBtn>
            <MobileMenu clicked={click}>
                <a href="#home" onClick={() => handleClick()} clicked={click}>Home</a>
                <a href="#about" onClick={() => handleClick()} clicked={click}>About</a>
                <a href="#agents" onClick={() => handleClick()} clicked={click}>Agents</a>
                <a href="#property" onClick={() => handleClick()} clicked={click}>Property</a>
            </MobileMenu>
        </NavContainer>
    )
}

export default Navbar


const NavContainer = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
`

const Left = styled.div`
    flex: 0.3;
    margin: 0 8%;
`
const Logo = styled(LinkR)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    color: black;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin: 0 5%;
    padding: 0 5%;

    @media only Screen and (max-width:48em){
    display: none;
    }
`

const Label = styled(LinkR)`
    font-size: 18px;
    cursor: pointer;
    transition: all 0.5s ease;
    padding: 2% 2%;
    border-radius: 5px;
    letter-spacing: 1.5px;
    text-decoration: none;
    color: black;


    &:hover{
        background-color: teal;
        color: white;
        filter: drop-shadow(0 0 0.5rem teal);
    }
`

const HamburgerBtn = styled.button`
        position: relative;
        background-color: transparent;
        width: 2rem;
        height: 2px;
        cursor: pointer;
        display: none;

        @media only Screen and (max-width:48em){
            display: inline-block;
        }

        &::before,&::after{
            content: '';
            background-color: black;
            width: 2rem;
            height: 2px;
            display: inline-block;
            position: absolute;
            left: 0;
            cursor: pointer;
            transition: all 0.3s;
        }

        &::before{
            top: ${props => (props.clicked ? '0' : '-0.5rem')};
            transform: ${props => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
        }

        &::after{
            top: ${props => (props.clicked ? '0' : '0.5rem')};
            transform: ${props => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
        }
`

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(53,53,63,0.9);
    border-radius: 20px;
    margin: 0%.5rem;
    overflow-x: hidden;
    opacity: ${props => (props.clicked ? '1' : '0')};
    visibility: ${props => (props.clicked ? 'visible' : 'hidden')};

    a{
        color: #dba307;
        font-weight: 600;
        font-size: 1.5rem;
        margin: 1.5rem;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.5s ease;

        &:hover{
            filter:  drop-shadow(0 0 0.5rem teal);
        }
    }
`
