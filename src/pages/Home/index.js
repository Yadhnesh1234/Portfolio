import Navbar from "../../components/Navbar"
import Landing from "../../components/Landing"
import Skills from "../../components/Skills"
const Home=()=>{
    return(
        <>
        <div class="overflow-x-hidden">
        <Navbar/>
        <Landing/>
        <Skills/>
        </div>
        </>
    )
}

export default Home