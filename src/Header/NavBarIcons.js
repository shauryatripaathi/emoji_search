import SearchBar from './SearchBar'
import './NavBarIcons.css'
export default function NavBarIcons(){
    return(
        <>
            <div className = 'sideIcons'>
                <SearchBar/>
               <button className='x'>X</button>
               <button>A</button>
               <button>B</button>
               <button>C</button>
               <button>D</button>
               <button>E</button>
            </div>
        </>
    )
}