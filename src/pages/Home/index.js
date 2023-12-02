import {useState} from 'react'
import Navbar from "../../components/Navbar"
import Landing from "../../components/Landing"
import Skills from "../../components/Skills"
import Project from "../../components/Projects"
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
    
const Home=()=>{
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
   };
    return(
        <>
        <div className={isDarkTheme ? 'dark overflow-x-hidden' : 'light overflow-x-hidden'}>
        <Navbar  isDarkTheme={isDarkTheme} toggleDarkTheme={toggleDarkTheme}/>
        <Landing isDarkTheme={isDarkTheme}/>
        <Skills  isDarkTheme={isDarkTheme}/>
        <Project isDarkTheme={isDarkTheme}/>
        <Contact isDarkTheme={isDarkTheme}/>
        <Footer  isDarkTheme={isDarkTheme}/>
        </div>
        </>
    )
}

export default Home