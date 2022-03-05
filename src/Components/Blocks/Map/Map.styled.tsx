import styled from "styled-components";

export const Container = styled.div`
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: normal;
  background: #8f8f8f;
  margin-top: 272px;
`

export const MapText = styled.div`
  background: #F9F9F9;
  width: 100%;
    height: unset;
  text-align: center;
  padding-top: 36px;
  padding-bottom: 50px;

  p {
    font-size: 22px;
    line-height: 32px;

    span {
      font-weight: bold;
    }
  }

  a {
    width: 200px;
    margin: 0 auto;
    padding: 12px 30px;
    border: solid 1px black;
    border-radius: 25px;
    margin-top: 36px;
    display: block;
    

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

    &:hover {
      animation: frameMovement 1.5s infinite;
    }
  }
`
