import { useState } from "react"

export default function SearchBar(){
    const[emoji,setEmoji] = useState('')
    const handleOnKey = (e)=>{
        setEmoji(e.target.value)
    }
    const handleOnSubmit = ()=>{
        alert(`emoji is ${emoji}`)
    }
    return<>
        <form onKeyDown ={handleOnSubmit}>
                <label>
                    <input type='search' 
                    value={emoji}
                    onChange = {handleOnKey}/>
                </label>
            </form>
    </>
}