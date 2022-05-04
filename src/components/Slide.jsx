import React, { useRef, useState } from 'react'
import styled from '@emotion/styled';
import projects from '../data/projects.json';
import mooda from '../img/MOODA.PNG';
import secProject from '../img/2ndProject.PNG';
import portpolio from '../img/portpolio.PNG';
import arrow from '../img/arrow.png';
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

const Slider = styled.div`
    width: 80%;
    height: 500px;
    border: 3px solid #c5e0b4;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`;

const Slide = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    padding: 10px 10px;
    flex-shrink: 0;
    margin-right: 50px;
    &:first-of-type {
        margin-left: 20px;
    }
    perspective: 1500px;
    
`;

const SlideFront = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    border: 3px solid #c5e0b4;
    background-color: #e2f0d9;
    padding: 10px 10px;
    backface-visibility: hidden;
    transform: rotateY(0deg);
    transition: 1s;
`;

const ProjectImg = styled.img`
    width: 80%;
    height: 200px;
    margin-top: 50px;`;

const ProjectTitle = styled.h2`

`;

const ProjectButton = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    bottom: 20px;
`;

const SlideBack = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    border: 3px solid #c5e0b4;
    background-color: #e2f0d9;
    padding: 30px 10px;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    transition: 1s;
`;

const DescWrapper = styled.div`
    text-align: left;

`;

const Desc = styled.div``;

const DescTitle = styled.h3``;

const DescContent = styled.p`
    span {
        font-weight: 700;
        a {
            text-decoration: none;
            color: inherit;
        }
    }
`;

const DescImg = styled.img`
    height: 40px;
    margin-right: 5px;
`;

const UsedSkills = styled.div`
    position: absolute;
    top: 180px;
`;

const Anchor = styled.a`
    position: absolute;
    bottom: 20px;
    left: 170px;
    text-decoration: none;
    color: #41aa00;
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
`;

export default function SlideComponent() {

    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState();

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    };
    
    const onDragEnd = () => {
        setIsDrag(false);
    };
    
    const onDragMove = (e) => {
        if (isDrag) {
            const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

            scrollRef.current.scrollLeft = startX - e.pageX;

            if (scrollLeft === 0) {
                setStartX(e.pageX);
            } else if (scrollWidth <= clientWidth + scrollLeft) {
                setStartX(e.pageX + scrollLeft);
            }
        }
    };
    
    const frontRefs = useRef({});
    const backRefs = useRef({});

    const cardChange = function(img, state) {
        if(img === "mooda") {
            if(frontRefs.current.mooda !== undefined && backRefs.current.mooda !== undefined) {
                if(state) {
                    frontRefs.current.mooda.style.transform = "rotateY(180deg)";
                    backRefs.current.mooda.style.transform = "rotateY(0deg)";
                }else {
                    frontRefs.current.mooda.style.transform = "rotateY(0deg)";
                    backRefs.current.mooda.style.transform = "rotateY(-180deg)";
                }
            }

        }else if(img === "secProject") {
            if(frontRefs.current.secProject !== undefined && backRefs.current.secProject !== undefined) {
                if(state) {
                    frontRefs.current.secProject.style.transform = "rotateY(180deg)";
                    backRefs.current.secProject.style.transform = "rotateY(0deg)";
                }else {
                    frontRefs.current.secProject.style.transform = "rotateY(0deg)";
                    backRefs.current.secProject.style.transform = "rotateY(-180deg)";
                }
            }
        }else if(img === "portpolio") {
            if(frontRefs.current.portpolio !== undefined && backRefs.current.portpolio !== undefined) {
                if(state) {
                    frontRefs.current.portpolio.style.transform = "rotateY(180deg)";
                    backRefs.current.portpolio.style.transform = "rotateY(0deg)";
                }else {
                    frontRefs.current.portpolio.style.transform = "rotateY(0deg)";
                    backRefs.current.portpolio.style.transform = "rotateY(-180deg)";
                }
            }
        }

    }

    const imgCheck = function(img) {
        switch(img) {
            case "mooda": return mooda;
            case "secProject": return secProject;
            case "portpolio": return portpolio;
            default: return null;
        }
    }

    const skillImg = function(img) {
        switch(img.name) {
            case "html": return html;
            case "css": return css;
            case "javascript": return javascript;
            case "tomcat": return tomcat;
            case "java": return java;
            case "jquery": return jquery;
            case "jsp": return jsp;
            case "mysql": return mysql;
            case "react": return react;
            case "rstudio": return rstudio;
            default: return null;
        }
    }
    return <>
        <Slider onMouseDown={onDragStart}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                onMouseMove={onDragMove}
                ref={scrollRef}>
            {projects.skills.map((project, index) => (
            <Slide 
                key={index}
                id={index} 
                card={false}
                >
                <SlideFront ref={(element) => frontRefs.current[project.img] = element}>
                    <ProjectImg src={imgCheck(project.img)} />
                    <ProjectTitle>
                        {project.name}
                    </ProjectTitle>
                    <ProjectButton src={arrow} onClick={() => cardChange(project.img, true)}/>
                </SlideFront>
                <SlideBack ref={(element) => backRefs.current[project.img] = element}>
                    <DescWrapper>
                        <Desc>
                            <DescTitle>
                                개요
                            </DescTitle>
                            <DescContent>
                                {project.desc} <br /><br />
                                <span><a href={project.address}>보러가기</a></span>
                            </DescContent>
                        </Desc>
                        <UsedSkills>
                            <DescTitle>
                                사용 기술
                            </DescTitle>
                            <DescContent>
                                {
                                    project.skills.map((skill, index) => (
                                        <DescImg src={skillImg(skill)} key={index}/>
                                    ))
                                }
                            </DescContent>
                        </UsedSkills>
                    </DescWrapper>
                    <Anchor href={project.git} target="_blank">
                        깃허브
                    </Anchor>
                    <ProjectButton src={arrow} onClick={() => cardChange(project.img, false)}/>
                </SlideBack>
            </Slide>
                ))}
        </Slider>

    </>


}
