// Afirmando algum tipo

let statusActual: unknown = 1

let mudaStatus: number = 0

//Estou afirmando que o statuActual e um numero
mudaStatus = statusActual as number

//Outra forma de afirmar
mudaStatus = <number>statusActual

console.log(mudaStatus)

let query: unknown = 'Pizza'

let searchItem: string = query as string

console.log(searchItem)
