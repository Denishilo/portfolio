import React from 'react';
import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/main/Main";
import {MySkills} from "layout/skills/MySkills";
import {Projects} from "layout/projects/Projects";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <MySkills/>
            <Projects/>
        </>
    );
}

export default App;
