import './style.css'
import data from '../../data/data.json'
export default function EmojiGrid(props){
    return(
        <>
        
            {data.filter((emoji => emoji.keywords.includes(props.searchText))).map((item,index)=>{
                return (
                    <div>
                        {item.symbol}
                    </div>
                )
            })}
        
        </>
    )
}