import styled from "styled-components";

interface PreloaderProps {
    loadingEnd: boolean;
}

export const Container = styled.div<PreloaderProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({loadingEnd}) => loadingEnd ? '0' : '100vh'};
    overflow: hidden;
    z-index: 20;

    span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(180deg, rgb(59, 59, 59) 30%, rgb(45, 45, 45) 70%);
    }
`;

export const LoadingBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    transition: .1s;
    background: #8fe9d4;
`;

export const PreloaderProgress = styled.div`
    position: absolute;
    text-transform: uppercase;

    //todo ШРИФТ НЕ НАШЕЛ,НАПИСАЛ ВРУЧНУЮ
    font-family: Nekst;
    font-style: normal;
    font-weight: 600;
    font-size: 90px;
    line-height: 100%;
    
    color: white;
    z-index: 2;
    top: 50%;
    left: 110px;
`;


export const PreloaderImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`
