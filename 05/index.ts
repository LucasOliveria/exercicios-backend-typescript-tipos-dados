const soletrarPalavra = (palavra: string): string => {
  const resultado: string = palavra.split("").join("-")

  return resultado;
}

console.log(soletrarPalavra("programador"));
