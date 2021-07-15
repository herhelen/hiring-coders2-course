const livros = require('./database')
const readline = require('readline-sync')

const categorias = []
for({id, nome, autor, categoria, paginas, recomenda, leu} of livros) {
    if(categorias.includes(categoria) === false) {
        categorias.push(categoria)
    }
}

const entradaInicial = readline.question('Deseja buscar um livro? (S/N) ')

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log("Essas são as categorias disponíveis: ")
    console.table(categorias)

    const entradaCategoria = readline.question('Qual categoria você escolhe: (index) ')

    const retorno = livros.filter(livros => 
        livros.categoria === categorias[entradaCategoria])

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log("Esses são todos os livros disponíveis: ")
    console.table(livrosOrdenados)
}

