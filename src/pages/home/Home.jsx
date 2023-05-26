import Header from "../../components/Header/header"
import Post from "../../components/post/Post"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import Footer from "../footer/Footer"
import "./Home.css"

export default function Home () {
    return (
        <>
        <Header/>
        <div className="home">
           <Posts/>
           <Sidebar/>
        </div>
        <Footer/>
        </>
    )
}