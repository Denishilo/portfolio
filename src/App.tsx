import React from 'react';
import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/main/Main";
import {MySkills} from "layout/skills/MySkills";
import {Projects} from "layout/projects/Projects";
import {Contacts} from "layout/contacts/Contacts";
import {Footer} from "layout/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <MySkills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
