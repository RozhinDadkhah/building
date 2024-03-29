import styled from 'styled-components';
import arrow from '../image/arrow-up.svg'

const ScrollToTop = () => {

  const ScrollUp = () => {
    const element = document.getElementById("home")
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    })
  }

  return <Up onClick={() => ScrollUp()}>
    <img src={arrow} alt="to top" />
  </Up>;
};

export default ScrollToTop;


const Up = styled.div`
  position: fixed;
  right: 6rem;
  bottom: 5rem;
  cursor: pointer;

  @media only Screen and (max-width:48em){
    display: none;
  }

  img{
    width: 3rem;
    height: 3rem;
    background-color: var(--white);
    border-radius: 50%;
    border: 2px solid var(--white);
    transition: transform 0.3s;


    &:hover{
      transform: scale(1.2);
    }

    &:active{
      transform: scale(0.9);
    }
  }
`