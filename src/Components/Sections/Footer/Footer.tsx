import {
    Container, FooterContentItems,
    FooterDataItems, FooterIconItem, FooterIconWrapper,
    FooterLanguagesWrapper,
    FooterSubscribeWrapper, FooterWrapperItems
} from "./Footer.styled";
import Image from "next/image";
import FooterContentItem from "../../Blocks/Footer/FooterContentItem";


const Footer = () => {
    const dataTest = [
        {
            title: "Продукты",
            items: [
                {
                    item: "Plonq 400"
                },
                {
                    item: "Plonq 500"
                },
                {
                    item: "Plonq X"
                }
            ]
        },
        {
            title: "Технологии",
            items: [
                {
                    item: "О приложении"
                },
                {
                    item: "Об электронных сигаретах"
                }
            ]
        },
        {
            title: "Поддержка",
            items: [
                {
                    item: "Связаться с нами"
                },
                {
                    item: "Условии возврата"
                },
                {
                    item: "Политики конфиденциальности"
                }
            ]
        },
        {
            title: "Прочее",
            items: [
                {
                    item: "Точки продаж"
                },
                {
                    item: "О компании"
                },
                {
                    item: "Оптовым покупателям"
                }
            ]
        },
    ]

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
        <FooterWrapperItems>
            <FooterIconWrapper>
                <FooterIconItem>
                    <Image src='/images/footer/Apple_icon.png' alt="LogoCompany" width={28} height={33}/>
                    <div>
                        <h4>Coming soon</h4>
                        <span>for IOS</span>
                    </div>
                </FooterIconItem>
                <FooterIconItem>
                    <Image src='/images/footer/Android_icon.png' alt="LogoCompany" width={24} height={32}/>
                    <div>
                        <h4>Coming soon</h4>
                        <span>for Android</span>
                    </div>
                </FooterIconItem>
            </FooterIconWrapper>
            <FooterContentItems>
                {dataTest.map((i) => {
                    return <div key={i.title}>
                        <h4>{i.title}</h4>
                        <FooterContentItem items={i.items}/>
                        {/*{i.items.map((l) => {
                            return <span key={l.item}>
                                {l.item}
                            </span>
                        })}*/}
                    </div>

                })}

            </FooterContentItems>
        </FooterWrapperItems>
    </Container>
}
export default Footer;
