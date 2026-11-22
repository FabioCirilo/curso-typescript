"use strict";
// function totalVenda(
//   venda1: number,
//   venda2: number,
//   venda3: number,
//   venda4: number
// ) {
//   const total = venda1 + venda2 + venda3 + venda4
//   console.log(total)
Object.defineProperty(exports, "__esModule", { value: true });
//   return total
// }
// totalVenda(10, 30, 50, 10)
function totalVenda(...vendas) {
    const total = vendas.length;
    console.log(`Voce tem ${total} vendas hoje`);
}
totalVenda(10, 30, 20);
//# sourceMappingURL=rest.js.map