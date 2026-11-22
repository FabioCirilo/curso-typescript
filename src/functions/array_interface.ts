interface TecnologiaProps {
  id: string
  nome: string
  descricao?: string
}

interface NomesProps {
  tecnologia: TecnologiaProps[]
}

let frontend: NomesProps = {
  tecnologia: [
    { id: '1', nome: 'ReactJS', descricao: 'Biblioteca para criar interface' },
    { id: '2', nome: 'VueJS' }
  ]
}

console.log(frontend)
