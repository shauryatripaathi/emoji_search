import './style.css'
export default function ActionButton(props){
    const handleOnClick = (e)=>{
        alert(`you clicked ${props.btn}`)
    }
    return<>
        <button onClick={handleOnClick} className="actionButton">{props.btn}</button>
    </>
}