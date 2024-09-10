import { useState } from "react"


export default function TesteState1() {

    const [nome, setNome] = useState('João')

    return (
        <>
        <h2>Teste State 1</h2>



        <p>Nome do Usuario: {nome}</p>

        <button onClick={()=> setNome ('Maria')}> Mudar</button>
        </>
    )
}