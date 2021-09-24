import React from 'react'
import styled from 'styled-components'
import { AboutElements } from './AboutElements'

const About = () => {
    return (
        <Container id='about'>
            <Title>HOW IT WORKS</Title>
            <Cart>
                {AboutElements.map((item) => (
                    <>
                        <Img src={item.img} />
                        <SubTitle>{item.title}</SubTitle>
                    </>
                ))}
            </Cart>
        </Container>
    )
}

export default About


const Container = styled.div`
    display: flex;
    width: 100%;
    height:50vh;
    background-color: teal;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: white;
    font-weight: 600;
    margin-bottom: 12%;

    @media only Screen and (max-width:48em){
        margin-bottom: 42%;
    }
`

const Cart = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;

    @media only Screen and (max-width:48em){
        width: 90%;
    }
`

const Img = styled.img`
    width: 50px;
    height: 50px;
    position: relative;
    top: 5%;
    bottom: 1%;
    left: 9%;
    right: 0;

    @media only Screen and (max-width:48em){
        width: 40px;
        height: 40px;
    }
`

const SubTitle = styled.h3`
    color: white;
    letter-spacing: 1.5px;
    font-weight: 600;
    position: relative;
    top: 26%;
    left: -10%;
    right: 0;
    bottom: 0;

    @media only Screen and (max-width:48em){
        font-weight: 600;
        font-size: 15px;
    }
`


