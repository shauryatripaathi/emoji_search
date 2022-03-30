import SearchBar from './SearchBar'
import './NavBarIcons.css'
import ActionButton from '../ActionButton'
export default function NavBarIcons(){
    return(
        <>
            <div className = 'sideIcons'>
                <SearchBar/>
                <ActionButton btn = 'X'/>
                <ActionButton btn = 'A'/>
                <ActionButton btn = 'B'/>
                <ActionButton btn = 'C'/>
                <ActionButton btn = 'D'/>
                <ActionButton btn = 'E'/>
            </div>
        </>
    )
}