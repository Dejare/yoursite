import React, { useContext, useState } from "react";
import { HiOutlineSun , HiOutlineMoon} from "react-icons/hi";
import Aboutproject from "../../afterSignIn/project/Aboutproject";
import "./template.scss";
import { FormContext } from "../../context/FormContext";
import img from '../../../images/bg.jpg'
const Index = () => {
    const formValue = useContext(FormContext);
    console.log(formValue);

    const [Darkmode, setDarkmode] = useState(false)

    function changeMode() {
        setDarkmode(!Darkmode)
    }

    const dark = {background: "#141414", color: "#f4f4f4"}
    const light = {background: "#f4f4f4", color: "#141414"}
    
    return (
        <div className= {Darkmode ? "light h-full" : "dark h-full"}>
            <div className="template">
                <header className="flex flex-row justify-between p-12 uppercase">
                    <div>{formValue.Projectname}</div>
                    <div onClick={changeMode}>
                      {Darkmode ?  <HiOutlineMoon/> :<HiOutlineSun /> } 
                    </div>
                </header> 
                {/* herro */}
                <div className="homeAnimations">
                     
                    <div className="triangle"></div> 
                    <div className="square"></div> 
                    <div className="bigCircle"></div> 
                    <div className="bottomleft">
                        <div className="smaller"></div> 
                    </div> 
                </div> 
                <div className="homeTexts">
                     
                    <h3>{formValue.occupation}</h3> 
                    <h1 className="md:px-40">{formValue.fullname}</h1> 
                    <div className="homeCta">
                         
                        <a href="#about" className="homeAbout mr-4">
                            About Me
                        </a> 
                        
                        <a href="#project" className="homeProjects">
                            My Works
                        </a> 
                    </div> 
                    
                </div>

               
            </div>

            <section id="about">
                    <div>
                        <h1 className="coolvetica text-4xl head p-24">About me</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around px-12">
                    {/* image */}
                    <img src={img} alt="" className="aboutImg w-3/4 m-auto md:w-1/4 md:pr-24 py-24 md:py-0"/>
                    <div>
                        {/* text */}
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sequi exercitationem ut culpa voluptas rerum omnis distinctio? Temporibus, saepe iure, enim similique totam dicta provident neque labore atque natus fuga!
                        Necessitatibus itaque nisi excepturi dicta architecto facilis dolorum inventore quidem doloribus ab tempora, voluptatem minus doloremque tempore quia esse cumque. Est non nam impedit fugiat animi a distinctio consectetur ab?
                        Ratione accusantium accusamus veritatis quis culpa odio dolorum. Numquam voluptate quis illo? Quia, placeat ipsam nesciunt dolores, odio dolore aut dolor iste ab in nisi. Non earum voluptatum ipsum quisquam.
                        Repellat mollitia ut doloribus deleniti obcaecati nihil, totam nesciunt quasi voluptate ratione est saepe aliquam et voluptatem voluptatibus eaque quod incidunt harum eligendi quibusdam exercitationem. Necessitatibus, voluptatum vitae? Autem, voluptates!</p>
                    </div>
                    </div>
                </section>
                <section id="project">
                <div className=" p-24">
                        <h1 className="coolvetica text-4xl head">My works</h1>
                        <p>Some people work smart, some work hard, BUT I DO BOTH</p>
                    </div>
                </section>
                <section >
                    <div className="p-24">
                <h1 className="coolvetica text-4xl head ">Contact me</h1>
                        <p>It'd be a pleasure to connect with you. Have a project for me? <br />These magic icons will link you directly to me</p>
                        </div>
                </section>
        </div>
    );
};

export default Index;
