import SkillList from "./helper";
import {LOGO_HEIGHT,LOGO_WIDTH} from '../../constants'
const Skills=()=>{
    return(
        <>
       <div>
       <h1 className="text-center text-3xl md:text-4xl lg:text-5xl  font-eurostile font-semibold">Skills</h1>
      {
       SkillList.map((val)=>{
           return(<>
            <p>{val.name}</p>
            <img
              src={val.logo}
              alt=""
              height={LOGO_HEIGHT}
              width={LOGO_WIDTH}
             className=""
             />
           </>)
       }) 
      }  
       </div> 
        </>
    )
}
export default Skills;