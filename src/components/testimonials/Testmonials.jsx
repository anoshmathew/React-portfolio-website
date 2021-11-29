import "./testmonials.scss"


export default function Testmonial() {
    const data = [
        {
            id:1,
            name:"Tom Durden",
            title:"Senior Developer",
            img:"https://face2faceplanning.com/wp-content/uploads/2016/12/owner-professional.png",
            icon:"assets/twitter.png",
            desc: "lorem ispum delfjsndfjnkjdnfjkns jvnfdvn jfgnui ugu i8rn",
            featured:true,
        },
        {
            id:2,
            name:"Alexa Kalinski",
            title:"Senior Developer",
            img:"https://paloaltoheadshots.com/wp-content/uploads/2021/01/Business-Portraits_001.jpg",
            icon:"assets/youtube.png",
            desc:"Lorem ipsum dolor sit dfsf edb dolorm.",
            
        },
    ];

    return (
        <div className="testmonials" id="testmonials">
            <h1>Testmonials</h1>
            <div className="container">
                {data.map((d)=>( 

               
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src={d.img} alt=""/>
                        <img src={d.icon} className="right" alt=""/>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div> 
                ))}
            </div>
        </div>
    )
}
