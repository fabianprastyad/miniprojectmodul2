import { Link } from "react-router-dom"
import"./TopBar.css"
import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../AuthContext";

export default function TopBar () {
const [user, setUser] = useState(false)
const authContext = useContext(AuthContext);
   
   useEffect(()=> {
       if (localStorage.getItem("token")){
        setUser(true); 
       } 
    },[])
    
    const handleLogout = () => {
       setUser(false);
       authContext.logout();

   }

//     const handleWrite = () => {
//        setUser(false);
//        authContext.write();

//    }



   return (
        <div className="Top">
            <div className="topleft">
                <img className="blogimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fqdeMQNyxNDLTL6lFqvxUNzSL2gLw0fWH8Gv9zLU&s" alt="" />
            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="toplistitem"><Link className="link" to="/settings">SETTING</Link></li>
                    <li className="toplistitem"><Link className="link" to="/write" >WRITE</Link></li>
                    <li className="toplistitem" onClick={handleLogout}>
                        {authContext.user && "LOGOUT"}
                    </li>
                </ul>
            </div>
             <div className="topright">
                {
                    authContext.user ? (
                    <img className="topimg"
                    src= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8BAAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAABAgMABAf/xAAkEAACAwEAAwACAQUAAAAAAAAAAQIRITESQVEDYTIiQnGBof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDxVBZjAYKYDAPYFrAGLoB7QYtCYN5NKqAcyMqfoasAZJMbgsUUStAYoo56BFWWSQCeC6b3pWkwan6AVwFcaQ792b+2gOWdpirSs6ZL2AGhR5MRsBOMEnhmK2AGZowrkAbQAGAJrAgAGSsCwDbBTYDmAEArQswrAOBoEdGadAFIZJGSGSxgGCHXwEB0gCikPgkVpWKAaMUh0mKkPSfQCkzNc/QaS4zO2vgCNASGZrtYBCaI+zomrIyVATkIPIRgTAyiS0WUQEEfR1Qk+gY1i3RvIAphoVDqgBX0yZp/ypCt0AUGwIIGDQGNHVYBoZJ/BfLBosA2MngoQKQZREYFkAY9KJk01ZWPLAaFjKvovEKnbAtVhjjFi8Ne2A0gJ0FtV0ToGlqIyWV9L+LaJShusCDiqZOX8kXlfMJSQE5yp4I5WGV/RaARexWM07A/gCmXTNGAZBtVSWioN7xgYF0OlmonLoBQWAdKwF6NFVFsKVML9oCaTKRWDJR9PTeIBilQcAlmmoCkWqGWkYlYgMl7KReYKh46wGGirAkyv44ALdYzL/hTx0PgAtRZqSVgcUnjBOVKnoDSlElJ5nQpoEntgSkTkN+WRMBWhZUlYzek/wAj4gEbA3vDTdC2Ab/QLAa9AP8AoK+mbVAi7dAO5Nomx/RNyp8Ad8NFi2FAUcgXgENSoBUyikTQy6BX0KwpqgUr6AV0osRPg8XYDxZRL2CND2gMvh0w/iQ/E4uWso3XAKd4ZPalwmv26Cp1+0BSUUtJS9/sZzv2JLoCRVZeBdXnA+NdEljAj+Tu6S/I6Kzash+WSAVzonKRmKwDdgvRoxw3AFZvQbszoBLBvoZ0aLoB1Lyjfsm0FOlVAAJjIzYGTKLhMZMDXQ8fpJvR1IB+jJInF2Pb+gZ4+oeEtEz4NHoFv8DLgsHtMZtAaMmikWyF0NKTymBeU2l6N5ulfsh5XRSMrloFkkCb3aJufaIycnKmBVuSu3gjlZNyknS0Vzd6Bpywi9YW7dBoCbAld/oeSsEVXAMngrYzoSQAT6ZgRgFY0QvgEgGjTTsnTsaqqgK7ApGvZpKPpAQXqA0emXDGsAS6AJkgGgUETQUndgbjQykB9ClYFfLDRk64KpNdoLboA9A50qE8/hrAaE5VhaLaV+yESimk+gPP8lAT8tJS14UjiAzdEpOxpkW9oBlHQvMBEZvAFYjeGkKBrAw2ZtAIwLoWjAYN2hTJgP6FQEwtYAUG36FQyQBtgGoDADBZpG6gDFlYuyCHgwHYbFkxPYFt9AcmhUaVAZMMe9BFWB3EC6pewZ5WS8mZSYF+G8hYvy4ZgCTJt/1DyJ1qA3kCU21RmgNIBd+hs2AAf0Kx46LLGAPQrHdUKAtaFqjNgsApDPgOoLxAf//Z" 
                    />
                    ): (
                        <ul className="toplist">
                        <li className="toplistitem">
                        <Link className="link" to="/login">
                            LOGIN
                            </Link>
                        </li>
                        <li className="toplistitem">
                        <Link className="link" to="/register">
                            REGISTER
                            </Link>
                            </li>    
                       </ul>
                    )
                
                }
            
             
                <span className="topsearchicon material-symbols-outlined">search</span>
             </div>
        </div>
        
        
    
    )
}