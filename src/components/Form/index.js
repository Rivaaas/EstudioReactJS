import React,{ useState } from "react";

const Form = () =>{

    const [p1,setP1] = useState('');
    const [p2,setP2] = useState('');
    const [p3,setP3] = useState('');
    const [p4,setP4] = useState('');
    const [p5,setP5] = useState("");

    const cambiar1 = (e) =>{
        setP1(e.target.value);
    }
    const cambiar2 = (e) =>{
        setP2(e.target.value)

    }
    const cambiar3 = (e) =>{
        setP3(e.target.value)

    }
    const cambiar4 = (e) =>{
        setP4(e.target.value)

    }
    const cambiar5 = (e) =>{
        setP5(e.target.value);
    }
    
    return(
        <>
            <form>
                <input type="text" placeholder="Frase 1" onChange={cambiar1}/>
                <h1>{p1}</h1>
            </form>

            <form>
                <input type="text" placeholder="Frase 2" onChange={cambiar2}/>
                <h1>{p2}</h1>
            </form>

            <form>
                <input type="text" placeholder="Frase 3" onChange={cambiar3}/>
                <h1>{p3}</h1>
            </form>

            <form>
                <input type="text" placeholder="Frase 4" onChange={cambiar4}/>
                <h1>{p4}</h1>
            </form>

            <form>
                <input type="text" placeholder="Frase 5" onChange={cambiar5}/>
                <h1>{p5}</h1>
            </form>

        </>
    )
}



export default Form