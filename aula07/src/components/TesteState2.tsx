import { useState } from "react"


export default function TesteState2 (){


    const [cont, setCount] = useState<number>(0)

    let valor = 0

    const aumentar = () => {
        setCount(cont + 1)
        valor = cont + 1
    }
    const diminuir = () => {
        setCount(cont - 1) 
        valor = cont - 1
    }

    return (
        <div>
            <h2>Teste de estado 2</h2>
            <p>Contagem = {cont}</p>
            <p>Valor = {valor}</p>
            <button onClick={diminuir}> Diminuir</button>
            <button onClick={aumentar}> Aumentar</button>
        </div>
    )
}