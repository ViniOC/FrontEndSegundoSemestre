import BookCard from "./components/BookCard"

import { DivApp } from "./styled"
function App() {

  const livros = [
    {nome: 'Vingadores', autor: 'tonny Stark', ano: 2015, img:'img-book-1 1.jpg'},
    {nome: 'Liga da Justiça', autor: 'Bruce Wayne', ano: 2011, img:'img-book-2 1.jpg'},
    {nome: 'Missão Impossivel', autor: 'James Bond', ano: 2007, img:'img-book-3 1.jpg'},
    {nome: 'Velozes e Furiosos', autor: 'Dominic Toredo', ano: 2009, img:'img-book-4 1.jpg'},
    {nome: 'Naruto', autor: 'Naruto Uzumaki', ano: 2016, img:'img-book-5 1.jpg'}
  ]

  return (
    <DivApp>
    <h1>BookCards</h1>
    <div>
      { 
        livros.map((livro, index) => (
          <BookCard index = {index} nome={livro.nome} autor={livro.autor} ano={livro.ano} img={livro.img} />

        ))
      }
    </div>
    </DivApp>
  )
}

export default App
