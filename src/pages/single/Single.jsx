import Sidebar from "../../components/sidebar/Sidebar"
import Singlepst from "../../components/singlepost/Singlepost"
import"./single.css"

export default function Single () {
    return (
        <div className="single">
               <Singlepst/>
               <Sidebar/>
        </div>
    )
}