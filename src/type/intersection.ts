type Info = {
  id: string
  nome: string
  descricao?: string
}

let produtoInfo: Info = {
  id: '123',
  nome: 'Placa de video',
  descricao: 'Placa GTX 2090'
}

type Categoria = {
  slug: string
  quantidadeProduto: number
}

let categoria1: Categoria = {
  slug: 'Hardware',
  quantidadeProduto: 2
}

type ProdutoInfo = Info & Categoria // E a intersecao (uniao) entre Info e Categoria

let novoProduto: ProdutoInfo = {
  id: '1234',
  nome: 'Teclado RGB',
  slug: 'Teclado-mecanico',
  quantidadeProduto: 10
}

console.log(novoProduto)
