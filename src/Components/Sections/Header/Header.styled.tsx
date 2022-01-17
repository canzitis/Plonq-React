import styled from "styled-components";

export const Container = styled.div`
  max-width: 1408px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0 22px 0;
`
export const NavlinksHeader = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    padding-left: 124px;
  }

  a:hover {
    color: #C8BB93;
    transition: .6s;
  }
`