"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarPromocao(preco) {
    console.log(`Promoção por apenas AO ${preco}`);
}
const novoCurso = {
    id: '1',
    nome: 'Curso de Typescript',
    preco: 250000,
    promocao: mostrarPromocao
};
console.log(novoCurso.promocao(150000));
//# sourceMappingURL=interface_funcoes.js.map