const etiqueta = {
  produto: 'CPU Dual Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 5
}

interface InformacaoEtiqueta {
  produto: string
  lote: number
  ano: number
  qtd: number
}

function imprimirEtiqueta(etiqueta: InformacaoEtiqueta): string[] {

  let resultado: string[] = [];

  for (let i = 0; i < etiqueta.qtd; i++) {
    resultado.push(`${etiqueta.lote}-${etiqueta.ano}-${(i + 1).toString().padStart(3, "0")}`)
  }
  return resultado
}

console.log(imprimirEtiqueta(etiqueta));
