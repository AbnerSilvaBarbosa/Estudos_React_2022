type ExemploProps = {
    text: string
    number?: number
    
}


export function Exemplo (props:ExemploProps){
    return (
        <h1>{props.text}</h1>
    );
}