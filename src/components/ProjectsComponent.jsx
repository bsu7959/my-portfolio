import React from 'react'
import styled from '@emotion/styled';
import Slide from './Slide';

const Base = styled.div`
    width: 100%;
    text-align: center;
`;

const ContentWrapper = styled.div`
    padding: 10px 40px;
    max-width: 1000px;
    margin: 0 auto;
`;

const ContentTitle = styled.h1`
`;


export default function ProjectsComponent() {
    return <>
        <Base id="projects">
            <ContentWrapper>
                <ContentTitle>
                    Projects
                </ContentTitle>
                <Slide />
            </ContentWrapper>
        </Base>

    </>


}
