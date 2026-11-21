// Tipo desconhecido > quando voce nao sabe o tipo que vai receber
let total: unknown
total = 100

// O valor do tipo unknown so pode ser atribuida a um unknown ou any
let pedido: unknown = 123
let idPedido: any = pedido

let totalPedido: number = idPedido

console.log(totalPedido)
