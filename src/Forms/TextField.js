export default function TextField(props){
    return (
        <>
        <label>{props.inputLabel}</label>
        <input name={props.inputName} type='text' />
        <div> {props.children} </div>
        </>
    )
}