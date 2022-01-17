import styled from "styled-components";

export const Container = styled.div`
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: normal;
`

export const HomeWrapper = styled.div`
  position: relative;
  height: 120vh;
`

export const ImageBox = styled.div`
  position: absolute;
  z-index: 0;
`
export const HomeInfo = styled.div`
  left: 25%;
  margin-top: 300px;
  position: absolute;
  z-index: 1;

  & > :first-child {

    & > :first-child {
      position: absolute;
      left: -55px;
    }
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    width: 320px;
  }

  p {
    width: 400px;
    font-size: 32px;
    line-height: 44px;
    color: #FFFFFF;
  }
`

export const HomeButtons = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  & > :first-child {
    font-size: 13px;
    line-height: 21px;
    color: #FFFFFF;

    &:before {
      color: white;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
      content: '';
      left: 110px;
      top: 45%;
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
      color: rgba(255, 255, 255, 0.66);
      transition: .7s;
    }
  }


  & > :last-child {
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;

    &:hover {
      color: rgba(255, 255, 255, 0.66);
      transition: .7s;
    }

    &:before {
      position: absolute;
      content: "";
      width: 150px;
      height: 30px;
      right: -44px;
      top: -3px;
      border: solid 1px white;
      border-radius: 25px;
    }

    @keyframes frameMovement {
      0% {
        transform: scale(1)
      }
      50% {
        transform: scale(1.1)
      }
      100% {
        transform: scale(1)
      }
    }

    &:hover:before {
      animation: frameMovement 1.5s infinite;
    }
  }
`
