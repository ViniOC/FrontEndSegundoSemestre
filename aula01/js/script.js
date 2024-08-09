
const carros = ['gol', 'celta', 'palio', 'fiesta']

//splice = inserir um novo item 

carros.splice(1, 0, 'uno')


// [ 'gol', 'uno', 'celta', 'palio', 'fiesta' ]

//splice = substitui um ou mais elementos.
carros.splice(2, 1, 'corsa')

//['gol', 'uno', 'corsa', 'palio', 'fiesta']

const retirado = carros.splice(3, 1)

//MAP

const alunos = [
    { nome: 'Lucas', idade: '17', nota: '7' },
    { nome: 'Alan', idade: '15', nota: '6' },
    { nome: 'Ricardo', idade: '18', nota: '4' },
    { nome: 'Ana', idade: '17', nota: '3' },
    { nome: 'Maria', idade: '17', nota: '9' }
]

const nomeAlunos = alunos.map((aluno) => { return aluno.nome })

const listaAlunos = alunos.map((aluno, i) => `${i + 1}º aluno - ${aluno.nome}`)

//filter

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6).map(aluno => `O aluno ${aluno.nome} foi aprovado com media ${aluno.nota}`)

console.log(alunosAprovados)


const vendedores = [
    { nome: 'janaina', idade: '21', vendas: 5 },
    { nome: 'Vitoria', idade: '19', vendas: 7 },
    { nome: 'Marcelo', idade: '23', vendas: 3 },
    { nome: 'Henrique', idade: '22', vendas: 9 },
]

const totalVendas = vendedores.reduce((acumulado))
