import "./singlepost.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Singlepst () {
    const [hasil,setHasil] = useState([])
    const {id} = useParams()
   
    useEffect (() => {
        try {
            axios.get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/${id}`)
            .then((res)=> {
            console.log(res,"asd")
                setHasil(res.data)
            });
        } catch (error) {
            console.log(error)
        }
    },[])
    
    return (
        <div className="singlepst">
            {hasil.map ((hasil) => (
                <>
            <div className="singlepostwrapper">
                <img className="singlepostimg" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=821&q=80"/>
            <h1 className="singleposttitle">
                Lorem ipsum dolor sit, amet 
            <div className="singlepostedit">
            <i class="singleposticon material-symbols-rounded">edit</i>
            <i class="singleposticon material-symbols-rounded">delete</i>
            </div>
            </h1>
                <div className="singlepostinfo">
                    <span className="singlepostauthor">
                        author: <b>{hasil.User.username}</b>
                    </span>
                    <span className="singlepostdate">{hasil.createsAt}</span>
            </div>
            <p>{hasil.content}</p>
            </div>
            </>
            ))}
        </div>
    )
}