import Navbar from "../../components/Navbar"
import Landing from "../../components/Landing"
import Skills from "../../components/Skills"
import Project from "../../components/Projects"
const Home=()=>{
    return(
        <>
        <div class="overflow-x-hidden">
        <Navbar/>
        <Landing/>
        <Skills/>
        <Project/>
        </div>
        </>
    )
}

export default Home