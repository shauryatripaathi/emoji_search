export default function EmojiList(){

    getData = () ={
        fetch("src\emoji-list\emoji-list.json")
        .then(response => response.json())
        .then(resolve => {console.log(JSON.stringify(resolve))
        })
}