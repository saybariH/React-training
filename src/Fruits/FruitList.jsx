import { useState } from "react"

export default function FruitList(){

    const [fruit, setFruit] = useState('')
    const [fruitList, setFruitList] = useState([])

    const displayFruits = () => fruitList.map( ((fruit,key) => <li key={key}>{fruit}</li>))
    const handleInput = () => {
        const newFruit = document.querySelector('#fruit').value
        setFruit(newFruit) 
    }

    const handleAddFruit = (e) => {
        e.preventDefault()
        setFruitList([...fruitList, fruit])
    }
    return <>
    <span>
        <form>
            <input onChange={handleInput} type="text"  id="fruit"/>
            <input onClick={handleAddFruit} type="submit" value="Add fruit"/>
        </form>
    </span>
    <h1> Fruits : </h1>
    <ul>
        {displayFruits()}
    </ul>
    </>
}