"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Como deixar um valor por default ou deixar opcional
function cadastro(email, senha, nome = 'Fabio', idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro('cirilo@teste.com', '123456', 'Dev bebado', 27);
//# sourceMappingURL=valor_default.js.map