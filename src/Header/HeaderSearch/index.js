import data from '../../data/data.json'
import './style.css'
import ActionButton from "../../ActionButton";
import SearchBar from "../SearchBar";
import { useState } from 'react';
import EmojiGrid from '../../Body/EmojiGrid';

export default function HeaderSearch(props){
    const[text,setText] = useState('')

    const handleChange = (e)=>{
        setText(e.target.value)
    }
   
    return(
        <>
            <div className="navBar">
                <SearchBar value = {text} handleChange = {handleChange}/>
                <ActionButton emoji = "❌" onClick = {()=>{setText('')}}/>
                <ActionButton emoji = "😻" onClick = {()=>{setText('face')}}/>
                <ActionButton emoji = "🚕" onClick = {()=>{setText('travel')}}/>
                <ActionButton emoji = "🍎" onClick = {()=>{setText('fruit')}}/>
                <ActionButton emoji = "🍔" onClick = {()=>{setText('food')}}/>
                <ActionButton emoji = "💖" onClick = {()=>{setText('heart')}}/>

             </div>
             <div className='emojiList' >
                 <EmojiGrid searchText = {text}/>
             </div>
        
        
        </>
    )
}