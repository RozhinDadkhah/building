import React from 'react'
import styled from 'styled-components'
import { PropertiesElement } from './PropertiesElement'

const Properties = () => {
    return (
        <Container id='property'>
            <Title>Properties</Title>
            <Des>Lorem ipsum dolor sit amet consectetur adipising alit.</Des>
            {PropertiesElement.map((item) => (
                <Cart>
                    <Img src={item.img} />
                    <Price>{item.price}</Price>
                    <Button>Add to Cart</Button>
                </Cart>
            ))}
        </Container>
    )
}

export default Properties


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media only Screen and (max-width:48em){
        flex-direction: column;
    }
`

const Title = styled.h1`
    font-weight: 700;
    letter-spacing: 1.2px;
    position: absolute;
    top: 5%;
    right: 42%;
    display: flex;
    text-align: center;
    border-bottom: 5px solid teal;

`

const Des = styled.span`
    font-weight: 550;
    position: absolute;
    top: 20%;
    right: 34%;

    @media only Screen and (max-width:48em){
        display: none;
    }
`

const Cart = styled.div`
    width: 270px;
    height: 350px;
    -webkit-box-shadow: 0px 0px 18px 0px #000000; 
    box-shadow: 0px 0px 18px 0px #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 5%;
    margin-top: 10%;
    border-radius: 5px;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1);
    }

    @media only Screen and (max-width:48em){
        width: 300px;
        margin-top: 25%;
        margin-bottom: 5%;
    }
`

const Img = styled.img`
    width: 150px;
    height: 150px;
    margin-top: 5%;
`

const Price = styled.span`
    font-weight: 550;
    letter-spacing: 0.8px;

    @media only Screen and (max-width:48em){
        margin: 10% 6%;
    }
`

const Button = styled.button`
    background-color: teal;
    padding: 3%;
    color: white;
    font-weight: 550;
    letter-spacing: 1px;
    border: none;
    outline: none;
    margin-bottom: 10%;
    border-radius: 2px;
    cursor: pointer;

    &:hover{
    background-color: white;
    color: teal;
    }

    @media only Screen and (max-width:48em){
        margin: 10% 2%;
    }
`

