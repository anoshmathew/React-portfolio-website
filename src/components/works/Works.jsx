import "./works.scss"
import { useState } from "react";
export default function Works() {

    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
        id:"1",
        icon:"/assets/mobile.png",
        title:"Web Design",
        desc:"Hello i am Anosh Mathew. How are you?",
        img:" ",
    },
    {
        id:"2",
        icon:"/assets/globe.png",
        title:"Mobile Application",
        desc:"Hello i am Anosh Mathew. How are you?",
        img:" ",
    },
    {
        id:"3",
        title:"Branding",
        icon:"/assets/writing.png",
        desc:"Hello i am Anosh Mathew. How are you?",
        img:" ",
    },
    ];
const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length-1 ? currentSlide + 1 : 0);
}
    return (
        <div className="works" id="works">

            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map((d) => (
                <div className="container">
                    <div className="items">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>
                                    Projects
                                </span>
                            </div>    
                        </div>
                        <div className="right"> 
                            <img src="data:image/jpeg;base64,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" alt=""/>
                        </div>
                    </div>
                    
                </div>
                ))
                }   
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
