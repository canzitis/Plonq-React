import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 200px;

  font-family: Gotham Pro;
  font-style: normal;
  font-weight: normal;


  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
    border-radius: 100vw;
  }
`

export const PlonqProductCatalogItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(600px, 300px));
  align-items: center;
  justify-content: center;
`


export const PlonqProductCatalogItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-left: 2px;

    p {
      width: 200px;
      font-size: 15px;
      line-height: 21px;
      margin-top: 40px;
    }
  }
`

export const PlonqProductCatalogOnSaleSoon = styled.div`
  span {
    color: #C8BB93;
  }
`

export const PlonqProductCatalogPriceWrapper = styled.div`

  span {
    font-weight: bold;
    font-size: 21px;
    line-height: 30px;
    margin-top: 18px;
  }

  a {
    width: 150px;
    padding: 12px 20px;
    text-align: center;
    display: block;
    margin-top: 50px;
    border: solid 1px black;
    border-radius: 20px;
  }

  a:hover {
    transform: scale(1.05);
    transition: .7s;
    color: rgba(0, 0, 0, 0.53);
    border: solid 1px rgba(0, 0, 0, 0.53);
  }
`