import React from 'react'
import styled from 'styled-components'

import home from '../image/House.png'

const Home = () => {
    return (
        <Container id='home'>
            <Left>
                <Title>Looking for Property !</Title>
                <Label>Buy and Sell Properties</Label>
                <Button>Details</Button>
            </Left>
            <Right>
                <Img src={home} alt='house'/>
            </Right>
        </Container>
    )
}

export default Home


const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const Left = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin: 15% 10%;

    @media only Screen and (max-width:48em){
        flex: 2;
        margin-bottom: 2%;
    }
`

const Title = styled.span`
    color: teal;
    font-size: 18px;
    font-weight: 500;
    padding: 5% 0 ;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Label = styled.h1`
    font-weight: 600;
    color: #dba307;
    letter-spacing: 2px;
    padding: 10% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Button = styled.button`
    background-color: teal;
    color: white;
    font-weight: 600;
    padding: 5% 16%;
    border: none;
    outline: none;
    border-radius: 5px;
    letter-spacing: 1px;
    cursor: pointer;

    @media only Screen and (max-width:48em){
        margin-top: 15%;
    }
`


const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:3%;
    flex: 1.5;
`

const Img = styled.img`
    height: 100%;
    width: 100%;

    @media only Screen and (max-width:48em){
        height: 300px;
        width: 240px;
    }
`