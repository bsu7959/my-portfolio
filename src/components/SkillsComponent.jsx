import React from 'react'
import styled from '@emotion/styled';
import html from '../img/HTML5.png';
import css from '../img/css.png';
import javascript from '../img/javascript.png';
import tomcat from '../img/Apache_Tomcat.png';
import java from '../img/java.png';
import jquery from '../img/jquery.png';
import jsp from '../img/jsp.png';
import mysql from '../img/mysql.png';
import react from '../img/react.png';
import rstudio from '../img/rstudio.svg';

const Base = styled.div`
    width: 100%;
    text-align: center;
    background-color: rgb(169,209,142);
`;

const ContentWrapper = styled.div`
    padding: 10px 40px;
    max-width: 1000px;
    margin: 0 auto;
`;

const ContentTitle = styled.h1`
    color: #ffffff;
`;

const Cardlist = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-basis: 100px;
`;

const Card = styled.div`
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;

`;

const CardImg = styled.img`
    height: 4rem;
    margin-bottom: 5px;
`;

const CardContent = styled.div`
    width: 11rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
`;




export default function SkillsComponent() {
    return <>
        <Base id="skills">
            <ContentWrapper>
                <ContentTitle>
                    Skills
                </ContentTitle>
                <Cardlist>
                    <Card>
                        <CardImg src={html} />
                        <CardContent>
                                HTML
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={css} />
                        <CardContent>
                                CSS
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={javascript} />
                        <CardContent>
                                JavaScript
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={react} />
                        <CardContent>
                                React
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={jquery} />
                        <CardContent>
                                jQuery
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={java} />
                        <CardContent>
                                Java
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={jsp} />
                        <CardContent>
                                JSP
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={mysql} />
                        <CardContent>
                                MySql
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={tomcat} />
                        <CardContent>
                                Apache Tomcat
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImg src={rstudio} />
                        <CardContent>
                                Rstudio
                        </CardContent>
                    </Card>
                </Cardlist>
            </ContentWrapper>
        </Base>

    </>


}
