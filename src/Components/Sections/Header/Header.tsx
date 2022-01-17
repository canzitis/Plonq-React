import {Container, NavlinksHeader,} from "./Header.styled";
import Image from 'next/image';

interface headerProps {
    header: {
        logoCompany: string,
        navlinks: {
            name: string,
            href: string,
            id: number
        }[],
    }
}

const Header: React.FC<headerProps> = ({header}) => {
    return <Container>
        <Image src={header.logoCompany} alt="LogoCompany" width={88} height={19}/>
        <NavlinksHeader>
            {header.navlinks.map((item) => {
                return <a href={item.href} key={item.id}>{item.name}</a>
            })}
        </NavlinksHeader>
    </Container>
}

export default Header;