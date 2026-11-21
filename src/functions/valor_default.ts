// Como deixar um valor por default ou deixar opcional
function cadastro(
  email: string,
  senha: string,
  nome = 'Fabio',
  idade?: number
): void {
  let data = { email, senha, nome, idade }

  console.log(data)
}

cadastro('cirilo@teste.com', '123456', 'Dev bebado', 27)
