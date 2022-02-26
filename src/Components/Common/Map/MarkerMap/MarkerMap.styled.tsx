import styled from "styled-components";

export const Container = styled.div`
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.71);
    border-radius: 50%;
    
    span {
        color: white;
    }

    &:before {
        box-shadow: 0 5px 23px 18px rgba(34, 60, 80, 0.2);
    }
`
