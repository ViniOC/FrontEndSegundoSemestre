import Alunos from "./components/Alunos"
import Cabecalho from "./components/cabecalho"


function App() {
  const titulo: string = "React - Aula de Props"
  const cap: number = 15

  const aviso = () => alert('esta aula ensina a passar valores de pai para filho')
  document.title = titulo

  return (
    <>
      <Cabecalho titulo={titulo} cap={cap} aviso={aviso} />
      <Alunos>
        <h2>Lista de Alunos</h2>
        <ul>
          <li>joao</li>
          <li>Vinicius</li>
          <li>Arthur</li>
          <li>Guilherme</li>
        </ul>
      </Alunos>
    </>
  )
}

export default App
