import React,{useState,useEffect} from 'react';

const Demo = () =>{
    let [state,Setstate] = useState(null)
    let [info,Setinfo] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then( data =>{
                Setinfo(data)
        })
    } ,[])


    

    return(
        <>
        <h1>Hooks used in the React</h1>
        {state}
        <button onClick={()=> Setstate(state+1)}>Increment </button>
        <button onClick={()=>Setstate(state-1)}>Decrement</button>
        {
            info.map((user,key)=>{
                return(
                    <>
                       {user.title}
                    </>
                )
            }
            )
        }
        </>
    )
}
export default Demo;