import { useState } from 'react'
import './style.css'
export default function ActionButton(props){
    return<>
        <button onClick={props.onClick} className="actionButton" >{props.emoji}</button>
    </>
}