import { DivBookCard } from "../styled";

type LivroProps = {
    nome: string;
    autor: string;
    ano: number|string;
    img: string;
    index: number;
}

type keyProps = {
    index: number;
}


export default function BookCard({nome, autor, ano, img, index}:LivroProps&keyProps){


    return(
        <DivBookCard key= {index}>
            <h2>{nome}</h2>
            <img src={img} alt={nome}/>
            <p>{autor}</p>
            <p>{ano}</p>
        </DivBookCard>
    )
}