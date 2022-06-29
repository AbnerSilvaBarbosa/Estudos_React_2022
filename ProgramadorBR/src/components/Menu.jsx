import React from "react"

function Menu(props) {
    return (
        <ul className="menu">
            {props.links.map(links => <li key={links}>{links}</li>)}
        </ul>
    )
}

export default Menu