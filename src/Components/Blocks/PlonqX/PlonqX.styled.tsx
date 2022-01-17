import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Gotham Pro;
  font-style: normal;
  font-weight: normal;
`

export const PlonqXText = styled.div`

  p {
    margin-top: 60px;
    padding-right: 55px;
    width: 460px;
    font-weight: 300;
    font-size: 32px;
    line-height: 44px;
  }
`

export const PlonqXButtons = styled.div`
  margin-top: 68px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  position: relative;

  a {
    font-size: 15px;
    line-height: 21px;


    &:before {
      color: black;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      content: '';
      left: 110px;
      top: 40%;
      transform: rotate(-45deg);
      position: absolute;
      width: 5px;
      height: 5px;
    }
    @keyframes arrowMovement {
      0% {
        left: 110px;
      }
      50% {
        left: 120px;
      }
      100% {
        left: 110px
      }
    }

    &:hover:before {
      animation: arrowMovement 1.5s infinite;
    }

    &:hover {
      color: rgba(0, 0, 0, 0.43);
      transition: .7s;
    }
  }

  

  span {
    font-size: 15px;
    line-height: 21px;
    color: #C8BB93;
  }
`