
import styled from "styled-components";

import { COLOR, MEDIA_BREAKPOINTS } from "../../styles/styles";

export const HeaderContainer = styled.div`
    padding: 0 1rem;
    background-color: ${COLOR["yellow"]};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 54px;
        height: 34px;
    }
`;

export const SearchFrom = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    width: 100%;
`;

export const SearchInput = styled.input`
    font-size: 1rem;
    color: #333;
    border: 0;
    border-radius: 2px;
    flex-grow: 1;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    height: 39px;
    padding: 7px 60px 9px 15px;
    margin-left: 15px;
    @media ${MEDIA_BREAKPOINTS.tablet} {
        margin-left: 30px;
    }
    & ::placeholder {
        color: ${COLOR["light-gray"]};
        font-weight: 200;
    }
`;

export const SearchLink = styled.a`
    background-color: ${COLOR["gray"]};
    height: 39px;
    padding: 10px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    cursor: pointer;
    img {
        width: 18px;
        height: 18px;
    }
`;

export const BreadCrumbContainer = styled.nav`
    padding: 20px;
    @media ${MEDIA_BREAKPOINTS.tablet} {
        padding: 16px 0;
    }
`;

export const BreadCrumbList = styled.ul`
    list-style: none;
    font-size: 0.85rem;
    & li {
        display: inline;
        color: #666;
    }
    & li:not(:last-child):after {
        content: "›";
        margin: 0 0.5rem;
    }
    & li:last-child {
        font-weight: bold;
    }
`;