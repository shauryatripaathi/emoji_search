import './style.css'
export default function ActionButton(props){
    const handleOnClick = ()=>{
        alert(`you clicked button ${props.btn}`)
    }
   return<>
        <button onClick={handleOnClick} className = 'actionButton'>{props.btn}</button>
   </>
}