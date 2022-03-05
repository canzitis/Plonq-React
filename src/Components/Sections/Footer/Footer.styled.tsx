import styled from 'styled-components'

export const Container = styled.div`
    font-size: 13px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 100px 0 58px 0;
`
export const FooterDataItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const FooterSubscribeWrapper = styled.div`
    span {
        font-size: 14px;
    }

    div {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;

        input {
            width: 430px;
            height: 40px;
            margin-right: 25px;
            border: unset;
            background: #f1f1f1;
            border-radius: 4px;
            font-size: 15px;
        }

        button {
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

    span {
        font-size: 13px;
    }

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
export const FooterWrapperItems = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 50px;
`

export const FooterIconWrapper = styled.div`
    margin-right: 60px;

    & > :last-child {
        margin-top: 30px;
    }
`

export const FooterIconItem = styled.div`
    width: 150px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    h4 {
        font-size: 14px;
        margin: 0;
        font-weight: normal;
    }

    span {
        color: #AAAAAA;
    }
`


export const Wkdslg = styled.div`
    margin-left: 40%;
`

export const FooterContentItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    &:first-child {
        margin-left: 100px;
    }
    
    

    h4 {
        font-size: 14px;
        font-weight: normal;
        margin: 0 0 23px 0;
    }



`

export const FooterSocialWrapper = styled.div`
    text-align: right;

    a {
        display: block;
        margin-bottom: 40px;
    }

    div {
        span {
            display: block;
            color: #AAAAAA;
            text-align: right;
        }
    }
`

export const FooterFooterText = styled.div`
    margin-top: 90px;
    padding: 0 400px;
    color: #AAAAAA;
`
