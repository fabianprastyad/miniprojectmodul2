import { useEffect, useState } from "react"
import "./Sidebar.css"
import axios from "axios"

export default function Sidebar () {
    const [hasil,setHasil] = useState([])

    // useeffect category
    useEffect (() => {
        try {
            axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory")
            .then((res)=>
            setHasil(res.data));
        }catch (error) {
            console.log(error)
        }
    },[])

    // use effect 10 favorite blog
    const[best,setBest]=useState([])
    useEffect (() => {
        try {
            axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav")
            .then((res) =>
            setBest(res.data.result));
        }catch (error) {
            console.log(error)
        }
    })

    if(hasil === []){
        return <p> LOADING ...</p>
    }

   
    return (
        <div className="sidebar">
                <span className="sidebartitle">10 Best Blogs</span>
                {best.map((best)=>(
                <>
            <div className="sidebaritem">
                <img className="sidebarimg" src="https://media.istockphoto.com/id/1420208573/photo/man-feeling-free-looking-up-to-the-sky.jpg?b=1&s=170667a&w=0&k=20&c=A9bV_u8pvZDh024i39SE94QD-Kw8X42pdgSRkimN-kA=" />
                <p className="pasidebar">{best.title}.</p>
            </div>

                </>
            )
                )}
            <span className="sidebartitle">CATEGORIES</span>
            {hasil.map((hasil)=> (
                <>
            <div className="sidebaritem">
            <ul className="sidebarlist" key={hasil.id}>
                <li className="sidebarlistitem">{hasil.name}</li>
            
            </ul>
            </div>
                
                </>
            ))}
        </div>
    )
}