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