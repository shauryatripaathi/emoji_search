import data from '../../data/data.json'
export default function EmojiGrid(props){
    return(
        <>
        <div>
            {data.filter((emoji => emoji.keywords.includes(props.searchText))).map((item,index)=>{
                return (
                    <div>
                        {item.symbol}
                    </div>
                )
            })}
        </div>
        </>
    )
}