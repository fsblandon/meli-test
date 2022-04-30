import Image from "next/image";
import { HeaderContainer, Wrapper } from "./style";
import Link from "next/link";
import SearchBar from "./search/index";

const Header = () => {
    return (
        <HeaderContainer>
        <Wrapper>
            <Link href={`/`} passHref>
                <img
                    src={"/logo__small@2x.png"}
                    alt="logo"
                    width='70'
                    height='55'/>
            </Link>
            <SearchBar />
        </Wrapper>
        </HeaderContainer>
    );
};

export default Header;
