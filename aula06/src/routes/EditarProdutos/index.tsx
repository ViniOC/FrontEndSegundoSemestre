import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../listaProdutos"
import { itemProduto } from "../../types"


export default function EditarProdutos() {

    const lista: itemProduto[] = listaProdutos
    const navegacao = useNavigate()
    const { id } = useParams()
    const idProduto:number = Number(id)
    const proc = lista.filter(produto => produto.id === idProduto)
    const produto = proc[0]

    const salvar = () => {
        alert(`Produto ${produto.nome} foi editado com sucesso!`)
        return navegacao('/produtos')
    }
    return (
        <main>
            <h1>Editar Produtos</h1>
            <p>Editando os dados do produto:{produto.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}