import React from 'react';
import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/main/Main";
import {MySkills} from "layout/skills/MySkills";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <MySkills/>
        </>
    );
}

export default App;
