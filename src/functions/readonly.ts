interface ProdutoProps {
  readonly id: string
  nome: string
  descricao: string
}

let produto1: ProdutoProps = {
  id: '1',
  nome: 'Tenis nike',
  descricao: 'Tenis muito confortavel'
}

console.log(produto1)
