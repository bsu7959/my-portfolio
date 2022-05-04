import React from 'react'
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import SkillsComponent from '../components/SkillsComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import style from '../style/style.module.css';


export default function Home() {
    
    return <>
        <Header />
        <HomeContent />
        <SkillsComponent />
        <ProjectsComponent />
    </>

}
