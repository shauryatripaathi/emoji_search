import './style.css'
import ActionButton from "../../ActionButton";
import SearchBar from "../SearchBar";

export default function HeaderSearch(){
    return(
        <>
            <div className="navBar">
                <SearchBar/>
                <ActionButton emoji = "❌"/>
                <ActionButton emoji = "🚕"/>
                <ActionButton emoji = "🍎"/>
                <ActionButton emoji = "🍔"/>
                <ActionButton emoji = "💖"/>

             </div>
             <h1>Helllooooo!!!!!!!</h1>
        
        
        </>
    )
}