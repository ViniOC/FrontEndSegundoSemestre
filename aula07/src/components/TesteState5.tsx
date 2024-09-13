import { useState } from "react"

// type PetProps = {
//     nome:string;
//     idade:number;
// }
export default function TesteState5(){

    const [carros, setCarros] = useState<string[]>(['HRV', 'Golf', 'Argo', 'Focus'])
    const [carro, setCarro] = useState<string>('')

    // const [pet, setPet] = useState<PetProps>({nome:'Spark', idade: 15})
    // const [pets, setPets] = useState<PetProps[]>([
    //     {nome:'Spark', idade: 15},
    //     {nome:'Rex', idade: 5},
    //     {nome:'Bolt', idade: 9}
    // ])


    return(
        <div>
            <h2>Teste de Estado 5</h2>
            <p>Carros: {carros.map(car=> <span>{car} - </span>)}</p>
            
            <input type="text"
                placeholder="Novo Carro"
                onChange={(e)=> setCarro(e.target.value)} />

            <button onClick={()=> setCarros([...carros, carro])}>Inserir</button>
        </div>
    )
}