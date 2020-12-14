// Enunciado: Criar um array com  objetos que contenham nome e data de nascimento, após criar uma arrow function que faça primeiramente a desestruturação do array pela pessoa2 e depois desestruture o objeto para capturar o nome da pessoa.. Imprimir o nome da pessoa no console.


var arrayPessoas = []

const pessoa1 = {
     nome: 'Maria',
     nascimento: new Date('1991 12 05')
}

const pessoa2 = {
     nome: 'Fátima',
     nascimento: new Date('1989 02 23')
}

const pessoa3 = {
     nome: 'João',
     nascimento: new Date('1971 12 20')
}

arrayPessoas.push(pessoa1, pessoa2, pessoa3)

const imprimiDesestruturacao = () => {
     const[, pessoa2] = arrayPessoas
     const {nome} = pessoa2;

     console.log(nome)
     
}