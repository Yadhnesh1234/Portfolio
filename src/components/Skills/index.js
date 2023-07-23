import SkillList from "./helper";
import { LOGO_HEIGHT, LOGO_WIDTH } from '../../constants'
const Skills = () => {
  return (
    <>
      <div>
        <div className="flex justify-center w-90 " >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-eurostile font-normal hover:underline">Areas of Expertise</h1>
        </div>
        <div className="mt-14 w-100  flex justify-center flex-wrap">
          {
            SkillList.map((val) => {
              return (<>
                <div className="ml-10 h-50 mr-10 mt-3 hover:text-purple-600 lg:pr-24 lg:pl-24">
                  <img
                    src={val.logo}
                    alt=""
                    height={LOGO_HEIGHT}
                    width={LOGO_WIDTH}
                    className="hover:animate-bounce shadow-md "
                  />
                  <p className="text-center text-sm md:text-lg lg:text-xl font-eurostile mt-4 md:mt-8 ">{val.name}</p>
                </div>
              </>)
            })
          }
        </div>
      </div>
    </>
  )
}
export default Skills;