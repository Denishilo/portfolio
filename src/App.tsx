import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

export type SkillType = {
    id: number
    title: string
    img: string
}
export type ProjectType = {
    id: number
    img: string
    title: string
    description: string
}
export type StateType = {
    skills: Array<SkillType>
    projects: Array<ProjectType>
}

function App() {
    const state: StateType = {
        skills: [
            {id: 1, title: 'HTML&CSS', img: ''},
            {id: 2, title: 'JS/TS', img: ''},
            {id: 3, title: 'React', img: ''},
            {id: 4, title: 'Redux', img: ''},
            {id: 5, title: 'Story book', img: ''},

        ],
        projects: [
            {id: 1, title: 'Social network', img: '', description: 'Social network help people to communicate'},
            {id: 1, title: 'TodoList', img: '', description: 'Let\'s do it'},
            {id: 1, title: 'Counter', img: '', description: 'Count your money'},
        ]
    }
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={state.skills}/>
            <Projects projects={state.projects}/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
