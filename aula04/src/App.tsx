<<<<<<< HEAD
import './App.css'
import Cabecalho from './components/Cabecalho'
import Component1 from './components/Component1'
import Componente2 from './components/Componente2'
 
function App() {
 
  const paragr = {
    color:'green',
    backgroundColor: '#bfb',
    padding: '15px',
  }
 
  return (
    <div className='div1'>
      <Cabecalho/>
      <p style={{color:'red',backgroundColor:'#fbb'}}>Estou aprendendo CSS no React</p>
      <p style={paragr}>Segundo Parágrafo</p>
      <Component1/>
      <Componente2/>
    </div>
  )
}
 
export default App
=======
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
>>>>>>> 3ff9d8adc7763539b933a30b4864f1d852ed82bb
