import {
    Container,
    FooterContentItems,
    FooterDataItems, FooterFooterText,
    FooterIconItem,
    FooterIconWrapper,
    FooterLanguagesWrapper, FooterSocialWrapper,
    FooterSubscribeWrapper,
    FooterWrapperItems, Wkdslg,
} from './Footer.styled'
import Image from 'next/image'
import FooterContentItem from '../../Blocks/Footer/FooterContentItem'
import {WrapperContent} from "../Home/Home.styled";

const Footer = () => {
    const dataTest = [
        {
            title: 'Продукты',
            items: [
                {
                    item: 'Plonq 400',
                },
                {
                    item: 'Plonq 500',
                },
                {
                    item: 'Plonq X',
                },
            ],
        },
        {
            title: 'Технологии',
            items: [
                {
                    item: 'О приложении',
                },
                {
                    item: 'Об электронных сигаретах',
                },
            ],
        },
        {
            title: 'Поддержка',
            items: [
                {
                    item: 'Связаться с нами',
                },
                {
                    item: 'Условии возврата',
                },
                {
                    item: 'Политики конфиденциальности',
                },
            ],
        },
        {
            title: 'Прочее',
            items: [
                {
                    item: 'Точки продаж',
                },
                {
                    item: 'О компании',
                },
                {
                    item: 'Оптовым покупателям',
                },
            ],
        },
    ]

    return (
        <Container>
            <WrapperContent>
                <FooterDataItems>
                    <Image
                        src="/images/Header/Logo.png"
                        alt="LogoCompany"
                        width={88}
                        height={19}
                    />
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
                <FooterWrapperItems>
                    <FooterIconWrapper>
                        <FooterIconItem>
                            <Image
                                src="/images/footer/Apple_icon.png"
                                alt="LogoCompany"
                                width={28}
                                height={33}
                            />
                            <div>
                                <h4>Coming soon</h4>
                                <span>for IOS</span>
                            </div>
                        </FooterIconItem>
                        <FooterIconItem>
                            <Image
                                src="/images/footer/Android_icon.png"
                                alt="LogoCompany"
                                width={24}
                                height={32}
                            />
                            <div>
                                <h4>Coming soon</h4>
                                <span>for Android</span>
                            </div>
                        </FooterIconItem>
                    </FooterIconWrapper>
                    <FooterContentItems>
                        {dataTest.map((i) => {
                            return (
                                <Wkdslg key={i.title}>
                                    <h4>{i.title}</h4>
                                    <FooterContentItem items={i.items}/>
                                </Wkdslg>
                            )
                        })}
                    </FooterContentItems>
                    <FooterSocialWrapper>
                        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                            <Image src="/images/footer/Instagram_icon.png" alt="instagrannIcon" width={25} height={25}/>
                        </a>
                        <div>
                            <span>2021 PLONQ LLC</span>
                            <span>40900 Woodward Avenue Suite</span>
                            <span>111 BloomField Hills</span>
                            <span>MI 48304 USA</span>
                        </div>
                    </FooterSocialWrapper>
                </FooterWrapperItems>
            </WrapperContent>
            <FooterFooterText><p>ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА.
                Сайт используется исключительно в целях информирования действующих потребителей продукции PLONQ
                Защищено выпущенными и/или находящимися на одобрении международными патентами.</p></FooterFooterText>
        </Container>
    )
}
export default Footer
