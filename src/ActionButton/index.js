import './style.css'
export default function ActionButton(props){
    const handleOnClick = ()=>{
        alert(`you clicked button`)
    }
    return<>
        <button onClick={handleOnClick} className="actionButton" ><img src= {props.btn} width = '25px' /></button>
    </>
}