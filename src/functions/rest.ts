// function totalVenda(
//   venda1: number,
//   venda2: number,
//   venda3: number,
//   venda4: number
// ) {
//   const total = venda1 + venda2 + venda3 + venda4
//   console.log(total)

//   return total
// }
// totalVenda(10, 30, 50, 10)

function totalVenda(...vendas: number[]) {
  const total = vendas.length

  console.log(`Voce tem ${total} vendas hoje`)
}

totalVenda(10, 30, 20)
