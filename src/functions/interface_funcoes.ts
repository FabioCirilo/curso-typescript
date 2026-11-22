interface CursoProps {
  id: string
  nome: string
  preco: number

  //Definir apenas a funcao e o que ela deve esperar e retornar
  promocao: (preco: number) => void
}

function mostrarPromocao(preco: number) {
  console.log(`Promoção por apenas AO ${preco}`)
}

const novoCurso: CursoProps = {
  id: '1',
  nome: 'Curso de Typescript',
  preco: 250000,
  promocao: mostrarPromocao
}

console.log(novoCurso.promocao(150000))
