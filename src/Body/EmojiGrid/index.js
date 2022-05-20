import './style.css'
import data from '../../data/data.json'
export default function EmojiGrid(props) {
    const onClick = (e) => {
        console.log('You Copied' + e.target.id)
    }
    return (
        <>
            {data.filter((emoji => emoji.keywords.includes(props.searchText))).map((item, index) => {
                return (
                    <div onClick={onClick} className='grid-Emoji' id={item.symbol} key={index}>
                        {item.symbol}
                    </div>
                )
            })}

        </>
    )
}