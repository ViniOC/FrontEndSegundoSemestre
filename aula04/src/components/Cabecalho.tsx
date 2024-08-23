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


