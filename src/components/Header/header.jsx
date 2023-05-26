import "./header.css"
export default function Header () {
    return (
        <div className="header">
            <div className="headertitles">
                <span className="headertitlesm">W E L C O M E </span>
                <span className="headertitlelg">Blog</span>
            </div>
            <img className="headerimg" src="https://images.unsplash.com/photo-1683343948131-0eabfaa7c1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
    )
}