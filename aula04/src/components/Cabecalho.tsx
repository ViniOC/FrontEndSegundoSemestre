<<<<<<< HEAD



export default function Cabecalho() {
    return(
        <div className="div1">
            <h1>React - Aula CSS</h1>
        </div>
    )
}
=======
type CabecalhoProps = {
    titulo: string,
    cap: number,
    aviso: () => void;
}

export default function Cabecalho({ titulo, cap, aviso }: CabecalhoProps) {

    return (
        <div>
            <h1>{cap}{titulo}</h1>
            <button onClick={aviso}>Ler aviso</button>
        </div>
    )
}


>>>>>>> 3ff9d8adc7763539b933a30b4864f1d852ed82bb
