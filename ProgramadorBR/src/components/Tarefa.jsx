

function DoneImg(props){
    if(props.done){
        return(<img src=" /src/assents/check.png" alt="Concluida" />)
    }else{
        return(<img src="" alt="Não concluida" />)
    }

}

function Tarefa(props) {
    return (
        <div className="taskPosition">
            <div className="tarefa">
                <p>{props.tarefa}</p>
                <button onClick={props.done}><DoneImg done={props.card} ></DoneImg></button>
                <button onClick={props.delete}>Deletar</button>
                
            </div>
        </div>
    )
}

export default Tarefa