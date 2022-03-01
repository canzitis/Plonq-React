import {
    Container,
    FooterDataItems,
    FooterLanguagesWrapper,
    FooterSubscribeWrapper
} from "./Footer.styled";
import Image from "next/image";

const Footer = () => {
    return <Container>
        <FooterDataItems>
            <Image src='/images/Header/Logo.png' alt="LogoCompany" width={88} height={19}/>
            <FooterSubscribeWrapper>
                <span>Подпишись на наши обновления</span>
                <div>
                    <input type="text"/>
                    <button>Подписаться</button>
                </div>
            </FooterSubscribeWrapper>
            <FooterLanguagesWrapper>
                <span>Ru</span>
                <span>En</span>
            </FooterLanguagesWrapper>
        </FooterDataItems>
    </Container>
}
export default Footer;
