import "./style.css"

export function Card(props){
    return(
        <div>
            <strong>{props.name} <span>{props.time}</span></strong>
        </div>
    )
}