interface LojaProps {
  nome: string
  endereco: string
  status: boolean
}

const burguerK: LojaProps = {
  nome: 'Dev Bebado',
  endereco: 'Kinaxixe, Luanda',
  status: true
}

// console.log(burguerK)

function lojaPromo({ nome, endereco, status }: LojaProps) {
  console.log(`Loja ${nome}`)
  console.log(`Endereco ${endereco}`)
  console.log(`Status ${nome}`)
}

lojaPromo({ nome: 'Dev Bebado', endereco: 'Kinaxixe, Luanda', status: true })
