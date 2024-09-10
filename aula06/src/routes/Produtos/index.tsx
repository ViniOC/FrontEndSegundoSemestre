import { Link } from "react-router-dom"
import { listaProdutos } from "../../listaProdutos"

export default function Produtos() {
    return (
        <main>
            <h1>Produtos</h1>
            {
                listaProdutos.map((produto) => (
                    <div key = {produto.id}>
                        {produto.nome} - <Link to ={`/produtos/editar/${produto.id}`}>Editar Produtos</Link>
                    </div>
                ))
            }
        </main>
    )
}