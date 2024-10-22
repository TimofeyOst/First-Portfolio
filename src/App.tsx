import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sectons/main/Main";
import {Skills} from "./layout/sectons/skills/Skills";
import {Projects} from "./layout/sectons/projects/Projects";
import {AboutMe} from "./layout/sectons/about/AboutMe";
import {Footer} from "./layout/sectons/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </div>
    );
}

export default App;

