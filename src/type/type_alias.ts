type Uuid = string | number | null

function acessar(uuid: Uuid, nome: string) {
  console.log(`O ID: ${uuid} - Bem vindo ${nome}`)
}

function logarUsuario(uuid: string | number | null) {
  console.log(`A referencia do Uuid: ${uuid}`)
}

// acessar(123, 'Fabio Cirilo')
// acessar('1432', 'Aracy')

// logarUsuario(4321)

type Moedas = 'BRL' | 'EUR' | 'USD' | 'AO'

function comprarItem(moedas: Moedas) {
  console.log('Comprando com a moeda: ', moedas)
}

comprarItem('AO')
