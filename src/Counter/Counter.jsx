import { Component, useEffect, useState } from "react";

export default function Counter({intialValue, step}){

    const [count, setCount] = useState(intialValue)
    const [time, setTime] = useState(new Date())
    let timer = null

    useEffect(() => {
        console.log('component updated !')
        timer = setInterval(() => {
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])


    return <div>
        Date: <span> {time.toString()} </span>
        <span>
            <button onClick={()=>{
                setCount(preState => {
                    return preState+step
                })
            }}>
                Click
            </button>
        
            <button onClick={()=>{
                setCount(0)
            }}>
                Reset
            </button>
        Il y a {count} secondes
        </span>
    </div>
}

/*export default class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter:0,
            date: undefined}
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState (prevState =>{
                return { counter: prevState.counter + 1}
            }
        )},1000)

    }

    render(){
        return <div>
            Il y a {this.state.counter} secondes
        </div>
    }
}*/