import styled from "styled-components";

import { COLOR, MEDIA_BREAKPOINTS } from "../../styles/styles";

export const ResultsWrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0;
    @media ${MEDIA_BREAKPOINTS.tablet} {
        padding: 0 1.5rem 0.5rem;
    }
`;

export const ResultsContainer = styled.section`
    background-color: ${COLOR["white"]};
    border-radius: 0.25rem;
`;

export const ItemWrapper = styled.li`
    margin: 1rem;
    display: flex;
    grid-gap: 1rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    @media ${MEDIA_BREAKPOINTS.tablet} {
        justify-content: unset;
        align-items: unset;
        padding-bottom: 10px;
    }
    border-bottom: 1px solid ${COLOR["gray"]};
    & :last-child {
        border: none;
    }
`;

export const ItemDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    padding: 2rem;
    margin: 1rem 0;
    background-color: ${COLOR["white"]};
    border-radius: 0.5rem;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
    @media ${MEDIA_BREAKPOINTS.tablet} {
        display: grid;
        grid-auto-rows: auto;
    }
`;

export const ItemDetailContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 1rem;
    @media ${MEDIA_BREAKPOINTS.tablet} {
        display: grid;
        grid-template-columns: 680px auto;
        grid-column-gap: 1rem;
        -webkit-column-gap: 1rem;
        figure {
            border-radius: 0.25rem;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: calc(680px * 0.8);
            max-height: 680px;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
`;

export const ItemDetailCondition = styled.div`
    margin-bottom: 1rem;
    color: ${COLOR["dark-gray"]};
`;

export const ItemDetailContainerDescription = styled.article`
    width: 100%;
    h2 {
        margin-bottom: 1rem;
        font-size: 1.75rem;
        font-style: normal;
    }
    p {
        white-space: pre-line;
        font-size: 1rem;
        font-style: normal;
        font-weight: 200;
    }
    @media ${MEDIA_BREAKPOINTS.tablet} {
        width: 680px;
    }
`;

export const ItemInfo = styled.div`
    flex-grow: 2;
    width: 70%;
    margin-top: 30px;
    @media ${MEDIA_BREAKPOINTS.tablet} {
        width: 50%;
    }
`;

export const ItemSpanPrice = styled.p`
    display: inline-block;
    font-size: 1.5rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    span {
        margin-right: 6px;
    }
    @media ${MEDIA_BREAKPOINTS.tablet} {
        margin-bottom: 2rem;
    }
`;

export const ItemDetailSubtitle = styled.span`
    color: ${COLOR["dark"]};
    font-size: 0.875rem;
    font-weight: 400;
    white-space: pre-wrap;
`;

export const ItemDetailPrice = styled.span`
    display: block;
    color: ${COLOR["dark"]};
    font-size: 2.875rem;
    font-weight: 300;
    white-space: pre-wrap;
    line-height: 1em;
    letter-spacing: normal;
    margin: 32px 0;
`;

export const ItemDetailBtn = styled.button`
    background-color: ${COLOR["blue"]};
    color: ${COLOR["white"]};
    display: block;
    width: 100%;
    border: 0;
    border-radius: 0.25rem;
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
`;

export const ItemTitle = styled.a`
    color: ${COLOR["dark"]};
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    @media ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.3;
    }
`;

export const ItemDetailTitle = styled.h1`
    margin: 16px 0 32px;
    line-height: 1.2;
    font-weight: 600;
    font-size: 1.5rem;
`;

export const SearchRescueContaiuner = styled.div`
    max-width: 1018px;
    min-height: 204px;
    border-radius: 4px;
    margin: 48px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 42px 40px 32px;
    img {
        margin-top: -8px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 35px;
    }
`;

export const SearchRescueInfo = styled.div`
    & h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 1.08;
    }
    & ul {
        margin: 18px 10px 10px 0;
        font-size: 16px;
        font-weight: 300;
        & li {
            line-height: 1.231;
            color: rgba(0, 0, 0, 0.8);
            list-style-type: disc;
            list-style-position: outside;
            margin-bottom: 3px;
            margin-left: 18px;
        }
    }
`;

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    p {
        margin-top: 1.6rem;
        color: #333;
        font-size: 20px;
        text-align: center;
        line-height: 1;
    }
`;