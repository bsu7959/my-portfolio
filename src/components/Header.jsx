import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled';
import header_bg from '../img/header_bg2.png';

const Base = styled.header`

    text-align: center;
    width: 100%;
    height: 380px;
    background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${header_bg});
    background-size: cover;
`;

const Navigation = styled.nav`
    position: fixed;
    margin: 0;
    padding: 0 30px 0 30px;
    width: 100%;
    z-index: 10;
`;

const MenuListWrapper = styled.div`
    width: 100%;
`;

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    overflow: hidden;
    width: 100%;
`;

const Menu = styled.li`
    display: flex;
    align-items: center;
    height: 62px;
    flex-shrink: 0;
    &:not(:first-of-type) {
        margin-left: 24px;
    }
    &:nth-of-type(2) {
        margin: 0px 30px 0px auto;

    }
    cursor: pointer;
`;


const Link = styled.a`
    text-decoration: none;
    margin-right: 30px;
    font-size: 1.5rem;
    color: rgb(89, 89, 89);
    &:hover {
        color: #000;
    }
`;

const TitleName = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    color: #000;
`;

const HeaderContainer = styled.div`
    position: relative;
    top: 20%;
`;

const HeaderTitle = styled.div`
    font-size: 1.5rem;
`;

const HeaderContents = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
`;

const HeaderBar = styled.div`
    background-color: rgb(127, 180, 91);
    width: 100px;
    height: 5px;
    border-radius: 10px;
    margin: 30px auto;
`;


export default function Header() {

        return (
            <Base>
                <Navigation>
                    <MenuListWrapper>
                        <MenuList>
                            <Menu>
                                <Link href="#main">
                                    <TitleName>
                                        <span>PORTFOLIO</span>
                                    </TitleName>
                                </Link>
                            </Menu>
                            <Menu>
                                <Link href="#about_me">
                                    About me
                                </Link>
                                <Link href="#skills">
                                    Skills
                                </Link>
                                <Link href="#projects">
                                    Projects
                                </Link>
                            </Menu>
                        </MenuList>
                    </MenuListWrapper>
                </Navigation>
                <HeaderContainer id="main">
                    <HeaderTitle>
                        <h2>변상우<br />Front-end Developer</h2>
                    </HeaderTitle>
                    <HeaderBar />
                    <HeaderContents>
                        <span>안녕하세요.<br />항상 새로운것을 추구하는 개발자입니다.</span>
                    </HeaderContents>
                </HeaderContainer>
            </Base>
        )
    }
