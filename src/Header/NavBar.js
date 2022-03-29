import './NavBar.css'
import { useState } from 'react'
export default function NavBar(){
    const[myCar,setMyCar] = useState('')

    const handleOnChange = (e)=>{
        setMyCar(e.target.value)
    }
return<>
    <form>
        <label>Select option
        <select value={myCar} onChange={handleOnChange} >
            <option value='ford'>Ford</option>
            <option value='bmw'>BMW</option>
            <option value='audi'>Audi</option>
        </select>
        </label>
    </form>
    </>
}