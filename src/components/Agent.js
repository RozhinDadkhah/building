import React from 'react'
import styled from 'styled-components'
import { AgentsElement } from './AgentsElement'

const Agent = () => {
    return (
        <Container id="agents">
            <Title>Agnets</Title>
            <Des>Lorem ipsum dolor sit amet.</Des>
            {AgentsElement.map((item) => (
                <>
                    <Cart>
                        <Img src={item.img} alt={item.name} />
                        <Name>{item.name}</Name>
                        <Button>Learn More</Button>
                    </Cart>
                </>
            ))}
        </Container>
    )
}

export default Agent


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: teal;
    width: 100%;
    height: 120vh;
    position: relative;

    @media only Screen and (max-width:48em){
        height: 230vh;
        flex-direction: column;
    }
`

const Title = styled.h1`
    color: white;
    font-size: 35px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:5%;
    left: 50%;
    right: 50%;
`

const Des = styled.span`
    color: white;
    font-weight: 500;
    position: absolute;
    top:15%;
    left: 42%;
    right: 42%;

    @media only Screen and (max-width:48em){
        display: none;
    }
`

const Cart = styled.div`
    width: 280px;
    height: 400px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 5%;
    margin-top: 5%;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1);
    }

    @media only Screen and (max-width:48em){
        margin-top: 25%;
        margin-bottom: 5%;
    }
`

const Img = styled.img`
    width: 150px;
    height: 150px;
    margin-top: 8%;
`

const Name = styled.h3`
    font-weight: 600;
    margin-bottom: 8%;
`

const Button = styled.button`
    background-color: teal;
    color: white;
    padding: 5%;
    border: none;
    outline: none;
    border-radius: 2px;
    margin-bottom: 10%;
    cursor: pointer;
    letter-spacing: 1px;
`




