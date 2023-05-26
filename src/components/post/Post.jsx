import { Link } from "react-router-dom"
import "./post.css"
import axios from "axios";
import { useEffect, useState } from "react";


export default function Post () {
    const [hasil,setHasil] = useState([])
   
    useEffect (() => {
        try {
            axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog")
            .then((res)=> 
                setHasil(res.data.result));
        } catch (error) {
            console.log(error)
        }
    },[])
    
    return (
        <div className="post">
              
                {hasil.map((hasil) => (
                    <>
                        <img 
                        className="postimg"
                        src={`https://minpro-blog.purwadhikabootcamp.com/${hasil.imageURL}`} />
                        <div className="postinfo">
                            <div className="postcats">
                                <span className="postcats">{hasil.Category.name}</span>
                            </div>
                            <Link className="posttitle" to={`/Single/${hasil.id}`}> {hasil.title}.</Link>
                                <span className="material-symbols-outlined">thumb_up</span>
                        <hr />
                            <span className="postDate">{hasil.createdAt}</span>
                        </div>
                        <p className="postdesc">
                            {hasil.content}
                        </p>
                    </>
                ))}
        </div>
    )
}