import {useState} from 'react'
import Navbar from "../../components/Navbar"
import Landing from "../../components/Landing"
import Skills from "../../components/Skills"
import Project from "../../components/Projects"
    
const Home=()=>{
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
   };
    return(
        <>
        <div class="overflow-x-hidden" className={isDarkTheme ? 'dark' : 'light'}>
        <Navbar isDarkTheme={isDarkTheme} toggleDarkTheme={toggleDarkTheme}/>
        <Landing isDarkTheme={isDarkTheme}/>
        <Skills isDarkTheme={isDarkTheme}/>
        <Project isDarkTheme={isDarkTheme}/>
        </div>
        </>
    )
}

export default Home