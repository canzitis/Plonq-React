import styled from "styled-components";

export const Container = styled.div`
    background: #F9F9F9;
    margin: 0 auto;
    margin-top: 254px;
    padding: 100px 256px 58px 256px;
`
export const FooterDataItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const FooterSubscribeWrapper = styled.div`
    
    div{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        
        input{
        width: 430px;
        height: 40px;
        margin-right: 25px;
        border: unset;
        background: #f1f1f1;
        border-radius: 4px;
        font-size: 15px;
        }
        
        button{
        border: unset;
        background: black;
        color: white;
        border-radius: 4px;
        width: 150px;
        }
    }
`

export const FooterLanguagesWrapper = styled.div`
    display: flex;
    width: 60px;
    justify-content: space-between;
    height: 25px;
    position: relative;

    & > :first-child {
        &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 2px;
            width: 1px;
            height: 20px;
            background: black;
        }
    }
`
