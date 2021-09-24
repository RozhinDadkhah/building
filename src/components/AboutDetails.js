import React from 'react'
import styled from 'styled-components'
import build from '../image/build.png'

const AboutDetails = () => {
    return (
        <Container id="about">
            <Left>
                <Img src={build} alt="build"/>
            </Left>
            <Right>
                <Title>We Are The Best Real Estate Company</Title>
                <Des>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Des>
                <Button>View More Details</Button>
            </Right>
        </Container>
    )
}

export default AboutDetails


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Img = styled.img`
    width: 500px;
    height: 500px;

    @media only Screen and (max-width:48em){
        width: 300px;
        height: 300px;
    }
`


const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 30px;
    color: teal;
    padding: 5% 0;
    letter-spacing: 1.5px;
    display: flex;
    text-align: center;

    @media only Screen and (max-width:48em){
        font-size: 25px;
    }
`

const Des = styled.span`
    color: #fcba03;
    font-weight: 600;
    padding: 5% 0;
    display: flex;
    text-align: center;
`

const Button = styled.button`
    background-color: teal;
    color: white;
    padding: 1.5%;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 1px;

    @media only Screen and (max-width:48em){
        padding: 4%;
        margin-top: 4%;
    }
`


