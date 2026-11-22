interface JogosProps {
  readonly id: string
  nome: string
  descricao: string
  plaforma: string[]
}

const lef4dead: JogosProps = {
  id: '123',
  nome: 'Lef 4 dead 2',
  descricao: 'Jogo de acao e tiros',
  plaforma: ['PS5', 'PC']
}

interface DLC extends JogosProps {
  jogoOriginal: JogosProps
  novoConteudo: string[]
}

let lef4deadDlc: DLC = {
  id: '90',
  nome: 'Lef 4 dead - novos mapas',
  descricao: '4 novos mapas para jogar online',
  plaforma: ['PS5', 'PC'],
  novoConteudo: ['Modo coop', 'Mais 5 horas de jogos', 'Medalhas'],
  jogoOriginal: lef4dead
}

console.log(lef4deadDlc)
