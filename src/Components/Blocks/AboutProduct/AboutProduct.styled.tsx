import styled from "styled-components";

export const Container = styled.div`
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: normal;
  max-width: 1406px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`

export const AboutProductWrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F9F9F9;
  width: 688px;


  div {
    h2 {
      font-size: 23px;
      line-height: 28px;
      max-width: 200px;
    }

    p {
      margin-top: 28px;
      max-width: 296px;
      font-size: 15px;
      line-height: 21px;
    }

    a {
      position: relative;
      display: block;
      margin-top: 53px;
      font-size: 15px;
      line-height: 21px;

      &:hover {
        color: rgba(0, 0, 0, 0.50);
        transition: .7s;
      }

      &:before {
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        content: '';
        left: 110px;
        top: 35%;
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
    }
  }
`
